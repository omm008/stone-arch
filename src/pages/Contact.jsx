import { motion } from "framer-motion";
import { useState } from "react";

/*
  BRUTALIST CONTACT PAGE
  - Theme: "Work Order" / "Transmission"
  - Inputs: Solid blocks with thick borders
  - Submit Button: Massive interaction point
*/

const Contact = () => {
  return (
    <div className="min-h-screen bg-stone-100 pt-24 md:pt-32 pb-20 text-black font-sans selection:bg-orange-600 selection:text-white">
      {/* HEADER SECTION */}
      <section className="px-6 md:px-12 mb-20">
        <div className="max-w-screen-2xl mx-auto">
          {/* Top Divider */}
          <div className="w-full h-4 bg-black mb-8" />

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-9xl font-black uppercase leading-[0.8] tracking-tighter mb-8">
              Inquiry <br />
              <span className="text-orange-600">Protocol</span>
            </h1>

            <div className="border-l-4 border-black pl-6 py-2 max-w-xl">
              <p className="font-bold text-xl leading-tight">
                INITIATE PROJECT SEQUENCE.
                <br />
                RESPONSE LATENCY: &lt; 48 HOURS.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MAIN GRID: FORM + INFO */}
      <section className="px-6 md:px-12">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
          {/* LEFT: THE FORM */}
          <BrutalistForm />

          {/* RIGHT: CONTACT DATA */}
          <div className="space-y-12">
            {/* Info Block 01 */}
            <div className="border-t-4 border-black pt-6">
              <span className="block font-black text-3xl uppercase mb-6">
                / Coordinates
              </span>
              <p className="font-mono font-bold text-lg mb-4">
                STUDIO HEADQUARTERS
                <br />
                SECTOR 7, IND AREA
                <br />
                JABALPUR, 482001
              </p>
              <a
                href="#"
                className="inline-block bg-black text-white px-4 py-1 font-mono hover:bg-orange-600 transition-colors"
              >
                GET_DIRECTIONS -
              </a>
            </div>

            {/* Info Block 02 */}
            <div className="border-t-4 border-black pt-6">
              <span className="block font-black text-3xl uppercase mb-6">
                / Direct Line
              </span>
              <div className="space-y-4 font-mono font-bold text-lg">
                <div className="flex justify-between border-b-2 border-stone-300 pb-2">
                  <span>NEW BIZ</span>
                  <a
                    href="mailto:build@aakriti.arch"
                    className="hover:text-orange-600"
                  >
                    build@aakriti.arch
                  </a>
                </div>
                <div className="flex justify-between border-b-2 border-stone-300 pb-2">
                  <span>PRESS</span>
                  <a
                    href="mailto:press@aakriti.arch"
                    className="hover:text-orange-600"
                  >
                    press@aakriti.arch
                  </a>
                </div>
                <div className="flex justify-between border-b-2 border-stone-300 pb-2">
                  <span>VOICE</span>
                  <a href="tel:+919876543210" className="hover:text-orange-600">
                    +91 987 654 3210
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

/* INTERNAL COMPONENT: BRUTALIST FORM */
const BrutalistForm = () => {
  return (
    <motion.form
      className="space-y-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="space-y-1">
        <label className="block font-black uppercase text-sm tracking-widest">
          Identification Name
        </label>
        <input
          type="text"
          placeholder="ENTER FULL NAME"
          className="w-full bg-white border-4 border-black p-4 font-mono font-bold placeholder:text-stone-400 focus:outline-none focus:bg-orange-50 focus:border-orange-600 transition-all"
        />
      </div>

      <div className="space-y-1">
        <label className="block font-black uppercase text-sm tracking-widest">
          Return Address (Email)
        </label>
        <input
          type="email"
          placeholder="USER@DOMAIN.COM"
          className="w-full bg-white border-4 border-black p-4 font-mono font-bold placeholder:text-stone-400 focus:outline-none focus:bg-orange-50 focus:border-orange-600 transition-all"
        />
      </div>

      <div className="space-y-1">
        <label className="block font-black uppercase text-sm tracking-widest">
          Project Parameters
        </label>
        <textarea
          rows="6"
          placeholder="DESCRIBE SCOPE, SCALE, AND TIMELINE..."
          className="w-full bg-white border-4 border-black p-4 font-mono font-bold placeholder:text-stone-400 focus:outline-none focus:bg-orange-50 focus:border-orange-600 transition-all resize-none"
        />
      </div>

      <motion.button
        whileHover={{
          scale: 1.02,
          x: 5,
          y: 5,
          boxShadow: "-5px -5px 0px 0px rgba(0,0,0,1)",
        }}
        whileTap={{ scale: 0.98 }}
        className="w-full bg-orange-600 text-white font-black text-2xl uppercase py-6 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all"
      >
        Submit Transmission
      </motion.button>
    </motion.form>
  );
};

export default Contact;
