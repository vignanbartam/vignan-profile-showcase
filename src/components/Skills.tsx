
import { CheckCircle2 } from "lucide-react";

const Skills = () => {
  const skills = {
    languages: ["C++", "Java", "R", "Python"],
    technologies: ["HTML", "CSS", "Git", "GitHub"],
    tools: ["MySQL", "MS-Excel", "Tableau", "NoSQL"],
    others: ["Data Structures and Algorithms", "Problem-Solving"]
  };

  const training = [
    {
      title: "Data Structures and Algorithms using Java",
      organization: "Cipher Schools",
      period: "Jun 2024 - Jul 2024",
      points: [
        "Comprehensive Understanding of DSA Concepts: Gained hands-on experience with data structures like arrays, linked lists, stacks, queues, trees, and graphs.",
        "Algorithm Optimization & Best Practices: Implemented efficient sorting, searching, and dynamic programming techniques to optimize algorithm performance.",
        "Problem-Solving Expertise: Strengthened analytical thinking by solving complex problems using recursion, backtracking, and greedy algorithms.",
        "Skill Development: Improved Java programming proficiency, enhanced logical reasoning, and developed clean, modular, and scalable coding practices."
      ]
    }
  ];

  return (
    <section id="skills" className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title text-center mx-auto mb-12">Skills & Training</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Technical Skills */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-portfolio-dark">Technical Skills</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category} className="mb-6">
                  <h4 className="text-lg font-medium text-portfolio-blue capitalize mb-4">{category}</h4>
                  <ul className="space-y-3">
                    {items.map((skill, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle2 size={18} className="text-portfolio-blue mr-2" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Training */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-portfolio-dark">Training & Experience</h3>
            
            <div className="space-y-8">
              {training.map((item, index) => (
                <div key={index} className="border-l-2 border-portfolio-blue pl-4 py-1">
                  <h4 className="text-lg font-medium text-portfolio-dark">{item.title}</h4>
                  <p className="text-portfolio-blue font-medium mb-2">{item.organization} | {item.period}</p>
                  <ul className="space-y-2 mt-3">
                    {item.points.map((point, idx) => (
                      <li key={idx} className="flex">
                        <span className="text-portfolio-blue mr-2">•</span>
                        <span className="text-gray-700 text-sm">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
