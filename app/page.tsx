import AgeGroups from "./components/AgeGroups";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import TreatmentsGrid from "./components/TreatmentsGrid";
import WhyNexuCare from "./components/WhyNexuCare";
import Footer from "./components/Footer";
import LocationAndBooking from "./components/LocationAndBooking";
import JsonLd from "./components/JsonLd";

export default function Home() {
  return (
    <div id="inicio">
      <JsonLd />
      <Navbar />

      <main>
        <Hero />
        <AgeGroups />
        <TreatmentsGrid />
        <WhyNexuCare />
        <LocationAndBooking />
        <Footer />
      </main>
    </div>
  );
}
