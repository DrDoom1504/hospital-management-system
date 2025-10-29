import { NavLink } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const MENUS = {
  patient: [
    { to: '/app/dashboard', label: 'My Dashboard' },
    { to: '/app/my-appointments', label: 'My Appointments' },
    { to: '/app/medical-history', label: 'Medical History' },
    { to: '/app/prescriptions', label: 'Prescriptions' },
    { to: '/app/my-bills', label: 'My Bills' },
    { to: '/app/profile', label: 'Profile Settings' }
  ],
  doctor: [
    { to: '/app/dashboard-doctor', label: 'Doctor Dashboard' },
    { to: '/app/appointments', label: 'My Schedule' },
    { to: '/app/patients', label: 'Patient Records' },
    { to: '/app/prescriptions', label: 'Write Prescriptions' },
    { to: '/app/lab-orders', label: 'Lab Orders' },
    { to: '/app/messages', label: 'Messages' }
  ],
  staff: [
    { to: '/app/dashboard-staff', label: 'Admin Dashboard' },
    { to: '/app/registration', label: 'Patient Registration' },
    { to: '/app/appointments', label: 'Manage Appointments' },
    { to: '/app/billing', label: 'Billing & Payments' },
    { to: '/app/medicines', label: 'Pharmacy Stock' },
    { to: '/app/reports', label: 'Reports' },
    { to: '/app/settings', label: 'System Settings' }
  ]
};

function NavItem({ to, children }) {
  return (
    <li className="mb-2">
      <NavLink 
        to={to} 
        className={({isActive}) => `
          block px-3 py-2 rounded transition-colors
          ${isActive 
            ? 'bg-blue-600 text-white' 
            : 'text-gray-200 hover:bg-gray-700'
          }
        `}
      >
        {children}
      </NavLink>
    </li>
  );
}

export default function Sidebar() {
  const { user } = useAuth();
  const role = user?.role || 'patient';
  const menuItems = MENUS[role] || [];

  return (
    <aside className="w-64 bg-gray-800 text-white p-4 min-h-[calc(100vh-64px)]">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-200">
          {role === 'patient' ? 'Patient Portal' :
           role === 'doctor' ? 'Doctor Portal' :
           'Staff Portal'}
        </h2>
      </div>
      <nav>
        <ul>
          {menuItems.map(item => (
            <NavItem key={item.to} to={item.to}>
              {item.label}
            </NavItem>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
