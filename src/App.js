
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
import MedicalHistory from './pages/MedicalHistory'
import Profile from './pages/Profile';
import LabOrders from './pages/LabOrders';
import PatientBilling from './pages/PatientBilling';
import Messages from './pages/Messages';

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
            {/* Patient Routes */}
            <Route path="dashboard" element={
              <RoleRoute allowedRoles={["patient"]}><DashboardPatient /></RoleRoute>
            } />
            <Route path="my-appointments" element={
              <RoleRoute allowedRoles={["patient"]}><Appointments /></RoleRoute>
            } />
            <Route path="medical-history" element={
              <RoleRoute allowedRoles={["patient"]}><MedicalHistory /></RoleRoute>
            } />
            <Route path="my-bills" element={
              <RoleRoute allowedRoles={["patient"]}><PatientBilling /></RoleRoute>
            } />
            <Route path="profile" element={
              <RoleRoute allowedRoles={["patient"]}><Profile /></RoleRoute>
            } />

            {/* Doctor Routes */}
            <Route path="dashboard-doctor" element={
              <RoleRoute allowedRoles={["doctor"]}><DashboardDoctor /></RoleRoute>
            } />
            <Route path="patients" element={
              <RoleRoute allowedRoles={["doctor", "staff"]}><Patients /></RoleRoute>
            } />
            <Route path="lab-orders" element={
              <RoleRoute allowedRoles={["doctor"]}><LabOrders /></RoleRoute>
            } />
            <Route path="messages" element={
              <RoleRoute allowedRoles={["doctor"]}><Messages /></RoleRoute>
            } />

            </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
