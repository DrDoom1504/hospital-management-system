
export default function DashboardPatient(){
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Patient Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-white rounded shadow">Upcoming appointments</div>
        <div className="p-4 bg-white rounded shadow">Recent prescriptions</div>
        <div className="p-4 bg-white rounded shadow">Medical history summary</div>
        <div className="p-4 bg-white rounded shadow">Billing summary</div>
      </div>
    </div>
  );
}
