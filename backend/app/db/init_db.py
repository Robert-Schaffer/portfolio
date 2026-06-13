from sqlalchemy.orm import Session

from app.db.session import Base, engine
from app.models.project import Project


def create_tables():
    Base.metadata.create_all(bind=engine)


def seed_projects(db: Session):
    existing_project = db.query(Project).first()

    if existing_project:
        return

    projects = [
        Project(
            title="HPC Home Lab",
            summary=(
                "A Rocky Linux-based multi-node home lab built from repurposed "
                "hardware to explore Linux administration, networking, shared "
                "storage, and HPC security concepts."
            ),
            tags=["Rocky Linux", "Linux", "HPC", "Cybersecurity"],
        ),
        Project(
            title="Full-Stack Portfolio Platform",
            summary=(
                "A containerized portfolio platform built with Next.js, FastAPI, "
                "PostgreSQL, and Docker Compose to demonstrate full-stack engineering "
                "and secure deployment practices."
            ),
            tags=["Next.js", "FastAPI", "PostgreSQL", "Docker"],
        ),
        Project(
            title="ERP Software Engineering",
            summary=(
                "Professional full-stack ERP development experience maintaining and "
                "extending Trimble Vista ERP software."
            ),
            tags=["Full Stack", "ERP", "SQL", "Business Systems"],
        ),
    ]

    db.add_all(projects)
    db.commit()


def init_db():
    create_tables()

    from app.db.session import SessionLocal

    db = SessionLocal()
    try:
        seed_projects(db)
    finally:
        db.close()