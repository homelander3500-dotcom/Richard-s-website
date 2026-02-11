import { motion } from "framer-motion";

export default function MissionSection() {
  return (
    <section id="mission" className="section-padding bg-primary">
      <div className="container-narrow max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-accent text-sm font-semibold uppercase tracking-[0.2em] mb-3">
            The Mission
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-8">
            Education Before Execution
          </h2>
          <p className="text-primary-foreground/70 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            To help earnest individuals understand financial markets so they can
            build consistent, sustainable income through disciplined trading. Not
            promises of wealth—but a path to mastery for those willing to work.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
