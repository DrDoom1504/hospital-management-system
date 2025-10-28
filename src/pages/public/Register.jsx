import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

export default function Register(){
  const navigate = useNavigate();
  const { login } = useAuth();

  function handleSubmit(e){
    e.preventDefault();
    // mock register -> login
    login({ name: e.target.username.value || 'New User', role: 'patient' });
    navigate('/app/dashboard');
  }

  return (
    <div className="login-page">
      <h2 className="text-2xl font-semibold mb-4">Register</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <label className="block text-sm">Username</label>
          <input name="username" className="w-full border px-3 py-2 rounded" />
        </div>
        <div>
          <label className="block text-sm">Password</label>
          <input name="password" type="password" className="w-full border px-3 py-2 rounded" />
        </div>
        <div>
          <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded">Create account</button>
        </div>
      </form>
    </div>
  );
}
