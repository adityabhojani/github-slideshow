import { destinations } from "../data/mockData";

export default function FeaturedDestinations() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">Featured Destinations</h2>
        <p className="text-gray-600 mb-8">Explore top-rated places to visit in India.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {destinations.map((dest) => (
            <div
              key={dest.id}
              className="bg-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow cursor-pointer group"
            >
              <div className="relative h-48 w-full overflow-hidden bg-gray-300">
                {/* Real images can replace these placeholders */}
                <div className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500 ease-in-out" style={{ backgroundImage: `url(${dest.imageUrl})` }}></div>
              </div>
              <div className="p-4 bg-white">
                <h3 className="text-lg font-bold text-gray-900">{dest.name}</h3>
                <p className="text-sm text-gray-500 mb-2">{dest.region}</p>
                <div className="flex items-center space-x-1">
                  <span className="text-yellow-500 font-medium">★ {dest.rating}</span>
                  <span className="text-gray-400 text-xs">({dest.reviews} reviews)</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
