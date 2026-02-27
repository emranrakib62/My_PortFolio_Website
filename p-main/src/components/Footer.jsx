import { FaGithub, FaLinkedin, FaFacebookF, FaHeart } from "react-icons/fa";
import { Link } from "react-router";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-[#0a0f0d] to-[#0f1612] border-t border-green-900/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text mb-4">
              Portfolio
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Building delightful mobile apps • emran@example.com
            </p>
            <div className="flex gap-3">
              <motion.a
                whileHover={{ scale: 1.15, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-green-900/30 hover:bg-green-500 hover:text-black text-green-400 rounded-full transition-all border border-green-500/20"
              >
                <FaGithub className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.15, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-green-900/30 hover:bg-green-500 hover:text-black text-green-400 rounded-full transition-all border border-green-500/20"
              >
                <FaLinkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.15, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-green-900/30 hover:bg-green-500 hover:text-black text-green-400 rounded-full transition-all border border-green-500/20"
              >
                <FaFacebookF className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("skills")}
                  className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                >
                  Skills
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                >
                  Projects
                </button>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text mb-4">
              Get In Touch
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-green-400 transition-colors">
                  emran@example.com
                </a>
              </li>
              <li> Dhaka, Bangladesh</li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="border-t border-green-900/30 pt-8 text-center"
        >
          <p className="text-sm text-gray-400 flex items-center justify-center gap-2">
            © {currentYear} Made with <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <FaHeart className="text-green-500" />
            </motion.span> by
            Emranul Hoque
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
