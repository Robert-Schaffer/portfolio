from pydantic import BaseModel


class Project(BaseModel):
    title: str
    summary: str
    tags: list[str]