import { useEffect, useRef } from "react";

const TOTAL_FRAMES = 120;

export default function BuildOnScrollCanvas({ sectionRef, onFrameChange }) {
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);
  const lastFrameRef = useRef(-1);

  // Preload frames
  useEffect(() => {
    const images = [];
    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      // Ensure this path matches your public folder structure
      img.src = `/frames/ezgif-frame-${String(i).padStart(3, "0")}.webp`;
      images.push(img);
    }
    imagesRef.current = images;
  }, []);

  // Scroll → frame logic
  useEffect(() => {
    if (!sectionRef || !sectionRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const section = sectionRef.current;

    const onScroll = () => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const viewportHeight = window.innerHeight;

      const scrollable = sectionHeight - viewportHeight;
      if (scrollable <= 0) return;

      const scrolled = window.scrollY - sectionTop;
      const progress = Math.min(1, Math.max(0, scrolled / scrollable));

      const frameIndex = Math.floor(progress * (TOTAL_FRAMES - 1));
      onFrameChange(frameIndex);

      if (frameIndex === lastFrameRef.current) return;
      lastFrameRef.current = frameIndex;

      const img = imagesRef.current[frameIndex];
      if (!img) return;

      // BRUTALIST ADDITION:
      // We clear with a specific background if images have transparency,
      // or rely on the parent container's color.
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [sectionRef, onFrameChange]);

  return (
    <canvas
      ref={canvasRef}
      width={1600}
      height={1200}
      className="w-full h-full object-cover contrast-125" // Added CSS filters for gritty look
    />
  );
}

// Export phases separately so they can be consumed by the parent text descriptions
export const BUILD_PHASES = [
  {
    id: 0,
    start: 0,
    end: 30,
    label: "PHASE 01 // SITE CLEARANCE & EXCAVATION",
  },
  { id: 1, start: 31, end: 60, label: "PHASE 02 // STRUCTURAL GRID & PLINTH" },
  { id: 2, start: 61, end: 90, label: "PHASE 03 // VERTICAL ENCLOSURE" },
  { id: 3, start: 91, end: 120, label: "PHASE 04 // ROOF & FORM RESOLUTION" },
  { id: 4, start: 66, end: 80, label: "PHASE 05 // FINISHING & HANDOVER" },
];
