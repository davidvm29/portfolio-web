import { notFound } from "next/navigation";
import { getProjectBySlug } from "../../lib/projects";
import { Tag } from "../../components/Tag";

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
      <h1 className="text-3xl font-bold">{project.title}</h1>
      <p className="mt-2 text-neutral-600">{project.summary}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <Tag key={t} text={t} />
        ))}
      </div>

      <div className="mt-6 flex gap-4 text-sm">
        {project.links.github ? (
          <a
            className="underline"
            href={project.links.github}
            target="_blank"
            rel="noreferrer"
          >
            Ver en GitHub
          </a>
        ) : null}
        {project.links.demo ? (
          <a
            className="underline"
            href={project.links.demo}
            target="_blank"
            rel="noreferrer"
          >
            Ver demo
          </a>
        ) : null}
      </div>
    </main>
  );
}
