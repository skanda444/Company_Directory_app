# Company Directory App

A full stack web application built with **FastAPI (Python)** and **React (JavaScript)** to manage a list of companies. It supports viewing, adding, and deleting company records using a modern RESTful API and frontend interface.

---

## Features

- 🔹 Add a company (name and location)
- 🔹 View all companies in a table
- 🔹 Delete a company from the list
- 🔹 FastAPI backend with SQLite database
- 🔹 React frontend using Fetch API (no Axios)

---

## Tech Stack

- **Backend**: FastAPI, SQLAlchemy, SQLite
- **Frontend**: React, Vite, Tailwind CSS (optional)
- **Language**: Python, JavaScript

---

## Project Structure
project/
├── backend/
│ ├── main.py # FastAPI app and routes
│ ├── models.py # SQLAlchemy models
│ ├── schemas.py # Pydantic schemas
│ └── database.py # DB connection
├── src/ # React app
├── index.html
├── package.json
├── vite.config.ts
└── requirements.txt


---

## Setup Instructions

### 1. Backend (FastAPI)

```bash
# Create and activate virtual environment
python -m venv finial_venv
.\finial_venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Run the FastAPI server
uvicorn backend.main:app --reload
```

Frontend (React)
# Install dependencies
npm install

# Run the React app
npm run dev
