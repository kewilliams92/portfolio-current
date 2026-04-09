// ============================================================
//  NAV  —  top navigation bar
//  To add a nav link: add an object to navLinks below
//  To remove a link: delete its object
// ============================================================

import { motion } from "framer-motion";

const navLinks = [
  { label: "Stack",    href: "#stack"    },
  { label: "Projects", href: "#projects" },
  { label: "Contact",  href: "#contact"  },
];

export default function Nav() {
  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800 bg-zinc-950/90 backdrop-blur-sm"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
    >
      <div className="w-full max-w-none px-12 py-4 flex items-center justify-between">

        {/* Logo */}
        <a href="#hero" className="font-bold text-2xl tracking-tight text-white">
          KW<span className="text-sky-400">.</span>
        </a>

        {/* Nav links */}
        <ul className="flex gap-12 list-none">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm uppercase tracking-widest text-zinc-500 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

      </div>
    </motion.nav>
  );
}
