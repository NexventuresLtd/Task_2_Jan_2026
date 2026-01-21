import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Services from "./components/Services";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-slate-900 text-white min-h-screen">
      <Navbar />
      <LandingPage />
      <Services />
      <Contact />
    </div>
  );
}

export default App;
