# 📝 Feedback Sharing Tool

A full-stack web application that enables **managers and employees** to share structured, role-based feedback in a simple, secure, and user-friendly way.

> Built with **React + FastAPI** | Deployed via **Vercel** (Frontend) and **Render** (Backend)

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

## 🧩 Project Structure

