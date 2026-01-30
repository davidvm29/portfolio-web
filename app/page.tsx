import Image from "next/image";
import Link from "next/link";
import { getAllProjects } from "@/app/lib/projects";
import { ProjectCard } from "@/app/components/ProjectCard";

export default function Home() {
  const projects = getAllProjects().slice(0, 3);

  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      {/* HEADER */}
<header className="flex flex-col items-center gap-6 sm:flex-row sm:items-center sm:justify-between">
  {/* Bloque foto + texto */}
  <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:items-center sm:gap-6 sm:text-left">
    {/* FOTO */}
    <div className="relative h-24 w-24 overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-md sm:h-32 sm:w-32">
      <Image
        src="/me.jpg"
        alt="Foto de perfil"
        fill
        sizes="(max-width: 640px) 96px, 128px"
        className="object-cover object-[50%_20%]"
        priority
      />
    </div>

    {/* TEXTO */}
    <div className="space-y-2">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
        David Villén Moreno
      </h1>

      <p className="max-w-xl text-base text-neutral-600 sm:text-lg">
        Ingeniero Informático | Software & Data Science | Python · Data Analysis · Machine Learning · Big Data
      </p>

      {/* LINKS */}
      <div className="flex flex-wrap justify-center gap-4 pt-1 text-sm sm:justify-start">
        <Link href="/projects" className="underline underline-offset-4">
          Proyectos
        </Link>

        <a
          href="https://github.com/davidvm29"
          target="_blank"
          rel="noreferrer"
          className="underline underline-offset-4"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/tuusuario"
          target="_blank"
          rel="noreferrer"
          className="underline underline-offset-4"
        >
          LinkedIn
        </a>

        <a
          href="/cv.pdf"
          target="_blank"
          rel="noreferrer"
          className="underline underline-offset-4"
        >
          CV
        </a>
      </div>
    </div>
  </div>
</header>


      {/* PROYECTOS */}
      <section className="mt-12">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-xl font-semibold">Destacados</h2>

          <Link className="text-sm underline underline-offset-4" href="/projects">
            Ver todos →
          </Link>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>

      {/* SOBRE MÍ */}
      <section className="mt-14 border-t border-neutral-200 pt-8">
        <h2 className="text-lg font-semibold">Sobre mí</h2>
        <p className="mt-2 max-w-2xl text-sm text-neutral-600">
          Ingeniero de software apasionado por el mundo de los datos y las nuevas tecnologías. Me defino como una persona con muchas ganas de aprender, crecer profesionalmente y aportar valor.
        </p>
      </section>
    </main>
  );
}
