from app.db.session import SessionLocal
from app.models.project import Project


def seed_projects() -> None:
    db = SessionLocal()

    try:
        existing_project = db.query(Project).first()

        if existing_project:
            print("Projects already seeded. Skipping.")
            return

        projects = [
            Project(
                title="HPC Home Lab",
                slug="hpc-home-lab",
                summary=(
                    "A Rocky Linux-based multi-node home lab built to explore Linux "
                    "administration, networking, shared storage, and HPC security concepts."
                ),
                description=(
                    "This project documents the design and operation of a small HPC-style "
                    "home lab built from repurposed hardware. It focuses on Rocky Linux, "
                    "network configuration, shared storage, service management, and the "
                    "security considerations involved in operating multi-node Linux systems."
                ),
                tags=["Rocky Linux", "Linux", "HPC", "Networking", "Cybersecurity"],
                featured=True,
                github_url=None,
                demo_url=None,
            ),
            Project(
                title="Full-Stack Portfolio Platform",
                slug="portfolio-platform",
                summary=(
                    "A containerized portfolio platform built with Next.js, FastAPI, "
                    "PostgreSQL, and Docker Compose."
                ),
                description=(
                    "This portfolio is a full-stack application designed to demonstrate "
                    "software engineering, database-backed API design, Dockerized deployment, "
                    "and secure home lab hosting practices."
                ),
                tags=["Next.js", "FastAPI", "PostgreSQL", "Docker", "TypeScript"],
                featured=True,
                github_url=None,
                demo_url=None,
            ),
            Project(
                title="ERP Software Engineering",
                slug="erp-software-engineering",
                summary=(
                    "Professional full-stack ERP development experience maintaining and "
                    "extending Trimble Vista ERP software."
                ),
                description=(
                    "Professional software engineering experience focused on developing, "
                    "maintaining, troubleshooting, and improving business-critical ERP "
                    "systems and integrations."
                ),
                tags=["Full Stack", "ERP", "SQL", "Business Systems"],
                featured=True,
                github_url=None,
                demo_url=None,
            ),
        ]

        db.add_all(projects)
        db.commit()

        print("Seeded projects.")

    finally:
        db.close()


if __name__ == "__main__":
    seed_projects()