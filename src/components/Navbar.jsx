import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import useTheme from "../hooks/useTheme";

function Navbar() {
  const { dark, toggleDark } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", link: "#" },
    { label: "Forecast", link: "#forecast" },
    { label: "Favorites", link: "#favorites" },
    { label: "About", link: "#about" },
  ];

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <a href="#" className="navbar-brand" onClick={handleLinkClick}>
          🌤 Weather App
        </a>

        <div className="navbar-links">
          {navItems.map((item) => (
            <a key={item.label} href={item.link} className="navbar-link">
              {item.label}
            </a>
          ))}
          <button onClick={toggleDark} className="dark-toggle">
            {dark ? "☀️" : "🌙"}
          </button>
        </div>

        <button
          className="hamburger"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mobile-menu"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.link}
                className="mobile-menu-link"
                onClick={handleLinkClick}
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => {
                toggleDark();
                setMenuOpen(false);
              }}
              className="dark-toggle mobile-dark-toggle"
            >
              {dark ? "☀️ Light Mode" : "🌙 Dark Mode"}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
