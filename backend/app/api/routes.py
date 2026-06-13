from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.db.session import get_db
from app.models.project import Project
from app.schemas.project import ProjectResponse

router = APIRouter(prefix="/api")


@router.get("/projects", response_model=list[ProjectResponse])
def get_projects(db: Session = Depends(get_db)):
    return db.query(Project).order_by(Project.id).all()