import Link from "next/link";
import type { Project } from "@/app/lib/projects";
import { Tag } from "@/app/components/Tag";

type DemoLink = { label: string; url: string };
type DemoField = string | DemoLink[] | undefined | null;

function isDemoArray(demo: DemoField): demo is DemoLink[] {
  return Array.isArray(demo);
}

function DemoButtons({ demo }: { demo: DemoField }) {
  if (!demo) return null;

  const btnClass =
    `
      rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 text-sm
      text-neutral-800 hover:bg-neutral-100
      dark:border-white/10 dark:bg-white/5 dark:text-neutral-200 dark:hover:bg-white/10
    `;

  if (typeof demo === "string") {
    return (
      <a className={btnClass} href={demo} target="_blank" rel="noreferrer">
        Demo ↗
      </a>
    );
  }

  if (isDemoArray(demo) && demo.length > 0) {
    return (
      <>
        {demo.map((d) => (
          <a
            key={d.url}
            className={btnClass}
            href={d.url}
            target="_blank"
            rel="noreferrer"
            title={d.label}
          >
            {d.label} ↗
          </a>
        ))}
      </>
    );
  }

  return null;
}

export function ProjectCard({ project }: { project: Project }) {
  const demo = (project as any)?.links?.demo as DemoField;

  return (
    <article
      className="
        group h-full rounded-3xl border bg-neutral-50 p-6 shadow-sm transition
        border-neutral-200 hover:-translate-y-0.5 hover:shadow-lg
        dark:bg-neutral-900/60 dark:border-white/10 dark:shadow-none
        dark:hover:shadow-[0_10px_30px_rgba(0,0,0,0.35)]
      "
    >
      {/* ✅ Wrapper: flex-col + h-full para poder empujar el footer al fondo */}
      <div className="flex h-full flex-col items-center text-center">
        {/* TÍTULO */}
        <h3 className="text-lg font-semibold">
          <Link
            href={`/projects/${project.slug}`}
            className="text-neutral-950 dark:text-neutral-50 outline-none hover:underline focus-visible:underline"
          >
            {/* ✅ opcional: limita a 2 líneas */}
            <span className="line-clamp-2">{project.title}</span>
          </Link>
        </h3>

        {/* RESUMEN */}
        <p className="mt-2 max-w-xl text-sm text-neutral-600 dark:text-neutral-300">
          {/* ✅ opcional: limita a 3 líneas */}
          <span className="line-clamp-3">{project.summary}</span>
        </p>

        {/* FECHA */}
        <time
          className="mt-3 rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs text-neutral-600 shadow-sm
                     dark:border-white/10 dark:bg-neutral-900/60 dark:text-neutral-300 dark:backdrop-blur"
        >
          {project.date}
        </time>

        {/* PROBLEMA / SOLUCIÓN */}
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
                {/* ✅ opcional: limita */}
                <span className="text-neutral-700 dark:text-neutral-300 line-clamp-3">
                  {project.problem}
                </span>
              </p>
            )}

            {project.solution && (
              <p className="mt-2 text-sm text-neutral-800 dark:text-neutral-200">
                <span className="font-semibold">Solución:</span>{" "}
                {/* ✅ opcional: limita */}
                <span className="text-neutral-700 dark:text-neutral-300 line-clamp-3">
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

        {/* ✅ Empuja el bloque de botones al fondo */}
        <div className="mt-auto pt-5">
          <div className="flex flex-wrap justify-center gap-2">
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

            <DemoButtons demo={demo} />

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
      </div>
    </article>
  );
}
