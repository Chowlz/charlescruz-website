import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col bg-primary-950">
      <Navbar />
      <div className="container z-10 mx-auto mt-24 px-12 py-4">
        <Hero />
        <AboutMe />
      </div>
      <Footer />
    </main>
  );
}
