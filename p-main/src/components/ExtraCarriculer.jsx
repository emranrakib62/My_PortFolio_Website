import { motion } from "framer-motion";
import { FaAward, FaGlobe, FaLaptopCode, FaMedal, FaExternalLinkAlt } from "react-icons/fa";
import { fadeInUp, staggerContainer } from "../utils/animations";

const ecaData = {
  ambassadorRoles: [
    {
      id: 1,
      title: "Ambassador",
      organization: "International Computer Science Competition (ICSC)",
      period: "Feb-2026 - Present",
      
      description: "The International Computer Science Competition (ICSC) is a three-stage global online contest for students that tests programming, logical reasoning, and theoretical computer science research."
    }, 
    {
      id: 2,
      title: "Ambassador",
      organization: "International Astronomy and Astrophysics Competition (IAAC)",
      period: "jun-2025 -present",
      description: "Facilitated student participation in astrophysics competitions and managed campus-level outreach programs."
    }
  ],
  participations: [
    {
      id: 1,
      name: "ACM ICPC Dhaka Regional",
      detail: "Participated as a contestant representing City University, solving complex algorithmic problems under pressure."
    },
    {
      id: 2,
      name: "ICT Olympiad Bangladesh",
      detail: "Achieved recognition for technical knowledge in information and communication technology at the national level."
    },
    {
      id: 3,
      name: "Graphics Design and Web Development Hands-on Session",
      detail: "A practical training session focused on learning the basics of graphic design tools and building simple websites using modern web technologies."
    },
{
  id: 4,
  name: "Bangladesh Economics Olympiad (BDEO)",
  detail: "Selected for the national level competition, demonstrating proficiency in economic theory, financial literacy, and analytical problem-solving."
},

{
    id: 5,
    name: "International Computer Science Competition (ICSC)",
    detail: "Competed in a global challenge covering programming, logical reasoning, and theoretical computer science research."
  },
  {
    id: 6,
    name: "Climate Science Olympiad-2023(CSO)",
    detail: "Participated in the world's leading climate-focused competition, proposing science-based solutions to complex environmental issues."
  },





  ]
};

const ECA = () => {
  return (
    <section id="ECA" className="py-20 relative overflow-hidden bg-[#0a0f0d]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 rounded-full mb-6 border border-green-500/20">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="font-semibold text-sm text-green-400 uppercase tracking-wider">Beyond Academics</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 text-transparent bg-clip-text">
            Extra-Curricular Activities
          </h2>
        </motion.div>

        {/* Main Section: Ambassador Roles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {ecaData.ambassadorRoles.map((role) => (
            <motion.div
              key={role.id}
              whileHover={{ y: -5 }}
              className="bg-[#0f1612] p-8 rounded-2xl border border-green-900/30 hover:border-green-500/40 transition-all shadow-lg hover:shadow-green-500/10 group"
            >
              <div className="flex items-start gap-4">
                <div className="p-4 bg-green-900/20 rounded-xl text-green-400 group-hover:bg-green-500 group-hover:text-black transition-all">
                  <FaGlobe className="text-2xl" />
                </div>
                <div>
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold text-white mb-1">{role.title}</h3>
                    <span className="text-xs text-gray-500 font-mono mt-1">{role.period}</span>
                  </div>
                  <p className="text-green-500 font-medium mb-2">{role.organization}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{role.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Subsection: Participations */}
        <div className="bg-[#0f1612]/50 rounded-3xl p-8 border border-green-900/20">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <FaMedal className="text-green-500" /> Key Participations
          </h3>
          <div className="space-y-6">
            {ecaData.participations.map((item, index) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6 group"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-900/20 border border-green-500/20 flex items-center justify-center text-green-400 font-bold group-hover:bg-green-500 group-hover:text-black transition-all">
                  {index + 1}
                </div>
                <div className="pb-6 border-b border-green-900/20 last:border-0 w-full">
                  <h4 className="text-lg font-bold text-white group-hover:text-green-400 transition-colors">
                    {item.name}
                  </h4>
                  <p className="text-gray-400 text-sm mt-1">{item.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ECA;