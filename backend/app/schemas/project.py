from datetime import datetime

from pydantic import BaseModel, ConfigDict


class ProjectResponse(BaseModel):
    id: int
    title: str
    slug: str
    summary: str
    description: str
    tags: list[str]
    featured: bool
    github_url: str | None
    demo_url: str | None
    created_at: datetime

    model_config = ConfigDict(from_attributes=True)