# NEXUS Gaming Platform

## Overview
NEXUS is a real-time player finding system for competitive gamers. It solves the fragmented gaming ecosystem problem by providing a unified platform for:
- Finding teammates (LFG - Looking for Group)
- Finding opponents (LFO - Looking for Opponent)
- Real-time match discovery
- Integrated voice communication
- Player portfolios and profiles

## Tech Stack
- **Frontend**: React 18.3.1, TypeScript, Vite, Tailwind CSS, TanStack Query, Wouter
- **Backend**: Express.js 4.21.2, TypeScript, Node.js 20 LTS
- **Database**: PostgreSQL (Neon), Drizzle ORM
- **Authentication**: Google OAuth 2.0, Firebase Phone OTP, Passport.js
- **Real-time**: WebSocket (ws library)
- **Voice**: 100ms Voice SDK
- **Storage**: Cloudflare R2

## Project Structure
```
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # UI components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom React hooks
│   │   └── lib/            # Utilities and services
├── server/                 # Express.js backend
│   ├── index.ts            # Server entry point
│   ├── routes.ts           # API routes
│   ├── auth.ts             # Authentication logic
│   └── services/           # External service integrations
├── shared/                 # Shared types and schema
│   └── schema.ts           # Drizzle ORM schema
├── attached_assets/        # Documentation and assets
│   ├── NEXUS_CAPSTONE_REPORT_*.md  # Capstone report
│   └── generated_images/   # Professional diagram images
└── drizzle.config.ts       # Database configuration
```

## Recent Changes (December 2025)

### Capstone Report Updates
- Replaced 10 ASCII art diagrams with professional generated images
- Updated all 9 UI figure references with new screenshots
- Created backup of original report (version1)
- Figure numbering updated (1-15) for proper document flow

### Generated Diagram Images
Located in `attached_assets/generated_images/`:
1. `nexus_core_features_overview.png` - Core features diagram
2. `problem_vs_solution_comparison.png` - Problem vs Solution comparison
3. `complete_system_architecture_diagram.png` - Full system architecture
4. `user_journey_flowchart.png` - 5-step user journey
5. `technology_stack_overview.png` - Tech stack visualization
6. `three-tier_architecture_layers.png` - Three-tier architecture
7. `database_er_schema_diagram.png` - Database ER diagram
8. `websocket_communication_flow.png` - WebSocket real-time flow
9. `deployment_architecture_diagram.png` - Deployment architecture
10. `performance_metrics_dashboard_infographic.png` - Performance dashboard

## Development Commands
```bash
npm run dev          # Start development server
npm run db:push      # Push schema changes to database
npm run db:studio    # Open Drizzle Studio
```

## Deployment
- **Frontend**: Vercel (280+ edge nodes globally)
- **Backend**: Railway (containerized deployment)
- **Database**: Neon PostgreSQL (serverless, auto-scaling)

## Environment Variables Required
- `DATABASE_URL` - PostgreSQL connection string
- `SESSION_SECRET` - Session encryption key
- `GOOGLE_CLIENT_ID` / `GOOGLE_CLIENT_SECRET` - Google OAuth
- `HMS_APP_ACCESS_KEY` / `HMS_APP_SECRET` - 100ms Voice SDK
- `R2_*` variables - Cloudflare R2 storage

## User Preferences
- Professional documentation with generated images (no ASCII art)
- Clean, modern UI design
- Real-time updates < 100ms latency
- Mobile-first responsive design
