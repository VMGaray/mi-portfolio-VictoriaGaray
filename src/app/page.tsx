import Header from "../components/Header";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ProjectVideos from "../components/ProjectVideos";
import Contact from "../components/Contact";
import ImageGalleryCarousel from "../components/ImageGalleryCarousel";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow animate-iris-open">
        <Hero />
        <AboutMe />
        <Skills />
        <Projects />
        <ProjectVideos />
        <ImageGalleryCarousel />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}