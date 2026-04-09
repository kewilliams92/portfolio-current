// ============================================================
//  APP.TSX  —  assembles all sections
//
//  To add a section:    1. Create it in src/components/sections/
//                       2. Import it here
//                       3. Drop it inside <main> below
//
//  To remove a section: Delete its import and <SectionName /> tag
//
//  Section order here = display order on the page
// ============================================================

import { AnimatePresence, motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import Nav from "@/components/sections/Nav";
import Hero from "@/components/sections/Hero";
import Stack from "@/components/sections/Stack";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

export default function App() {
  return (
    <AnimatePresence>
      <div className="min-h-screen bg-zinc-950 text-zinc-100">
        {/* ── Top navigation ── */}
        <Nav />

        {/* ── Page sections — reorder, add, or remove here ── */}
        <main>
          <Hero />
          <Stack />
          <Projects />
          <Contact />
        </main>

        {/* ── Footer ── */}
        <Separator className="bg-zinc-800" />
        <motion.footer
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="py-6 text-center text-xs text-zinc-500 font-mono"
        >
          © 2026 Kevin Williams. Built with React + TypeScript + TailwindCSS +
          Shadcn + Framer-Motion.
        </motion.footer>
      </div>
    </AnimatePresence>
  );
}
