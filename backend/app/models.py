from sqlalchemy import Column, Integer, String, Text, ForeignKey, Boolean
from sqlalchemy.orm import relationship
from app.database import Base


class User(Base):
    __tablename__ = "users"
    
    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True, index=True, nullable=False)
    password = Column(String, nullable=False)
    role = Column(String, nullable=False)  # 'manager' or 'employee'
    team = Column(String, nullable=False)

    # Relationships
    feedback_given = relationship("Feedback", back_populates="manager", foreign_keys='Feedback.manager_id')
    feedback_received = relationship("Feedback", back_populates="employee", foreign_keys='Feedback.employee_id')

    def __repr__(self):
        return f"<User(username={self.username}, role={self.role}, team={self.team})>"


class Feedback(Base):
    __tablename__ = "feedback"

    id = Column(Integer, primary_key=True, index=True)
    employee_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    manager_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    strengths = Column(Text, nullable=False)
    improvements = Column(Text, nullable=False)
    sentiment = Column(String, nullable=False)  # 'positive', 'neutral', 'negative'
    acknowledged = Column(Boolean, default=False)
    comments = Column(Text, nullable=True)

    # Relationships
    employee = relationship("User", foreign_keys=[employee_id], back_populates="feedback_received")
    manager = relationship("User", foreign_keys=[manager_id], back_populates="feedback_given")

    def __repr__(self):
        return f"<Feedback(manager_id={self.manager_id}, employee_id={self.employee_id}, sentiment={self.sentiment})>"
