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
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* HEADER */}
<header id="top" className="flex flex-col items-center gap-6 sm:flex-row sm:items-center sm:justify-between">
  {/* Bloque foto + texto */}
  <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:items-center sm:gap-6 sm:text-left">
    {/* FOTO */}
    <div className="relative h-24 w-24 overflow-hidden rounded-3xl border border-neutral-200 bg-white dark:bg-neutral-900/60 dark:backdrop-blur shadow-md sm:h-32 sm:w-32">
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
      <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
        David Villén Moreno
      </h2>
      <p className="max-w-xl text-sm text-neutral-600 dark:text-neutral-300 sm:text-base">
        Ingeniero Informático | Software & Data Science | Python · Data Analysis · Machine Learning · Big Data
      </p>

      {/* CTA */}
      {/* <div className="flex flex-wrap justify-center gap-3 pt-2 sm:justify-start">
        <Link
          href="#projects"
          className="rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-neutral-800"
        >
          Ver proyectos
        </Link>
        <a
          href="/cv.pdf"
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-neutral-300 bg-white px-5 py-2.5 text-sm font-medium text-neutral-900 shadow-sm hover:border-neutral-400"
        >
          Descargar CV
        </a>
        <Link
          href="#contact"
          className="rounded-full border border-neutral-300 bg-white px-5 py-2.5 text-sm font-medium text-neutral-900 shadow-sm hover:border-neutral-400"
        >
          Contacto
        </Link>
      </div> */}

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
      <section id="skills" className="mt-14 border-t border-neutral-200 dark:border-white/10 pt-8">
        <h2 className="text-lg font-semibold">Skills</h2>
        <p className="mt-2 max-w-2xl text-sm text-neutral-600 dark:text-neutral-300">
          Tecnologías con experiencia práctica (qué he hecho con cada una).
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {/* Frontend */}
          <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm
                          dark:border-white/10 dark:bg-neutral-900/60 dark:backdrop-blur">
            <h3 className="font-semibold text-neutral-900 dark:text-neutral-100">Frontend</h3>

            <ul className="mt-3 space-y-3 text-sm text-neutral-700 dark:text-neutral-200">
              <li>
                <span
                  className="
                    inline-block rounded-md bg-neutral-100 px-2 py-0.5 text-sm font-semibold
                    text-neutral-900
                    dark:bg-white/10 dark:text-neutral-100
                  "
                >
                  React / Next.js
                </span>

                <p className="text-neutral-600 dark:text-neutral-300">
                  Rutas, SSR/SSG, componentes reutilizables y performance.
                </p>
              </li>
              <li>
                <span
                  className="
                    inline-block rounded-md bg-neutral-100 px-2 py-0.5 text-sm font-semibold
                    text-neutral-900
                    dark:bg-white/10 dark:text-neutral-100
                  "
                >
                  React / Next.js
                </span>

                <p className="text-neutral-600 dark:text-neutral-300">
                  Layouts claros, responsive y accesibilidad básica.
                </p>
              </li>
            </ul>
          </div>

          {/* Backend */}
          <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm
                          dark:border-white/10 dark:bg-neutral-900/60 dark:backdrop-blur">
            <h3 className="font-semibold text-neutral-900 dark:text-neutral-100">Backend</h3>

            <ul className="mt-3 space-y-3 text-sm text-neutral-700 dark:text-neutral-200">
              <li>
                <span
                  className="
                    inline-block rounded-md bg-neutral-100 px-2 py-0.5 text-sm font-semibold
                    text-neutral-900
                    dark:bg-white/10 dark:text-neutral-100
                  "
                >
                  Python
                </span>

                <p className="text-neutral-600 dark:text-neutral-300">
                  Análisis de datos, automatización y pipelines.
                </p>
              </li>
              <li>
                <span
                  className="
                    inline-block rounded-md bg-neutral-100 px-2 py-0.5 text-sm font-semibold
                    text-neutral-900
                    dark:bg-white/10 dark:text-neutral-100
                  "
                >
                  Node.js
                </span>
                <p className="text-neutral-600 dark:text-neutral-300">
                  APIs, integración con BD y autenticación.
                </p>
              </li>
            </ul>
          </div>

          {/* Data / Tools */}
          <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm
                          dark:border-white/10 dark:bg-neutral-900/60 dark:backdrop-blur">
            <h3 className="font-semibold text-neutral-900 dark:text-neutral-100">Data / Tools</h3>

            <ul className="mt-3 space-y-3 text-sm text-neutral-700 dark:text-neutral-200">
              <li>
                <span
                  className="
                    inline-block rounded-md bg-neutral-100 px-2 py-0.5 text-sm font-semibold
                    text-neutral-900
                    dark:bg-white/10 dark:text-neutral-100
                  "
                >
                  Python
                </span>
                <p className="text-neutral-600 dark:text-neutral-300">
                  Modelado, consultas, agregaciones e índices.
                </p>
              </li>
              <li>
                <span
                  className="
                    inline-block rounded-md bg-neutral-100 px-2 py-0.5 text-sm font-semibold
                    text-neutral-900
                    dark:bg-white/10 dark:text-neutral-100
                  "
                >
                  Python
                </span>
                <p className="text-neutral-600 dark:text-neutral-300">
                  Entornos reproducibles para desarrollo y despliegue.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>


      {/* SOBRE MÍ */}
      <section id="about" className="mt-14 border-t border-neutral-200 pt-8">
        <h2 className="text-lg font-semibold">Sobre mí</h2>
        <p className="mt-2 max-w-2xl text-sm text-neutral-600 dark:text-neutral-300">
          Ingeniero de software apasionado por el mundo de los datos y las nuevas tecnologías.
          Me interesa construir productos útiles, medibles y bien diseñados: desde una API limpia
          hasta un pipeline de datos robusto.
        </p>
        <p className="mt-3 max-w-2xl text-sm text-neutral-600 dark:text-neutral-300">
          Ahora mismo busco proyectos y oportunidades donde pueda aportar en desarrollo, analítica y ML.
        </p>
      </section>

      {/* CONTACTO */}
      <section id="contact" className="mt-14 pb-2">
        <div className="rounded-2xl border border-neutral-200 bg-white dark:bg-neutral-900/60 dark:backdrop-blur p-6 shadow-sm">
          <h2 className="text-lg font-semibold">Contacto</h2>
          <p className="mt-2 max-w-2xl text-sm text-neutral-600 dark:text-neutral-300">
            ¿Tienes un proyecto o una oportunidad profesional?
            Hablemos ;)
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <a
              className="
                rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white shadow-sm
                hover:bg-neutral-800
                dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200
              "
              href="mailto:dvillenmoreno@gmail.com?subject=Oportunidad%20profesional"
            >
              Enviar email
            </a>

            <a
              className="
                rounded-full border px-5 py-2.5 text-sm font-medium shadow-sm
                border-neutral-300 bg-white text-neutral-900 hover:border-neutral-400
                dark:border-white/15 dark:bg-white/5 dark:text-neutral-100 dark:hover:bg-white/10
              "
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
