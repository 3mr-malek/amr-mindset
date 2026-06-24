import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Courses from "../components/Courses";
import Reviews from "../components/Reviews";
import Footer from "../components/Footer";
import Socials from "../components/Socials";
function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Courses />
      <Reviews />
      <Socials />
      <Footer />
    </>
  );
}

export default Home;