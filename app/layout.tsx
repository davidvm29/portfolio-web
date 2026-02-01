import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Background } from "@/app/components/Background";
import { Navbar } from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";
import { ThemeProvider } from "@/app/components/ThemeProvider";
import {ThemeToggle} from "@/app/components/ThemeToggle";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "David Villén Moreno — Software & Data",
    template: "%s — David Villén Moreno",
  },
  description:
    "Portfolio de David Villén Moreno: proyectos de software, data science y machine learning.",
  metadataBase: new URL("https://portfolio-davidvm29-web-sable-two.vercel.app"),
  openGraph: {
    title: "David Villén Moreno — Software & Data",
    description:
      "Proyectos, habilidades y contacto. Enfoque en Python, análisis de datos, ML y desarrollo web.",
    url: "/",
    siteName: "Portfolio David Villén Moreno",
    locale: "es_ES",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-neutral-900 dark:text-neutral-100`}
      >
        <ThemeProvider>
          <Background />

          <a
            href="#main"
            className={[
              "sr-only focus:not-sr-only",
              "focus:fixed focus:left-4 focus:top-4 focus:z-50",
              "focus:rounded-lg focus:px-4 focus:py-2 focus:text-sm focus:shadow",
              "focus:bg-white focus:text-neutral-900",
              "dark:focus:bg-neutral-900 dark:focus:text-neutral-100",
            ].join(" ")}
          >
            Saltar al contenido
          </a>

          <Navbar />
          <div className="fixed right-4 top-4 z-[60]">
            <ThemeToggle />
          </div>

          <main id="main" className="pt-16">
            {children}
          </main>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
