import { motion } from "framer-motion";
import { Card } from "./ui/card";

const Projects = () => {
  return (
    <section id = "projects" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-5xl font-bold mb-8 text-gradient">Projects</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <Card key={item} className="p-12 flex items-center justify-center min-h-[300px]">
                <div className="text-center">
                  <div className="text-6xl mb-4">🎨</div>
                  <p className="text-muted-foreground">Project {item}</p>
                </div>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;