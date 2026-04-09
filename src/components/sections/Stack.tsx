// ============================================================
//  TECH STACK SECTION
//  All skills live in src/data/portfolio-data.ts
//  Skills are grouped by category automatically
// ============================================================

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { skills } from "@/data/portfolio-data";

// Derive categories in insertion order (no lodash needed)
const categories = Array.from(new Set(skills.map((s) => s.category)));

export default function Stack() {
  return (
    <section id="stack" className="border-b border-zinc-800 py-10">
      <div className="mx-auto max-w-5xl px-6 grid gap-10">

        {/* Section label */}
        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <span className="font-mono text-xs uppercase tracking-widest text-sky-400">
            Tech Stack
          </span>
          <Separator className="flex-1 bg-zinc-800" />
        </motion.div>

        {/* Skill groups */}
        <div className="grid gap-6">
          {categories.map((cat, index) => (
            <motion.div
              key={cat}
              className="grid gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
            >

              {/* Category label */}
              <p className="text-sm text-zinc-600 uppercase tracking-widest font-mono">
                {cat}
              </p>

              {/* Skill chips */}
              <div className="flex flex-wrap gap-2">
                {skills
                  .filter((s) => s.category === cat)
                  .map((skill, chipIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ scale: 0.9, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: false, amount: 0.2 }}
                      transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.1 + chipIndex * 0.04 }}
                    >
                      <Badge
                        variant="outline"
                        className="border-zinc-700 text-zinc-400 bg-zinc-900 hover:border-sky-400 hover:text-sky-400 hover:bg-sky-500/10 transition-all duration-200 cursor-default text-sm px-3 py-1"
                      >
                        {skill.name}
                      </Badge>
                    </motion.div>
                  ))}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
