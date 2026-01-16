import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const MaterialScan = ({ frame }) => {
  // Mock data for the "Analysis" readout
  const [dataStream, setDataStream] = useState({
    coords: "X: 00.00 Y: 00.00",
    status: "IDLE",
    density: "0%",
  });

  // Rotate the cube constantly independent of scroll
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    let animationFrame;
    const animate = () => {
      setRotation((prev) => (prev + 0.5) % 360); // Slow rotation speed

      // Randomize data slightly for effect
      if (Math.random() > 0.8) {
        setDataStream({
          coords: `X: ${(Math.random() * 100).toFixed(2)} Y: ${(
            Math.random() * 100
          ).toFixed(2)}`,
          status: Math.random() > 0.5 ? "SCANNING..." : "CALCULATING",
          density: `${Math.floor(Math.random() * 100)}%`,
        });
      }
      animationFrame = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  // Determine Visual State based on Scroll Frame (0-120)
  const getPhaseStyles = () => {
    if (frame < 24) return "wireframe"; // Ground Breaking
    if (frame < 72) return "solid"; // Structure/Enclosure
    return "complete"; // Final Assembly
  };

  const phase = getPhaseStyles();

  // Helper styles for the Cube Faces
  const baseFaceStyle =
    "absolute w-48 h-48 border-2 transition-all duration-500 flex items-center justify-center backface-visible";

  // Dynamic styles based on phase
  const faceVisuals = {
    wireframe: "border-orange-600 bg-transparent text-orange-600 opacity-50",
    solid: "border-stone-800 bg-stone-800 text-stone-500 opacity-90",
    complete:
      "border-black bg-white/10 backdrop-blur-sm text-black shadow-[0_0_15px_rgba(255,255,255,0.5)]",
  };

  const currentStyle = faceVisuals[phase];

  return (
    <div className="w-full h-full flex items-center justify-center overflow-hidden bg-stone-900 relative perspective-[1000px]">
      {/* BACKGROUND GRID (Static) */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* 3D CUBE CONTAINER */}
      <div
        className="relative w-48 h-48 preserve-3d transition-transform duration-100 ease-linear"
        style={{ transform: `rotateX(-15deg) rotateY(${rotation}deg)` }}
      >
        {/* FACES */}
        {/* FACES - Using Tailwind Arbitrary Values for exact positioning */}
        <div
          className={`${baseFaceStyle} ${currentStyle} [transform:translateZ(96px)]`}
        >
          FRONT
        </div>
        <div
          className={`${baseFaceStyle} ${currentStyle} [transform:rotateY(180deg)_translateZ(96px)]`}
        >
          BACK
        </div>
        <div
          className={`${baseFaceStyle} ${currentStyle} [transform:rotateY(-90deg)_translateZ(96px)]`}
        >
          LEFT
        </div>
        <div
          className={`${baseFaceStyle} ${currentStyle} [transform:rotateY(90deg)_translateZ(96px)]`}
        >
          RIGHT
        </div>
        <div
          className={`${baseFaceStyle} ${currentStyle} [transform:rotateX(90deg)_translateZ(96px)]`}
        >
          TOP
        </div>
        <div
          className={`${baseFaceStyle} ${currentStyle} [transform:rotateX(-90deg)_translateZ(96px)]`}
        >
          BTM
        </div>

        {/* INTERNAL CORE (Only visible in Wireframe/Complete) */}
        {phase !== "solid" && (
          <div
            className="absolute inset-0 m-auto w-24 h-24 bg-orange-600/20 border border-orange-600 animate-pulse preserve-3d"
            style={{ transform: "rotateX(45deg) rotateY(45deg)" }}
          />
        )}
      </div>

      {/* SCANNING LASER (Moves up/down constantly) */}
      <motion.div
        className="absolute w-full h-1 bg-red-500 shadow-[0_0_20px_rgba(255,0,0,1)] z-10"
        animate={{ top: ["10%", "90%", "10%"] }}
        transition={{ duration: 3, ease: "linear", repeat: Infinity }}
      />

      {/* DATA OVERLAY (HUD) */}
      <div className="absolute top-12 left-12 font-mono text-xs text-orange-500 space-y-2">
        <div>
          <span className="opacity-50">MODE:</span>{" "}
          <span className="font-bold text-white">{phase.toUpperCase()}</span>
        </div>
        <div>
          <span className="opacity-50">ROTATION:</span> {rotation.toFixed(0)}°
        </div>
        <div>
          <span className="opacity-50">COORDS:</span> {dataStream.coords}
        </div>

        {/* Progress Bar in HUD */}
        <div className="w-32 h-1 bg-stone-800 mt-2">
          <div
            className="h-full bg-orange-600 transition-all duration-300"
            style={{ width: `${(frame / 120) * 100}%` }}
          />
        </div>
      </div>

      {/* CORNER BRACKETS (Decorative) */}
      <div className="absolute top-8 left-8 w-4 h-4 border-t-2 border-l-2 border-white/50" />
      <div className="absolute top-8 right-8 w-4 h-4 border-t-2 border-r-2 border-white/50" />
      <div className="absolute bottom-8 left-8 w-4 h-4 border-b-2 border-l-2 border-white/50" />
      <div className="absolute bottom-8 right-8 w-4 h-4 border-b-2 border-r-2 border-white/50" />
    </div>
  );
};

export default MaterialScan;
