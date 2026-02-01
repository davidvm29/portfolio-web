import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug } from "../../lib/projects";
import { Tag } from "../../components/Tag";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.summary,
  };
}

function InfoBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className="
        rounded-2xl border border-neutral-200 bg-white p-5
        dark:border-white/10 dark:bg-neutral-950/40
      "
    >
      <div className="mb-3 flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-neutral-900 dark:bg-white" />
        <h2 className="text-sm font-semibold uppercase tracking-wide text-neutral-900 dark:text-neutral-100">
          {title}
        </h2>
      </div>

      <div className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-200">
        {children}
      </div>
    </div>
  );
}

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = getProjectBySlug(slug);
  if (!project) return notFound();

  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <article
        className="
          rounded-3xl border border-neutral-200 bg-white/70 p-7 shadow-sm backdrop-blur
          dark:border-white/10 dark:bg-neutral-900/60 dark:shadow-none
        "
      >
        {/* HEADER */}
        <header className="flex flex-col gap-4">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
            <div className="min-w-0">
              <h1 className="text-2xl font-semibold tracking-tight text-neutral-950 dark:text-neutral-50">
                {project.title}
              </h1>
              <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-200">
                {project.summary}
              </p>
            </div>

            <time
              className="
                mt-3 w-fit whitespace-nowrap rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs text-neutral-600 shadow-sm
                dark:border-white/10 dark:bg-white/5 dark:text-neutral-200
                sm:mt-0
              "
            >
              {project.date}
            </time>
          </div>

          {/* TAGS */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <Tag key={t} text={t} />
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-2 pt-1">
            {project.links.github ? (
              <a
                href={project.links.github}
                target="_blank"
                rel="noreferrer"
                className="
                  rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 text-sm
                  text-neutral-800 hover:bg-neutral-100
                  dark:border-white/10 dark:bg-white/5 dark:text-neutral-200 dark:hover:bg-white/10
                "
              >
                Ver en GitHub ↗
              </a>
            ) : null}

            {project.links.demo ? (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noreferrer"
                className="
                  rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 text-sm
                  text-neutral-800 hover:bg-neutral-100
                  dark:border-white/10 dark:bg-white/5 dark:text-neutral-200 dark:hover:bg-white/10
                "
              >
                Ver demo ↗
              </a>
            ) : null}

            <Link
              href="/projects"
              className="
                rounded-full bg-neutral-900 px-4 py-2 text-sm font-medium text-white
                hover:bg-neutral-800
                dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200
              "
            >
              Volver a proyectos →
            </Link>
          </div>
        </header>

        {/* DIVIDER */}
        <div className="my-7 h-px bg-neutral-200 dark:bg-white/10" />

        {/* SECCIONES */}
        {(project.problem ||
          project.solution ||
          (project.impact && project.impact.length > 0)) && (
          <section className="grid gap-4">
            {project.problem ? (
              <InfoBlock title="Problema">{project.problem}</InfoBlock>
            ) : null}

            {project.solution ? (
              <InfoBlock title="Solución">{project.solution}</InfoBlock>
            ) : null}

            {project.impact && project.impact.length > 0 ? (
              <InfoBlock title="Impacto / Resultados">
                <ul className="list-disc space-y-2 pl-5">
                  {project.impact.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </InfoBlock>
            ) : null}
          </section>
        )}
      </article>
    </main>
  );
}
