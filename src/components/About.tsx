import { motion } from "framer-motion";
import { Card } from "./ui/card";

const About = () => {
  return (
    <section id="about" className="py-32 px-6 bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">About Me</h2>
            <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
              Computer Science student with a strong ability to learn quickly and adapt to new technologies. 
              I've worked on projects in full-stack, backend, mobile, and system-level programming, giving me 
              versatility across many areas of software development.
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="mb-20">
            <h3 className="text-3xl font-semibold mb-10 text-foreground">Experience</h3>
            <div className="space-y-12">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="relative pl-8 border-l-2 border-primary"
              >
                <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-0" />
                <div className="mb-3">
                  <h4 className="text-xl font-semibold text-foreground">Front-End Developer Intern</h4>
                  <p className="text-muted-foreground">FPT Software, Ho Chi Minh City, Vietnam • Jul 2025 - Sep 2025</p>
                </div>
                <ul className="space-y-2 text-muted-foreground leading-relaxed">
                  <li>• Collaborated with a front-end team to develop a mobile music application using React Native, TypeScript, and Expo</li>
                  <li>• Implemented multilingual UI using i18n and optimized components with Tailwind CSS, improving load time by 15%</li>
                  <li>• Developed sound-mixing and playback functionality to enable multiple audio sources to play simultaneously</li>
                  <li>• Built a Calendar component to visualize user statistics using dynamic circular indicators</li>
                  <li>• Integrated RESTful APIs and refactored components, enhancing maintainability and reducing duplication by 20%</li>
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Education Grid */}
          <div className="mb-20">
            <h3 className="text-3xl font-semibold mb-10 text-foreground">Education</h3>
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Card className="p-8">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h4 className="text-xl font-semibold text-foreground mb-1">Bachelor of Science in Computer Science</h4>
                      <p className="text-muted-foreground">Seattle Pacific University, Seattle, WA</p>
                    </div>
                    <p className="text-muted-foreground mt-2 md:mt-0">Expected Jun 2026</p>
                  </div>
                  <div className="space-y-2 text-muted-foreground">
                    <p>• SPU Transfer Merit Scholarship</p>
                    <p>• Coursework: Data Structures, Applications Programming, Computer Architecture and Organization, Database, Concept of Programming Language</p>
                  </div>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <Card className="p-8">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h4 className="text-xl font-semibold text-foreground mb-1">Associate of Art in Computer Science</h4>
                      <p className="text-muted-foreground">South Seattle College, Seattle, WA</p>
                    </div>
                    <p className="text-muted-foreground mt-2 md:mt-0">Feb 2020 - Aug 2023</p>
                  </div>
                  <div className="text-muted-foreground">
                    <p>• Coursework: Intro to Computer Programming: Python, Java</p>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;