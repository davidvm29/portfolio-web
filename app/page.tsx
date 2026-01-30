import Image from "next/image";
import Link from "next/link";
import { getAllProjects } from "@/app/lib/projects";
import { ProjectCard } from "@/app/components/ProjectCard";

export default function Home() {
  const projects = getAllProjects().slice(0, 3);

  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      {/* HEADER */}
      <header className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-5">
          {/* FOTO */}
          <div className="relative h-28 w-28 overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-md">
            <Image
              src="/me.jpg"
              alt="Foto de perfil"
              fill
              sizes="(max-width: 640px) 160px, 192px"
              className="object-cover object-top"
              priority
            />
          </div>


          {/* TEXTO */}
          <div className="space-y-1">
            <h1 className="text-4xl font-bold">David Villén Moreno</h1>
            <p className="text-neutral-600">
              Portfolio de proyectos: ciberseguridad, datos, IoT y desarrollo.
            </p>

            <div className="flex flex-wrap gap-4 text-sm">
              <Link className="underline" href="/projects">
                Ver proyectos
              </Link>
              <a
                className="underline"
                href="https://github.com/tuusuario"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                className="underline"
                href="https://www.linkedin.com/in/tuusuario"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* PROYECTOS */}
      <section className="mt-12 space-y-4">
        <h2 className="text-xl font-semibold">Destacados</h2>

        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>

        <div className="pt-2">
          <Link className="underline" href="/projects">
            Ver todos →
          </Link>
        </div>
      </section>

      {/* SOBRE MÍ (OPCIONAL, MUY PRO) */}
      <section className="mt-14 rounded-2xl border border-neutral-200 bg-white/70 p-6 shadow-sm backdrop-blur">
        <h2 className="text-lg font-semibold">Sobre mí</h2>
        <p className="mt-2 text-sm text-neutral-600">
          Especializado en ciberseguridad, análisis de datos e IoT. Me gusta construir
          proyectos con foco en rendimiento, buenas prácticas y claridad técnica.
        </p>
      </section>
    </main>
  );
}
