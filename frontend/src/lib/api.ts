export type Project = {
  id: number;
  title: string;
  slug: string;
  summary: string;
  description: string;
  tags: string[];
  featured: boolean;
  github_url: string | null;
  demo_url: string | null;
  created_at: string;
};

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000";

export async function getProjects(): Promise<Project[]> {
  const response = await fetch(`${API_URL}/api/projects`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch projects");
  }

  return response.json();
}

export async function getProject(slug: string): Promise<Project | null> {
  const response = await fetch(`${API_URL}/api/projects/${slug}`, {
    cache: "no-store",
  });

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new Error("Failed to fetch project");
  }

  return response.json();
}