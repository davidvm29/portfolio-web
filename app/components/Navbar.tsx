"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { ThemeToggle } from "@/app/components/ThemeToggle";

const nav = [
  { label: "Inicio", hash: "#top" },
  { label: "Proyectos", hash: "#projects" },
  { label: "Sobre mí", hash: "#about" },
  { label: "Skills", hash: "#skills" },
  { label: "Contacto", hash: "#contact" },
];

function cx(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeHash, setActiveHash] = useState<string>("#top");

  // ESC para cerrar
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // Bloquear scroll cuando está abierto
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Detectar hash activo
  useEffect(() => {
    const sync = () => setActiveHash(window.location.hash || "#top");
    sync();
    const onHash = () => sync();
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const items = useMemo(
    () =>
      nav.map((it) => ({
        ...it,
        href: `/${it.hash}`,
        active: activeHash === it.hash,
      })),
    [activeHash]
  );

  return (
    <>
      {/* Botón hamburger */}
      <button
        type="button"
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className={cx(
          "fixed left-4 top-4 z-[60]",
          "rounded-full border px-3.5 py-2 shadow-sm backdrop-blur",
          "border-neutral-200 bg-white/90 hover:bg-white",
          "dark:border-white/15 dark:bg-neutral-950/70 dark:hover:bg-neutral-950"
        )}
      >
        <span className="text-lg leading-none">{open ? "✕" : "☰"}</span>
      </button>

      {/* Overlay suave */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/25 backdrop-blur-[1px] dark:bg-black/50"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cx(
          "fixed left-0 top-0 z-50 h-dvh w-[340px] max-w-[86vw]",
          "border-r shadow-2xl rounded-r-3xl",
          "transition-transform duration-250 ease-out",
          "bg-white border-neutral-200",
          "dark:bg-neutral-950/75 dark:backdrop-blur dark:border-white/10",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-full flex-col p-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <Link
              href="/#top"
              onClick={() => setOpen(false)}
              className="text-sm font-semibold tracking-tight text-neutral-900 dark:text-neutral-100"
            >
              <span className="inline-flex items-center gap-2">
                <span className="h-8 w-8 rounded-xl bg-neutral-900 dark:bg-white/10" />
                DavidVM
              </span>
            </Link>

            <div className="flex items-center gap-2">
              <ThemeToggle />
              <button
                onClick={() => setOpen(false)}
                className={cx(
                  "rounded-full border px-3 py-1.5 text-sm shadow-sm",
                  "border-neutral-200 bg-white text-neutral-700 hover:border-neutral-300",
                  "dark:border-white/15 dark:bg-neutral-950/50 dark:text-neutral-200 dark:hover:bg-neutral-950/70"
                )}
              >
                Cerrar
              </button>
            </div>
          </div>

          {/* Nav */}
          <nav className="mt-7">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
              Navegación
            </p>

            <ul className="space-y-2">
              {items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cx(
                      "group flex items-center justify-between rounded-2xl px-4 py-3 text-sm transition-colors",
                      item.active
                        ? "bg-neutral-900 text-white dark:bg-white/10 dark:text-white"
                        : "text-neutral-800 hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-white/5"
                    )}
                  >
                    <span className="font-medium">{item.label}</span>
                    <span
                      className={cx(
                        "transition-transform",
                        item.active
                          ? "text-white/80"
                          : "text-neutral-400 group-hover:translate-x-0.5 dark:text-neutral-400"
                      )}
                    >
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Divider */}
          <div className="my-6 h-px w-full bg-neutral-200 dark:bg-white/10" />

          {/* Enlaces */}
          <div className="mt-auto">
            <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
              Enlaces
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
              <a
                href="https://github.com/davidvm29"
                target="_blank"
                rel="noreferrer"
                className={cx(
                  "rounded-full border px-4 py-2 text-sm",
                  "border-neutral-200 bg-neutral-50 text-neutral-800 hover:bg-neutral-100",
                  "dark:border-white/10 dark:bg-white/5 dark:text-neutral-200 dark:hover:bg-white/10"
                )}
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/in/david-villen-moreno-a4a835176/"
                target="_blank"
                rel="noreferrer"
                className={cx(
                  "rounded-full border px-4 py-2 text-sm",
                  "border-neutral-200 bg-neutral-50 text-neutral-800 hover:bg-neutral-100",
                  "dark:border-white/10 dark:bg-white/5 dark:text-neutral-200 dark:hover:bg-white/10"
                )}
              >
                LinkedIn ↗
              </a>
            </div>

            <p className="mt-4 text-xs text-neutral-500 dark:text-neutral-400">
              Pulsa <span className="font-medium">ESC</span> para cerrar.
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
