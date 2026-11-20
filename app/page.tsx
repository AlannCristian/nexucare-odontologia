import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div id="inicio">
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
  );
}
