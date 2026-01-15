import { motion } from "framer-motion";

/*
  BRUTALIST ABOUT PAGE
  - Theme: "The Manifesto"
  - Structure: Heavy horizontal dividers, Dictionary definitions
  - Visuals: No images, pure typography
*/

const About = () => {
  return (
    <div className="min-h-screen bg-stone-100 pt-24 md:pt-32 pb-20 text-black font-sans selection:bg-orange-600 selection:text-white">
      {/* HEADER */}
      <section className="px-6 md:px-12 mb-24">
        <div className="max-w-screen-2xl mx-auto">
          <div className="w-full h-4 bg-black mb-8" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-9xl font-black uppercase leading-[0.8] tracking-tighter">
              Studio <br />
              <span className="stroke-text text-white text-stroke-3 text-stroke-black">
                Profile
              </span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* SECTION 01: THE MANIFESTO */}
      <section className="px-6 md:px-12 mb-32">
        <div className="max-w-screen-2xl mx-auto">
          {/* Heavy Divider */}
          <div className="border-t-4 border-black pt-2 flex justify-between items-start mb-12">
            <span className="font-black text-xl bg-black text-white px-2">
              01 // MANIFESTO
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-8">
              <motion.p
                className="text-3xl md:text-5xl font-bold uppercase leading-tight"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                We do not decorate. We build. <br />
                <span className="text-stone-400">
                  Architecture is a violent act of construction—stripping away
                  the inessential to reveal the structural truth.
                </span>
              </motion.p>
            </div>
            <div className="md:col-span-4 border-l-4 border-black pl-8 flex flex-col justify-end">
              <p className="font-mono font-bold text-sm">
                Our practice rejects ornamentation in favor of material honesty.
                Concrete, steel, and light are our only mediums.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 02: METHODOLOGY (Dictionary Style) */}
      <section className="px-6 md:px-12 mb-32">
        <div className="max-w-screen-2xl mx-auto">
          <div className="border-t-4 border-black pt-2 mb-12">
            <span className="font-black text-xl bg-black text-white px-2">
              02 // METHODOLOGY
            </span>
          </div>

          <div className="space-y-0">
            {/* Item 1 */}
            <MethodItem
              term="Reduction"
              def="The process of removing all non-structural elements until only the necessary form remains."
              num="01"
            />
            {/* Item 2 */}
            <MethodItem
              term="Materiality"
              def="The honest expression of construction materials. Concrete looks like concrete. Steel looks like steel."
              num="02"
            />
            {/* Item 3 */}
            <MethodItem
              term="Permanence"
              def="Designing structures that resist the erosion of trends and time. Architecture for centuries, not seasons."
              num="03"
            />
          </div>
        </div>
      </section>

      {/* SECTION 03: DATA SHEET */}
      <section className="px-6 md:px-12">
        <div className="max-w-screen-2xl mx-auto bg-black text-white p-8 md:p-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            <DataPoint label="ESTABLISHED" value="2020" />
            <DataPoint label="OPERATIVES" value="12" />
            <DataPoint label="COMPLETED" value="45+" />
            <DataPoint label="BASE" value="GLOBAL" />
          </div>

          <div className="mt-16 pt-8 border-t border-white/20 flex justify-between items-end">
            <span className="font-mono text-xs uppercase text-stone-500">
              /// END OF FILE
            </span>
            <div className="w-16 h-16 bg-orange-600"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Sub-component for Methodology List
const MethodItem = ({ term, def, num }) => (
  <motion.div
    className="group border-b-4 border-black py-8 flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12 hover:bg-white transition-colors"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
    <span className="font-mono text-orange-600 font-bold">({num})</span>
    <h3 className="text-4xl md:text-6xl font-black uppercase flex-1 group-hover:translate-x-4 transition-transform duration-300">
      {term}
    </h3>
    <p className="md:w-1/3 font-bold text-lg leading-snug">{def}</p>
  </motion.div>
);

// Sub-component for Data Grid
const DataPoint = ({ label, value }) => (
  <div className="flex flex-col">
    <span className="font-mono text-orange-600 text-xs mb-2 block">
      {label}
    </span>
    <span className="font-black text-4xl md:text-6xl">{value}</span>
  </div>
);

export default About;
