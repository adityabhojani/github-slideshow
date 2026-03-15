import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import FeaturedDestinations from "@/components/FeaturedDestinations";
import TopExperiences from "@/components/TopExperiences";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-blue-600">
            IndiaTrip<span className="text-orange-500">Advisor</span>
          </div>
          <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
            <a href="#" className="hover:text-blue-600 transition-colors">Hotels</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Flights</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Experiences</a>
            <a href="#" className="hover:text-blue-600 transition-colors">More</a>
          </nav>
          <div className="flex space-x-4">
            <button className="text-gray-900 font-medium hover:text-blue-600 transition-colors">Log In</button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded font-medium hover:bg-blue-700 transition-colors">Sign Up</button>
          </div>
        </div>
      </header>

      <main>
        <Hero />
        <Categories />
        <FeaturedDestinations />
        <TopExperiences />
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">IndiaTripAdvisor</h3>
            <p className="text-gray-400 text-sm">Your ultimate guide to exploring the beauty, culture, and adventures of India.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Explore</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Write a review</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Add a Place</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Join</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Travelers&apos; Choice</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Do Business With Us</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Owners & DMO/CVB</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Business Advantage</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sponsored Placements</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Access our Content API</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Get The App</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">iPhone App</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Android App</a></li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-8 pt-8 border-t border-gray-800 text-sm text-gray-500 text-center">
          &copy; 2024 IndiaTripAdvisor LLC All rights reserved.
        </div>
      </footer>
    </div>
  );
}
