
import { Award, ExternalLink } from "lucide-react";

const Certificates = () => {
  const certificates = [
    {
      title: "Supervised Machine Learning: Regression and Classification",
      provider: "COURSERA",
      date: "Nov 2024",
      url: "#",
    },
    {
      title: "Data Visualization in Excel",
      provider: "COURSERA",
      date: "Nov 2024",
      url: "#",
    },
    {
      title: "Online Certification on Cloud Computing",
      provider: "NPTEL",
      date: "Jul 2024 - Oct 2024",
      url: "#",
    },
    {
      title: "Excel Skills for Data Analytics and Visualization",
      provider: "COURSERA",
      date: "Apr 2024",
      url: "#",
    },
    {
      title: "Generative AI with Large Language Models",
      provider: "COURSERA",
      date: "Apr 2024",
      url: "#",
    },
    {
      title: "Mastering DSA using CPP",
      provider: "UDEMY",
      date: "Feb 2024",
      url: "#",
    },
  ];

  return (
    <section id="certificates" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title text-center mx-auto mb-12">Certificates</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow flex flex-col"
            >
              <div className="flex-1">
                <div className="flex items-start mb-4">
                  <Award className="h-6 w-6 text-portfolio-blue mr-3 flex-shrink-0" />
                  <h3 className="text-lg font-medium text-portfolio-dark">{cert.title}</h3>
                </div>
                <div className="ml-9">
                  <p className="text-sm text-portfolio-blue font-medium">{cert.provider}</p>
                  <p className="text-sm text-gray-500">{cert.date}</p>
                </div>
              </div>
              <div className="mt-4 ml-9">
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm inline-flex items-center text-portfolio-blue hover:text-portfolio-darkBlue"
                >
                  Show credential <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
