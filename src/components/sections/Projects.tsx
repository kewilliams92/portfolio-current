// ============================================================
//  PROJECTS SECTION
//  All project data lives in src/data/portfolio-data.ts
//  To add/remove projects, edit that file.
// ============================================================

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { projects } from "@/data/portfolio-data";

export default function Projects() {
  return (
    <section id="projects" className="border-b border-zinc-800 py-10">
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
            Projects
          </span>
          <Separator className="flex-1 bg-zinc-800" />
        </motion.div>

        {/* Project cards grid */}
        <div className="grid gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={{
                hidden:  { opacity: 0, y: 60 },
                visible: { opacity: 1, y: 0,   transition: { duration: 0.5, ease: "easeOut", delay: index * 0.15 } },
                exit:    { opacity: 0, y: -40,  transition: { duration: 0.25, ease: "easeOut" } },
              }}
              initial="hidden"
              whileInView="visible"
              exit="exit"
              viewport={{ once: false, amount: 0.05 }}
            >
              <Card
                className={`bg-zinc-900 border hover:border-sky-500/50 transition-colors duration-300 ${
                  project.featured
                    ? "border-sky-500/30"
                    : "border-zinc-800"
                }`}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-4 flex-wrap">

                    {/* Project name + featured badge */}
                    <div className="flex items-center gap-3">
                      <CardTitle className="text-white text-2xl font-bold tracking-tight">
                        {project.name}
                      </CardTitle>
                      {project.featured && (
                        <Badge className="bg-sky-500/10 text-sky-400 border border-sky-500/30 text-xs">
                          Featured
                        </Badge>
                      )}
                    </div>

                    {/* Action buttons */}
                    <div className="flex gap-2">
                      {project.liveUrl && (
                        <Button
                          asChild
                          size="sm"
                          variant="outline"
                          className="border-sky-500/40 text-sky-400 hover:bg-sky-500/10 text-xs tracking-wider h-8"
                        >
                          <a href={project.liveUrl} target="_blank" rel="noreferrer">
                            Live Demo ↗
                          </a>
                        </Button>
                      )}
                      {project.repoUrl && (
                        <Button
                          asChild
                          size="sm"
                          variant="outline"
                          className="border-zinc-700 text-zinc-400 hover:border-zinc-500 text-xs tracking-wider h-8"
                        >
                          <a href={project.repoUrl} target="_blank" rel="noreferrer">
                            GitHub ↗
                          </a>
                        </Button>
                      )}
                    </div>

                  </div>
                </CardHeader>

                <CardContent className="grid gap-5">

                  {/* Description */}
                  <p className="text-zinc-400 text-base leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <ul className="grid gap-2">
                    {project.highlights.map((point, i) => (
                      <li
                        key={i}
                        className="text-sm text-zinc-500 leading-relaxed pl-4 relative"
                      >
                        <span className="absolute left-0 text-sky-400">▸</span>
                        {point}
                      </li>
                    ))}
                  </ul>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        className="bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-normal"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
