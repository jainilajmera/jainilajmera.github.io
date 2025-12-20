import { useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";

interface FireNationCardProps {
  onClose: () => void;
}

export function FireNationCard({ onClose }: FireNationCardProps) {
  const handleClose = () => {
    // Apply Fire Nation theme
    document.documentElement.setAttribute("data-theme", "fire-nation");
    localStorage.setItem("theme", "fire-nation");
    onClose();
  };

  return (
    <motion.div
      className="fire-nation-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={(e) => e.target === e.currentTarget && handleClose()}
    >
      <motion.div
        className="fire-nation-card"
        initial={{ scale: 0.8, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.8, opacity: 0, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
      >
        <div className="fire-nation-glow" />
        <img src="/img/zuko.png" alt="Zuko" className="fire-nation-image" />
        <div className="fire-nation-content">
          <p className="fire-nation-text">Flameo, hotman!</p>
          <button className="fire-nation-button" onClick={handleClose}>
            <span className="fire-nation-button-text">
              Enter the Fire Nation
            </span>
            <svg
              className="fire-nation-button-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
              />
            </svg>
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function useKonamiCode(callback: () => void) {
  const konamiCode = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "b",
    "a",
  ];
  const inputRef = useRef<string[]>([]);

  const handleCallback = useCallback(callback, [callback]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      inputRef.current = [...inputRef.current, e.key].slice(-konamiCode.length);
      if (inputRef.current.join(",") === konamiCode.join(",")) {
        handleCallback();
        inputRef.current = [];
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleCallback]);
}

export default FireNationCard;
