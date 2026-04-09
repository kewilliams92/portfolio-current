// ============================================================
//  CONTACT SECTION
//  All contact info lives in src/data/portfolio-data.ts
// ============================================================

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { personalInfo } from "@/data/portfolio-data";

export default function Contact() {
  return (
    <section id="contact" className="py-10">
      <div className="mx-auto max-w-5xl px-6 grid gap-10">

        {/* Section label */}
        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <span className="font-mono text-xs uppercase tracking-widest text-sky-400">
            Contact
          </span>
          <Separator className="flex-1 bg-zinc-800" />
        </motion.div>

        {/* Content — center-aligned */}
        <div className="text-center grid gap-6 py-8">

          <motion.h2
            className="font-extrabold text-6xl md:text-7xl text-white tracking-tighter leading-none"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Let's build<br />
            <span className="text-sky-400">something.</span>
          </motion.h2>

          <motion.p
            className="text-zinc-500 text-base"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          >
            Open to fullstack developer roles. Drop me a line.
          </motion.p>

          {/* Email */}
          <motion.a
            href={`mailto:${personalInfo.email}`}
            className="text-sky-400 font-bold text-lg hover:opacity-75 transition-opacity"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          >
            {personalInfo.email}
          </motion.a>

          {/* Social buttons — add/remove <Button> blocks here */}
          <motion.div
            className="flex gap-3 justify-center flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
          >
            <Button
              asChild
              variant="outline"
              className="border-zinc-700 text-zinc-400 hover:border-sky-400 hover:text-sky-400 text-xs tracking-widest uppercase"
            >
              <a href={personalInfo.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              className="border-zinc-700 text-zinc-400 hover:border-sky-400 hover:text-sky-400 text-xs tracking-widest uppercase"
            >
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              className="border-zinc-700 text-zinc-400 hover:border-sky-400 hover:text-sky-400 text-xs tracking-widest uppercase"
            >
              <a href={personalInfo.resume} target="_blank" rel="noreferrer">
                View Resume ↗
              </a>
            </Button>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
