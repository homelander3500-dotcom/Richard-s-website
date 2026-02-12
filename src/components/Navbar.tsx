import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const navLinks = [
{ label: "About", href: "#philosophy" },
{ label: "Mission", href: "#mission" }];


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ?
      "bg-primary/95 backdrop-blur-md shadow-lg" :
      "bg-transparent"}`
      }>

      <div className="container-narrow flex items-center justify-between h-16">
        <a href="/" className="text-lg font-bold tracking-tight text-primary-foreground">
          Future's  <span className="text-accent">Talk</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleClick(link.href);
              }}
              className="text-sm font-medium text-primary-foreground/70 hover:text-accent transition-colors">
              {link.label}
            </a>
          ))}
          <Link
            to="/contact"
            className="text-sm font-medium text-primary-foreground/70 hover:text-accent transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-primary-foreground">

          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen &&
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-primary/95 backdrop-blur-md border-t border-primary-foreground/10">

            <div className="container-narrow py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleClick(link.href)}
                  className="text-sm font-medium text-primary-foreground/70 hover:text-accent transition-colors text-left py-2">
                  {link.label}
                </button>
              ))}
              <Link
                to="/contact"
                className="text-sm font-medium text-primary-foreground/70 hover:text-accent transition-colors py-2"
              >
               Contact
              </Link>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </nav>);

}