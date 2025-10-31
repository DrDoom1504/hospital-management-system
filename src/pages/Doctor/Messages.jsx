
export default function Messages() {
  return (
    <div className="p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">Messages</h2>
      <p className="text-gray-700">Check and respond to messages from patients and staff.</p>
      <ul className="list-disc pl-6">
        <li>Message #1: "Patient needs clarification on prescription."</li>
        <li>Message #2: "Lab results are ready for review."</li>
        <li>Message #3: "Staff meeting scheduled for tomorrow."</li>
      </ul>
    </div>
  );
}