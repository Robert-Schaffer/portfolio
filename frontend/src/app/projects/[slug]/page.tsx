import { notFound } from "next/navigation";
import { getProject } from "@/lib/api";

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-slate-100">
      <section className="mx-auto max-w-4xl">
        <a href="/projects" className="text-sm text-cyan-400 hover:text-cyan-300">
          Back to Projects
        </a>

        <h1 className="mt-8 text-4xl font-bold text-white md:text-5xl">
          {project.title}
        </h1>

        <p className="mt-6 text-lg leading-8 text-slate-300">
          {project.summary}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900/70 p-8">
          <h2 className="text-2xl font-bold text-white">Overview</h2>
          <p className="mt-4 leading-8 text-slate-300">{project.description}</p>
        </div>
      </section>
    </main>
  );
}