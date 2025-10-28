import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

export default function Login(){
  const navigate = useNavigate();
  const { login } = useAuth();

  function handleSubmit(e){
    e.preventDefault();
    const role = e.target.role.value || 'patient';
    login({ name: 'Demo User', role });
    // redirect based on role
    if(role === 'patient') navigate('/app/dashboard');
    else navigate('/app/dashboard-doctor');
  }

  return (
    <div className="login-page">
      <h2 className="text-2xl font-semibold mb-4">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <label className="block text-sm">Username</label>
          <input name="username" defaultValue="demo" className="w-full border px-3 py-2 rounded" />
        </div>
        <div>
          <label className="block text-sm">Password</label>
          <input name="password" defaultValue="demo" type="password" className="w-full border px-3 py-2 rounded" />
        </div>
        <div>
          <label className="block text-sm">Role</label>
          <select name="role" className="w-full border px-3 py-2 rounded">
            <option value="patient">Patient</option>
            <option value="doctor">Doctor</option>
            <option value="staff">Staff</option>
          </select>
        </div>
        <div>
          <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Login</button>
        </div>
      </form>
    </div>
  );
}
