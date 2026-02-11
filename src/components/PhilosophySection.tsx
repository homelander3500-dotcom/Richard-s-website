import { motion } from "framer-motion";

export default function PhilosophySection() {
  return (
    <section id="philosophy" className="section-padding bg-background">
      <div className="container-narrow max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-accent text-sm font-semibold uppercase tracking-[0.2em] mb-3">
            The Philosophy
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Trading Is a Profession
          </h2>
        </motion.div>

        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="border-l-2 border-accent pl-6 md:pl-8 space-y-5 text-foreground/80 text-base md:text-lg leading-relaxed"
        >
          <p>
            Trading is not gambling. It's a profession built on discipline,
            analysis, and proven methodology. For 25 years, I've navigated the
            futures markets—not by luck, but by mastering the art of reading
            price action, managing risk, and executing with precision.
          </p>
          <p>
            This isn't about showing off wins. It's about transparency. You'll
            see the good trades and the losing trades. You'll understand why I
            enter, where I place my stops, and how I manage each position.
          </p>
          <p className="font-semibold text-foreground">
            Real trading. Real time. Real education.
          </p>
        </motion.blockquote>
      </div>
    </section>
  );
}
