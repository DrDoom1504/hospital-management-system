import { Outlet } from 'react-router-dom';

export default function PublicLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="w-full bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 text-lg font-semibold">HMS</div>
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="text-center py-6 text-sm text-gray-500">© HMS 2025</footer>
    </div>
  );
}
