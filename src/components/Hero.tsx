import { motion } from "framer-motion";

import { Button } from "./ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "../components/ui/avatar";
import { Github, Linkedin } from "lucide-react";
import profileImage from "../assets/Profile.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-6"
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-muted-foreground text-sm md:text-base tracking-wide"
            >
              Hi, I'm Han
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight"
            >
              Full-Stack Developer 
              <br />
              <span className="text-primary">with Strong Computer Science Foundations</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-xl"
            >
              I build scalable systems, clean APIs, and modern web experiences using solid engineering principles.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Button
                size="lg"
                className="shadow-soft hover:shadow-soft-lg"
                onClick={() =>
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                View Projects
              </Button>

              <a
                href="/HanHuynh-Resume.pdf"
                download
                className="inline-block"
              >
                <Button size="lg" variant="outline" className="shadow-soft hover:shadow-soft-lg">
                  Download Resume
                </Button>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex gap-4 pt-2"
            >
              <a
                href="https://github.com/han-huynh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/han-huynh-phuc/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Avatar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary-glow/20 blur-3xl rounded-full" />
              <Avatar className="w-64 h-64 md:w-80 md:h-80 shadow-soft-lg border-2 border-border relative">
                <AvatarImage src={profileImage} alt="Han" />
                <AvatarFallback className="text-6xl bg-muted text-muted-foreground">
                  👤
                </AvatarFallback>
              </Avatar>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;