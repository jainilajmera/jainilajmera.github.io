import { Outlet, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Wrapped2025 } from "./Wrapped2025";

type Theme = "light" | "fire-nation";
type Element = "water" | "earth" | "air";

function Layout() {
  const [showWrapped, setShowWrapped] = useState(false);
  const [wrappedReady, setWrappedReady] = useState(false);
  const [theme, setTheme] = useState<Theme>("light");

  const [element, setElement] = useState<Element>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("element");
      if (saved === "water" || saved === "earth" || saved === "air")
        return saved;
    }
    return "water";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    if (theme !== "fire-nation") {
      document.documentElement.setAttribute("data-element", element);
      localStorage.setItem("element", element);
    } else {
      document.documentElement.removeAttribute("data-element");
    }
  }, [element, theme]);

  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "data-theme") {
          const newTheme = document.documentElement.getAttribute(
            "data-theme"
          ) as Theme;
          if (newTheme && newTheme !== theme) {
            setTheme(newTheme);
          }
        }
      });
    });
    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, [theme]);

  useEffect(() => {
    const timer = setTimeout(() => setWrappedReady(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const toggleElement = () => {
    const elements: Element[] = ["water", "earth", "air"];
    const currentIndex = elements.indexOf(element);
    const nextIndex = (currentIndex + 1) % elements.length;
    setElement(elements[nextIndex]);
  };

  const getElementIcon = () => {
    const elementImages: Record<Element, string> = {
      water: "/img/water.png",
      earth: "/img/earth.png",
      air: "/img/air.png",
    };
    return (
      <img
        src={elementImages[element]}
        alt={element}
        className="element-icon"
      />
    );
  };

  return (
    <>
      <nav className="nav">
        <div className="nav-inner">
          <Link to="/" className="nav-name">
            Jainil Ajmera
          </Link>
          <div className="nav-toggles">
            <button
              className="wrapped-trigger"
              onClick={() => setShowWrapped(true)}
              aria-label="2025 Wrapped"
            >
              <AnimatePresence mode="wait">
                {wrappedReady ? (
                  <motion.img
                    key="gift"
                    src="/img/gift.png"
                    alt="2025 Wrapped"
                    className="gift-icon"
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    animate={{
                      opacity: 1,
                      scale: [0, 1.3, 1],
                      rotate: 0,
                    }}
                    transition={{
                      duration: 0.5,
                      scale: { times: [0, 0.6, 1], ease: "easeOut" },
                      rotate: { duration: 0.4, ease: "easeOut" },
                    }}
                  />
                ) : (
                  <motion.span
                    key="year"
                    initial={{ opacity: 1, scale: 1, rotate: 0 }}
                    animate={{
                      rotate: [0, -3, 3, -3, 3, 0],
                      transition: {
                        duration: 0.5,
                        repeat: Infinity,
                        repeatDelay: 2,
                      },
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0,
                      rotate: 180,
                      transition: { duration: 0.3 },
                    }}
                  >
                    '25
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
            {theme === "fire-nation" ? (
              <button
                className="theme-toggle"
                onClick={() => setTheme("light")}
                aria-label="Exit Fire Nation theme"
              >
                <img
                  src="/img/fire.png"
                  alt="Fire Nation"
                  className="element-icon fire-icon"
                />
              </button>
            ) : (
              <button
                className="theme-toggle element-toggle"
                onClick={toggleElement}
                aria-label={`Current element: ${element}. Click to change.`}
                title={element.charAt(0).toUpperCase() + element.slice(1)}
              >
                {getElementIcon()}
              </button>
            )}
          </div>
        </div>
      </nav>
      <main className="main-container">
        <Outlet />
      </main>
      <AnimatePresence>
        {showWrapped && <Wrapped2025 onClose={() => setShowWrapped(false)} />}
      </AnimatePresence>
    </>
  );
}

export default Layout;
