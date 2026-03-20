# UGCSL – United Global Campus of Sri Lanka

A modern, professional university website built with React/TypeScript/Vite (frontend) and Node/Express/MongoDB (backend).

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite, React Router v6, Axios
- **Backend**: Node.js, Express, TypeScript, Mongoose
- **Database**: MongoDB

## Project Structure

```
Project-UGCS/
├── frontend/          # React/TypeScript/Vite app
│   └── src/
│       ├── components/   # Navbar, Footer
│       ├── pages/        # Home, About, Programs, Admissions, Research, News, Contact
│       ├── hooks/        # useApi (data fetching + form submission)
│       └── types/        # TypeScript interfaces
└── backend/           # Node/Express/TypeScript API
    └── src/
        ├── models/       # Contact, Program, News (Mongoose)
        └── routes/       # /api/contact, /api/programs, /api/news
```

## Getting Started

### Prerequisites
- Node.js 18+
- MongoDB running locally on port 27017

### Backend
```bash
cd backend
npm install
npm run dev        # Starts on http://localhost:5000
```

### Frontend
```bash
cd frontend
npm install
npm run dev        # Starts on http://localhost:5173
```

## Pages
| Route | Page |
|-------|------|
| `/` | Home – Hero, Faculties, Programs, Why UGCSL, News, CTA |
| `/about` | About – Mission/Vision, Campus, Timeline, Leadership |
| `/programs` | Programs – Searchable/filterable program listing |
| `/admissions` | Admissions – Intakes, Steps, Requirements, Scholarships |
| `/research` | Research – Centres, Stats, Collaboration |
| `/news` | News & Events |
| `/contact` | Contact – Form (saves to MongoDB) + Info |

## API Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/programs` | List all programs (auto-seeds on first run) |
| GET | `/api/news` | List all news (auto-seeds on first run) |
| POST | `/api/contact` | Submit contact form |
| GET | `/api/health` | Health check |
