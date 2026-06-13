from pydantic import BaseModel, ConfigDict


class ProjectResponse(BaseModel):
    id: int
    title: str
    summary: str
    tags: list[str]

    model_config = ConfigDict(from_attributes=True)