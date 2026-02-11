import { motion } from "framer-motion";
import { Radio, Clock, MessageSquare } from "lucide-react";

const schedule = [
  { day: "Monday – Friday", time: "5:00 AM – 7:00 AM PST", active: true },
  { day: "Special Sessions", time: "Announced via email", active: false },
];

export default function LiveTradingSection() {
  return (
    <section id="live-trading" className="section-padding bg-card">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-accent text-sm font-semibold uppercase tracking-[0.2em] mb-3">
            Live Trading Window
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Watch. Learn. Understand.
          </h2>
        </motion.div>

        {/* Stream embed placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative aspect-video bg-primary rounded-xl overflow-hidden mb-10 shadow-xl"
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
            <div className="flex items-center gap-2 px-4 py-1.5 bg-destructive/90 rounded-full">
              <span className="w-2 h-2 rounded-full bg-destructive-foreground animate-pulse-live" />
              <span className="text-destructive-foreground text-xs font-bold uppercase tracking-wider">
                Live Now
              </span>
            </div>
            <p className="text-primary-foreground/50 text-sm">
              Stream will appear here during live trading hours
            </p>
          </div>
        </motion.div>

        {/* Schedule + Chat */}
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-background rounded-xl p-6 border border-border"
          >
            <div className="flex items-center gap-2 mb-4">
              <Clock size={18} className="text-accent" />
              <h3 className="font-semibold text-foreground">Trading Schedule</h3>
            </div>
            <div className="space-y-3">
              {schedule.map((s) => (
                <div
                  key={s.day}
                  className="flex items-center justify-between py-2 border-b border-border last:border-0"
                >
                  <span className="text-sm text-foreground">{s.day}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">{s.time}</span>
                    {s.active && (
                      <Radio size={14} className="text-success" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-background rounded-xl p-6 border border-border"
          >
            <div className="flex items-center gap-2 mb-4">
              <MessageSquare size={18} className="text-accent" />
              <h3 className="font-semibold text-foreground">Live Q&A</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Ask questions during live sessions. Get real-time answers about
              entries, exits, and market analysis.
            </p>
            <div className="bg-muted rounded-lg p-4 text-center">
              <p className="text-xs text-muted-foreground">
                Chat activates during live trading hours
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
