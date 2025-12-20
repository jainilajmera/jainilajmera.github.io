import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Fireball {
  id: number;
  y: number;
  size: number;
  duration: number;
}

export function Fireballs() {
  const [fireballs, setFireballs] = useState<Fireball[]>([]);
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    const updateTheme = () => {
      setTheme(document.documentElement.getAttribute("data-theme"));
    };
    updateTheme();

    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (theme !== "fire-nation") return;

    const spawnFireballs = () => {
      const count = 3 + Math.floor(Math.random() * 3);
      const newFireballs: Fireball[] = [];

      for (let i = 0; i < count; i++) {
        newFireballs.push({
          id: Date.now() + i,
          y: 10 + Math.random() * 60,
          size: 20 + Math.random() * 30,
          duration: 2 + Math.random() * 2,
        });
      }

      setFireballs(newFireballs);

      setTimeout(() => {
        setFireballs([]);
      }, 5000);
    };

    const initialDelay = setTimeout(spawnFireballs, 2000);
    const interval = setInterval(spawnFireballs, 30000);

    return () => {
      clearTimeout(initialDelay);
      clearInterval(interval);
    };
  }, [theme]);

  if (theme !== "fire-nation") return null;

  return (
    <div className="fireballs-container">
      <AnimatePresence>
        {fireballs.map((fireball) => (
          <motion.div
            key={fireball.id}
            className="fireball"
            initial={{ x: "-10vw", opacity: 0 }}
            animate={{ x: "110vw", opacity: [0, 1, 1, 0] }}
            exit={{ opacity: 0 }}
            transition={{
              duration: fireball.duration,
              ease: "easeIn",
              delay: Math.random() * 0.5,
            }}
            style={{
              top: `${fireball.y}%`,
              width: fireball.size,
              height: fireball.size,
            }}
          >
            <div className="fireball-core" />
            <div className="fireball-trail" />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default Fireballs;
