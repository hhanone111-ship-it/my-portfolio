import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, Github, Linkedin, Send } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Add form submission logic
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold mb-4 text-gradient">Get In Touch</h2>
          <p className="text-lg text-muted-foreground">
            Whether you have a question, a project idea, or just want to say hello—I'd love to connect.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* CONTACT INFO CARD */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-8 h-full">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

              <div className="space-y-6">
                {/* EMAIL */}
                <a
                  href="mailto:hhanone111@gmail.com"
                  className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">hhanone111@gmail.com</p>
                  </div>
                </a>

                {/* GITHUB */}
                <a
                  href="https://github.com/han-huynh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">GitHub</p>
                    <p className="font-medium">@han-huynh</p>
                  </div>
                </a>

                {/* LINKEDIN */}
                <a
                  href="https://linkedin.com/in/han-huynh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">LinkedIn</p>
                    <p className="font-medium">han-huynh</p>
                  </div>
                </a>
              </div>
            </Card>
          </motion.div>

          {/* CONTACT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="p-8">
              <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <Input type="text" placeholder="Your Name" required />
                <Input type="email" placeholder="Your Email" required />
                <Textarea
                  placeholder="Your Message"
                  required
                  className="min-h-[150px]"
                />

                <Button type="submit" className="w-full" size="lg">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
