
const MySchedule = () => {
    return (
        <div className="p-6 bg-white shadow rounded">
            <h2 className="text-2xl font-bold mb-4">My Schedule</h2>
            <p className="text-gray-700">View your upcoming appointments and tasks.</p>
            <ul className="list-disc pl-6">
                <li>Appointment #1: Patient consultation at 10:00 AM</li>
                <li>Appointment #2: Surgery at 2:00 PM</li>
                <li>Task #1: Review lab results</li>
            </ul>
        </div>
    );
};

export default MySchedule;