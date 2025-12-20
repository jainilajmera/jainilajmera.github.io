import { Outlet, Link } from "react-router-dom";
import { useState, useEffect } from "react";

type Theme = "light" | "dark" | "fire-nation";
type Element = "water" | "earth" | "air";

function Layout() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      if (saved === "dark" || saved === "light" || saved === "fire-nation")
        return saved;
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    return "light";
  });

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
    localStorage.setItem("theme", theme);
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

  const toggleTheme = () => {
    const fireNationUnlocked =
      localStorage.getItem("theme") === "fire-nation" ||
      document.documentElement.getAttribute("data-theme") === "fire-nation";

    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      if (fireNationUnlocked) {
        setTheme("fire-nation");
      } else {
        setTheme("light");
      }
    } else {
      setTheme("light");
    }
  };

  const toggleElement = () => {
    const elements: Element[] = ["water", "earth", "air"];
    const currentIndex = elements.indexOf(element);
    const nextIndex = (currentIndex + 1) % elements.length;
    setElement(elements[nextIndex]);
  };

  const getThemeIcon = () => {
    if (theme === "fire-nation") {
      return (
        <img
          src="/img/fire.png"
          alt="Fire Nation"
          className="element-icon fire-icon"
        />
      );
    } else if (theme === "light") {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      );
    } else {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      );
    }
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
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {getThemeIcon()}
            </button>
            {theme !== "fire-nation" && (
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
    </>
  );
}

export default Layout;
