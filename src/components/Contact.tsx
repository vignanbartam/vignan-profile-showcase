
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real application, this would send the form data to a server
    console.log("Form data:", formData);
    
    // Show success toast
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title text-center mx-auto mb-12">Contact Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-portfolio-dark">Get In Touch</h3>
            <p className="text-gray-600 mb-8">
              Feel free to reach out for collaboration opportunities, questions about my work, or just to say hello!
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="w-5 h-5 text-portfolio-blue mr-4 mt-1" />
                <div>
                  <h4 className="text-lg font-medium text-portfolio-dark">Email</h4>
                  <a href="mailto:vignanbaratam@gmail.com" className="text-gray-600 hover:text-portfolio-blue transition-colors">
                    vignanbaratam@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="w-5 h-5 text-portfolio-blue mr-4 mt-1" />
                <div>
                  <h4 className="text-lg font-medium text-portfolio-dark">Phone</h4>
                  <a href="tel:7780636238" className="text-gray-600 hover:text-portfolio-blue transition-colors">
                    7780636238
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-portfolio-blue mr-4 mt-1" />
                <div>
                  <h4 className="text-lg font-medium text-portfolio-dark">Location</h4>
                  <p className="text-gray-600">Srikakulam, Andhra Pradesh 532459</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  rows={5}
                  required
                />
              </div>
              
              <div>
                <Button type="submit" className="bg-portfolio-blue hover:bg-portfolio-darkBlue w-full sm:w-auto">
                  Send Message <Send className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
