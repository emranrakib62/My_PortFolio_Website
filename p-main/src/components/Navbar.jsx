import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { motion } from "framer-motion";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();
  const navigate = useNavigate();

  // Track active section based on scroll position
  useEffect(() => {
    // Only track on home page
    if (location.pathname !== "/") return;

    const sections = [
      "home",
      "about",
      "skills",
      "education",
      "projects",
      "contact",
    ];

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: [0, 0.25, 0.5, 0.75, 1],
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [location.pathname]);

  const scrollToSection = (sectionId) => {
    // If not on home page, navigate to home first
    if (location.pathname !== "/") {
      navigate("/");
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    } else {
      // Already on home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const handleResumeClick = () => {
    window.open("#", "_blank");
  };

  const navItems = (
    <>
      <li>
        <a
          onClick={() => scrollToSection("home")}
          className={`cursor-pointer transition-all ${
            activeSection === "home"
              ? "bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text font-semibold"
              : "text-gray-400 hover:text-green-400"
          }`}
        >
          Home
        </a>
      </li>
      <li>
        <a
          onClick={() => scrollToSection("about")}
          className={`cursor-pointer transition-all ${
            activeSection === "about"
              ? "bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text font-semibold"
              : "text-gray-400 hover:text-green-400"
          }`}
        >
          About
        </a>
      </li>
      <li>
        <a
          onClick={() => scrollToSection("skills")}
          className={`cursor-pointer transition-all ${
            activeSection === "skills"
              ? "bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text font-semibold"
              : "text-gray-400 hover:text-green-400"
          }`}
        >
          Skills
        </a>
      </li>
      <li>
        <a
          onClick={() => scrollToSection("projects")}
          className={`cursor-pointer transition-all ${
            activeSection === "projects"
              ? "bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text font-semibold"
              : "text-gray-400 hover:text-green-400"
          }`}
        >
          Projects
        </a>
      </li>
      <li>
        <a
          onClick={() => scrollToSection("contact")}
          className={`cursor-pointer transition-all ${
            activeSection === "contact"
              ? "bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text font-semibold"
              : "text-gray-400 hover:text-green-400"
          }`}
        >
          Contact
        </a>
      </li>
    </>
  );

  return (
    <nav className="bg-[#0f1612] shadow-lg w-full sticky top-0 z-50 border-b border-green-900/30 backdrop-blur-sm">
      <div className="navbar container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Logo */}
        <div className="navbar-start">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("home")}
            className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text cursor-pointer"
            style={{
              filter: "drop-shadow(0 0 10px rgba(16, 185, 129, 0.3))",
            }}
          >
            Portfolio
          </motion.button>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-end hidden lg:flex items-center gap-4">
          <ul className="menu menu-horizontal px-1 gap-3">{navItems}</ul>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(16, 185, 129, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            onClick={handleResumeClick}
            className="btn btn-outline btn-sm border-green-500 text-green-400 hover:bg-green-500 hover:text-black hover:border-green-400 transition-all"
          >
            Resume
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <div className="navbar-end lg:hidden flex items-center gap-2">
          {/* Mobile Dropdown */}
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-sm text-green-400">
              ☰
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-[#0f1612] border border-green-900/30 shadow-xl rounded-box w-52 mt-3 p-2"
            >
              {navItems}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
