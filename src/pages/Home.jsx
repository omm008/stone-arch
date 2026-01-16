/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import MaterialScan from "../components/MaterialScan";

const Home = () => {
  const buildSectionRef = useRef(null);
  const [frame, setFrame] = useState(0);

  // Sync scroll → frame (simple + stable)
  const handleScrollUpdate = () => {
    if (!buildSectionRef.current) return;

    const section = buildSectionRef.current;
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const viewportHeight = window.innerHeight;
    const scrollable = sectionHeight - viewportHeight;

    if (scrollable <= 0) return;

    const scrolled = window.scrollY - sectionTop;
    const progress = Math.min(1, Math.max(0, scrolled / scrollable));
    setFrame(Math.floor(progress * 120));
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollUpdate);
    return () => window.removeEventListener("scroll", handleScrollUpdate);
  }, []);

  return (
    <div className="min-h-screen bg-stone-100 text-black pt-20 md:pt-32 font-sans selection:bg-orange-600 selection:text-white">
      {/* ============================== */}
      {/* SECTION 01 — HERO / INTRO */}
      {/* ============================== */}
      <section className="relative px-6 md:px-12 mb-32">
        <div className="w-full h-4 bg-black mb-8" />

        <div className="max-w-screen-2xl mx-auto">
          <motion.h1
            className="text-5xl sm:text-6xl md:text-9xl font-black uppercase leading-[0.95] md:leading-[0.85] tracking-tighter mb-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            We design buildings <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-600/80">
              that make sense
            </span>
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t-4 border-black pt-8">
            <p className="text-xl md:text-2xl font-bold leading-tight">
              Clear planning. <br />
              Honest materials. <br />
              No unnecessary drama.
            </p>

            <motion.p
              className="text-lg font-medium text-stone-600"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              We help people turn unclear ideas into well-planned spaces. Our
              focus is simple: understand the site, solve the problems, and
              build something that lasts.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ============================== */}
      {/* SECTION 02 — HOW A PROJECT COMES TO LIFE */}
      {/* ============================== */}
      <section className="px-0 md:px-6 mb-32">
        <div
          ref={buildSectionRef}
          className="relative bg-stone-900 h-[180dvh] md:h-[300vh] border-y-4 border-black"
        >
          <div className="sticky top-0 h-[100dvh] grid grid-cols-1 md:grid-cols-3">
            {/* VISUAL */}
            <div className="relative h-[40dvh] md:col-span-2 md:h-screen border-b-4 md:border-b-0 md:border-r-4 border-black overflow-hidden">
              <MaterialScan frame={frame} />
            </div>

            {/* TEXT */}
            <div className="flex items-center h-[60dvh] md:h-screen bg-black text-white p-6">
              <div className="space-y-10">
                {[
                  {
                    range: [0, 24],
                    text: "Understanding the land and constraints",
                  },
                  { range: [24, 48], text: "Planning structure and movement" },
                  {
                    range: [48, 72],
                    text: "Defining walls, openings, and flow",
                  },
                  { range: [72, 96], text: "Shaping the roof and form" },
                  { range: [96, 120], text: "Final details and usability" },
                ].map((phase, idx) => (
                  <div
                    key={idx}
                    className={`transition-all duration-300 ${
                      frame >= phase.range[0] && frame < phase.range[1]
                        ? "opacity-100 translate-x-4 text-orange-500"
                        : "opacity-25"
                    }`}
                  >
                    <h3 className="text-2xl md:text-4xl font-bold leading-tight">
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
      {/* SECTION 03 — WHAT WE ACTUALLY DO */}
      {/* ============================== */}
      <section className="px-6 md:px-12 mb-32">
        <div className="max-w-screen-2xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black uppercase mb-16 border-b-8 border-black pb-4">
            What we help you with
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3">
            {[
              {
                title: "Site & feasibility",
                desc: "Understanding rules, climate, access, and limitations before design begins.",
              },
              {
                title: "Design & planning",
                desc: "Clear layouts, practical spaces, and designs that respect budget and use.",
              },
              {
                title: "Execution support",
                desc: "Helping ensure what gets built matches what was planned.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="border-b-4 md:border-b-0 md:border-r-4 border-black p-8 md:p-12"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h4 className="text-2xl font-bold mb-4">{item.title}</h4>
                <p className="text-stone-600 font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="w-full h-4 bg-black" />
        </div>
      </section>

      {/* ============================== */}
      {/* SECTION 04 — CTA */}
      {/* ============================== */}
      <section className="bg-orange-600 py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black uppercase text-white mb-8">
            Have a project in mind?
          </h2>

          <p className="text-white text-lg mb-10 max-w-2xl mx-auto">
            Whether it’s a house, renovation, or early-stage idea, we can help
            you think it through clearly.
          </p>

          <motion.a
            href="/projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-10 py-6 bg-white text-black text-xl font-bold border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px] transition-all"
          >
            View recent work
          </motion.a>
        </div>
      </section>
    </div>
  );
};

export default Home;
