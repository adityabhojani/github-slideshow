export default function Hero() {
  return (
    <div className="relative bg-gray-900 h-[500px] flex items-center justify-center">
      <div className="absolute inset-0 overflow-hidden">
        {/* Placeholder for a nice background image of India */}
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative z-10 text-center px-4 w-full max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Discover Incredible India
        </h1>
        <p className="text-xl text-gray-200 mb-8">
          Find the best flights, stays, and experiences across the subcontinent.
        </p>
        <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Where to? (e.g. Goa, Jaipur, Kerala)"
            className="flex-1 px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          />
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded font-semibold transition-colors">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
