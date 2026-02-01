import { getAllProjects } from "@/app/lib/projects";
import { ProjectCard } from "@/app/components/ProjectCard";

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Proyectos</h1>
          <p className="mt-2 text-neutral-600 dark:text-neutral-300">
            Selección de trabajos y prácticas con enfoque en problema → solución → resultados.
          </p>
        </div>
        <a className="text-sm underline underline-offset-4" href="/">
          ← Inicio
        </a>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {projects.map(p => <ProjectCard key={p.slug} project={p} />)}
      </div>
    </main>
  );
}
