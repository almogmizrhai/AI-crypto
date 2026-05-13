# AI Crypto Advisor 🚀

A personalized crypto investor dashboard built with React, Node.js, Express, and MongoDB.

The app allows users to:
- Register and login securely
- Complete a personalized onboarding flow
- Track crypto prices
- View personalized crypto news
- Receive AI-generated crypto insights
- Vote on dashboard content
- Enjoy fun crypto memes

---
# Project Structure

```txt
AI-Crypto-Advisor/
│
├── client/
│   ├── src/
│   │   ├── assets/
│   │   ├── cmps/
│   │   │   ├── DashboardHeader.jsx
│   │   │   ├── CoinSection.jsx
│   │   │   ├── NewsSection.jsx
│   │   │   ├── InsightSection.jsx
│   │   │   ├── MemeSection.jsx
│   │   │   ├── VoteButtons.jsx
│   │   │   ├── Navbar.jsx
│   │   │   └── ProtectedRoute.jsx
│   │   │
│   │   ├── context/
│   │   │   └── AuthContext.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── LoginPage.jsx
│   │   │   ├── SignupPage.jsx
│   │   │   ├── OnBoardingPage.jsx
│   │   │   └── DashboardPage.jsx
│   │   │
│   │   ├── services/
│   │   │   ├── auth.service.js
│   │   │   ├── dashboard.service.js
│   │   │   ├── onboarding.service.js
│   │   │   ├── vote.service.js
│   │   │   └── util.service.js
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── main.css
│   │
│   ├── package.json
│   └── vite.config.js
│
├── server/
│   ├── src/
│   │   ├── config/
│   │   │   └── db.js
│   │   │
│   │   ├── models/
│   │   │   ├── User.js
│   │   │   └── Vote.js
│   │   │
│   │   ├── routes/
│   │   │   ├── auth.routes.js
│   │   │   ├── onboarding.routes.js
│   │   │   ├── vote.routes.js
│   │   │   └── ai.routes.js
│   │   │
│   │   └── server.js
│   │
│   ├── .env
│   ├── package.json
│   └── nodemon.json
│
├── README.md
└── .gitignore
```

# Features

## Authentication
- Signup / Login
- JWT Authentication
- Protected Routes
- Persistent Login

## Personalized Onboarding
Users can choose:
- Favorite crypto assets
- Investor type
- Preferred content types

## Dashboard
- Real-time crypto prices (CoinGecko API)
- Personalized news feed
- AI-generated insights
- Crypto memes
- Voting system

---

# Tech Stack

## Frontend
- React
- React Router
- Axios
- CSS Grid

## Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT Authentication

## APIs
- CoinGecko API
- OpenRouter AI API

---

# Installation

## 🚀 Quick Start

1. Install dependencies:
```bash
npm install
```

2. Start the server:
```bash
npm run dev     # Development mode with hot reload
npm start       # Production mode
```
3. Start the client:
```bash
npm run dev
```