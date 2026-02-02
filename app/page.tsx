import Image from "next/image";
import Link from "next/link";
import { getAllProjects } from "@/app/lib/projects";
import { ProjectCard } from "@/app/components/ProjectCard";

export default function Home() {
  const projects = getAllProjects().slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "David Villén Moreno",
    url: "https://portfolio-davidvm29-web-sable-two.vercel.app/",
    jobTitle: "Ingeniero Informático",
    sameAs: [
      "https://github.com/davidvm29",
      "https://www.linkedin.com/in/david-villen-moreno-a4a835176/",
    ],
  };

  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HEADER */}
      <header
        id="top"
        className="flex flex-col items-center gap-6 sm:flex-row sm:items-center sm:justify-between"
      >
        <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:items-center sm:gap-6 sm:text-left">
          {/* FOTO */}
          <div className="relative h-24 w-24 overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-md dark:bg-neutral-900/60 dark:backdrop-blur sm:h-32 sm:w-32">
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

            <p className="max-w-xl text-sm text-neutral-600 dark:text-neutral-300 sm:text-base">
              Ingeniero Informático · Software & Data Engineering · Python · SQL · Machine Learning · Big Data
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
                href="https://www.linkedin.com/in/david-villen-moreno-a4a835176/"
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
      <section id="projects" className="mt-12">
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

      {/* SKILLS */}
      <section
        id="skills"
        className="mt-14 border-t border-neutral-200 pt-8 dark:border-white/10"
      >
        <h2 className="text-lg font-semibold">Skills</h2>
        <p className="mt-2 max-w-2xl text-sm text-neutral-600 dark:text-neutral-300">
          Tecnologías aplicadas a proyectos.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {/* Frontend */}
          <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-neutral-900/60 dark:backdrop-blur">
            <h3 className="font-semibold">Frontend</h3>

            <ul className="mt-3 space-y-3 text-sm">
              <li>
                <span className="inline-block rounded-md bg-neutral-100 px-2 py-0.5 font-semibold dark:bg-white/10">
                  Vue.js
                </span>
                <p className="text-neutral-600 dark:text-neutral-300">
                  Desarrollo de interfaces, componentes reutilizables y mantenimiento.
                </p>
              </li>

              <li>
                <span className="inline-block rounded-md bg-neutral-100 px-2 py-0.5 font-semibold dark:bg-white/10">
                  React / Next.js (básico)
                </span>
                <p className="text-neutral-600 dark:text-neutral-300">
                  Componentes, routing y buenas prácticas en proyectos personales.
                </p>
              </li>

              <li>
                <span className="inline-block rounded-md bg-neutral-100 px-2 py-0.5 font-semibold dark:bg-white/10">
                  HTML5 · CSS3 · Bootstrap
                </span>
                <p className="text-neutral-600 dark:text-neutral-300">
                  Layout responsive y estructura clara.
                </p>
              </li>
            </ul>
          </div>

          {/* Backend */}
          <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-neutral-900/60 dark:backdrop-blur">
            <h3 className="font-semibold">Backend</h3>

            <ul className="mt-3 space-y-3 text-sm">
              <li>
                <span className="inline-block rounded-md bg-neutral-100 px-2 py-0.5 font-semibold dark:bg-white/10">
                  PHP · CodeIgniter (MVC)
                </span>
                <p className="text-neutral-600 dark:text-neutral-300">
                  Desarrollo de módulos, APIs y mantenimiento de proyectos.
                </p>
              </li>

              <li>
                <span className="inline-block rounded-md bg-neutral-100 px-2 py-0.5 font-semibold dark:bg-white/10">
                  Python
                </span>
                <p className="text-neutral-600 dark:text-neutral-300">
                  Automatización, scripts y soporte a pipelines de datos.
                </p>
              </li>

              <li>
                <span className="inline-block rounded-md bg-neutral-100 px-2 py-0.5 font-semibold dark:bg-white/10">
                  SQL · JavaScript · Java
                </span>
                <p className="text-neutral-600 dark:text-neutral-300">
                  Lógica de negocio, consultas e integraciones.
                </p>
              </li>
            </ul>
          </div>

          {/* Data / Tools */}
          <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-neutral-900/60 dark:backdrop-blur">
            <h3 className="font-semibold">Data · DB · Tools</h3>

            <ul className="mt-3 space-y-3 text-sm">
              <li>
                <span className="inline-block rounded-md bg-neutral-100 px-2 py-0.5 font-semibold dark:bg-white/10">
                  MySQL · MariaDB · Oracle
                </span>
                <p className="text-neutral-600 dark:text-neutral-300">
                  Diseño de esquemas, normalización y optimización de consultas.
                </p>
              </li>

              <li>
                <span className="inline-block rounded-md bg-neutral-100 px-2 py-0.5 font-semibold dark:bg-white/10">
                  MongoDB · InfluxDB · BigQuery · DuckDB
                </span>
                <p className="text-neutral-600 dark:text-neutral-300">
                  Agregaciones, analítica y almacenamiento orientado a datos.
                </p>
              </li>

              <li>
                <span className="inline-block rounded-md bg-neutral-100 px-2 py-0.5 font-semibold dark:bg-white/10">
                  Git · Docker · CI/CD
                </span>
                <p className="text-neutral-600 dark:text-neutral-300">
                  Entornos reproducibles, versionado y despliegues básicos.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* SOBRE MÍ */}
      <section
        id="about"
        className="mt-14 border-t border-neutral-200 pt-8 dark:border-white/10"
      >
        <h2 className="text-lg font-semibold">Sobre mí</h2>
        <p className="mt-2 max-w-2xl text-sm text-neutral-600 dark:text-neutral-300">
          Ingeniero informático con formación en software y máster en Ingeniería Informática,
          especializado en ingeniería de datos. Me motiva transformar datos en conocimiento útil
          y construir soluciones bien diseñadas, eficientes y mantenibles.
        </p>
        <p className="mt-3 max-w-2xl text-sm text-neutral-600 dark:text-neutral-300">
          Busco proyectos y oportunidades donde aportar valor real desde el primer día.
        </p>
      </section>

      {/* CONTACTO */}
      <section id="contact" className="mt-14 pb-2">
        <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-neutral-900/60 dark:backdrop-blur">
          <h2 className="text-lg font-semibold">Contacto</h2>
          <p className="mt-2 max-w-2xl text-sm text-neutral-600 dark:text-neutral-300">
            ¿Tienes un proyecto o una oportunidad profesional?  
            Hablemos 😉
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <a
              className="rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
              href="mailto:dvillenmoreno@gmail.com?subject=Oportunidad%20profesional"
            >
              Enviar email
            </a>

            <a
              className="rounded-full border border-neutral-300 bg-white px-5 py-2.5 text-sm font-medium text-neutral-900 shadow-sm hover:border-neutral-400 dark:border-white/15 dark:bg-white/5 dark:text-neutral-100 dark:hover:bg-white/10"
              href="https://www.linkedin.com/in/david-villen-moreno-a4a835176/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
