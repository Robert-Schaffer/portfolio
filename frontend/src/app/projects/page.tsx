import { getProjects } from "@/lib/api";

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-slate-100">
      <section className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
          Projects
        </p>

        <h1 className="mt-4 text-4xl font-bold text-white md:text-5xl">
          Engineering work across software, systems, and security.
        </h1>

        <p className="mt-6 max-w-3xl text-slate-300">
          These projects highlight full-stack development, Linux systems,
          containerized deployment, cybersecurity concepts, and HPC-oriented
          home lab work.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6"
            >
              <h2 className="text-xl font-bold text-white">{project.title}</h2>

              <p className="mt-4 text-sm leading-6 text-slate-300">
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
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}