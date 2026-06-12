const featuredProjects = [
  {
    title: "HPC Home Lab",
    description:
      "A Rocky Linux-based multi-node home lab built from repurposed hardware to explore Linux administration, networking, shared storage, and HPC security concepts.",
    tags: ["Rocky Linux", "HPC", "Networking", "Security"],
  },
  {
    title: "Full-Stack Portfolio Platform",
    description:
      "A containerized portfolio platform built with Next.js, FastAPI, PostgreSQL, and Docker Compose to demonstrate full-stack engineering and secure deployment practices.",
    tags: ["Next.js", "FastAPI", "PostgreSQL", "Docker"],
  },
  {
    title: "ERP Software Engineering",
    description:
      "Professional experience developing and maintaining Trimble Vista ERP software, supporting business workflows, full-stack features, data integrity, and production systems.",
    tags: ["Full Stack", "ERP", "SQL", "Business Systems"],
  },
];

const focusAreas = [
  "Full-stack software engineering",
  "Linux systems administration",
  "Dockerized application deployment",
  "PostgreSQL-backed application design",
  "Cybersecurity fundamentals",
  "HPC home lab development",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-8 lg:px-8">
        <nav className="flex items-center justify-between border-b border-slate-800 pb-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Portfolio
            </p>
            <h1 className="mt-2 text-xl font-bold">Robert Schaffer</h1>
          </div>

          <div className="hidden gap-6 text-sm text-slate-300 md:flex">
            <a className="transition hover:text-cyan-400" href="/about">
              About
            </a>
            <a className="transition hover:text-cyan-400" href="/projects">
              Projects
            </a>
            <a className="transition hover:text-cyan-400" href="/homelab">
              Home Lab
            </a>
            <a className="transition hover:text-cyan-400" href="/cybersecurity">
              Cybersecurity
            </a>
            <a className="transition hover:text-cyan-400" href="/contact">
              Contact
            </a>
          </div>
        </nav>

        <div className="grid flex-1 items-center gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr]">
          <section>
            <div className="mb-6 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
              Software Engineer · Cybersecurity · Linux · HPC
            </div>

            <h2 className="max-w-4xl text-5xl font-bold tracking-tight text-white md:text-7xl">
              Building secure, practical systems from application code to Linux
              infrastructure.
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
              I am a full-stack software engineer with a computer science
              background, cybersecurity training, ERP development experience,
              and hands-on Linux home lab work. I am focused on building secure,
              observable, containerized systems with real operational value.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="/projects"
                className="rounded-lg bg-cyan-400 px-6 py-3 text-center text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
              >
                View Projects
              </a>
              <a
                href="/homelab"
                className="rounded-lg border border-slate-700 px-6 py-3 text-center text-sm font-bold text-slate-100 transition hover:border-cyan-400 hover:text-cyan-300"
              >
                Explore Home Lab
              </a>
            </div>
          </section>

          <aside className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-cyan-950/20">
            <div className="mb-6 flex items-center justify-between border-b border-slate-800 pb-4">
              <h3 className="text-lg font-bold text-white">Current Focus</h3>
              <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                Active
              </span>
            </div>

            <div className="space-y-4">
              {focusAreas.map((area) => (
                <div
                  key={area}
                  className="rounded-lg border border-slate-800 bg-slate-950/70 p-4"
                >
                  <p className="text-sm text-slate-200">{area}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="border-t border-slate-800 bg-slate-900/40 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Featured Work
            </p>
            <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
              Projects that connect software engineering, systems, and security.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {featuredProjects.map((project) => (
              <article
                key={project.title}
                className="rounded-2xl border border-slate-800 bg-slate-950 p-6 transition hover:-translate-y-1 hover:border-cyan-400/60"
              >
                <h3 className="text-xl font-bold text-white">
                  {project.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-slate-300">
                  {project.description}
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
        </div>
      </section>
    </main>
  );
}