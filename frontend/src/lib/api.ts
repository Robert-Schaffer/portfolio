export type Project = {
  title: string;
  summary: string;
  tags: string[];
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