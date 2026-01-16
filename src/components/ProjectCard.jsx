/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useState } from "react";
import tech from "../../public/projects/tech.png";

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const src = project.src;

  return (
    <motion.article
      className="group relative border-4 border-black bg-white transition-colors duration-300 hover:bg-black hover:text-white cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 1. IMAGE CONTAINER (Raw & Heavy) */}
      <div className="relative aspect-[4/3] bg-stone-300 border-b-4 border-black overflow-hidden">
        <div className="absolute inset-0 bg-white mix-blend-multiply opacity-0 group-hover:opacity-80 transition-opacity duration-300 z-10" />
        <img
          src={src}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
        />
        <div className="absolute inset-0 flex items-center justify-center z-0">
          <span className="font-black text-3xl text-stone-400 opacity-70 -rotate-12 uppercase group-hover:text-white group-hover:opacity-40 transition-all">
            STONE.ARCH
          </span>
        </div>

        {/* View Indicator (Appears on Hover) */}
        <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-white text-black font-bold text-xs px-2 py-1 uppercase">
            View Project
          </div>
        </div>
      </div>

      {/* 2. CONTENT BLOCK */}
      <div className="p-6 md:p-8 flex flex-col justify-between h-full min-h-[200px]">
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <h3 className="text-3xl font-black uppercase leading-none max-w-[75%]">
            {project.title}
          </h3>
          {/* Year Badge */}
          <span className="border-2 border-black group-hover:border-white px-2 py-1 font-mono text-xs font-bold">
            '{project.year.slice(2)}
          </span>
        </div>

        {/* Technical Details */}
        <div className="mt-auto border-t-4 border-black group-hover:border-stone-600 pt-4 transition-colors duration-300">
          <div className="grid grid-cols-2 gap-4 font-mono text-xs font-bold uppercase tracking-wider">
            <div>
              <span className="block text-stone-500 group-hover:text-stone-400 mb-1 text-[10px]">
                Typology
              </span>
              {project.type}
            </div>
            <div className="text-right">
              <span className="block text-stone-500 group-hover:text-stone-400 mb-1 text-[10px]">
                Coordinates
              </span>
              {project.location.split(",")[0]}
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
