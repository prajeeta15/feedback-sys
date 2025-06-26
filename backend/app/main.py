from fastapi import FastAPI
from app.database import Base, engine
from app.routes import auth, users, feedback

Base.metadata.create_all(bind=engine)

app = FastAPI()

app.include_router(auth.router)
app.include_router(users.router)
app.include_router(feedback.router)
