import { useAuth } from '../contexts/AuthContext';

export default function Navbar() {
  const { user, logout } = useAuth();
  return (
    <header className="w-full bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center">
        <div className="text-xl font-bold">HMS</div>
        <div className="ml-auto">{user ? (
          <div className="flex items-center gap-4">
            <span className="text-sm">{user.name} ({user.role})</span>
            <button onClick={logout} className="text-sm text-red-600">Logout</button>
          </div>
        ) : <span className="text-sm">Not signed in</span>}</div>
      </div>
    </header>
  );
}
