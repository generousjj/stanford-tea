"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { projectRows, type ProjectRow } from "@/data/projects";
import type { Project } from "@/lib/types";
import { asset } from "@/lib/asset";

const ACCENTS = ["#F05A47", "#F4C95D", "#69C5D8", "#8C1515", "#38233D", "#F05A47"];

function ProjectDetail({
  project,
  accent,
  indexLabel,
}: {
  project: Project;
  accent: string;
  indexLabel: string;
}) {
  return (
    <article className="overflow-hidden rounded-3xl border-4 border-[#1C1917] bg-[#FFF4DF]">
      <div className="flex items-center gap-4 border-b-4 border-[#1C1917] p-5">
        <span
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full font-archivo-black text-lg text-[#FFF4DF]"
          style={{ backgroundColor: accent }}
          aria-hidden
        >
          {indexLabel}
        </span>
        <div className="min-w-0 flex-1">
          <p className="font-work-sans text-[11px] font-bold uppercase tracking-widest text-[#8C1515]">
            {project.category}
          </p>
          <h4 className="font-archivo-black text-xl uppercase leading-tight text-[#1C1917]">
            {project.title}
          </h4>
        </div>
      </div>

      <div className="px-5 pb-6 pt-4">
        {project.image ? (
          <div className="mb-4 aspect-[16/10] w-full overflow-hidden rounded-xl border-4 border-[#1C1917] bg-[#FFF4DF]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={asset(project.image)}
              alt={project.title}
              loading="lazy"
              className="h-full w-full"
              style={{
                objectFit: project.imageFit ?? "cover",
                objectPosition: project.imagePosition ?? "center",
              }}
            />
          </div>
        ) : (
          <div
            className="mb-4 flex aspect-[16/10] w-full items-center justify-center overflow-hidden rounded-xl border-4 border-[#1C1917]"
            style={{
              background: `repeating-linear-gradient(45deg, ${accent} 0 12px, #1C1917 12px 24px)`,
            }}
          >
            <span className="rounded-full bg-[#FFF4DF] px-4 py-1.5 font-work-sans text-xs font-bold uppercase tracking-widest text-[#1C1917]">
              In development
            </span>
          </div>
        )}
        <p className="text-[15px] leading-relaxed text-[#1C1917]">
          {project.description}
        </p>
        <div className="mt-4">
          <p className="font-work-sans text-[11px] font-bold uppercase tracking-widest text-[#8C1515]">
            Disciplines · {project.year}
          </p>
          <ul className="mt-2 flex flex-wrap gap-2">
            {project.disciplines.map((d) => (
              <li
                key={d}
                className="rounded-full border-2 border-[#1C1917] px-3 py-1 font-work-sans text-xs font-bold text-[#1C1917]"
              >
                {d}
              </li>
            ))}
          </ul>
        </div>
        {project.placeholder && (
          <p className="mt-4 font-work-sans text-xs font-semibold uppercase tracking-wide text-[#1C1917]/50">
            Example project — placeholder content
          </p>
        )}
      </div>
    </article>
  );
}

function ProjectRowBlock({
  row,
  rowIndex,
  open,
  onToggle,
  reduce,
  startingNumber,
}: {
  row: ProjectRow;
  rowIndex: number;
  open: boolean;
  onToggle: () => void;
  reduce: boolean | null;
  startingNumber: number;
}) {
  const panelId = `poster-row-${row.id}`;
  const accent = ACCENTS[rowIndex % ACCENTS.length];

  return (
    <div className="overflow-hidden rounded-3xl border-4 border-[#1C1917] bg-[#FFF4DF]">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={onToggle}
        className="flex w-full items-center gap-4 p-5 text-left transition hover:bg-[#F4C95D]/35 focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[#8C1515]"
      >
        <span
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full font-archivo-black text-lg text-[#FFF4DF]"
          style={{ backgroundColor: accent }}
          aria-hidden
        >
          {String(rowIndex + 1).padStart(2, "0")}
        </span>
        <span className="min-w-0 flex-1">
          <span className="block font-work-sans text-[11px] font-bold uppercase tracking-widest text-[#8C1515]">
            {row.blurb}
          </span>
          <span className="font-archivo-black block text-2xl uppercase leading-tight text-[#1C1917] sm:text-3xl">
            {row.title}
          </span>
          <span className="mt-1 block font-work-sans text-sm font-semibold text-[#1C1917]/60">
            {row.projects.map((p) => p.title.split(":")[0]).join(" · ")}
          </span>
        </span>
        <span
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-[#1C1917] bg-[#FFF4DF] text-[#1C1917]"
          aria-hidden
        >
          {open ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            key="row-content"
            initial={reduce ? undefined : { height: 0, opacity: 0 }}
            animate={reduce ? undefined : { height: "auto", opacity: 1 }}
            exit={reduce ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="border-t-4 border-[#1C1917] bg-[#38233D]/5 p-4 sm:p-5">
              <div className="grid items-start gap-4 md:grid-cols-2">
                {row.projects.map((p, i) => (
                  <ProjectDetail
                    key={p.title}
                    project={p}
                    accent={ACCENTS[(startingNumber + i - 1) % ACCENTS.length]}
                    indexLabel={String(startingNumber + i).padStart(2, "0")}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function PosterProjects() {
  const [openRow, setOpenRow] = useState<string | null>(null);
  const reduce = useReducedMotion();

  return (
    <div className="flex flex-col gap-4">
      {projectRows.map((row, rowIndex) => {
        const startingNumber =
          projectRows
            .slice(0, rowIndex)
            .reduce((sum, r) => sum + r.projects.length, 0) + 1;
        return (
          <ProjectRowBlock
            key={row.id}
            row={row}
            rowIndex={rowIndex}
            open={openRow === row.id}
            onToggle={() =>
              setOpenRow((current) => (current === row.id ? null : row.id))
            }
            reduce={reduce}
            startingNumber={startingNumber}
          />
        );
      })}
    </div>
  );
}
