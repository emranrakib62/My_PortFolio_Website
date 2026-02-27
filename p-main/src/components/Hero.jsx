import { FaFacebook, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import Typewriter from "typewriter-effect";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { fadeInLeft, fadeInRight, floatingAnimation } from "../utils/animations";

const Hero = () => {
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
    <section
      id="home"
      className="min-h-[60vh] py-16 sm:py-20 lg:py-24 overflow-hidden relative"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInLeft}
            className="flex flex-col justify-center items-center lg:justify-start lg:items-start"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-4 text-green-400 font-medium"
            >
              Hello world! I'm
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl sm:text-3xl text-center lg:text-left md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 text-transparent bg-clip-text mb-4 whitespace-nowrap"
              style={{
                filter: "drop-shadow(0 0 30px rgba(16, 185, 129, 0.3))",
              }}
            >
              Emranul Hoque
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-2xl sm:text-3xl text-center lg:text-left md:text-4xl lg:text-5xl font-normal text-green-300 mb-6 min-h-[60px] sm:min-h-[80px]"
            >
              <Typewriter
                options={{
                  strings: [
                    "Flutter Developer",
                    "Android Developer",
                    "ICT Instructor",
                    "Research Enthusiast",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-base text-gray-400 md:text-lg max-w-md mx-auto lg:mx-0 mb-8"
            >
              Creating innovative mobile experiences with cutting-edge
              technology. Passionate about crafting seamless and engaging apps
              that
            </motion.p>
            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="hidden md:flex gap-4 mb-5 text-xl text-gray-400"
            >
              <motion.a
                whileHover={{ scale: 1.2, color: "#10b981" }}
                whileTap={{ scale: 0.9 }}
                href="https://github.com/emranrakib62"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-500 transition-colors"
              >
                <FaGithub />
              </motion.a>

                <motion.a
                whileHover={{ scale: 1.2, color: "#10b981" }}
                whileTap={{ scale: 0.9 }}
                href="https://www.facebook.com/e.h.rakib.529335/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-500 transition-colors"
              >
                <FaFacebook />
              </motion.a>
               <motion.a
                whileHover={{ scale: 1.2, color: "#10b981" }}
                whileTap={{ scale: 0.9 }}
                href="http://www.youtube.com/@sbcian29"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-500 transition-colors"
              >
                <FaYoutube/>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, color: "#10b981" }}
                whileTap={{ scale: 0.9 }}
                href="https://www.linkedin.com/in/emranul-hoque-479884263/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-500 transition-colors"
              >
                <FaLinkedin />
              </motion.a>
            </motion.div>
          </motion.div>





          {/* Right Image */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInRight}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              {...floatingAnimation}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-green-500 shadow-2xl"
              style={{
                boxShadow: "0 0 60px rgba(16, 185, 129, 0.4), 0 0 100px rgba(16, 185, 129, 0.2)",
              }}
            >
              <img
                src="https://avatars.githubusercontent.com/u/122172406?v=4"
                alt="Profile"
                className="w-full h-full object-contain rounded-full"
              />
              {/* Glow effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-green-500/20 to-transparent rounded-full" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
