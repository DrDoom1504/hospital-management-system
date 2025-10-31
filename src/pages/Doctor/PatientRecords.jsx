
const PatientRecords = () => {
    return (
        <div className="p-6 bg-white shadow rounded">
            <h2 className="text-2xl font-bold mb-4">Patient Records</h2>
            <p className="text-gray-700">Access and manage patient medical records.</p>
            <ul className="list-disc pl-6">
                <li>Record #1: John Doe - Blood Pressure: 120/80</li>
                <li>Record #2: Jane Smith - Allergy: Penicillin</li>
                <li>Record #3: Mark Johnson - Recent Surgery: Appendectomy</li>
            </ul>
        </div>
    );
};

export default PatientRecords;