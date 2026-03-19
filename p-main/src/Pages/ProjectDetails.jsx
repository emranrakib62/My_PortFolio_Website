import { useParams, Link } from "react-router";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaCode, FaLightbulb, FaRocket } from "react-icons/fa";
//
const projectsData = [
  {
    id: 1,
    image: "",
    title: "",
    description:
      "PayUp is a modern, responsive platform built by Emranul Hoque to simplify utility bill tracking. It provides an intuitive interface for managing financial obligations and real-time payment status.",
    tags: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    type: "Full Stack",
    github: "",
    live: "",
    techStack: [
      { name: "React", purpose: "Frontend framework for building interactive UI" },
      { name: "Node.js", purpose: "Backend runtime environment" },
      { name: "Express", purpose: "Web application framework" },
      { name: "MongoDB", purpose: "NoSQL database for data storage" },
      { name: "Tailwind CSS", purpose: "Utility-first CSS framework" },
    ],
    challenges: [
      "Implementing real-time payment tracking and notifications",
      "Designing a secure authentication system for user data protection",
      "Creating an intuitive dashboard for managing multiple bills",
      "Optimizing database queries for faster data retrieval",
    ],
    improvements: [
      "Add automated bill payment reminders via email/SMS",
      "Implement data visualization with charts and graphs",
      "Add support for multiple currencies",
      "Create a mobile application version",
      "Integrate with popular payment gateways",
    ],
  },
  {
    id: 2,
    image: "",
    title: "Toy E-commerce App",
    description:
      "Toytopia is a comprehensive e-commerce platform developed by Emranul Hoque. It features secure checkout, product filtering, and a delightful UI tailored for a smooth shopping experience.",
    tags: ["React", "Firebase", "Daisy UI", "React Router"],
    type: "Full Stack",
    github: "",
    live: "",
    techStack: [
      { name: "React", purpose: "Frontend library for building UI components" },
      { name: "Firebase", purpose: "Backend services including authentication and database" },
      { name: "Daisy UI", purpose: "Component library built on Tailwind CSS" },
      { name: "React Router", purpose: "Client-side routing" },
    ],
    challenges: [
      "Managing complex product filtering and search functionality",
      "Implementing Firebase authentication with multiple providers",
      "Creating a responsive shopping cart with persistent state",
      "Handling image optimization for faster page loads",
    ],
    improvements: [
      "Add product recommendation system based on user preferences",
      "Implement wishlist functionality",
      "Add product comparison feature",
      "Create an admin dashboard for inventory management",
      "Integrate customer review and rating system",
    ],
  },
  {
    id: 3,
    image: "https://i.ibb.co.com/DDMDqD6V/Screenshot-2025-12-05-090049.jpg",
    title: "",
    description:
      "Revoza is a high-performance e-commerce solution engineered by Emranul Hoque using Next.js. It focuses on SEO optimization, server-side rendering, and a seamless user journey.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind CSS"],
    type: "",
    github: "",
    live: "",
    techStack: [
      { name: "Next.js", purpose: "React framework with SSR and SSG capabilities" },
      { name: "React", purpose: "UI library for component-based architecture" },
      { name: "MongoDB", purpose: "Database for storing product and user data" },
      { name: "Tailwind CSS", purpose: "Styling and responsive design" },
    ],
    challenges: [
      "Implementing server-side rendering for better SEO performance",
      "Managing state across multiple pages and components",
      "Creating a scalable product catalog structure",
      "Optimizing images and assets for faster load times",
    ],
    improvements: [
      "Add advanced search with filters and sorting options",
      "Implement user authentication and profile management",
      "Create a seller dashboard for product management",
      "Add real-time inventory tracking",
      "Integrate analytics for tracking user behavior",
    ],
  },
];

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-green-600 mb-4">Project Not Found</h2>
          <Link to="/" className="text-green-500 hover:underline">
            Go back to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="min-h-screen py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#0f1612]">
      <div className="container mx-auto max-w-6xl">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm sm:text-base text-green-400 hover:text-green-300 mb-6 sm:mb-8 transition-colors"
        >
          <FaArrowLeft />
          <span>Back to Projects</span>
        </Link>

        {/* Project Header */}
        <div className="mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text mb-3 sm:mb-4">
            {project.title}
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-400 mb-2">
            {project.description}
          </p>
          <p className="text-xs sm:text-sm font-medium text-green-500/80 mb-4 sm:mb-6 italic">
            Developed with passion by Emranul Hoque
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="text-xs sm:text-sm font-medium py-1 px-3 rounded-full bg-green-900/30 text-green-400 border border-green-500/20"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-4">
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-400 to-emerald-600 text-black font-bold rounded-lg hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all text-sm sm:text-base"
            >
              <FaExternalLinkAlt />
              <span>Live Demo</span>
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-green-500 text-green-400 rounded-lg hover:bg-green-500 hover:text-black transition-all text-sm sm:text-base"
            >
              <FaGithub />
              <span>View Code</span>
            </a>
          </div>
        </div>

        {/* Project Image */}
        <div className="mb-8 sm:mb-12">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto rounded-xl shadow-2xl border border-green-900/30"
          />
        </div>

        {/* Technology Stack */}
        <div className="bg-[#161d19] rounded-2xl p-6 sm:p-8 border border-green-900/20 shadow-xl mb-8">
          <div className="flex items-center gap-3 mb-6">
            <FaCode className="text-2xl text-green-400" />
            <h2 className="text-2xl sm:text-3xl font-bold text-green-400">Tech Stack Used</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.techStack.map((tech, index) => (
              <div key={index} className="p-4 bg-[#0f1612] border border-green-900/30 rounded-lg">
                <h3 className="text-lg font-semibold text-green-400 mb-1">{tech.name}</h3>
                <p className="text-sm text-gray-400">{tech.purpose}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Challenges & Improvements */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-[#161d19] rounded-2xl p-6 sm:p-8 border border-green-900/20 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <FaLightbulb className="text-2xl text-yellow-400" />
              <h2 className="text-2xl font-bold text-green-400">Challenges</h2>
            </div>
            <ul className="space-y-4">
              {project.challenges.map((challenge, index) => (
                <li key={index} className="flex gap-3 text-gray-400 text-sm sm:text-base">
                  <span className="text-green-500 font-bold">0{index + 1}.</span>
                  {challenge}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#161d19] rounded-2xl p-6 sm:p-8 border border-green-900/20 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <FaRocket className="text-2xl text-blue-400" />
              <h2 className="text-2xl font-bold text-green-400">Future Roadmap</h2>
            </div>
            <ul className="space-y-4">
              {project.improvements.map((improvement, index) => (
                <li key={index} className="flex gap-3 text-gray-400 text-sm sm:text-base">
                  <span className="text-green-500 font-bold">→</span>
                  {improvement}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;