import { motion } from "framer-motion";
import { FaBookOpen } from "react-icons/fa";

const researchData = [
  {
    id: 1,
    title: "Lung Cancer Detection Using Convolutional Neural Networks (Thesis)"
  },
  {
    id: 2,
    title: "XAI in Energy System (Ongoing)"
  },
  {
    id: 3,
    title: "Losing the Art of Thought? An ML-Based System to Evaluate Creativity Decline in AI-Assisted Generations (Ongoing)"
  }
];

const Research = () => {
  return (
    // ওপর-নিচের স্পেস টাইট রাখা হয়েছে (py-6)
    <section id="Research" className="py-6 relative overflow-hidden bg-[#0a0f0d]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-500/10 rounded-full mb-3 border border-green-500/20">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="font-semibold text-xs text-green-400 uppercase tracking-wider">Publications & Studies</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 text-transparent bg-clip-text">
            Research Work
          </h2>
        </motion.div>

        {/* একক কার্ডের ভেতর শুধু বইয়ের আইকনসহ ৩টি প্রজেক্টের লিস্ট */}
        <div className="w-full mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="bg-[#0f1612] p-6 sm:p-8 rounded-2xl border border-green-900/20 hover:border-green-500/30 hover:shadow-[0_0_30px_rgba(34,197,94,0.1)] transition-all duration-300 shadow-xl relative w-full"
          >
            
            <ul className="space-y-5">
              {researchData.map((item) => (
                <li 
                  key={item.id} 
                  className="flex items-start gap-4 text-base sm:text-lg text-gray-300 hover:text-green-400 transition-colors duration-200 py-1"
                >
                  {/* প্রতিটি প্রজেক্টের শুরুতে সবুজ রঙের বইয়ের আইকন */}
                  <FaBookOpen className="text-green-500 mt-1.5 text-base sm:text-lg shrink-0" />
                  <span className="font-medium leading-relaxed text-white hover:text-green-400 transition-colors duration-200">
                    {item.title}
                  </span>
                </li>
              ))}
            </ul>

          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Research;