import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { motion } from "framer-motion";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();
  const navigate = useNavigate();

  // Track active section based on scroll position
  useEffect(() => {
    if (location.pathname !== "/") return;

    const sections = [
      "home",
      "about",
      "skills",
      "experience",
      "ECA",
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

    const observer = new IntersectionObserver(observerCallback, observerOptions);

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
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const handleResumeClick = () => {
    window.open("#", "_blank");
  };

  const getNavLinkClass = (id) => `
    cursor-pointer transition-all text-xs xl:text-sm whitespace-nowrap px-1
    ${activeSection === id 
      ? "text-green-400 font-semibold border-b-2 border-green-400" 
      : "text-gray-400 hover:text-green-400"}
  `;

  const navItems = (
    <>
      <li><a onClick={() => scrollToSection("home")} className={getNavLinkClass("home")}>Home</a></li>
      <li><a onClick={() => scrollToSection("about")} className={getNavLinkClass("about")}>About</a></li>
      <li><a onClick={() => scrollToSection("skills")} className={getNavLinkClass("skills")}>Skills</a></li>
      <li><a onClick={() => scrollToSection("experience")} className={getNavLinkClass("experience")}>Experience</a></li>
      <li><a onClick={() => scrollToSection("ECA")} className={getNavLinkClass("ECA")}>ECA</a></li>
      <li><a onClick={() => scrollToSection("projects")} className={getNavLinkClass("projects")}>Projects</a></li>
      <li><a onClick={() => scrollToSection("contact")} className={getNavLinkClass("contact")}>Contact</a></li>
    </>
  );

  return (
    <nav className="bg-[#0f1612] shadow-lg w-full sticky top-0 z-50 border-b border-green-900/30 backdrop-blur-sm">
      <div className="container mx-auto px-4 max-w-7xl flex items-center justify-between h-16">
        
        {/* Logo - Pushed to the far left */}
        <div className="flex-shrink-0">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("home")}
            className="text-xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text cursor-pointer"
          >
            Portfolio
          </motion.button>
        </div>

        {/* Right Side Content (Menu + Resume) */}
        <div className="flex items-center gap-4 xl:gap-6">
          
          {/* Desktop Menu - Positioned next to Resume */}
          <div className="hidden lg:block">
            <ul className="flex flex-row items-center gap-2 xl:gap-4 list-none">
              {navItems}
            </ul>
          </div>

          {/* Resume Button */}
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(16, 185, 129, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            onClick={handleResumeClick}
            className="btn btn-outline btn-xs sm:btn-sm border-green-500 text-green-400 hover:bg-green-500 hover:text-black transition-all px-4"
          >
            Resume
          </motion.button>

          {/* Mobile Menu Icon */}
          <div className="dropdown dropdown-end lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-xs text-green-400 px-0">☰</div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-[#0f1612] border border-green-900/30 shadow-xl rounded-box w-48 mt-3 p-2">
              {navItems}
            </ul>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;