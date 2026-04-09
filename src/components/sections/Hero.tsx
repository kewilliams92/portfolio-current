// ============================================================
//  HERO SECTION
//  All text content lives in src/data/portfolio-data.ts
//  To hide the availability badge: set available: false in data
// ============================================================

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/data/portfolio-data";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen border-b border-zinc-800 pt-20"
    >
      <div className="mx-auto max-w-5xl px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">

          {/* ── Left column: existing content ── */}
          <motion.div
            className="grid gap-6 order-2 md:order-1"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >

            {/* ── Availability badge — remove this block to hide it ── */}
            {personalInfo.available && (
              <div className="flex items-center gap-2 w-fit">
                <Badge
                  variant="outline"
                  className="border-sky-500 text-sky-400 bg-sky-500/10 gap-2 px-3 py-1 text-xs tracking-wider"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-400" />
                  </span>
                  Open to opportunities
                </Badge>
              </div>
            )}

            {/* ── Name ── */}
            <h1 className="font-extrabold leading-none tracking-tighter text-white text-7xl md:text-9xl">
              {personalInfo.name.split(" ")[0]}
              <br />
              <span className="text-sky-400">
                {personalInfo.name.split(" ")[1]}
              </span>
            </h1>

            {/* ── Title ── */}
            <p className="font-mono text-zinc-500 text-base tracking-widest uppercase">
              // {personalInfo.title}
            </p>

            {/* ── Bio ── */}
            <p className="text-zinc-400 text-xl leading-relaxed max-w-xl">
              {personalInfo.bio}
            </p>

            {/* ── CTA buttons ── */}
            <div className="flex gap-3 flex-wrap mt-2">
              <Button
                asChild
                className="bg-sky-400 text-zinc-950 hover:bg-sky-300 font-semibold text-xs tracking-widest uppercase"
              >
                <a href="#projects">View Projects</a>
              </Button>

              <Button
                asChild
                variant="outline"
                className="border-zinc-700 text-zinc-400 hover:border-sky-400 hover:text-sky-400 text-xs tracking-widest uppercase"
              >
                <a href={`mailto:${personalInfo.email}`}>Get in Touch</a>
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
            </div>

            {/* ── Social links — add/remove <a> tags here ── */}
            <div className="flex gap-6 mt-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="text-xs uppercase tracking-widest text-zinc-500 hover:text-sky-400 transition-colors duration-200"
              >
                GitHub
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-xs uppercase tracking-widest text-zinc-500 hover:text-sky-400 transition-colors duration-200"
              >
                LinkedIn
              </a>
            </div>

          </motion.div>

          {/* ── Right column: profile photo ── */}
          {/* Drop your photo at public/profile.jpg to display it here */}
          <motion.div
            className="flex justify-center md:justify-end order-1 md:order-2"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          >
            <div className="ring-4 ring-sky-500/20 rounded-full">
              <div className="aspect-square w-64 md:w-80 rounded-full overflow-hidden border-4 border-sky-400/30 mx-auto">
                <img
                  src="/profile.jpg"
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
