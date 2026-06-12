from fastapi import APIRouter

from app.schemas.project import Project

router = APIRouter(prefix="/api")


@router.get("/projects", response_model=list[Project])
def get_projects():
    return [
        {
            "title": "HPC Home Lab",
            "summary": "A Rocky Linux-based home lab built to explore Linux administration, networking, shared storage, and HPC security concepts.",
            "tags": ["Rocky Linux", "Linux", "HPC", "Cybersecurity"],
        },
        {
            "title": "Full-Stack Portfolio Platform",
            "summary": "A containerized portfolio platform built with Next.js, FastAPI, PostgreSQL, and Docker Compose.",
            "tags": ["Next.js", "FastAPI", "PostgreSQL", "Docker"],
        },
        {
            "title": "ERP Software Engineering",
            "summary": "Professional full-stack ERP development experience maintaining and extending Trimble Vista ERP software.",
            "tags": ["Full Stack", "ERP", "SQL", "Business Systems"],
        },
    ]