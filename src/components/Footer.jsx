import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-0 bg-black text-white border-t-8 border-orange-600">
      {/* TOP BAR: Hazard / Technical Strip */}
      <div className="w-full h-8 bg-orange-600 flex items-center overflow-hidden">
        <div className="flex gap-4 animate-marquee whitespace-nowrap">
          {/* Repeating pattern representing caution tape */}
          {Array.from({ length: 20 }).map((_, i) => (
            <span
              key={i}
              className="font-mono text-xs font-bold text-black uppercase tracking-widest"
            >
              /// END OF SECTION /// ARCHIVE LOCK ///
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4">
          {/* COL 1: MASSIVE BRANDING */}
          <div className="p-8 md:p-12 md:border-r border-white/20 col-span-1 md:col-span-2">
            <motion.h3
              className="font-sans font-black text-5xl sm:text-6xl md:text-8xl uppercase leading-none tracking-tighter"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              stone
              <br />
              <span className="text-orange-600">Studio.</span>
            </motion.h3>
            <p className="mt-8 font-bold text-xl max-w-md leading-tight">
              Designing structures that withstand the test of time, entropy, and
              critique.
            </p>
          </div>

          {/* COL 2: SITEMAP (Technical List) */}
          <div className="p-8 md:p-12 md:border-r border-white/20 flex flex-col justify-between">
            <div>
              <span className="block text-orange-600 font-mono text-xs mb-6">
                DIRECTORY
              </span>
              <ul className="space-y-4 font-bold text-2xl uppercase">
                {["Home", "Projects", "Studio", "Contact"].map((link) => (
                  <li key={link}>
                    <a
                      href={`/${link.toLowerCase()}`}
                      className="hover:text-orange-600 hover:pl-4 transition-all duration-200 block"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* COL 3: DATA BLOCK */}
          <div className="p-8 md:p-12 flex flex-col justify-between">
            <div>
              <span className="block text-orange-600 font-mono text-xs mb-6">
                COORDINATES
              </span>
              <p className="font-mono text-sm leading-relaxed mb-8">
                12.9716° N, 77.5946° E<br />
                Jabalpur, MP
                <br />
                India, 482001
              </p>
              <a
                href="mailto:hello@stone.arch"
                className="font-bold text-lg underline decoration-orange-600 decoration-2 underline-offset-4 hover:bg-white hover:text-black transition-colors"
              >
                hello@stone.arch
              </a>
            </div>

            <div className="mt-12 md:mt-0">
              <div className="w-12 h-12 bg-white text-black flex items-center justify-center font-black text-xl">
                A
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/20 p-4 md:px-12 flex flex-col md:flex-row justify-between items-center text-xs font-mono text-neutral-500 uppercase">
          <p>© {currentYear} stone Systems. No Rights Reserved.</p>
          <p>
            Dev Mode: <span className="text-orange-600">Active</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
