
import { Github, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Water Quality Monitoring & Prediction System",
      description: "Developed a cloud-based web platform to monitor and report water quality near lakes and rivers, aligning with SDG 6 (Clean Water & Sanitation). Integrated user reports, disease prediction using machine learning, and water purification recommendations. Implemented a donation system for water restoration efforts.",
      tags: ["Machine Learning", "Web Development", "Cloud Computing", "SDG 6"],
      date: "Jan 2025 - Feb 2025",
      institution: "LPU",
      imageUrl: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=1000",
    },
    {
      title: "Superstore Dashboard in R Language",
      description: "Created a comprehensive dashboard using R's ggplot2, shiny, and plotly libraries to visualize sales, profits, and customer trends. The dashboard analyzes key metrics such as product performance, regional sales, and profit margins across different time periods, providing interactive insights for better decision-making.",
      tags: ["R", "Data Visualization", "Business Intelligence", "ggplot2", "Shiny"],
      date: "Jan 2024 - Feb 2024",
      institution: "LPU",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000",
    },
  ];

  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title text-center mx-auto mb-12">Projects</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow border border-gray-200">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl text-portfolio-dark">{project.title}</CardTitle>
                    <CardDescription className="text-sm text-portfolio-gray">
                      {project.institution} | {project.date}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag, idx) => (
                    <span 
                      key={idx} 
                      className="px-2 py-1 bg-gray-100 text-xs font-medium rounded-md text-portfolio-blue"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="flex justify-between border-t pt-4">
                <Button variant="ghost" className="text-portfolio-blue hover:bg-blue-50 hover:text-portfolio-darkBlue">
                  <Github className="mr-2 h-4 w-4" /> Code
                </Button>
                <Button variant="ghost" className="text-portfolio-blue hover:bg-blue-50 hover:text-portfolio-darkBlue">
                  <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
