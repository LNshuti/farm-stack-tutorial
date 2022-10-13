from pydantic import BaseModel 

class Todo(BaseModel):
    tittle: str 
    description: str 