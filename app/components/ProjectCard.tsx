import Link from "next/link";
import type { Project } from "@/app/lib/projects";
import { Tag } from "@/app/components/Tag";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      className="
        group rounded-3xl border bg-neutral-50 p-6 shadow-sm transition
        border-neutral-200 hover:-translate-y-0.5 hover:shadow-lg
        dark:bg-neutral-900/60 dark:border-white/10 dark:shadow-none
        dark:hover:shadow-[0_10px_30px_rgba(0,0,0,0.35)]
      "
    >
      {/* CONTENIDO CENTRADO */}
      <div className="flex flex-col items-center text-center">
        {/* TÍTULO */}
        <h3 className="text-lg font-semibold">
          <Link
            href={`/projects/${project.slug}`}
            className="text-neutral-950 dark:text-neutral-50 outline-none hover:underline focus-visible:underline"
          >
            {project.title}
          </Link>
        </h3>

        {/* RESUMEN */}
        <p className="mt-2 max-w-xl text-sm text-neutral-600 dark:text-neutral-300">
          {project.summary}
        </p>

        {/* FECHA */}
        <time className="mt-3 rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs text-neutral-600 shadow-sm
                         dark:border-white/10 dark:bg-neutral-900/60 dark:text-neutral-300 dark:backdrop-blur">
          {project.date}
        </time>

        {/* PROBLEMA / SOLUCIÓN (alineado a la izquierda) */}
        {(project.problem || project.solution) && (
          <div
            className="
              mt-4 w-full max-w-md rounded-2xl border border-neutral-200
              bg-neutral-50 p-4 text-left
              dark:border-white/10 dark:bg-neutral-950/40
            "
          >
            {project.problem && (
              <p className="text-sm text-neutral-800 dark:text-neutral-200">
                <span className="font-semibold">Problema:</span>{" "}
                <span className="text-neutral-700 dark:text-neutral-300">
                  {project.problem}
                </span>
              </p>
            )}

            {project.solution && (
              <p className="mt-2 text-sm text-neutral-800 dark:text-neutral-200">
                <span className="font-semibold">Solución:</span>{" "}
                <span className="text-neutral-700 dark:text-neutral-300">
                  {project.solution}
                </span>
              </p>
            )}
          </div>
        )}

        {/* TAGS */}
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {project.tags.map((t) => (
            <Tag key={t} text={t} />
          ))}
        </div>

        {/* ACCIONES */}
        <div className="mt-5 flex flex-wrap justify-center gap-2">
          {project.links.github && (
            <a
              className="
                rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 text-sm
                text-neutral-800 hover:bg-neutral-100
                dark:border-white/10 dark:bg-white/5 dark:text-neutral-200 dark:hover:bg-white/10
              "
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
          )}

          {project.links.demo && (
            <a
              className="
                rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 text-sm
                text-neutral-800 hover:bg-neutral-100
                dark:border-white/10 dark:bg-white/5 dark:text-neutral-200 dark:hover:bg-white/10
              "
              href={project.links.demo}
              target="_blank"
              rel="noreferrer"
            >
              Demo ↗
            </a>
          )}

          <Link
            className="
              rounded-full bg-white px-4 py-2 text-sm font-medium text-neutral-900
              shadow-sm hover:bg-neutral-100
              dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200
            "
            href={`/projects/${project.slug}`}
          >
            Detalles →
          </Link>
        </div>
      </div>
    </article>
  );
}
