import { Clock, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary border-t border-primary-foreground/10">
      <div className="container-narrow py-12">
        {/* Disclaimer */}
        <div className="border border-primary-foreground/10 rounded-lg p-5 mb-10">
          <p className="text-xs text-primary-foreground/40 leading-relaxed">
            <strong className="text-primary-foreground/60">Risk Disclaimer:</strong>{" "}
            Futures and options trading involves substantial risk of loss and is
            not suitable for every investor. The valuation of futures and options
            may fluctuate, and as a result, you may lose more than your original
            investment. All content presented on ZoomRoomRadio is for educational
            purposes only and does not constitute financial advice. Past
            performance is not indicative of future results.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          <div>
            <span className="text-primary-foreground font-bold text-lg">
              Future's <span className="text-accent">Talk</span>
            </span>
            <p className="text-primary-foreground/40 text-xs mt-2">
              Live trading education through transparency.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2">
              <Clock size={14} className="text-accent" />
              <span className="text-primary-foreground/60 text-sm font-medium">
                Trading Hours
              </span>
            </div>
            <p className="text-primary-foreground/40 text-xs">
              Mon – Fri: 5:00 AM – 7:00 AM PST
            </p>
          </div>

          










        </div>

        <div className="divider !bg-primary-foreground/10 mb-6" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-primary-foreground/30">
            © {new Date().getFullYear()} Future's Talk. All rights reserved.
          </p>
          <p className="text-xs text-primary-foreground/30">
            Not financial advice. For educational purposes only.
          </p>
        </div>
      </div>
    </footer>);

}