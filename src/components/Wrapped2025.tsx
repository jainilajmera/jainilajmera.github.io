import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface WrappedProps {
  onClose: () => void;
}

const slides = [
  { id: "intro", bg: "#0a0a0a" },
  { id: "mcp", bg: "#18181b" },
  { id: "kubernetes", bg: "#0f172a" },
  { id: "vulns", bg: "#1c1917" },
  { id: "hackathons", bg: "#1e1b4b" },
  { id: "golden-platypus", bg: "#292524" },
  { id: "fools-gold", bg: "#022c22" },
  { id: "midnight-oil", bg: "#0c0a09" },
  { id: "climbing", bg: "#450a0a" },
  { id: "travel", bg: "#082f49" },
  { id: "food", bg: "#431407" },
  { id: "finale", bg: "#0a0a0a" },
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export function Wrapped2025({ onClose }: WrappedProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goNext = useCallback(() => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide((prev) => prev + 1);
    }
  }, [currentSlide]);

  const goPrev = useCallback(() => {
    if (currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
    }
  }, [currentSlide]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        goNext();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      } else if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goNext, goPrev, onClose]);

  const renderSlide = (slideId: string) => {
    switch (slideId) {
      case "intro":
        return (
          <div className="w-slide">
            <motion.h1
              className="w-year"
              {...fadeUp}
              transition={{ duration: 0.5 }}
            >
              2025
            </motion.h1>
            <motion.p
              className="w-label"
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              WRAPPED
            </motion.p>
          </div>
        );

      case "kubernetes":
        return (
          <div className="w-slide">
            <motion.p
              className="w-overline"
              {...fadeUp}
              transition={{ duration: 0.4 }}
            >
              SHIPPED
            </motion.p>
            <motion.h2
              className="w-title"
              {...fadeUp}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              JIT Access Control
              <br />
              for Kubernetes
            </motion.h2>
            <motion.p
              className="w-desc"
              {...fadeUp}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              Built just-in-time access control to secure Plaid's Kubernetes
              clusters
            </motion.p>
          </div>
        );

      case "mcp":
        return (
          <div className="w-slide">
            <motion.p
              className="w-overline"
              {...fadeUp}
              transition={{ duration: 0.4 }}
            >
              SHIPPED
            </motion.p>
            <motion.h2
              className="w-title"
              {...fadeUp}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              Securing Plaid's
              <br />
              MCP Server
            </motion.h2>
            <motion.p
              className="w-desc"
              {...fadeUp}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              Built security for the internal Model Context Protocol server
            </motion.p>
            <motion.a
              href="https://plaid.com/blog/plaid-internal-mcp-server-productivity/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-link"
              {...fadeUp}
              transition={{ duration: 0.4, delay: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              Read the article →
            </motion.a>
          </div>
        );

      case "vulns":
        return (
          <div className="w-slide">
            <motion.p
              className="w-overline"
              {...fadeUp}
              transition={{ duration: 0.4 }}
            >
              SHIPPED
            </motion.p>
            <motion.h2
              className="w-title"
              {...fadeUp}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              Actionable Vulnerability
              <br />
              Remediation
            </motion.h2>
            <motion.p
              className="w-desc"
              {...fadeUp}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              Platform to surface security vulnerabilities and identify
              remediation actions
            </motion.p>
          </div>
        );

      case "hackathons":
        return (
          <div className="w-slide">
            <motion.p
              className="w-overline"
              {...fadeUp}
              transition={{ duration: 0.4 }}
            >
              HACKATHON AWARDS
            </motion.p>
            <motion.h1
              className="w-big-number"
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              3
            </motion.h1>
            <motion.p
              className="w-desc"
              {...fadeUp}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              One for impact. One for fun. One for time invested.
            </motion.p>
          </div>
        );

      case "golden-platypus":
        return (
          <div className="w-slide">
            <motion.p
              className="w-overline w-gold"
              {...fadeUp}
              transition={{ duration: 0.4 }}
            >
              THE GOLDEN PLATYPUS
            </motion.p>
            <motion.p
              className="w-overline-sub"
              {...fadeUp}
              transition={{ duration: 0.4, delay: 0.05 }}
            >
              HACKATHON AWARD
            </motion.p>
            <motion.h2
              className="w-title"
              {...fadeUp}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              Most Impactful
            </motion.h2>
            <motion.p
              className="w-desc"
              {...fadeUp}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              A Slack bot that auto-updates runbooks and answers open channel
              questions
            </motion.p>
          </div>
        );

      case "fools-gold":
        return (
          <div className="w-slide">
            <motion.p
              className="w-overline w-emerald"
              {...fadeUp}
              transition={{ duration: 0.4 }}
            >
              THE FOOL'S GOLD
            </motion.p>
            <motion.p
              className="w-overline-sub"
              {...fadeUp}
              transition={{ duration: 0.4, delay: 0.05 }}
            >
              HACKATHON AWARD
            </motion.p>
            <motion.h2
              className="w-title"
              {...fadeUp}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              Most Fun
            </motion.h2>
            <motion.p
              className="w-desc"
              {...fadeUp}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              An internal forecasting platform
            </motion.p>
          </div>
        );

      case "midnight-oil":
        return (
          <div className="w-slide">
            <motion.p
              className="w-overline"
              {...fadeUp}
              transition={{ duration: 0.4 }}
            >
              BURNER OF THE MIDNIGHT OIL
            </motion.p>
            <motion.p
              className="w-overline-sub"
              {...fadeUp}
              transition={{ duration: 0.4, delay: 0.05 }}
            >
              HACKATHON AWARD
            </motion.p>
            <motion.h2
              className="w-title"
              {...fadeUp}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              Most Time Invested
            </motion.h2>
            <motion.p
              className="w-desc"
              {...fadeUp}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              AI agents playground
            </motion.p>
          </div>
        );

      case "climbing":
        return (
          <div className="w-slide">
            <motion.p
              className="w-overline"
              {...fadeUp}
              transition={{ duration: 0.4 }}
            >
              V7 SENDS
            </motion.p>
            <motion.h1
              className="w-big-number"
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              5
            </motion.h1>
            <motion.p
              className="w-desc"
              {...fadeUp}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              Indoors only, hah
            </motion.p>
          </div>
        );

      case "travel":
        return (
          <div className="w-slide">
            <motion.p
              className="w-overline"
              {...fadeUp}
              transition={{ duration: 0.4 }}
            >
              COUNTRIES VISITED
            </motion.p>
            <motion.div
              className="w-list"
              {...fadeUp}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <span>🇳🇴 Norway</span>
              <span>🇪🇸 Spain</span>
              <span>🇮🇳 India</span>
            </motion.div>
          </div>
        );

      case "food":
        return (
          <div className="w-slide">
            <motion.p
              className="w-overline"
              {...fadeUp}
              transition={{ duration: 0.4 }}
            >
              MOST ORDERED
            </motion.p>
            <motion.div
              className="w-food-list"
              {...fadeUp}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <div className="w-food-item">
                <span className="w-food-name">🍛 Paneer Butter Masala</span>
                <span className="w-food-place">Gupshup</span>
              </div>
              <div className="w-food-item">
                <span className="w-food-name">🥣 Nutella Acai Bowl</span>
                <span className="w-food-place">Playa Bowls</span>
              </div>
            </motion.div>
          </div>
        );

      case "finale":
        return (
          <div className="w-slide">
            <motion.h1
              className="w-finale"
              {...fadeUp}
              transition={{ duration: 0.6 }}
            >
              That's a wrap.
            </motion.h1>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <motion.div
      className="w-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <button className="w-close" onClick={onClose} aria-label="Close">
        ✕
      </button>

      <div className="w-progress">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`w-dot ${i === currentSlide ? "active" : ""}`}
            onClick={() => setCurrentSlide(i)}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          className="w-container"
          style={{ background: slides[currentSlide].bg }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={goNext}
        >
          {renderSlide(slides[currentSlide].id)}
        </motion.div>
      </AnimatePresence>

      <div className="w-nav">
        <button
          className="w-nav-btn"
          onClick={(e) => {
            e.stopPropagation();
            goPrev();
          }}
          disabled={currentSlide === 0}
        >
          ←
        </button>
        <span className="w-count">
          {currentSlide + 1}/{slides.length}
        </span>
        <button
          className="w-nav-btn"
          onClick={(e) => {
            e.stopPropagation();
            goNext();
          }}
          disabled={currentSlide === slides.length - 1}
        >
          →
        </button>
      </div>
    </motion.div>
  );
}

export default Wrapped2025;
