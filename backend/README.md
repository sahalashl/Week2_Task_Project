# Backend - Freelance Job Platform

## Setup
1. Copy `.env.example` to `.env` and set MONGO_URI and JWT_SECRET
2. Install dependencies: `npm install`
3. Run locally: `npm run dev` (requires nodemon) or `npm start`

## Endpoints
- POST /api/auth/signup
- POST /api/auth/login
- GET /api/auth/profile (protected)
- GET /api/auth/check-admin (protected, admin)
