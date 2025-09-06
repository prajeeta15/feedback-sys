# Feedback Sharing System

🔗**deployed** Backend (Render) [https://feedback-sys-w29g.onrender.com]
Frontend (Vercel) [https://feedback-sys-nu.vercel.app/]

A full-stack web application that enables **managers and employees** to share structured, role-based feedback in a simple, secure, and user-friendly way.

> Built with **React + FastAPI** | Deployed via  **Render** (Backend) **Vercel** (Frontend)

---

## Features

### Core

- **Authentication** with Manager & Employee roles
- **Managers can submit feedback** on:
  - Strengths
  - Areas to improve
  - Overall sentiment (positive / neutral / negative)
  - Optional markdown-supported comments
- **Employees can view and acknowledge feedback**
- **Feedback history** visible to both roles
- **Manager dashboard** with sentiment trend visualization

### ✨ Bonus Features

-  **Markdown support** in feedback comments
-  **Export feedback history as PDF**
- **Fully containerized** (Docker support)
- Easy deployment via Vercel + Render

---

## Tech Stack

| Layer       | Technology              |
|-------------|--------------------------|
| Frontend    | React, Axios, Chart.js, Tailwind CSS |
| Backend     | FastAPI, SQLAlchemy, JWT Auth |
| Database    | SQLite (dev) / PostgreSQL (prod) |
| Deployment  | Render (Backend), Vercel (Frontend) |
| PDF Export  | jsPDF, html2canvas       |
| Markdown    | react-markdown           |

---
##  Setup Instructions
Frontend (HTML)
Just open frontend/index.html in any browser.
For deployment, drag the folder into https://vercel.com

Make sure to update API URLs inside index.html to your deployed backend.

### Backend (FastAPI)

 1. Clone the repo
```
git clone https://github.com/prajeeta15/feedback-sys.git
cd feedback-system/backend
```

3. Install dependencies
pip install -r requirements.txt

4. Run locally
uvicorn app.main:app --reload

build docker image
docker build -t feedback-backend .

run the container
```
docker run -d -p 8000:8000 feedback-backend
```
