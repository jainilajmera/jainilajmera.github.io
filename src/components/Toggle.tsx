import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ToggleProps {
  activeTab: "work" | "life";
  onToggle: (tab: "work" | "life") => void;
}

function Toggle({ activeTab, onToggle }: ToggleProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    const nextTab = activeTab === "work" ? "life" : "work";

    setTimeout(() => {
      onToggle(nextTab);
      setIsAnimating(false);
    }, 200);
  };

  const labels = {
    work: "While at",
    life: "Outside",
  };

  return (
    <button
      className="slot-toggle"
      onClick={handleClick}
      aria-label={`Switch to ${
        activeTab === "work" ? "outside" : "while at"
      } work`}
    >
      <span className="slot-window">
        <AnimatePresence mode="wait">
          <motion.span
            key={activeTab}
            className="slot-text"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            {labels[activeTab]}
          </motion.span>
        </AnimatePresence>
      </span>
    </button>
  );
}

export default Toggle;
