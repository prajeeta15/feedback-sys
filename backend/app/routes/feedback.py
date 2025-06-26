from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app import models, schemas
from app.auth import get_db, oauth2_scheme, SECRET_KEY, ALGORITHM
from jose import jwt
from typing import List
from app.schemas import FeedbackResponse
from app.models import User
from app.auth import get_current_manager

router = APIRouter(prefix="/feedback", tags=["feedback"])


def get_current_user(token: str = Depends(oauth2_scheme), db: Session = Depends(get_db)):
    payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
    username = payload.get("sub")
    return db.query(models.User).filter(models.User.username == username).first()


@router.post("/")
def submit_feedback(feedback: schemas.FeedbackCreate, db: Session = Depends(get_db), current_user: models.User = Depends(get_current_user)):
    if current_user.role != "manager":
        raise HTTPException(
            status_code=403, detail="Only managers can submit feedback.")
    target = db.query(models.User).filter(
        models.User.id == feedback.employee_id,
        models.User.team == current_user.team
    ).first()
    if not target:
        raise HTTPException(404, detail="Employee not found in your team")
    fb = models.Feedback(**feedback.dict(), manager_id=current_user.id)
    db.add(fb)
    db.commit()
    return fb


@router.get("/history/{employee_id}")
def feedback_history(employee_id: int, db: Session = Depends(get_db), current_user: models.User = Depends(get_current_user)):
    if current_user.role == "employee" and current_user.id != employee_id:
        raise HTTPException(403, detail="Access denied")
    if current_user.role == "manager":
        target = db.query(models.User).filter(
            models.User.id == employee_id, models.User.team == current_user.team).first()
        if not target:
            raise HTTPException(403, detail="Employee not in your team")
    return db.query(models.Feedback).filter(models.Feedback.employee_id == employee_id).all()


@router.get("/team-feedback", response_model=List[FeedbackResponse])
def team_feedback(db: Session = Depends(get_db), current_user: User = Depends(get_current_manager)):
    if current_user.role != "manager":
        raise HTTPException(403, detail="Only managers can access this.")
    
    team_members = db.query(models.User).filter(models.User.team == current_user.team).all()
    feedback_list = []
    for member in team_members:
        feedbacks = db.query(models.Feedback).filter(models.Feedback.employee_id == member.id).all()
        feedback_list.extend(feedbacks)
    return feedback_list
