from fastapi import FastAPI

app = FastAPI(
    title="Portfolio Platform API",
    version="0.1.0",
)


@app.get("/health")
def health_check():
    return {
        "status": "ok",
        "service": "portfolio-backend",
    }


@app.get("/api/projects")
def get_projects():
    return [
        {
            "title": "HPC Home Lab",
            "summary": "Rocky Linux-based multi-node lab for learning Linux systems, networking, and HPC security concepts.",
            "tags": ["Linux", "Rocky Linux", "HPC", "Cybersecurity"],
        },
        {
            "title": "Trimble Vista ERP Development",
            "summary": "Professional full-stack ERP development and maintenance experience.",
            "tags": ["Full Stack", "ERP", "SQL", "Business Systems"],
        },
    ]
