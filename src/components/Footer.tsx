
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-portfolio-dark text-white">
      <div className="container mx-auto px-4 md:px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              Vignan<span className="text-portfolio-blue">.Dev</span>
            </h3>
            <p className="text-gray-300 mb-4">
              Computer Science Engineer with expertise in Data Structures, Algorithms, and Machine Learning.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-portfolio-blue transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-300 hover:text-portfolio-blue transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-300 hover:text-portfolio-blue transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#education" className="text-gray-300 hover:text-portfolio-blue transition-colors">
                  Education
                </a>
              </li>
              <li>
                <a href="#certificates" className="text-gray-300 hover:text-portfolio-blue transition-colors">
                  Certificates
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-portfolio-blue transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4 mb-4">
              <a 
                href="https://github.com/vignanbaratam" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-gray-800 hover:bg-portfolio-blue p-2 rounded-full transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/vignanbaratam/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-gray-800 hover:bg-portfolio-blue p-2 rounded-full transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:vignanbaratam@gmail.com" 
                className="bg-gray-800 hover:bg-portfolio-blue p-2 rounded-full transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <p className="text-gray-300">Srikakulam, Andhra Pradesh 532459</p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Vignan Baratam. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
