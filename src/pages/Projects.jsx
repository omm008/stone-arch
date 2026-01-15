import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  // Brutalist Data
  const projects = [
    {
      id: 1,
      title: "Urban Residence",
      type: "Residential",
      year: "2025",
      location: "New York, USA",
    },
    {
      id: 2,
      title: "Cultural Center",
      type: "Institutional",
      year: "2024",
      location: "Berlin, Germany",
    },
    {
      id: 3,
      title: "Minimalist Loft",
      type: "Interior",
      year: "2025",
      location: "Tokyo, Japan",
    },
    {
      id: 4,
      title: "Waterfront Plaza",
      type: "Urban Plan",
      year: "2024",
      location: "Sydney, Aus",
    },
    {
      id: 5,
      title: "Tech Campus",
      type: "Commercial",
      year: "2023",
      location: "San Francisco, USA",
    },
    {
      id: 6,
      title: "Mountain Retreat",
      type: "Residential",
      year: "2025",
      location: "Swiss Alps",
    },
  ];

  return (
    <div className="min-h-screen bg-stone-100 pt-24 md:pt-32 pb-20 text-black font-sans selection:bg-orange-600 selection:text-white">
      {/* PAGE HEADER: Heavy Industry Style */}
      <section className="px-6 md:px-12 mb-20">
        <div className="max-w-screen-2xl mx-auto">
          {/* Top Heavy Divider */}
          <div className="w-full h-4 bg-black mb-8" />

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "circOut" }}
          >
            {/* Massive Title */}
            <h1 className="text-6xl md:text-9xl font-black uppercase leading-[0.8] tracking-tighter mb-12">
              Project <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-500">
                Index_02
              </span>
            </h1>

            {/* Industrial Data Bar */}
            <div className="border-y-4 border-black py-4 md:py-6 flex flex-col md:flex-row md:items-center justify-between gap-4 font-mono font-bold text-sm md:text-base uppercase tracking-wider">
              <div className="flex gap-8">
                <span>
                  // Total_Units: {projects.length.toString().padStart(2, "0")}
                </span>
                <span>// Status: Built</span>
              </div>
              <p className="max-w-md normal-case font-sans font-medium text-stone-600 md:text-right">
                A catalogue of spatial interventions.{" "}
                <br className="hidden md:block" />
                Structure, void, and material reality.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROJECTS GRID */}
      <section className="px-6 md:px-12">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {/* FOOTER MARKER */}
          <div className="mt-20 border-t-4 border-black pt-8 flex justify-between items-center font-black uppercase text-xl">
            <span>/// End of Index</span>
            <span className="text-orange-600">Scroll_Up [^]</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
