import { Link } from 'react-router-dom';

export default function Landing(){
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl font-extrabold mb-4">Healthcare Management System</h1>
          <p className="text-lg text-gray-600 mb-6">Manage patients, appointments, staff and billing — all in one place.</p>
          <div className="flex gap-3">
            <Link to="/login" className="px-4 py-2 bg-blue-600 text-white rounded">Get started</Link>
            <Link to="/register" className="px-4 py-2 border border-gray-300 rounded">Create account</Link>
          </div>
        </div>
        <div className="bg-white rounded shadow p-6">
          <h3 className="font-semibold">Quick overview</h3>
          <ul className="mt-3 text-gray-600 list-disc list-inside">
            <li>Patient records & history</li>
            <li>Appointment scheduling</li>
            <li>Billing & reports</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
