import projects from "../content/projects.json";

export type Project = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  date: string;
  links: { github?: string; demo?: string };
};

export function getAllProjects(): Project[] {
  return (projects as Project[]).slice().sort((a, b) => b.date.localeCompare(a.date));
}

export function getProjectBySlug(slug: string): Project | undefined {
  return getAllProjects().find((p) => p.slug === slug);
}
