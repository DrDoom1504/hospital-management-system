import { NavLink } from 'react-router-dom';

function Item({ to, children }) {
  return (
    <li className="mb-2">
      <NavLink to={to} className={({isActive}) => `block px-3 py-2 rounded ${isActive ? 'bg-white text-blue-600' : 'text-gray-200 hover:bg-gray-900'}`}>
        {children}
      </NavLink>
    </li>
  );
}

export default function Sidebar() {
  return (
    <aside className="w-56 bg-slate-800 text-white p-4 min-h-[calc(100vh-64px)]">
      <nav>
        <ul>
          <Item to="/app/dashboard">Patient Dashboard</Item>
          <Item to="/app/dashboard-doctor">Doctor Dashboard</Item>
          <Item to="/app/patients">Patients</Item>
          <Item to="/app/appointments">Appointments</Item>
          <Item to="/app/staff">Staff</Item>
          <Item to="/app/medicines">Medicines</Item>
          <Item to="/app/billing">Billing</Item>
          <Item to="/app/reports">Reports</Item>
          <Item to="/app/settings">Settings</Item>
        </ul>
      </nav>
    </aside>
  );
}
