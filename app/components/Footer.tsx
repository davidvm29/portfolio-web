export function Footer() {
  // const year = new Date().getFullYear();

  return (
    <footer className="mx-auto max-w-4xl px-6 pb-10 pt-12 text-sm">
      <div
        className="
          flex flex-col gap-3 pt-6
          border-t border-neutral-200
          dark:border-white
          sm:flex-row sm:items-center sm:justify-between
        "
      >
        {/* Firma */}
        <p className="text-neutral-500 dark:text-white">
        David Villén Moreno
        </p>

        {/* Enlaces */}
        <div className="flex gap-4">
          <a
            href="https://github.com/davidvm29"
            target="_blank"
            rel="noreferrer"
            className="
              underline underline-offset-4
              text-neutral-600 hover:text-neutral-900
              dark:text-white dark:hover:opacity-80
            "
          >
            GitHub
          </a>

          <a
            href="/cv.pdf"
            target="_blank"
            rel="noreferrer"
            className="
              underline underline-offset-4
              text-neutral-600 hover:text-neutral-900
              dark:text-white dark:hover:opacity-80
            "
          >
            CV
          </a>
        </div>
      </div>
    </footer>
  );
}
