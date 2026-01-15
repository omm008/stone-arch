import { motion, useScroll, useTransform } from 'framer-motion';

/*
  SCROLL SCALE
  - Vertical scale ruler
  - Ticks animate height based on scroll
  - Used on Home page (hero + sections)

  MOBILE:
  - Smaller ticks
  - Shorter scale
*/

const ScrollScale = ({ color }) => {
  const { scrollYProgress } = useScroll();

  return (
    <div className="flex items-end gap-[2px] h-32 md:h-48">
      {Array.from({ length: 12 }).map((_, i) => {
        const height = useTransform(
          scrollYProgress,
          [0, 1],
          [4 + i * 2, 8 + i * 6]
        );

        const opacity = useTransform(
          scrollYProgress,
          [0, 0.2, 1],
          [0.4, 1, 0.6]
        );

        return (
          <motion.div
            key={i}
            style={{
              height,
              opacity,
              backgroundColor: color,
            }}
            className="w-[2px]"
          />
        );
      })}
    </div>
  );
};

export default ScrollScale;
