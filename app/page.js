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
      <div className="fixed bottom-0 z-0 h-3/4 w-full rounded-r-full rounded-t-full bg-gradient-to-b from-primary-950/70 to-secondary-900/70 blur-3xl lg:-bottom-20 lg:-left-20 lg:h-3/4 lg:w-3/4 lg:bg-gradient-to-l" />
    </main>
  );
}
