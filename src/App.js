
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import AppLayout from './layouts/AppLayout';
import PublicLayout from './layouts/PublicLayout';
import Appointments from './pages/Appointments';
import Billing from './pages/Billing';
import DashboardDoctor from './pages/dashboard/DashboardDoctor';
import DashboardPatient from './pages/dashboard/DashboardPatient';
import Medicines from './pages/Medicines';
import Patients from './pages/Patients';
import Landing from './pages/public/Landing';
import Login from './pages/public/Login';
import Register from './pages/public/Register';
import Reports from './pages/Reports';
import Settings from './pages/Settings';
import Staff from './pages/Staff';

function PrivateRoute({ children }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" replace />;
}

function RoleRoute({ allowedRoles, children }) {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" replace />;
  return allowedRoles.includes(user.role) ? children : <Navigate to="/" replace />;
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>

          <Route path="/app" element={<PrivateRoute><AppLayout /></PrivateRoute>}>
            <Route
              path="dashboard"
              element={<RoleRoute allowedRoles={["patient"]}><DashboardPatient /></RoleRoute>}
            />
            <Route
              path="dashboard-doctor"
              element={<RoleRoute allowedRoles={["doctor","staff"]}><DashboardDoctor /></RoleRoute>}
            />
            <Route path="patients" element={<Patients />} />
            <Route path="appointments" element={<Appointments />} />
            <Route path="staff" element={<Staff />} />
            <Route path="medicines" element={<Medicines />} />
            <Route path="billing" element={<Billing />} />
            <Route path="reports" element={<Reports />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
