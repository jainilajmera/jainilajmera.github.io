import { motion } from "framer-motion";

interface ToggleProps {
  activeTab: "work" | "life";
  onToggle: (tab: "work" | "life") => void;
}

function Toggle({ activeTab, onToggle }: ToggleProps) {
  return (
    <div className="slide-toggle">
      <motion.div
        className="slide-toggle-indicator"
        layout
        transition={{ type: "spring", stiffness: 500, damping: 35 }}
        style={{ left: activeTab === "work" ? "0" : "50%" }}
      />
      <button
        className={`slide-toggle-option ${
          activeTab === "work" ? "active" : ""
        }`}
        onClick={() => onToggle("work")}
        aria-pressed={activeTab === "work"}
      >
        At
      </button>
      <button
        className={`slide-toggle-option ${
          activeTab === "life" ? "active" : ""
        }`}
        onClick={() => onToggle("life")}
        aria-pressed={activeTab === "life"}
      >
        Outside
      </button>
    </div>
  );
}

export default Toggle;
