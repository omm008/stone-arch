import { motion } from "framer-motion";

/*
  CONTACT PAGE — SIMPLE & DIRECT
  - Same brutalist layout
  - Human language
  - Clear expectation
*/

const Contact = () => {
  return (
    <div className="min-h-screen bg-stone-100 pt-24 md:pt-32 pb-20 text-black font-sans selection:bg-orange-600 selection:text-white">
      {/* HEADER */}
      <section className="px-6 md:px-12 mb-20">
        <div className="max-w-screen-2xl mx-auto">
          <div className="w-full h-4 bg-black mb-8" />

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-6xl md:text-9xl font-black uppercase leading-[0.85] tracking-tighter mb-8">
              Let’s <br />
              <span className="text-orange-600">Talk</span>
            </h1>

            <p className="font-bold text-xl max-w-xl">
              Tell us about your project. We usually reply within 1–2 working
              days.
            </p>
          </motion.div>
        </div>
      </section>

      {/* MAIN GRID */}
      <section className="px-6 md:px-12">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
          {/* FORM */}
          <SimpleForm />

          {/* CONTACT INFO */}
          <div className="space-y-12">
            <div className="border-t-4 border-black pt-6">
              <h3 className="font-black text-2xl uppercase mb-4">Office</h3>
              <p className="font-bold text-lg leading-relaxed">
                Sector 7, Industrial Area <br />
                Jabalpur, 482001
              </p>
            </div>

            <div className="border-t-4 border-black pt-6">
              <h3 className="font-black text-2xl uppercase mb-4">Contact</h3>
              <div className="space-y-3 font-bold text-lg">
                <p>
                  Email:{" "}
                  <a
                    href="mailto:build@stone.arch"
                    className="hover:text-orange-600"
                  >
                    build@stone.arch
                  </a>
                </p>
                <p>
                  Phone:{" "}
                  <a href="tel:+919876543210" className="hover:text-orange-600">
                    +91 98765 43210
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

/* FORM COMPONENT */
const SimpleForm = () => {
  return (
    <motion.form
      className="space-y-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div>
        <label className="block font-black uppercase text-sm mb-2">Name</label>
        <input
          type="text"
          placeholder="Your full name"
          className="w-full border-4 border-black p-4 font-bold focus:outline-none focus:border-orange-600"
        />
      </div>

      <div>
        <label className="block font-black uppercase text-sm mb-2">Email</label>
        <input
          type="email"
          placeholder="you@email.com"
          className="w-full border-4 border-black p-4 font-bold focus:outline-none focus:border-orange-600"
        />
      </div>

      <div>
        <label className="block font-black uppercase text-sm mb-2">
          Project details
        </label>
        <textarea
          rows="6"
          placeholder="What are you planning to build?"
          className="w-full border-4 border-black p-4 font-bold resize-none focus:outline-none focus:border-orange-600"
        />
      </div>

      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="w-full bg-orange-600 text-white font-black text-xl uppercase py-6 border-4 border-black"
      >
        Send message
      </motion.button>
    </motion.form>
  );
};

export default Contact;
