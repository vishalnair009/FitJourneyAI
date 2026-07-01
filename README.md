# 💪 FitJourney AI

> **Your Personal AI Fitness Coach**

FitJourney AI is an AI-powered fitness companion that helps users build healthier habits through personalized coaching, intelligent meal analysis, daily progress tracking, and motivational insights.

Built using **Next.js**, **TypeScript**, **Tailwind CSS**, **Zustand**, and **Google Gemini AI**.

---

## ✨ Features

### 🤖 AI Coach – Drona
- Personalized AI fitness coach
- Daily motivational briefing
- Nutrition guidance
- Fitness Q&A powered by Gemini AI

### 🍽 AI Meal Analysis
- Describe your meal in plain English
- Automatic calorie estimation
- Protein, carbs and fat breakdown
- Health score
- Personalized nutrition advice

### 📊 Dashboard
- Daily Progress
- Mission Tracker
- Weight Progress
- Daily Tracker
- Meal Summary
- AI Daily Brief

### 👤 User Profile
- Guided onboarding
- Fitness goal selection
- Weight tracking
- Persistent profile

### 💾 Persistent Storage
- User profile
- Daily progress
- Meal history

Everything is stored locally using Zustand Persist.

---

# 🖥 Screenshots

> Screenshots will be added in Version 1.0 Release.

- Welcome Screen
- Dashboard
- AI Chat
- Meal Analysis
- Dark Mode

---

# 🚀 Tech Stack

| Technology | Purpose |
|------------|---------|
| Next.js 16 | React Framework |
| React 19 | UI |
| TypeScript | Type Safety |
| Tailwind CSS | Styling |
| Zustand | State Management |
| Google Gemini AI | AI Coach & Meal Analysis |
| Vercel | Deployment |

---

# 🏗 Architecture

```
User

│

├── Onboarding

│

├── Dashboard

│      ├── Daily Progress
│      ├── Missions
│      ├── Weight Tracker
│      ├── Daily Tracker
│      └── Meal Summary

│

├── Drona AI

│      ├── Daily Brief
│      ├── AI Chat
│      └── Meal Analysis

│

└── Zustand Stores

       ├── User Store
       ├── Daily Store
       └── Meal Store
```

---

# 📂 Project Structure

```
app/
components/
    animations/
    chat/
    dashboard/
    meals/
    onboarding/
    ui/

store/
services/
public/
```

---

# ⚙ Installation

Clone the repository

```bash
git clone https://github.com/vishalnair009/FitJourneyAI.git
```

Go into the project

```bash
cd FitJourneyAI
```

Install dependencies

```bash
npm install
```

Create a `.env.local`

```env
GEMINI_API_KEY=YOUR_API_KEY
```

Run the application

```bash
npm run dev
```

Open

```
http://localhost:3000
```

---

# 🌐 Live Demo

**Vercel Deployment**

> Add your production URL here after release.

---

# 🛣 Roadmap

## ✅ Version 1.0

- AI Coach
- AI Daily Brief
- AI Meal Analysis
- Dashboard
- Daily Tracker
- Mission Tracker
- Weight Progress
- Persistent User Profile
- Dark Mode

---

## 🚀 Version 1.1

- Journey Timeline
- Achievements
- XP System
- Weekly AI Reports
- Weight Charts
- Streak Tracking

---

## 🚀 Version 1.2

- AI Workout Generator
- AI Meal Planner
- Camera Meal Recognition
- Voice Logging
- Smart Notifications

---

# 🤝 Contributing

Contributions, ideas and feedback are always welcome.

Feel free to fork the project and submit a Pull Request.

---

# 👨‍💻 Author

**Vishal Nair**

Manager – Presales

LUCID IT SOLUTIONS PVT LTD

GitHub

https://github.com/vishalnair009

---

# ⭐ If you like this project

Please consider giving it a ⭐ on GitHub.

It helps the project reach more developers and motivates future development.

---

## 📄 License

This project is licensed under the MIT License.