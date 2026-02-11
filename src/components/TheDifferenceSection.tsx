import { motion } from "framer-motion";
import { Ban, BookOpen, Crosshair } from "lucide-react";

const columns = [
  {
    icon: Ban,
    title: "Not Hype",
    desc: "No promises of overnight wealth. No 'secret systems.' Just proven methodology and transparent execution.",
  },
  {
    icon: BookOpen,
    title: "Education First",
    desc: "Learn to read the market's mind through candlestick analysis, pattern recognition, and disciplined risk management.",
  },
  {
    icon: Crosshair,
    title: "Real Trading",
    desc: "Watch actual money on the line. See wins and losses. Understand the complete picture.",
  },
];

export default function TheDifferenceSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-accent text-sm font-semibold uppercase tracking-[0.2em] mb-3">
            The Difference
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            What Sets This Apart
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {columns.map((col, i) => (
            <motion.div
              key={col.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <col.icon size={22} className="text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{col.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {col.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
