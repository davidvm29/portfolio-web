import { getAllProjects } from "@/app/lib/projects";
import { ProjectCard } from "@/app/components/ProjectCard";

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-3xl font-bold">Proyectos</h1>
      <p className="mt-2 text-neutral-600">Selección de trabajos y prácticas.</p>

      <div className="mt-8 grid gap-4">
        {projects.map(p => <ProjectCard key={p.slug} project={p} />)}
      </div>
    </main>
  );
}
