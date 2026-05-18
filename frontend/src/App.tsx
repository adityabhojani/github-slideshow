
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Pages
import Home from './pages/Home';
import Stats from './pages/Stats';
import Passport from './pages/Passport';
import Destination from './pages/Destination';
import Compare from './pages/Compare';
import Discover from './pages/Discover';
import Popular from './pages/Popular';
import TierList from './pages/TierList';
import Schengen from './pages/Schengen';
import MyTravels from './pages/MyTravels';
import Map from './pages/Map';
import TripPlanner from './pages/TripPlanner';
import DigitalNomad from './pages/DigitalNomad';
import Reciprocity from './pages/Reciprocity';
import Alerts from './pages/Alerts';
import Blog from './pages/Blog';
import Admin from './pages/Admin';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Widget from './pages/Widget';
import NotFound from './pages/NotFound';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <BrowserRouter>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/stats" element={<Stats />} />
                <Route path="/passport/:code" element={<Passport />} />
                <Route path="/destination/:code" element={<Destination />} />
                <Route path="/compare" element={<Compare />} />
                <Route path="/discover" element={<Discover />} />
                <Route path="/popular" element={<Popular />} />
                <Route path="/tier-list" element={<TierList />} />
                <Route path="/schengen" element={<Schengen />} />
                <Route path="/my-travels" element={<MyTravels />} />
                <Route path="/map" element={<Map />} />
                <Route path="/trip-planner" element={<TripPlanner />} />
                <Route path="/digital-nomad" element={<DigitalNomad />} />
                <Route path="/reciprocity" element={<Reciprocity />} />
                <Route path="/alerts" element={<Alerts />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/widget" element={<Widget />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
            <CookieBanner />
          </div>
        </BrowserRouter>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;
