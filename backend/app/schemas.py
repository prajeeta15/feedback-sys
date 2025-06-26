from pydantic import BaseModel
from typing import Optional, Literal


class Token(BaseModel):
    access_token: str
    token_type: str


class TokenData(BaseModel):
    username: Optional[str] = None


class UserBase(BaseModel):
    username: str


class UserCreate(UserBase):
    password: str
    role: str
    team: str


class UserOut(UserBase):
    id: int
    role: str
    team: str

    class Config:
        orm_mode = True


class FeedbackBase(BaseModel):
    employee_id: int
    strengths: str
    improvements: str
    sentiment: Literal["positive", "neutral", "negative"]
    comments: Optional[str] = None


class FeedbackCreate(FeedbackBase):
    pass


class FeedbackOut(FeedbackBase):
    id: int
    manager_id: int
    acknowledged: str

class FeedbackResponse(BaseModel):
    id: int
    employee_id: int
    manager_id: int
    strengths: str
    improvements: str
    sentiment: str
    comments: Optional[str]

    class Config:
        from_attributes = True
