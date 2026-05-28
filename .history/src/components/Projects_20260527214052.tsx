import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./ui/card";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Roguelike Deckbuilder",
    description: "Turn-based roguelike card game built with a team of 5 over one year. Players draft cards, modify personality traits, and battle through escalating encounters with full run persistence.",
    technologies: ["Godot 4", "GDScript", "Resource System", "Signals"],
    highlights: [
      "Built personality-aware card shop generating 3 inventory pools per run",
      "Implemented atomic card transform system with decoupled animation layer",
      "Designed run persistence layer using Godot's ResourceSaver and ResourceLoader",
      "Built 4-phase battle state machine with UI fully decoupled via signals"
    ],
    period: "2024 – 2025",
    organization: "Seattle Pacific University",
    github: "https://github.com/yourusername/roguelike-deckbuilder",
    demo: ""
  },
  {
    title: "Mobile Music Application",
    description: "Collaborated with a front-end team to develop a mobile music application with multilingual UI, sound-mixing functionality, and calendar visualization.",
    technologies: ["React Native", "TypeScript", "Expo", "Tailwind CSS", "i18n"],
    highlights: [
      "Implemented multilingual UI, improving load time by 15%",
      "Developed sound-mixing and playback functionality",
      "Built Calendar component with dynamic circular indicators",
      "Integrated RESTful APIs, reducing duplication by 20%"
    ],
    period: "Jul 2025 – Sep 2025",
    organization: "FPT Software",
    github: "",
    demo: ""
  },
  {
    title: "Bookstore Program",
    description: "Developed a user-friendly book management system with functionalities for adding, removing, and searching books.",
    technologies: ["C++", "Data Structures", "OOP"],
    highlights: [
      "Built comprehensive book management system",
      "Enhanced C++ proficiency and debugging skills",
      "Managed project timeline effectively"
    ],
    period: "May 2024",
    organization: "Seattle Pacific University",
    github: "",
    demo: ""
  },
  {
    title: "Student Management System",
    description: "Designed and implemented a system for managing student data with efficient handling of student records and operations.",
    technologies: ["Java", "OOP", "Data Management"],
    highlights: [
      "Efficient handling of student records",
      "Applied object-oriented design principles",
      "Collaborated with peers for iterative design"
    ],
    period: "Dec 2023",
    organization: "South Seattle College",
    github: "",
    demo: ""
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects showcasing my experience in software development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-muted-foreground">{project.period}</span>
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-sm text-primary/80">
                    {project.organization}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-sm text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  
                  <ul className="text-sm text-muted-foreground mb-4 space-y-1">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto">
  <div className="flex flex-wrap gap-2 mb-4">
    {project.technologies.map((tech) => (
      <span
        key={tech}
        className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
      >
        {tech}
      </span>
    ))}
  </div>

  <div className="flex gap-3">
    {project.github && (
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
      >
        <Github size={14} />
        GitHub
      </a>
    )}
    {project.demo && (
      <a
        href={project.demo}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
      >
        <ExternalLink size={14} />
        Live demo
      </a>
    )}
  </div>
</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
