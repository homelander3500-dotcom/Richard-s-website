import { motion } from "framer-motion";
import { BarChart3, Target, ShieldCheck, TrendingUp } from "lucide-react";

const items = [
  {
    icon: TrendingUp,
    title: "Live Trade Execution",
    desc: "Crude Oil (CL), Euro Currency (6E), Gold (GC) and more—executed live with full commentary.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Chart Analysis",
    desc: "AB=CD patterns, Fibonacci levels, and candlestick analysis broken down as they unfold.",
  },
  {
    icon: ShieldCheck,
    title: "Risk Management in Action",
    desc: "Every stop loss, every profit target explained. See how a professional manages each position.",
  },
  {
    icon: Target,
    title: "Professional Discipline",
    desc: "The complete trading regimen—from pre-market preparation to post-session review.",
  },
];

export default function WhatYoullSeeSection() {
  return (
    <section className="section-padding bg-card">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-accent text-sm font-semibold uppercase tracking-[0.2em] mb-3">
            What You'll See
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Complete Transparency
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-background border border-border rounded-xl p-6 hover:border-accent/30 transition-colors"
            >
              <item.icon size={24} className="text-accent mb-4" />
              <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
