from fastapi import APIRouter, Depends
from app.auth import get_db, oauth2_scheme
from sqlalchemy.orm import Session
from app.models import User
from jose import jwt
from app.schemas import UserOut
from app.auth import SECRET_KEY, ALGORITHM

router = APIRouter(prefix="/users", tags=["users"])


@router.get("/me", response_model=UserOut)
def get_me(token: str = Depends(oauth2_scheme), db: Session = Depends(get_db)):
    payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
    username = payload.get("sub")
    user = db.query(User).filter(User.username == username).first()
    return user
