import { motion } from "framer-motion";
import { Card } from "./ui/card";

const Skills = () => {
  return (
    <section id="skills" className="py-32 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">Technical Skills</h2>
            <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
              A comprehensive overview of my technical expertise across languages, frameworks, tools, and concepts.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="p-6">
                <h4 className="text-lg font-semibold text-foreground mb-4">Languages</h4>
                <div className="flex flex-wrap gap-2">
                  {["Python", "Java", "C++", "JavaScript", "TypeScript"].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-muted text-foreground rounded-lg text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="p-6">
                <h4 className="text-lg font-semibold text-foreground mb-4">Frameworks</h4>
                <div className="flex flex-wrap gap-2">
                  {["React", "Node.js", "Express", "Tailwind", "React Native", "Expo"].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-muted text-foreground rounded-lg text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Card className="p-6">
                <h4 className="text-lg font-semibold text-foreground mb-4">Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {["Git", "VS Code", "MongoDB", "Postman", "Figma"].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-muted text-foreground rounded-lg text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Card className="p-6">
                <h4 className="text-lg font-semibold text-foreground mb-4">Concepts</h4>
                <div className="flex flex-wrap gap-2">
                  {["RESTful APIs", "UI/UX Design", "Agile Development"].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-muted text-foreground rounded-lg text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
