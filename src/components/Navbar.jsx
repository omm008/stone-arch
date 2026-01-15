import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const location = useLocation();
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  // Hide nav on scroll down, show on scroll up
  useEffect(() => {
    let lastScroll = window.scrollY;
    const handleScroll = () => {
      const current = window.scrollY;
      setVisible(lastScroll > current || current < 40);
      lastScroll = current;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <>
      {/* ================= NAV BAR ================= */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 bg-white border-b-4 border-black"
        animate={{ y: visible ? 0 : -80 }}
        transition={{ duration: 0.25, ease: "linear" }}
      >
        <div className="px-4 md:px-12">
          <div className="flex items-center justify-between h-16 md:h-24">
            {/* LOGO */}
            <Link
              to="/"
              className="font-black text-2xl md:text-3xl uppercase tracking-tighter"
            >
              Stone<span className="text-orange-600">.Arch</span>
            </Link>

            {/* DESKTOP NAV */}
            <div className="hidden md:flex items-center gap-2">
              {navItems.map((item) => (
                <Link key={item.path} to={item.path}>
                  <div
                    className={`px-6 py-3 font-bold uppercase border-2 transition-all
                      ${
                        isActive(item.path)
                          ? "bg-black text-white border-black"
                          : "border-transparent hover:bg-orange-600 hover:text-white hover:border-black"
                      }`}
                  >
                    {item.name}
                  </div>
                </Link>
              ))}
            </div>

            {/* HAMBURGER */}
            <button
              className="md:hidden w-12 h-12 border-4 border-black flex items-center justify-center"
              onClick={() => setMenuOpen(true)}
              aria-label="Open Menu"
            >
              <div className="space-y-1">
                <div className="w-6 h-[3px] bg-black"></div>
                <div className="w-6 h-[3px] bg-black"></div>
                <div className="w-6 h-[3px] bg-black"></div>
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[60] bg-black text-white"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            {/* TOP BAR */}
            <div className="flex items-center justify-between p-4 border-b-4 border-white">
              <span className="font-black text-xl uppercase">Navigation</span>
              <button
                onClick={() => setMenuOpen(false)}
                className="w-12 h-12 border-4 border-white flex items-center justify-center text-xl font-black"
              >
                ✕
              </button>
            </div>

            {/* MENU ITEMS */}
            <div className="flex flex-col">
              {navItems.map((item, i) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                >
                  <motion.div
                    initial={{ x: -40, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.08 }}
                    className={`px-6 py-6 border-b-4 border-white text-4xl font-black uppercase
                      ${
                        isActive(item.path)
                          ? "bg-orange-600 text-black"
                          : "hover:bg-white hover:text-black"
                      }`}
                  >
                    {item.name}
                  </motion.div>
                </Link>
              ))}
            </div>

            {/* FOOTER STRIP */}
            <div className="absolute bottom-0 left-0 right-0 bg-orange-600 text-black p-4 font-mono text-xs uppercase tracking-widest">
              /// CONSTRUCTION MODE ACTIVE ///
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
