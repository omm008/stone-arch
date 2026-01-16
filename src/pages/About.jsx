import { motion } from "framer-motion";

/*
  ABOUT PAGE — SIMPLE & HONEST
  - No manifesto language
  - Clear positioning
  - Easy to read
*/

const About = () => {
  return (
    <div className="min-h-screen bg-stone-100 pt-24 md:pt-32 pb-20 text-black font-sans selection:bg-orange-600 selection:text-white">
      {/* HEADER */}
      <section className="px-6 md:px-12 mb-24">
        <div className="max-w-screen-2xl mx-auto">
          <div className="w-full h-4 bg-black mb-8" />

          <motion.h1
            className="text-6xl md:text-9xl font-black uppercase leading-[0.85] tracking-tighter"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            About <br />
            <span className="text-orange-600">Us</span>
          </motion.h1>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="px-6 md:px-12 mb-32">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-8">
            <p className="text-3xl md:text-5xl font-bold leading-tight">
              We design buildings that are practical, durable, and clear.
            </p>
          </div>
          <div className="md:col-span-4 border-l-4 border-black pl-8">
            <p className="font-bold text-lg">
              Our work focuses on solving real problems — site constraints,
              budgets, climate, and how people actually use spaces.
            </p>
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="px-6 md:px-12 mb-32">
        <div className="max-w-screen-2xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black uppercase mb-12 border-b-4 border-black pb-4">
            How we work
          </h2>

          <div className="space-y-8">
            <WorkItem
              title="Understand the site"
              desc="We study rules, climate, surroundings, and constraints before designing anything."
            />
            <WorkItem
              title="Plan clearly"
              desc="Layouts are simple, functional, and easy to build."
            />
            <WorkItem
              title="Support execution"
              desc="We help ensure the final building matches the design intent."
            />
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="px-6 md:px-12">
        <div className="max-w-screen-2xl mx-auto bg-black text-white p-8 md:p-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            <Stat label="Founded" value="2020" />
            <Stat label="Projects" value="45+" />
            <Stat label="Team" value="12" />
            <Stat label="Location" value="India" />
          </div>
        </div>
      </section>
    </div>
  );
};

const WorkItem = ({ title, desc }) => (
  <motion.div
    className="border-b-4 border-black py-8"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
    <h3 className="text-3xl md:text-4xl font-black mb-2">{title}</h3>
    <p className="text-stone-600 font-medium max-w-3xl">{desc}</p>
  </motion.div>
);

const Stat = ({ label, value }) => (
  <div>
    <span className="text-orange-600 text-xs uppercase block mb-2">
      {label}
    </span>
    <span className="text-4xl md:text-6xl font-black">{value}</span>
  </div>
);

export default About;
