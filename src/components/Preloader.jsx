import { motion } from "framer-motion";

const Preloader = ({ progress, isLoading }) => {
  return (
    <motion.div
      initial={{ y: 0 }}
      // Slide up (-100%) when isLoading becomes false
      animate={{ y: isLoading ? 0 : "-100%" }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white"
    >
      <div className="relative overflow-hidden">
        {/* Giant Percentage Counter */}
        <h1 className="text-9xl md:text-[12rem] font-black tracking-tighter">
          {Math.round(progress)}%
        </h1>

        {/* Progress Bar Line */}
        <div className="w-full h-2 bg-stone-800 mt-4 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-orange-600"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <p className="mt-4 font-mono text-sm uppercase tracking-widest opacity-60">
        Constructing Environment
      </p>
    </motion.div>
  );
};

export default Preloader;
