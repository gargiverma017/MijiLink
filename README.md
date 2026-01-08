# 🔗 MijiLink – URL Shortener

MijiLink is a full-stack **URL Shortener web application** that allows users to generate, manage, and access shortened URLs efficiently.  
The project is built using a modern **React frontend** and a **Node.js + Express backend**, following clean architecture and industry best practices.

---

## 🎯 Project Objective

To design and implement a scalable URL shortening system that:
- Converts long URLs into short, shareable links
- Maintains clean separation between frontend and backend
- Uses modular architecture for maintainability and scalability

---

## 🚀 Key Features

- 🔗 Generate short URLs from long URLs
- 🚀 Redirect short URLs to original destinations
- 🧠 Layered backend architecture (Controller → Service → DAO)
- ⚡ Responsive and modern React UI
- 🌐 RESTful API communication
- 🛡️ Secure configuration using environment variables
- 📦 Clean Git & GitHub workflow

---

## 🛠️ Tech Stack

### Frontend
- React.js
- JavaScript (ES6+)
- Axios
- CSS
- React Router
- Centralized state management

### Backend
- Node.js
- Express.js
- MongoDB
- MVC + Service-based architecture
- Middleware-based request handling

### Tools & Practices
- Git & GitHub
- REST APIs
- Environment Variables (`.env`)
- Modular and scalable folder structure

---

## 🧩 Project Architecture

### Backend Structure

```text
BACKEND/
├── src/
│   ├── config/        # App and database configuration
│   ├── controller/    # Request controllers
│   ├── dao/           # Database access layer
│   ├── middleware/    # Custom middlewares
│   ├── models/        # Database schemas
│   ├── routes/        # API routes
│   ├── services/      # Business logic
│   └── utils/         # Helper utilities
│
├── app.js             # Application entry point
├── package.json
```
### Frontend Structure

```text
FRONTEND/
├── public/
│   └── index.html
│
├── src/
│   ├── api/           # API calls to backend
│   ├── components/    # Reusable UI components
│   ├── pages/         # Page-level components
│   ├── routing/       # Route definitions
│   ├── store/         # State management
│   ├── utils/         # Helper utilities
│   ├── index.css
│   ├── main.jsx
│   └── RootLayout.jsx
│
├── eslint.config.js
├── package.json
└── package-lock.json
```


---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/gargiverma017/MijiLink.git
cd MijiLink
```
### 2️⃣ Backend Setup
```bash
cd BACKEND
npm install
npm start
```

### 3️⃣ Frontend Setup
```bash
cd FRONTEND
npm install
npm run dev
```


Frontend runs on:
```bash
http://localhost:5173
```

## 🔐 Environment Variables

Create a .env file inside the BACKEND folder:
```bash
MONGO_URI=your_mongodb_connection_string
APP_URL=http://localhost:3000
JWT_SECRET="customkey"
```

## 🧪 How URL Shortening Works
```bash
User submits a long URL
Backend generates a unique short code
Short URL is stored in the database
Accessing the short URL redirects to the original URL
```

## 📌 Future Enhancements
```bash
User authentication and dashboards

URL analytics (click count, timestamps)

Custom alias support

URL expiration

Rate limiting and security improvements

Deployment with CI/CD
```
## 👩‍💻 Author

Gargi Verma

[@gargiverma017](https://www.github.com/gargiverma017)
