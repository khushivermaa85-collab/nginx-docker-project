# Nginx Docker Project

A containerized web application demonstrating **Docker, Nginx reverse proxy, frontend/backend containerization, and Docker networking**.

## 📌 Project Overview

This project demonstrates how a frontend and backend application can be containerized using Docker, with **Nginx acting as a reverse proxy**.

Nginx serves the frontend and routes API requests to the backend service.

## 🏗️ Architecture

```text
Browser
   │
   ▼
┌───────────────┐
│     Nginx     │
│ Reverse Proxy │
└───────┬───────┘
        │
   ┌────┴─────┐
   │          │
   ▼          ▼
Frontend    Backend
Container   Container
            │
            ▼
        Express.js
```

## 🚀 Features

* Frontend application containerized with Docker
* Backend Express.js application containerized with Docker
* Nginx configured as a reverse proxy
* Nginx serves the frontend
* `/api` requests are forwarded to the backend
* Separate Docker containers for frontend, backend, and Nginx
* Git and GitHub used for version control

## 🛠️ Technologies Used

* Docker
* Nginx
* Node.js
* Express.js
* HTML
* CSS
* JavaScript
* Git
* GitHub

## 📁 Project Structure

```text
nginx-docker-project/
│
├── backend/
│   ├── Dockerfile
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
│
├── frontend/
│   ├── Dockerfile
│   ├── index.html
│   ├── script.js
│   └── style.css
│
├── nginx/
│   ├── Dockerfile
│   └── nginx.conf
│
├── Dockerfile
├── .gitignore
└── README.md
```

## ⚙️ How It Works

1. The user accesses the application through the browser.
2. Nginx receives the request on port `80`.
3. Nginx serves the frontend application.
4. API requests beginning with `/api` are forwarded to the backend.
5. The backend Express.js server runs on port `3000`.
6. Docker containers provide isolated environments for the application services.

## 🐳 Docker Setup

### Build the Nginx image

```bash
docker build -t nginx-docker-project .
```

### Run the Nginx container

```bash
docker run -p 8080:80 nginx-docker-project
```

The application can then be accessed through:

```text
http://localhost:8080
```

> The backend container needs to be available to Nginx as `backend:3000` for API requests to work.

## 📚 What I Learned

Through this project, I gained practical experience with:

* Dockerizing applications
* Creating Dockerfiles
* Working with Docker containers
* Configuring Nginx
* Setting up a reverse proxy
* Routing API requests
* Connecting frontend and backend services
* Using Git and GitHub for version control

## 👩‍💻 Author

**Khushi Verma**

GitHub: https://github.com/khushivermaa85-collab

