import { Terminal } from "@/components/Terminal";
import GlowButton from "@/components/GlowButton";
import NeumorphicSkillButton from "@/components/NeumorphicSkillButton";
import ContactForm from "@/components/ContactForm";
import SocialLinks from "@/components/SocialLinks";
import LoaderHand from "@/components/LoaderHand";
import LaptopFrame from "@/components/LaptopFrame";
import TerminalLoader from "@/components/TerminalLoader";
import { useEffect, useState } from "react";
import GradientBorderButton from "@/components/GradientBorderButton";

const commands = [
  "initializing system...",
  "loading profile: Jawad Abbas",
  "status: MERN Stack Developer & AI Specialist",
  "skills loaded successfully...",
  "ready for deployment"
];

const Index = () => {
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#100720]">
        <TerminalLoader />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#100720] relative overflow-hidden">
      <div className="container px-4 py-8 mx-auto relative z-10">
        <nav className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-mono text-white">JA</h1>
          <div className="flex gap-4">
            <GradientBorderButton>About</GradientBorderButton>
            <GradientBorderButton>Projects</GradientBorderButton>
            <GradientBorderButton>Contact</GradientBorderButton>
          </div>
        </nav>

        <main className="space-y-24">
          <section className="flex flex-col items-center justify-center min-h-[50vh] text-center space-y-8 relative mt-4 perspective-1000">
            <div className="space-y-4 relative z-10">
              <h2 className="text-sm font-mono text-gray-400 uppercase tracking-wider animate-fade-in">
                Welcome to my portfolio
              </h2>
              <h1 className="text-4xl md:text-6xl font-bold text-white animate-fade-in delay-100 hero-text">
                Jawad Abbas
              </h1>
              <p className="text-xl text-gray-300 animate-fade-in delay-200">
                MERN Stack Developer | AI Enthusiast | ML Specialist
              </p>
              <div className="mt-8">
                <SocialLinks />
              </div>
            </div>
            <div className="relative transform-gpu hover:scale-105 transition-transform duration-500">
              <Terminal commands={commands} />
            </div>
          </section>

          <section className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-sm font-mono text-gray-400 uppercase tracking-wider">
                About Me
              </h3>
              <h2 className="text-3xl font-bold text-white">
                Bringing Innovation to Life
              </h2>
              <p className="text-gray-300 leading-relaxed">
                A passionate MERN Stack Developer with a BS in Artificial Intelligence,
                I specialize in building full-stack applications that seamlessly
                integrate AI-driven functionalities.
              </p>
              <div className="flex gap-4">
                <GradientBorderButton>View Projects</GradientBorderButton>
                <GradientBorderButton fileUrl="/jawad.pdf">Download CV</GradientBorderButton>
              </div>
            </div>
            <div className="bg-bat-900/50 backdrop-blur-sm border border-bat-800 rounded-lg p-6 hover:shadow-glow transition-all duration-300">
              <h3 className="text-xl font-mono text-white mb-6">Technical Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "React.js",
                  "Node.js",
                  "MongoDB",
                  "JavaScript",
                  "Express.js",
                  "TypeScript",
                  "Python",
                  "Fast Api",
                ].map((skill) => (
                  <NeumorphicSkillButton key={skill}>
                    {skill}
                  </NeumorphicSkillButton>
                ))}
              </div>
            </div>
          </section>

          <section className="space-y-12">
            <div className="text-center space-y-4">
              <h3 className="text-sm font-mono text-gray-400 uppercase tracking-wider">
                Featured Projects
              </h3>
              <h2 className="text-3xl font-bold text-white">
                Recent Work
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Freetool AI",
                  description: "Your all-in-one AI toolset for content creation, image generation, and productivity enhancement.",
                  tech: ["MERN Stack", "OpenAI", "AWS"],
                  link: "https://freetoolai.com",
                  videoUrl: "/vidio.ai.webm"
                },
                {
                  title: "Project Manager",
                  description: "Modern project management dashboard with real-time analytics and team collaboration features",
                  tech: ["React", "Redux Toolkit", "Tailwind CSS"],
                  videoUrl: "/project-manager.webm"
                },
                {
                  title: "Neural Network Lab",
                  description: "Interactive neural network visualization and training platform",
                  tech: ["Three.js", "ML", "WebGL"],
                  videoUrl: "/videos/neural-network-demo.mp4"
                }
              ].map((project) => (
                <div
                  key={project.title}
                  className="group relative transition-all duration-300"
                >
                  <LaptopFrame title={project.title} videoUrl={project.videoUrl} />
                  <div className="mt-4 text-center">
                    <p className="text-gray-300">{project.description}</p>
                    {project.link && (
                      <a 
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-2 text-[#866ee7] hover:text-[#ea60da] transition-colors"
                      >
                        Visit Website →
                      </a>
                    )}
                    <div className="flex flex-wrap gap-2 justify-center mt-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-mono px-2 py-1 bg-bat-950/50 text-gray-300 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-12 mt-24">
            <div className="text-center space-y-4">
              <h3 className="text-sm font-mono text-gray-400 uppercase tracking-wider">
                Why Choose Me
              </h3>
              <h2 className="text-3xl font-bold text-white">
                Value For Clients
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Result-Driven Development",
                  description: "Focus on delivering measurable business outcomes and ROI through innovative technical solutions."
                },
                {
                  title: "AI Integration Expertise",
                  description: "Specialized in implementing cutting-edge AI solutions that give your business a competitive edge."
                },
                {
                  title: "Rapid Development",
                  description: "Quick turnaround times without compromising on quality, helping you get to market faster."
                },
                {
                  title: "Scalable Solutions",
                  description: "Build systems that grow with your business, from MVP to enterprise-scale applications."
                },
                {
                  title: "Clear Communication",
                  description: "Regular updates and transparent communication throughout the development process."
                },
                {
                  title: "Post-Launch Support",
                  description: "Dedicated support and maintenance to ensure your application runs smoothly after deployment."
                }
              ].map((value) => (
                <div
                  key={value.title}
                  className="bg-[#1a1a1a] p-6 rounded-lg transform hover:-translate-y-2 transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-[#866ee7] via-[#ea60da] to-[#ed8f57] bg-clip-text text-transparent">
                    {value.title}
                  </h3>
                  <p className="text-gray-300">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-12">
            <div className="text-center space-y-4">
              <h3 className="text-sm font-mono text-gray-400 uppercase tracking-wider">
                Testimonials
              </h3>
              <h2 className="text-3xl font-bold text-white mb-8">
                What People Say
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "Mujeeb ul Rahman",
                  role: "Python Developer",
                  company: "Axiom World",
                  text: "Jawad's expertise in AI and web development helped us create an innovative solution that exceeded our expectations."
                },
                {
                  name: "Ayesha Zahid",
                  role: "Project Manager",
                  company: "Nex Skill",
                  text: "Working with Jawad was a pleasure. His technical skills and problem-solving abilities are truly impressive."
                },
                {
                  name: "Michael Johnson",
                  role: "Tech Lead",
                  company: "Tech Solutions",
                  text: "Jawad brings a unique blend of technical expertise and creative thinking to every project he works on."
                }
              ].map((testimonial) => (
                <div
                  key={testimonial.name}
                  className="relative group"
                >
                  <div className="relative bg-[#1a1a1a] rounded-lg p-6 transform transition-all duration-300 hover:-translate-y-2">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 mb-4 rounded-full bg-gradient-to-r from-[#866ee7] via-[#ea60da] to-[#ed8f57] p-1">
                        <div className="w-full h-full rounded-full bg-[#1a1a1a] flex items-center justify-center">
                          <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#866ee7] via-[#ea60da] to-[#ed8f57]">
                            {testimonial.name[0]}
                          </span>
                        </div>
                      </div>
                      <p className="text-gray-300 mb-4 italic relative">
                        <span className="absolute -left-2 -top-2 text-4xl text-[#866ee7]/20">"</span>
                        {testimonial.text}
                        <span className="absolute -right-2 bottom-0 text-4xl text-[#ed8f57]/20">"</span>
                      </p>
                      <div className="space-y-1">
                        <h4 className="text-white font-semibold bg-gradient-to-r from-[#866ee7] via-[#ea60da] to-[#ed8f57] bg-clip-text text-transparent">
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-400 text-sm">{testimonial.role}</p>
                        <p className="text-gray-400 text-sm">{testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="flex flex-col items-center justify-center space-y-8">
            <div className="w-full max-w-2xl">
              <ContactForm />
            </div>
          </section>
        </main>

        <footer className="mt-24 py-8 border-t border-gray-800">
          <div className="text-center text-gray-400 font-mono text-sm">
            © {new Date().getFullYear()} Jawad Abbas. All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
