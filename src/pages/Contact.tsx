import { motion } from "framer-motion";
import { Mail, MapPin, User } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-32 pb-20">
        <section className="section-padding bg-card">
          <div className="container-narrow max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Get In <span className="text-accent">Touch</span>
              </h1>
              <p className="text-foreground/70 text-lg">
                Have questions? We'd love to hear from you.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-8"
            >
              {/* Email */}
              <div className="border border-primary-foreground/10 rounded-lg p-8 hover:border-accent/30 transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Mail size={24} className="text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Email</h3>
                </div>
                <p className="text-foreground/70 text-sm mb-2">
                  Reach out via email for any inquiries:
                </p>
                <a
                  href="mailto:rvrueb@gmail.com"
                  className="text-accent hover:text-accent/80 font-medium transition-colors"
                >
                  rvrueb@gmail.com
                </a>
              </div>

              {/* Contact Person */}
              <div className="border border-primary-foreground/10 rounded-lg p-8 hover:border-accent/30 transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <User size={24} className="text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Contact</h3>
                </div>
                <p className="text-foreground/70">
                  <span className="font-medium text-foreground">Richard V Rueb</span>
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
