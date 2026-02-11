import { motion } from "framer-motion";
import { Award, Briefcase, Shield } from "lucide-react";

const credentials = [
  { icon: Award, label: "25+ Years Futures Trading" },
  { icon: Briefcase, label: "IT/Finance Career → Professional Trader (1998)" },
  { icon: Shield, label: "Military Veteran — Discipline First" },
];

export default function BackgroundSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="text-accent text-sm font-semibold uppercase tracking-[0.2em] mb-3">
            Background
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Built on Experience
          </h2>
        </motion.div>

        <div className="space-y-4">
          {credentials.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-4 py-4 border-b border-border last:border-0"
            >
              <c.icon size={20} className="text-accent flex-shrink-0" />
              <span className="text-foreground font-medium">{c.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
