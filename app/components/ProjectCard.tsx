import Link from "next/link";
import type { Project } from "@/app/lib/projects";
import { Tag } from "@/app/components/Tag";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="rounded-2xl border p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold">
            <Link href={`/projects/${project.slug}`} className="hover:underline">
              {project.title}
            </Link>
          </h3>
          <p className="mt-2 text-sm text-neutral-600">{project.summary}</p>
        </div>

        <time className="text-xs text-neutral-500 whitespace-nowrap">
          {project.date}
        </time>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map(t => <Tag key={t} text={t} />)}
      </div>

      <div className="mt-4 flex gap-3 text-sm">
        {project.links.github ? (
          <a className="underline" href={project.links.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        ) : null}
        {project.links.demo ? (
          <a className="underline" href={project.links.demo} target="_blank" rel="noreferrer">
            Demo
          </a>
        ) : null}
      </div>
    </article>
  );
}
