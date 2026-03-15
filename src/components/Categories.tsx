import {
  MapPinIcon,
  TicketIcon,
  BuildingOffice2Icon,
  StarIcon,
} from "@heroicons/react/24/outline";

const categories = [
  { name: "Hotels", icon: BuildingOffice2Icon, color: "text-blue-500", bg: "bg-blue-100" },
  { name: "Flights", icon: TicketIcon, color: "text-purple-500", bg: "bg-purple-100" },
  { name: "Experiences", icon: MapPinIcon, color: "text-green-500", bg: "bg-green-100" },
  { name: "Reviews", icon: StarIcon, color: "text-yellow-500", bg: "bg-yellow-100" },
];

export default function Categories() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
          Plan Your Perfect Indian Trip
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-gray-100"
            >
              <div
                className={`w-16 h-16 mx-auto flex items-center justify-center rounded-full ${cat.bg} mb-4`}
              >
                <cat.icon className={`w-8 h-8 ${cat.color}`} />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">{cat.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
