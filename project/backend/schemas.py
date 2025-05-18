from pydantic import BaseModel

class CompanyBase(BaseModel):
    name: str
    location: str

class CompanyCreate(CompanyBase):
    pass

class Company(CompanyBase):
    id: int

    class Config:
        from_attributes = True