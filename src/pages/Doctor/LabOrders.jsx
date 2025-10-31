
export default function LabOrders() {
  return (
    <div className="p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">Lab Orders</h2>
      <p className="text-gray-700">View and manage lab orders for patients.</p>
      <ul className="list-disc pl-6">
        <li>Order #1: Blood Test</li>
        <li>Order #2: X-Ray</li>
        <li>Order #3: MRI Scan</li>
      </ul>
    </div>
  );
}