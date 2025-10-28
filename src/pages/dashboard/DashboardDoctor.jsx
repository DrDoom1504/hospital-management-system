
export default function DashboardDoctor(){
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Doctor / Staff Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-white rounded shadow">Today's appointments</div>
        <div className="p-4 bg-white rounded shadow">Patients to review</div>
        <div className="p-4 bg-white rounded shadow">Messages / Alerts</div>
      </div>
    </div>
  );
}
