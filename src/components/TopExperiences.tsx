import { experiences } from "../data/mockData";

export default function TopExperiences() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">Top Experiences in India</h2>
        <p className="text-gray-600 mb-8">Guided tours, cultural shows, and adventure activities.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer border border-gray-100 flex flex-col group"
            >
              <div className="relative h-56 w-full overflow-hidden bg-gray-300">
                <div className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500 ease-in-out" style={{ backgroundImage: `url(${exp.imageUrl})` }}></div>
                <div className="absolute top-2 left-2 bg-white px-2 py-1 text-xs font-bold rounded-md shadow-sm text-green-700">
                  {exp.category}
                </div>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-gray-900 leading-snug mb-2">{exp.title}</h3>
                <p className="text-sm text-gray-500 mb-4">{exp.location}</p>
                <div className="flex items-center space-x-1 mb-4">
                  <span className="text-yellow-500 font-medium text-sm">★ {exp.rating}</span>
                  <span className="text-gray-400 text-xs">({exp.reviews} reviews)</span>
                </div>
                <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <span className="text-sm text-gray-500 block">From</span>
                    <span className="text-lg font-bold text-gray-900">₹{exp.price}</span>
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
