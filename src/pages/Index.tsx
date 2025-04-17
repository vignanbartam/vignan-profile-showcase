
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import { initScrollAnimation } from "@/utils/scrollAnimation";

const Index = () => {
  useEffect(() => {
    initScrollAnimation();
  }, []);
  
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Education />
      <Certificates />
      <Contact />
      <Footer />
      <Toaster />
      
      {/* Scroll to top button */}
      <ScrollToTop />
    </div>
  );
};

// Scroll to top component
const ScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-5 right-5 p-3 rounded-full bg-portfolio-blue text-white shadow-lg hover:bg-portfolio-darkBlue transition-colors z-10"
      aria-label="Scroll to top"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="18 15 12 9 6 15"></polyline>
      </svg>
    </button>
  );
};

export default Index;
