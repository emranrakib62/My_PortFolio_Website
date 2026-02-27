import { MdEmail } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { FaFacebookF, FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router";
import { FiDownload } from "react-icons/fi";

import toast from "react-hot-toast";
import { motion } from "framer-motion";

const CONTACT_INFO = [
  { icon: MdEmail, label: "Email", value: "emranrakib01862@gmail.com", link: "mailto:emranrakib01862@gmail.com" },
];

const Contact = () => {
  const address = " Dhaka, Bangladesh";
  const encodedAddress = encodeURIComponent(address);
  const mapUrl = `https://maps.google.com/maps?q=${encodedAddress}&z=15&output=embed`;
const handleResumeClick = () => {
    toast.success("Resume download started! 📄", {
      duration: 3000,
      position: "top-center",
      style: {
        background: "linear-gradient(135deg, #10b981, #059669)",
        color: "#fff",
        padding: "16px",
        borderRadius: "10px",
        fontSize: "16px",
        boxShadow: "0 0 20px rgba(16, 185, 129, 0.3)",
      },
      iconTheme: {
        primary: "#fff",
        secondary: "#10b981",
      },
    });
  };
  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/3 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 rounded-full mb-6 border border-green-500/20">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="font-semibold text-sm text-green-400">Get In Touch</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 text-transparent bg-clip-text mb-3 sm:mb-4">
            Contact Me
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
            Let's discuss your next project or opportunity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Map */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#0f1612] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg border border-green-900/30"
          >
            <iframe
              title="Location Map"
              src={mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "350px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#0f1612] p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg border border-green-900/30 space-y-6"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-green-400 mb-6">
              Get in Touch
            </h3>

            {/* Email */}
            {CONTACT_INFO.map((item, index) => (
              <motion.a
                key={index}
                whileHover={{ scale: 1.02, x: 5 }}
                href={item.link}
                className="flex items-start space-x-4 p-4 bg-green-900/20 rounded-lg hover:bg-green-900/30 transition-colors group border border-green-500/20"
              >
                <item.icon className="h-6 w-6 text-green-400 shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-sm text-gray-500 mb-1">{item.label}</p>
                  <p className="text-base font-medium text-gray-300 group-hover:text-green-400 transition-colors">
                    {item.value}
                  </p>
                </div>
              </motion.a>
            ))}

            {/* Address */}
            <div className="flex items-start space-x-4 p-4 bg-green-900/20 rounded-lg border border-green-500/20">
              <SlLocationPin className="h-6 w-6 text-green-400 shrink-0 mt-1" />
              <div>
                <p className="text-sm text-gray-500 mb-1">Address</p>
                <p className="text-base font-medium text-gray-300">{address}</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6 border-t border-green-900/30">
              <p className="text-sm text-gray-500 mb-4">Connect with me</p>
              <div className="flex flex-row justify-start items-center space-x-4">
                <motion.a
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-green-900/30 hover:bg-green-500 hover:text-black text-green-400 rounded-full transition-all border border-green-500/20"
                >
                  <FaGithub className="w-5 h-5" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-green-900/30 hover:bg-green-500 hover:text-black text-green-400 rounded-full transition-all border border-green-500/20"
                >
                  <FaLinkedin className="w-5 h-5" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-green-900/30 hover:bg-green-500 hover:text-black text-green-400 rounded-full transition-all border border-green-500/20"
                >
                  <FaFacebookF className="w-5 h-5" />
                </motion.a>
                 {/* Download Button */}
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(16, 185, 129, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              href="#"
              download
              onClick={handleResumeClick}
              className="btn btn-outline 
            btn-sm border-green-500 text-green-400
             hover:bg-green-500 hover:text-black flex items-center gap-2"
            >
              <FiDownload />
              Resume
            </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
