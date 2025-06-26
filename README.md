# 📝 Feedback Sharing System

🔗**deployed** Backend (Render) [https://feedback-sys-w29g.onrender.com]
Frontend (Vercel) [https://feedback-sys-nu.vercel.app/]

A full-stack web application that enables **managers and employees** to share structured, role-based feedback in a simple, secure, and user-friendly way.

> Built with **React + FastAPI** | Deployed via  **Render** (Backend) **Vercel** (Frontend)

---

## 🚀 Features

### ✅ Core

- 🔐 **Authentication** with Manager & Employee roles
- 📬 **Managers can submit feedback** on:
  - Strengths
  - Areas to improve
  - Overall sentiment (positive / neutral / negative)
  - Optional markdown-supported comments
- 📖 **Employees can view and acknowledge feedback**
- 🧠 **Feedback history** visible to both roles
- 📊 **Manager dashboard** with sentiment trend visualization

### ✨ Bonus Features

- ✍️ **Markdown support** in feedback comments
- 📄 **Export feedback history as PDF**
- 🌐 **Fully containerized** (Docker support)
- ⚡ Easy deployment via Vercel + Render

---

## 🧱 Tech Stack

| Layer       | Technology              |
|-------------|--------------------------|
| Frontend    | React, Axios, Chart.js, Tailwind CSS |
| Backend     | FastAPI, SQLAlchemy, JWT Auth |
| Database    | SQLite (dev) / PostgreSQL (prod) |
| Deployment  | Render (Backend), Vercel (Frontend) |
| PDF Export  | jsPDF, html2canvas       |
| Markdown    | react-markdown           |

---
## ⚙️ Setup Instructions

### 🐍 Backend (FastAPI)

1. Clone the repo
```bash
git clone https://github.com/prajeeta15/feedback-sys.git
cd feedback-system/backend  

2. Install dependencies
Copy
Edit
pip install -r requirements.txt

Run locally

bash
Copy
Edit
uvicorn app.main:app --reload

build docker image
docker build -t feedback-backend .

run the container
docker run -d -p 8000:8000 feedback-backend
