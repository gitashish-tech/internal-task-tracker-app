# 🧾 Internal Task Tracker App

A full-stack task management application built with Angular, Node.js, Express, and PostgreSQL. This app allows internal teams to create, assign, and track tasks with role-based access control.

## 🚀 Tech Stack

- **Frontend:** Angular, TypeScript, Angular Material
- **Backend:** Node.js, Express
- **Database:** PostgreSQL
- **Authentication:** JWT (JSON Web Tokens)

## 🔑 Features

- Role-based user login (Admin, User)
- Add, update, delete, and assign tasks
- Task status tracking and log history
- RESTful API architecture
- Angular reactive forms and client-side validation

## 📦 Folder Structure

internal-task-tracker-app/
├── backend/ # Express API server
└── frontend/ # Angular application

bash
Copy
Edit

## 🛠️ Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/internal-task-tracker-app.git
Install dependencies:

Backend:

bash
Copy
Edit
cd backend
npm install
node server.js
Frontend:

bash
Copy
Edit
cd ../frontend
npm install
ng serve
Open your browser at http://localhost:4200

Make sure PostgreSQL is running and configured if using a real DB.
