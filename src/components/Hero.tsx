
import { ArrowRight, Mail, Github, Linkedin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-24 pb-16 flex items-center">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-portfolio-blue shadow-xl">
                <img
                  src="/lovable-uploads/eea18163-df8d-4e84-bfd7-2b4beb2d7b1d.png"
                  alt="Vignan Baratam"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-portfolio-blue rounded-full -z-10"></div>
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-portfolio-lightGray rounded-full -z-10"></div>
            </div>
          </div>

          {/* Content Column */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-portfolio-dark mb-4">
              Vignan <span className="text-portfolio-blue">Baratam</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Computer Science Engineer specializing in Data Structures, Algorithms, and Machine Learning
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
              <a href="mailto:vignanbaratam@gmail.com" className="flex items-center gap-2 text-gray-700 hover:text-portfolio-blue transition-colors">
                <Mail size={18} /> vignanbaratam@gmail.com
              </a>
              <a href="tel:7780636238" className="flex items-center gap-2 text-gray-700 hover:text-portfolio-blue transition-colors">
                <Phone size={18} /> 7780636238
              </a>
            </div>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
              <a href="https://www.github.com/vignanbaratam" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-700 hover:text-portfolio-blue transition-colors">
                <Github size={18} /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/vignanbaratam/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-700 hover:text-portfolio-blue transition-colors">
                <Linkedin size={18} /> LinkedIn
              </a>
            </div>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button className="bg-portfolio-blue hover:bg-portfolio-darkBlue gap-2">
                Download CV <ArrowRight size={16} />
              </Button>
              <Button variant="outline" className="border-portfolio-blue text-portfolio-blue hover:bg-portfolio-blue hover:text-white">
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
