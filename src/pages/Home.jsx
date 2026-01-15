/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import BuildOnScrollCanvas from "../components/BuildOnScrollCanvas";

// Note: Ensure you have a heavy font like 'Inter' or 'Oswald' loaded in your project
// for the full brutalist effect.

const Home = () => {
  const buildSectionRef = useRef(null);
  const [frame, setFrame] = useState(0);

  return (
    // BRUTALIST BASE: Stone background, high contrast text
    <div className="min-h-screen bg-stone-100 text-black pt-20 md:pt-32 font-sans selection:bg-orange-600 selection:text-white">
      {/* ============================== */}
      {/* SECTION 01 — THE STATEMENT     */}
      {/* ============================== */}
      <section className="relative px-6 md:px-12 mb-32">
        {/* Massive Top Border */}
        <div className="w-full h-4 bg-black mb-8" />

        <div className="max-w-screen-2xl mx-auto">
          {/* Header Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            {/* Left Column: The Marker */}
            <div className="col-span-1 md:col-span-2 hidden md:block">
              <div className="w-12 h-12 bg-black"></div>{" "}
              {/* Hard Square, no circles */}
              <span className="block mt-4 font-bold text-xs tracking-widest uppercase">
                Sec_01 / Manifest
              </span>
            </div>

            {/* Right Column: Content */}
            <div className="col-span-1 md:col-span-10">
              <motion.h2
                className="text-5xl sm:text-6xl md:text-9xl font-black uppercase leading-[0.95] md:leading-[0.85] tracking-tighter mb-12"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Structure <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-600/80 stroke-black text-stroke-2">
                  Response
                </span>
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t-4 border-black pt-8">
                <p className="text-xl md:text-2xl font-bold leading-tight">
                  NO DECORATION. <br />
                  ONLY FUNCTION.
                </p>
                <motion.p
                  className="text-lg font-medium text-stone-600"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  We reject the superficial. Architecture is not about style; it
                  is about the violent collision of site, climate, and material.
                  We build systems that endure.
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================== */}
      {/* SECTION 02 — THE CONSTRUCTION  */}
      {/* ============================== */}
      <section className="px-0 md:px-6 mb-32">
        <div
          ref={buildSectionRef}
          className="relative h-[180vh] md:h-[300vh] border-y-4 border-black bg-stone-200"
        >
          <div className="sticky top-0 h-screen flex flex-col md:flex-row">
            {/* Visual Canvas - Framed heavily */}
            <div className="relative h-[50vh] md:h-screen w-full md:w-2/3 border-b-4 md:border-b-0 md:border-r-4 border-black bg-white">
              {/* Optional: Add a 'gritty' overlay or noise texture here if desired */}
              <BuildOnScrollCanvas
                sectionRef={buildSectionRef}
                onFrameChange={setFrame}
              />
              {/* Technical readout overlay */}
              <div className="absolute bottom-0 left-0 bg-orange-600 text-white px-4 py-2 font-mono font-bold text-xl"></div>
            </div>

            {/* Text Sidebar - High Contrast */}
            <div className="flex items-center w-full md:w-1/3 bg-black text-white p-6 md:p-16">
              <div className="space-y-12">
                {[
                  { range: [0, 24], text: "01. GROUND BREAKING" },
                  { range: [24, 48], text: "02. STRUCTURAL GRID" },
                  { range: [48, 72], text: "03. ENCLOSURE" },
                  { range: [72, 96], text: "04. ROOF FORM" },
                  { range: [96, 999], text: "05. FINAL ASSEMBLY" },
                ].map((phase, idx) => (
                  <div
                    key={idx}
                    className={`transition-all duration-300 ${
                      frame >= phase.range[0] && frame < phase.range[1]
                        ? "opacity-100 translate-x-4"
                        : "opacity-20"
                    }`}
                  >
                    <h3 className="text-3xl md:text-5xl font-black uppercase leading-none">
                      {phase.text}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================== */}
      {/* SECTION 03 — PROCESS GRID      */}
      {/* ============================== */}
      <section className="px-6 md:px-12 mb-32">
        <div className="max-w-screen-2xl mx-auto">
          {/* Section Header */}
          <div className="flex items-end gap-6 mb-16 border-b-8 border-black pb-4">
            <h3 className="text-5xl md:text-8xl font-black uppercase">
              Protocol
            </h3>
            <span className="mb-2 font-bold bg-orange-600 text-white px-2">
              V.2.0
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "RAW ANALYSIS",
                desc: "Site data extraction.",
              },
              { step: "02", title: "MASSING", desc: "Volume & Void study." },
              { step: "03", title: "EXECUTION", desc: "Material assembly." },
            ].map((item, idx) => (
              <motion.div
                key={item.step}
                className="group border-b-4 md:border-b-0 md:border-r-4 border-black p-8 md:p-12 hover:bg-black hover:text-white transition-colors duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <span className="block text-6xl font-black opacity-20 mb-8 group-hover:text-orange-600 group-hover:opacity-100 transition-all">
                  {item.step}
                </span>
                <h4 className="text-3xl font-bold uppercase mb-4">
                  {item.title}
                </h4>
                <p className="font-medium opacity-60 group-hover:opacity-100">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
          {/* Bottom border to close the grid */}
          <div className="w-full h-4 bg-black" />
        </div>
      </section>

      {/* ================================== */}
      {/* SECTION 04 — CTA (HEAVY BLOCK)     */}
      {/* ================================== */}
      <section className="bg-orange-600 py-32 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl md:text-8xl font-black uppercase text-white mb-12">
            Archive Access
          </h2>
          <motion.a
            href="/projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="block w-full md:inline-block px-8 md:px-12 py-8 md:py-6 bg-white text-black text-xl md:text-2xl font-black uppercase border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[8px] hover:translate-y-[8px] transition-all"
          >
            View All Works
          </motion.a>
        </div>
      </section>
    </div>
  );
};

export default Home;
