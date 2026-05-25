<div align="center">

<!-- <img src="https://raw.githubusercontent.com/ayushi48/To-Do-List/main/public/preview.png" alt="To-Do List App Preview" width="100%" style="border-radius: 12px;" /> -->

<br/>
<br/>

# 📝 To-Do List — Productivity Dashboard

**A feature-rich task manager with calendar, reminders, focus timer, and theme customization — all running locally in your browser.**

<br/>

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-Visit_App-6366F1?style=for-the-badge)](https://github.com/ayushi48/To-Do-List)
[![React](https://img.shields.io/badge/React.js-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![LocalStorage](https://img.shields.io/badge/LocalStorage-Persistent_Data-10B981?style=for-the-badge)](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

</div>

---

## 📌 Project Overview

To-Do List is a **modern personal productivity dashboard** built with React.js and Tailwind CSS. It goes far beyond a basic task list — combining task management, calendar scheduling, focus timers, and UI customization into a single, fast, fully frontend-only application.

All data is persisted in the browser's **Local Storage**, meaning your tasks, priorities, and settings survive page refreshes and browser restarts — with zero backend or database required.

> 💡 **Best experienced on Desktop** for the full dashboard layout and feature set.

---

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/ayushi48/To-Do-List.git

# Navigate into the project
cd To-Do-List

# Install dependencies
npm install

# Start the development server
npm run dev
```

Then open **http://localhost:5173** in your browser.

---

## ✨ Features

### ✅ Task Management
- Add, edit, and delete tasks in seconds
- Mark tasks as **completed** or **important** with one click
- Filter tasks by status — All / Completed / Important / Pending
- Tasks sorted by date and priority automatically
- Visual indicators for overdue and high-priority tasks

### 📅 Calendar Integration
- Full **monthly calendar view** with tasks plotted on their due dates
- **Agenda-style list view** for a linear day-by-day breakdown
- Navigate between months, weeks, and individual days
- Tasks auto-populate on their respective calendar dates
- At-a-glance density view to spot busy vs free days

### ⏰ Reminders & Focus Tools
- **Today's Reminders** panel — never miss a due task
- Built-in **Stopwatch & Countdown Timer** for focused work sessions (Pomodoro-friendly)
- Dashboard stats panel showing:
  - 📋 Total tasks
  - ✅ Completed tasks
  - ⭐ Important tasks
  - ⏳ Remaining tasks

### 🎨 Settings & Customization
- Change **background colors and themes** to match your mood
- Smooth animated navigation between all sections
- Clean, colorful, and responsive card-based UI

---

## 🗂️ App Sections

| Section | Description |
|---|---|
| 🏠 **Home** | Dashboard overview with stats and daily motivation |
| ➕ **Add Task** | Create, schedule, and prioritize new tasks |
| ⏱️ **Focus** | Built-in stopwatch and countdown timer for deep work |
| 📋 **All Tasks** | Manage, filter, sort, and update your full task list |
| 📅 **Calendar** | Date-wise visual task layout with agenda view |
| ⚙️ **Settings** | Personalize themes, colors, and app preferences |

---

## 🛠️ Tech Stack

| Technology | Role |
|---|---|
| **React.js** | Component-based UI, state management, routing |
| **Tailwind CSS** | Utility-first styling, responsive layout, theming |
| **JavaScript (ES6+)** | App logic, filtering, date handling |
| **Local Storage API** | Persistent client-side task and settings storage |
| **Vite** | Lightning-fast dev server and build tool |

---

## 💾 Data Persistence

```
Browser Session 1  →  Add tasks, set priorities, customize theme
Browser Closed     →  All data saved to Local Storage
Browser Session 2  →  Everything exactly as you left it ✅
```

Everything stored locally means:
- ⚡ **Instant load** — no API calls or auth delays
- 🔒 **Private** — your data never leaves your device  
- 📴 **Offline-ready** — works without an internet connection
- 🔄 **Persistent** — survives refreshes, tab closes, and restarts

---

## 🗂️ Project Structure

```bash
To-Do-List/
├── public/
├── src/
│   ├── assets/
│   ├── assets copy/
│   ├── App.jsx
│   ├── Calender.jsx
│   ├── CardSwap.jsx
│   ├── ClockTools.jsx
│   ├── Footer.jsx
│   ├── Form.jsx
│   ├── Frontpage.jsx
│   ├── Important.jsx
│   ├── MainHeading.jsx
│   ├── Masonry.jsx
│   ├── Navbar.jsx
│   ├── OverallSetting.jsx
│   ├── ProductiveToolSection.jsx
│   ├── RollingGallery.jsx
│   ├── Setting.jsx
│   ├── Slice1.jsx
│   ├── Slice2.jsx
│   ├── StopWatch.jsx
│   ├── Store.jsx
│   ├── TaskStatusCards.jsx
│   ├── TaskSummeryCard.jsx
│   ├── Taskbox3.jsx
│   ├── Timer.jsx
│   ├── ToDo.jsx
│   ├── alltask.json
│   ├── home.json
│   ├── index.css
│   ├── main copy.jsx
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
└── vite.config.js
```
---

## 🔮 Roadmap

- [ ] 🔐 **User Authentication** — personalized accounts with sign-in
- [ ] ☁️ **Cloud / Database Sync** — tasks synced across all devices
- [ ] 🔔 **Push Notifications** — timely browser reminders for due tasks
- [ ] 🖱️ **Drag-and-Drop Reordering** — reorganize tasks intuitively
- [ ] 📱 **Mobile-Responsive UI** — optimized layout for phones and tablets
- [ ] 📲 **PWA Support** — installable app that works fully offline
- [ ] 🏷️ **Tags & Categories** — organize tasks by project or label
- [ ] 🔁 **Recurring Tasks** — daily, weekly, or monthly repeating tasks
- [ ] 📤 **Export Tasks** — download as CSV or PDF
- [ ] 📊 **Productivity Analytics** — weekly completion charts and streaks

---

## 👩‍💻 Author

<div align="center">

### Ayushi Kumari
**Frontend Developer · React Enthusiast · MERN Stack Developer**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/ayushi-kumari48/)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/ayushi48)

</div>

---

<div align="center">

**⭐ If this project helped or inspired you, please give it a star!**

*Built with React.js and Tailwind CSS — lightweight, fast, and fully frontend-only.*

</div>
