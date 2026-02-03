export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#030303] flex items-center justify-center text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-2">404</h1>
        <p className="text-gray-400">Page not found.</p>
        <a href="/" className="mt-4 inline-block text-blue-400 hover:underline">Back to Nelson Logic</a>
      </div>
    </div>
  );
}
