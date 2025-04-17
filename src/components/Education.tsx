
import { GraduationCap, MapPin } from "lucide-react";

const Education = () => {
  const education = [
    {
      institution: "Lovely Professional University",
      degree: "Computer Science and Engineering",
      period: "2022 - Present",
      location: "Jalandhar, Punjab",
      score: "CGPA: 7.5",
    },
    {
      institution: "Sri Vishwa Junior College",
      degree: "Intermediate",
      period: "2020 - 2022",
      location: "Vishakhapatnam, Andhra Pradesh",
      score: "Percentage: 90%",
    },
    {
      institution: "GOVT. High School",
      degree: "Matriculation",
      period: "2019 - 2020",
      location: "Hiramandalam, Andhra Pradesh",
      score: "Percentage: 98%",
    },
  ];

  return (
    <section id="education" className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title text-center mx-auto mb-12">Education</h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-10">
            {education.map((edu, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-portfolio-dark">{edu.institution}</h3>
                  <p className="text-portfolio-blue font-medium">{edu.degree}</p>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="mr-4">{edu.period}</span>
                    <span className="flex items-center">
                      <MapPin size={14} className="mr-1" /> {edu.location}
                    </span>
                  </div>
                  <p className="text-sm font-medium">{edu.score}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
