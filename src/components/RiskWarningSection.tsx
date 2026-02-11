import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

export default function RiskWarningSection() {
  return (
    <section className="section-padding bg-card">
      <div className="container-narrow max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border border-destructive/20 rounded-xl p-8 md:p-10 bg-destructive/5"
        >
          <div className="flex items-center gap-3 mb-5">
            <AlertTriangle size={22} className="text-destructive" />
            <h3 className="text-lg font-bold text-foreground">
              Trading Involves Significant Risk
            </h3>
          </div>
          <div className="space-y-4 text-foreground/80 text-sm md:text-base leading-relaxed">
            <p>
              Futures trading can result in substantial loss. Never trade with
              money you cannot afford to lose. What you see here is the result of
              decades of study, practice, and discipline.
            </p>
            <p>
              Do not attempt to replicate these trades without proper education
              and training. <strong className="text-foreground">Use simulators. Study relentlessly. Master
              your craft before risking real capital.</strong>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
