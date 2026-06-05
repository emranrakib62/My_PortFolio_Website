import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaBookOpen } from "react-icons/fa";

const researchData = [
  {
    id: 1,
    title: "Lung Disease Detection Using Convolutional Neural Networks",
    authors: "Emranul Hoque, et al.",
    journal: "International Journal of Medical Informatics (Sample)",
    year: "2026",
    link: "https://github.com", // আপনার রিসার্চ পেপারের বা প্রজেক্টের লিংক
    description: "Developed and optimized a CNN architecture tailored for medical imaging classification, achieving a test accuracy of 94.68% in classifying multi-class lung infections from X-ray datasets."
  }
];

const Research = () => {
  return (
    // ওপর-নিচের অতিরিক্ত স্পেস কমাতে py-20 থেকে py-10 করা হয়েছে
    <section id="Research" className="py-10 relative overflow-hidden bg-[#0a0f0d]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* Section Header (নিচের মার্জিন mb-16 থেকে কমিয়ে mb-10 করা হয়েছে) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 rounded-full mb-4 border border-green-500/20">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="font-semibold text-sm text-green-400 uppercase tracking-wider">Publications & Studies</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 text-transparent bg-clip-text">
            Research Work
          </h2>
        </motion.div>

        {/* Research List (max-w-4xl থেকে সরিয়ে w-full করা হয়েছে যেন বাকি কার্ডের সমান উইডথ পায়) */}
        <div className="w-full mx-auto space-y-6">
          {researchData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#0f1612] p-6 sm:p-8 rounded-2xl border border-green-900/30 hover:border-green-500/40 transition-all shadow-lg group relative w-full"
            >
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <div className="p-4 bg-green-900/20 rounded-xl text-green-400 group-hover:bg-green-500 group-hover:text-black transition-all shrink-0">
                  <FaBookOpen className="text-2xl" />
                </div>
                <div className="w-full">
                  <div className="flex justify-between items-start gap-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors">
                      {item.title}
                    </h3>
                    {item.link && (
                      <a 
                        href={item.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-gray-500 hover:text-green-400 p-1 transition-colors shrink-0"
                      >
                        <FaExternalLinkAlt className="text-sm" />
                      </a>
                    )}
                  </div>
                  <p className="text-gray-400 text-sm mt-2">
                    <span className="font-semibold text-green-500/80">Authors:</span> {item.authors}
                  </p>
                  <p className="text-xs text-gray-500 font-mono mt-1">
                    {item.journal} • {item.year}
                  </p>
                  <p className="text-gray-400 text-sm mt-4 leading-relaxed bg-[#0a0f0d]/50 p-4 rounded-xl border border-green-950/40---">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Research;