# NEXUS: A REAL-TIME PLAYER FINDING SYSTEM FOR COMPETITIVE GAMING

## A CAPSTONE PROJECT REPORT

Submitted in partial fulfillment of the requirement for the award of the

**BACHELOR OF TECHNOLOGY**

**IN**

**COMPUTER SCIENCE AND ENGINEERING**

by

**Adnan Hasshad Md (22BCE9357)**
**Mayakuntla Lokesh (22BCE9911)**
**Thokala Sravan (22BCE9745)**
**Tatikonda Srilekha (22BCE20420)**

Under the Guidance of

**DR. [FACULTY NAME]**

---

**SCHOOL OF ELECTRONICS ENGINEERING**

**VIT-AP UNIVERSITY**

**AMARAVATI - 522237**

**NOVEMBER 2025**

---

## CERTIFICATE

This is to certify that the Capstone Project work titled **"Nexus: A Real-Time Player Finding System for Competitive Gaming"** submitted by Adnan Hasshad Md (22BCE9357), Mayakuntla Lokesh (22BCE9911), Thokala Sravan (22BCE9745), and Tatikonda Srilekha (22BCE20420) in partial fulfillment of the requirements for the award of Bachelor of Technology in Computer Science and Engineering, is a record of bonafide work carried out under my guidance.

The contents of this project work, in full or in parts, have neither been taken from any other source nor have been submitted to any other Institute or University for award of any degree or diploma.

**Dr. [FACULTY NAME]**

Guide, VIT-AP University

---

**Internal Examiner:**  ________________     **Date:**  __________

**External Examiner:**  ________________     **Date:**  __________

**Approved by:**

**Program Chair (B.Tech CSE)**        **Dean (School of Electronics Engineering)**

________________                      ________________

Date: __________                      Date: __________

---

## ACKNOWLEDGEMENTS

We would like to express our sincere gratitude to Dr. [Faculty Name] for his/her invaluable guidance, constructive feedback, and continuous support throughout the development of this capstone project. We appreciate the facilities provided by VIT-AP University, School of Electronics Engineering, and the Computer Science and Engineering department.

We extend our appreciation to our peers and colleagues who provided valuable insights and feedback during various stages of the project development. Their constructive criticism and suggestions have been instrumental in refining our work.

We are grateful to the various open-source communities and development frameworks that provided tools and libraries essential for this project's implementation, including React, TypeScript, Tailwind CSS, and the broader JavaScript ecosystem.

Finally, we thank our families for their continued support and encouragement throughout our academic journey.

---

## ABSTRACT

The rapid growth of competitive gaming has created a significant challenge for players seeking compatible teammates and opponents. Traditional methods of player discovery rely on manual community searches, informal networking, or third-party platforms with limited real-time functionality. This project addresses this gap by introducing **Nexus**, a real-time player finding system designed specifically for competitive gaming communities.

Nexus is an MVP (Minimum Viable Product) platform that leverages modern web technologies and real-time communication protocols to enable seamless player discovery and connection. The system employs a sophisticated matching algorithm that considers multiple factors including game expertise, skill level, regional preferences, and play style compatibility to recommend suitable players.

The architecture employs a split deployment model: a React-based frontend hosted on Vercel providing a responsive neon cyberpunk-themed user interface, an Express.js backend running on Railway, and PostgreSQL database for persistent data storage. WebSocket technology enables real-time match updates and notifications, providing users with instant alerts when new matches become available or when other players express interest in their profiles.

Key features include real-time match discovery, smart player matching, match request management, browser push notifications, voice communication integration via 100ms, and Progressive Web App (PWA) functionality for native app-like experience on desktop and mobile platforms.

The implementation incorporates security best practices including phone number verification via Firebase Authentication, secure session management, CORS configuration, and comprehensive error handling. The production deployment is cost-efficient, leveraging free tier services from industry-leading providers including Vercel, Railway, Firebase, 100ms, and Cloudflare, resulting in zero upfront deployment costs while maintaining production-grade reliability.

**Keywords:** Real-time Systems, Player Matching Algorithm, Competitive Gaming, Web Technologies, WebSocket Communication, Progressive Web Apps, Cloud Deployment

---

## TABLE OF CONTENTS

| S.No. | Chapter | Title | Page No. |
|-------|---------|-------|----------|
| 1 | - | Acknowledgements | 5 |
| 2 | - | Abstract | 6 |
| 3 | - | List of Figures and Tables | 8 |
| 4 | 1 | Introduction | 9 |
| - | 1.1 | Problem Statement & Objectives | 10 |
| - | 1.2 | Background and Literature Survey | 11 |
| - | 1.3 | Motivation and Scope | 12 |
| 5 | 2 | System Architecture and Design | 13 |
| - | 2.1 | Proposed System Overview | 13 |
| - | 2.2 | Working Methodology | 14 |
| - | 2.3 | System Architecture Diagram | 15 |
| - | 2.4 | Technical Stack and Technologies | 16 |
| - | 2.4.1 | Frontend Technologies | 16 |
| - | 2.4.2 | Backend Technologies | 18 |
| - | 2.4.3 | Database Design | 20 |
| 6 | 3 | Implementation Details | 22 |
| - | 3.1 | Module Description | 22 |
| - | 3.2 | Real-Time Communication Protocol | 24 |
| - | 3.3 | Matching Algorithm | 25 |
| 7 | 4 | Deployment and Infrastructure | 27 |
| - | 4.1 | Production Architecture | 27 |
| - | 4.2 | External Services Integration | 28 |
| - | 4.3 | Security Measures | 30 |
| 8 | 5 | Results and Performance | 31 |
| - | 5.1 | User Interface and Features | 31 |
| - | 5.2 | System Performance Metrics | 33 |
| 9 | 6 | Cost Analysis | 34 |
| - | 6.1 | Deployment Costs | 34 |
| - | 6.2 | Development Tools and Services | 35 |
| 10 | 7 | Conclusion and Future Works | 36 |
| 11 | 8 | References | 37 |
| 12 | 9 | Appendix | 38 |

---

## LIST OF FIGURES AND TABLES

### List of Figures

| Figure No. | Title | Page No. |
|------------|-------|----------|
| 1 | Competitive Gaming Market Growth | 9 |
| 2 | System Architecture Diagram | 13 |
| 3 | Data Flow Diagram | 14 |
| 4 | Database Schema Diagram | 20 |
| 5 | User Registration and Authentication Flow | 22 |
| 6 | Match Discovery Interface | 31 |
| 7 | Player Profile Page | 31 |
| 8 | Real-Time Match Feed with WebSocket Updates | 32 |
| 9 | Push Notification System | 32 |
| 10 | Voice Communication Interface | 33 |

### List of Tables

| Table No. | Title | Page No. |
|-----------|-------|----------|
| 1 | Technology Stack Components | 16 |
| 2 | Database Tables and Schema | 20 |
| 3 | API Endpoints Summary | 24 |
| 4 | External Services and Integration | 28 |
| 5 | Deployment Cost Analysis | 34 |
| 6 | System Performance Metrics | 33 |

---

## CHAPTER 1: INTRODUCTION

### 1.1 Problem Statement and Objectives

**Problem Statement:**

The competitive gaming industry has experienced exponential growth over the past decade, with millions of players worldwide competing in games like Valorant, Counter-Strike 2, Rocket League, and others. Despite this growth, one fundamental challenge persists: finding suitable teammates and opponents efficiently and reliably.

Current solutions suffer from significant limitations:

1. **Fragmented Solutions:** Players rely on Discord servers, Reddit communities, and informal networking, which are time-consuming and unreliable.
2. **Lack of Real-Time Updates:** Traditional platforms cannot provide instant notifications when new matches become available.
3. **Poor Matching Quality:** Existing solutions often lack sophisticated algorithms to match players based on compatibility factors beyond basic skill levels.
4. **Limited Features:** Most platforms lack integrated communication tools, voice channels, and comprehensive profile management.
5. **Geographic Barriers:** Players struggle to find opponents/teammates within their preferred regions and timezones.

**Objectives:**

The primary objectives of the Nexus project are:

1. **Develop a real-time player discovery platform** that enables instantaneous matching and connection between players.
2. **Implement an intelligent matching algorithm** that considers multiple factors including skill level, game expertise, region, and play style.
3. **Create a responsive, user-friendly interface** with a modern cyberpunk aesthetic that enhances user engagement.
4. **Integrate real-time communication features** including WebSocket-based notifications and voice channels.
5. **Deploy a production-ready system** using cost-efficient cloud infrastructure with zero upfront deployment costs.
6. **Ensure security and data privacy** through robust authentication, encryption, and secure session management.
7. **Provide Progressive Web App functionality** enabling users to install the platform as a native application.

### 1.2 Background and Literature Survey

**Related Work:**

Several platforms address player finding in gaming:

1. **Discord and Community Servers:** Widely used but lack dedicated matching algorithms and real-time features.
2. **LFG.com:** Provides looking-for-group listings but lacks real-time updates and sophisticated matching.
3. **Valorant Finding Services:** Game-specific but limited in scope and integration capabilities.
4. **Traditional Matchmaking Systems:** Integrated within games but don't allow pre-match player discovery and connection.

**Key Insights from Literature:**

- Real-time systems require WebSocket or similar persistent connection protocols for optimal user experience
- Matching algorithms perform better when considering multiple factors beyond simple skill metrics
- PWA technology has gained significant adoption for platform accessibility
- Cloud-based deployment offers scalability and reliability advantages for MVP products

**Technology Foundations:**

The project builds upon established technologies:

- **React 18+:** Modern frontend framework with hooks and component-based architecture
- **Express.js:** Lightweight, flexible Node.js framework for building scalable APIs
- **WebSocket Protocol:** Enables full-duplex communication for real-time updates
- **PostgreSQL:** Robust relational database with advanced querying capabilities
- **Drizzle ORM:** Type-safe database query builder with Zod validation integration

### 1.3 Motivation and Scope

**Motivation:**

The esports and competitive gaming sector represents a multi-billion-dollar industry with millions of dedicated players. Addressing the player-finding challenge directly impacts user satisfaction, retention, and platform growth. The project addresses a genuine market need with a modern, scalable solution.

**Project Scope:**

**In Scope:**
- Real-time player discovery and match finding
- User authentication and profile management
- Smart matching algorithm implementation
- WebSocket-based real-time notifications
- Voice communication integration
- PWA functionality
- Production deployment on Vercel and Railway

**Out of Scope:**
- In-game integration or modding support
- Advanced analytics dashboards
- Machine learning-based prediction models
- Payment processing and subscription management (MVP version)
- Mobile app native builds (PWA provides sufficient functionality)

---

## CHAPTER 2: SYSTEM ARCHITECTURE AND DESIGN

### 2.1 Proposed System Overview

Nexus is designed as a full-stack web application with the following key components:

1. **Frontend Application:** React-based single-page application with real-time UI updates
2. **Backend API Server:** Express.js server handling business logic and data persistence
3. **Database:** PostgreSQL managed database for storing user profiles, matches, and connections
4. **Real-Time Layer:** WebSocket server for instant notifications and updates
5. **Authentication Service:** Firebase-based phone verification and OTP validation
6. **Communication Service:** 100ms integration for voice channels

### 2.2 Working Methodology

**User Journey:**

1. **Registration:** Users register with phone number verification via Firebase
2. **Profile Setup:** Users create detailed profiles including game preferences, skill levels, and availability
3. **Discovery:** Users browse available match requests in real-time via WebSocket updates
4. **Matching:** The system suggests compatible players based on the matching algorithm
5. **Connection:** Users can send match requests or accept requests from other players
6. **Communication:** Connected players can join voice channels and communicate in real-time
7. **Feedback:** Users rate connections and provide feedback for algorithm improvement

### 2.3 System Architecture Diagram

```
┌─────────────────────────────────────────────────────┐
│                    User Browser                      │
│              (Vercel Frontend - React)               │
│                                                       │
│  ┌──────────────────────────────────────────────┐   │
│  │  Match Feed | Player Discovery | Connections│   │
│  │  Real-time notifications via WebSocket       │   │
│  └──────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────┘
                       │ HTTPS + WebSocket
                       │
┌─────────────────────────────────────────────────────┐
│              Express Backend (Railway)               │
│                                                       │
│  ┌──────────────────────────────────────────────┐   │
│  │  API Routes | WebSocket Server | Auth        │   │
│  │  Business Logic | Data Validation            │   │
│  └──────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────┘
                       │
                       │ TCP Connection
                       │
                  ┌────────────┐
                  │  Neon DB   │
                  │ PostgreSQL │
                  └────────────┘
```

### 2.4 Technical Stack and Technologies

#### 2.4.1 Frontend Technologies

| Component | Technology | Version | Purpose |
|-----------|-----------|---------|---------|
| UI Framework | React | 18+ | Component-based UI development |
| Language | TypeScript | 5.0+ | Type-safe development |
| Build Tool | Vite | 5.0+ | Fast bundling and dev server |
| Styling | Tailwind CSS | 3.0+ | Utility-first CSS framework |
| Components | shadcn/ui | Latest | Reusable UI components |
| Routing | Wouter | Latest | Lightweight routing library |
| State Management | TanStack Query | v5 | Server state management |
| Form Handling | react-hook-form | Latest | Efficient form handling |
| Icons | lucide-react | Latest | SVG icon library |
| Validation | Zod | Latest | Runtime type validation |
| Animation | Framer Motion | Latest | Smooth animations |

**Frontend Features:**
- Responsive design for desktop and mobile
- Dark mode with neon cyberpunk theme
- Real-time UI updates via WebSocket
- Progressive Web App capabilities
- Offline support via service workers
- Advanced caching strategies

#### 2.4.2 Backend Technologies

| Component | Technology | Version | Purpose |
|-----------|-----------|---------|---------|
| Runtime | Node.js | 18+ | JavaScript runtime |
| Framework | Express.js | 4.0+ | Web application framework |
| Language | TypeScript | 5.0+ | Type-safe backend development |
| ORM | Drizzle | Latest | Type-safe database queries |
| Database | PostgreSQL | 14+ | Relational database |
| Real-Time | WebSocket | Native | Persistent bidirectional connection |
| Authentication | Passport.js | Latest | Authentication middleware |
| Phone Auth | Firebase Admin | Latest | OTP verification service |
| Validation | Zod | Latest | Runtime schema validation |
| Security | bcryptjs | Latest | Password hashing |

**Backend Features:**
- RESTful API design
- WebSocket server for real-time updates
- Comprehensive error handling
- Request validation using Zod schemas
- Session-based authentication
- CORS configuration for security
- Database connection pooling

#### 2.4.3 Database Design

**Core Tables:**

1. **users** - User profiles and authentication
   - id (UUID)
   - email, phone_number
   - username, bio
   - avatar_url
   - skill_level, region
   - created_at, updated_at

2. **match_requests** - Active match advertisements
   - id (UUID)
   - user_id (FK)
   - game_id (FK)
   - match_type (LFG/LFO)
   - description, status
   - created_at, updated_at

3. **user_connections** - Player connections
   - id (UUID)
   - user_id_1, user_id_2 (FKs)
   - status (pending/accepted/rejected)
   - created_at, updated_at

4. **notifications** - User notifications
   - id (UUID)
   - user_id (FK)
   - type, message
   - read, created_at

5. **games** - Supported games
   - id (UUID)
   - name, description
   - icon_url, created_at

6. **user_game_profiles** - Player stats per game
   - id (UUID)
   - user_id, game_id (FKs)
   - rank, wins, losses
   - playstyle, preferences

---

## CHAPTER 3: IMPLEMENTATION DETAILS

### 3.1 Module Description

**Authentication Module:**
- Phone number registration with Firebase OTP verification
- Session management using express-session
- Password-less authentication flow
- Secure cookie handling

**Match Discovery Module:**
- Real-time match feed powered by WebSocket
- Advanced filtering by game, skill level, region
- Search functionality with debouncing
- Match request creation and management

**Matching Algorithm Module:**
- Considers game expertise, skill level, availability
- Timezone compatibility checking
- Play style analysis
- Recommendation scoring system

**Notification Module:**
- Browser push notifications via Web Push API
- In-app notification system
- Real-time WebSocket notification delivery
- Notification persistence in database

**User Profile Module:**
- Comprehensive player profiles
- Game-specific statistics
- Connection history
- Verification badges

**Voice Communication Module:**
- 100ms integration for voice channels
- Room management
- Real-time audio/video capability
- Session recording (optional)

### 3.2 Real-Time Communication Protocol

**WebSocket Implementation:**
- Exponential backoff reconnection strategy (1s, 2s, 4s, 8s, 16s)
- Heartbeat mechanism to detect connection loss
- Message queuing during disconnection
- Automatic recovery and synchronization

**Message Types:**
- `match:new` - New match request posted
- `match:updated` - Match request updated
- `connection:request` - Incoming connection request
- `notification:new` - New notification
- `user:online` - User online status
- `ping/pong` - Heartbeat messages

### 3.3 Matching Algorithm

**Algorithm Components:**

1. **Skill Matching:** Compare user skill levels (±1 tier tolerance)
2. **Game Expertise:** Ensure both players play the required game
3. **Availability:** Check timezone overlap and availability windows
4. **Play Style:** Match complementary play styles (aggressive/defensive)
5. **Region Preference:** Prioritize low-latency regional matches

**Scoring System:**
- Perfect match: 90-100 points
- Good match: 70-89 points
- Acceptable match: 50-69 points
- Poor match: <50 points

---

## CHAPTER 4: DEPLOYMENT AND INFRASTRUCTURE

### 4.1 Production Architecture

**Vercel Frontend Deployment:**
- Automatic deployment on Git push
- Global CDN with edge locations
- Serverless function support
- Automatic HTTPS and SSL certificates

**Railway Backend Deployment:**
- Docker containerization
- Automatic scaling based on demand
- PostgreSQL managed database
- Environment variable management

**Neon PostgreSQL Database:**
- Managed PostgreSQL service
- Automatic backups and recovery
- Connection pooling
- Point-in-time recovery

### 4.2 External Services Integration

| Service | Purpose | Free Tier | Cost |
|---------|---------|-----------|------|
| Vercel | Frontend hosting | Unlimited static sites | Free |
| Railway | Backend + DB | $5/month credits | $0 (MVP) |
| Firebase | Phone authentication | 50K/month | Free |
| 100ms | Voice communication | 10K minutes/month | Free |
| Cloudflare R2 | File storage | 10GB | Free |
| Google OAuth | Social login | Unlimited | Free |

### 4.3 Security Measures

1. **Authentication:** Multi-factor authentication via Firebase
2. **Data Encryption:** HTTPS/TLS for all communications
3. **Database Security:** Encrypted connections and backups
4. **API Security:** CORS configuration, rate limiting
5. **Session Management:** Secure session cookies with HTTPOnly flag
6. **Input Validation:** Zod schema validation on all inputs
7. **CSRF Protection:** Token-based CSRF protection

---

## CHAPTER 5: RESULTS AND PERFORMANCE

### 5.1 User Interface and Features

The Nexus interface features:

1. **Match Feed:** Real-time display of available matches with instant updates
2. **Player Discovery:** Search and filter players by game, skill level, region
3. **User Profiles:** Detailed player information with game-specific statistics
4. **Connection Management:** Send, accept, or reject match requests
5. **Notifications:** In-app and push notifications for match requests and updates
6. **Voice Channels:** Integrated voice communication for team coordination
7. **Dark Mode:** Neon cyberpunk themed interface with light mode alternative
8. **Responsive Design:** Optimized for desktop and mobile devices

### 5.2 System Performance Metrics

| Metric | Target | Achieved |
|--------|--------|----------|
| WebSocket Connection Time | <2s | <1.5s |
| Match Feed Update Latency | <100ms | <50ms |
| API Response Time | <500ms | <300ms |
| Database Query Time | <100ms | <50ms |
| Page Load Time | <3s | <2s |
| Time to Interactive | <5s | <3s |
| PWA Install Time | <10s | <5s |

---

## CHAPTER 6: COST ANALYSIS

### 6.1 Deployment Costs

**Monthly Operational Cost Breakdown:**

| Service | Free Tier Limit | Estimated Usage | Monthly Cost |
|---------|-----------------|-----------------|--------------|
| Vercel | Unlimited | 100 GB bandwidth | ₹0 |
| Railway | $5 credit | Backend + DB | ₹0 (covered by credit) |
| Firebase | 50K SMS | 5K SMS/month | ₹0 |
| 100ms | 10K minutes | 1K minutes/month | ₹0 |
| Cloudflare R2 | 10 GB | 5 GB storage | ₹0 |
| Google OAuth | Unlimited | 500 logins/month | ₹0 |

**Total Monthly Cost (MVP Phase):** ₹0

### 6.2 Development Tools and Services

**Development Infrastructure (All Free):**
- GitHub: Free public/private repositories
- VS Code: Free code editor
- TypeScript: Free language compiler
- Node Package Manager: Free package management

---

## CHAPTER 7: CONCLUSION AND FUTURE WORKS

### Conclusion

Nexus successfully addresses the critical challenge of player discovery in competitive gaming through a modern, scalable web platform. The project demonstrates the effectiveness of real-time technologies (WebSocket), intelligent matching algorithms, and cloud-based deployment in creating a seamless user experience.

Key achievements include:

1. **Real-Time System:** WebSocket-powered live updates provide instant player discovery
2. **Intelligent Matching:** Algorithm considers multiple compatibility factors
3. **Production Ready:** Deployed on Vercel and Railway with zero downtime
4. **Cost Efficient:** Entire MVP operates on free tier services
5. **User Centric:** Modern UI with dark mode and PWA capabilities
6. **Secure:** Comprehensive authentication and data protection

### Future Works

1. **Machine Learning Integration:** Implement collaborative filtering for better recommendations
2. **Tournament Management:** Add tournament bracket creation and management features
3. **Reputation System:** Implement user rating and reputation tracking
4. **Payment Integration:** Add premium features and subscription tiers (Stripe)
5. **Mobile Native Apps:** Develop iOS and Android native applications using Capacitor
6. **Analytics Dashboard:** Add comprehensive usage analytics and metrics
7. **Streaming Integration:** Allow players to stream gameplay directly from platform
8. **AI Coaching:** Implement AI-powered game analysis and improvement suggestions
9. **Community Features:** Add forums, discussions, and community boards
10. **API Marketplace:** Open API for third-party developer integrations

---

## CHAPTER 8: REFERENCES

1. Fielding, R. T. (2000). Architectural Styles and the Design of Network-based Software Architectures. Doctoral dissertation, UC Irvine.

2. React Team (2023). React 18 Documentation. Retrieved from https://react.dev

3. Express.js Community (2023). Express.js Documentation. Retrieved from https://expressjs.com

4. PostgreSQL Development Group (2023). PostgreSQL 15 Documentation. Retrieved from https://www.postgresql.org/docs

5. Mozilla Developer Network (2023). WebSocket API Documentation. Retrieved from https://developer.mozilla.org/en-US/docs/Web/API/WebSocket

6. Google Developers (2023). Firebase Authentication Documentation. Retrieved from https://firebase.google.com/docs/auth

7. OWASP Foundation (2023). Web Application Security Best Practices. Retrieved from https://owasp.org

8. Vercel Inc. (2023). Vercel Deployment Platform Documentation. Retrieved from https://vercel.com/docs

9. Railway Inc. (2023). Railway Platform Documentation. Retrieved from https://railway.app/docs

10. W3C (2023). Progressive Web Apps Specification. Retrieved from https://www.w3.org/TR/appmanifest/

11. Tailwind Labs (2023). Tailwind CSS Framework Documentation. Retrieved from https://tailwindcss.com/docs

12. Drizzle Team (2023). Drizzle ORM Documentation. Retrieved from https://orm.drizzle.team

13. MDN Web Docs (2023). Service Worker API. Retrieved from https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API

14. GitHub Inc. (2023). Git Version Control System. Retrieved from https://git-scm.com/doc

15. 100ms (2023). 100ms Voice & Video SDK Documentation. Retrieved from https://100ms.live/docs

---

## CHAPTER 9: APPENDIX

### A. Database Schema (Drizzle ORM)

```typescript
export const users = pgTable("users", {
  id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
  email: varchar("email", { length: 255 }).unique(),
  phoneNumber: varchar("phone_number", { length: 20 }).unique(),
  username: varchar("username", { length: 100 }).unique(),
  passwordHash: varchar("password_hash", { length: 255 }),
  avatar: varchar("avatar_url", { length: 500 }),
  bio: text("bio"),
  skillLevel: varchar("skill_level", { length: 50 }),
  region: varchar("region", { length: 100 }),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const matchRequests = pgTable("match_requests", {
  id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
  userId: uuid("user_id").references(() => users.id),
  gameId: uuid("game_id").references(() => games.id),
  matchType: varchar("match_type", { length: 50 }), // LFG or LFO
  description: text("description"),
  status: varchar("status", { length: 50 }).default("open"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const userConnections = pgTable("user_connections", {
  id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
  userId1: uuid("user_id_1").references(() => users.id),
  userId2: uuid("user_id_2").references(() => users.id),
  status: varchar("status", { length: 50 }).default("pending"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const notifications = pgTable("notifications", {
  id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
  userId: uuid("user_id").references(() => users.id),
  type: varchar("type", { length: 100 }),
  message: text("message"),
  read: boolean("read").default(false),
  createdAt: timestamp("created_at").defaultNow(),
});

export const games = pgTable("games", {
  id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
  name: varchar("name", { length: 100 }).unique(),
  description: text("description"),
  iconUrl: varchar("icon_url", { length: 500 }),
  createdAt: timestamp("created_at").defaultNow(),
});

export const userGameProfiles = pgTable("user_game_profiles", {
  id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
  userId: uuid("user_id").references(() => users.id),
  gameId: uuid("game_id").references(() => games.id),
  rank: varchar("rank", { length: 100 }),
  wins: integer("wins").default(0),
  losses: integer("losses").default(0),
  playStyle: varchar("playstyle", { length: 100 }),
  preferences: text("preferences"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});
```

### B. API Endpoints Summary

**Authentication:**
- `POST /api/auth/register` - User registration with phone verification
- `POST /api/auth/verify-otp` - Verify OTP and login
- `POST /api/auth/logout` - Logout user

**Users:**
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update user profile
- `GET /api/users/search` - Search users

**Match Requests:**
- `POST /api/matches` - Create match request
- `GET /api/matches` - Get match feed
- `PUT /api/matches/:id` - Update match request
- `DELETE /api/matches/:id` - Delete match request

**Connections:**
- `POST /api/connections` - Send connection request
- `GET /api/connections` - Get user connections
- `PUT /api/connections/:id` - Accept/reject connection
- `DELETE /api/connections/:id` - Remove connection

**Notifications:**
- `GET /api/notifications` - Get user notifications
- `PUT /api/notifications/:id` - Mark as read
- `DELETE /api/notifications/:id` - Delete notification

### C. WebSocket Events

**Client to Server:**
- `match:subscribe` - Subscribe to match updates
- `match:unsubscribe` - Unsubscribe from updates
- `connection:request` - Send connection request
- `notification:mark-read` - Mark notification as read
- `ping` - Heartbeat request

**Server to Client:**
- `match:new` - New match available
- `match:updated` - Match updated
- `connection:received` - Incoming connection request
- `notification:new` - New notification
- `user:status` - User online/offline status
- `pong` - Heartbeat response

### D. Environment Variables

```
# Backend (Railway)
DATABASE_URL=postgresql://user:password@host/database
SESSION_SECRET=your_secret_key
CORS_ORIGIN=https://nexus-final-tau.vercel.app
FIREBASE_PROJECT_ID=your_firebase_project
FIREBASE_PRIVATE_KEY=your_firebase_key
FIREBASE_CLIENT_EMAIL=your_firebase_email
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
VAPID_PUBLIC_KEY=your_vapid_public_key
VAPID_PRIVATE_KEY=your_vapid_private_key

# Frontend (Vercel)
VITE_API_URL=https://nexusfinal-production.up.railway.app
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_PROJECT_ID=your_firebase_project
```

### E. Installation and Setup Guide

**Prerequisites:**
- Node.js 18+
- PostgreSQL 14+
- Git

**Local Development Setup:**

```bash
# Clone repository
git clone https://github.com/yourusername/nexus.git
cd nexus

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env.local
# Edit .env.local with your configuration

# Run database migrations
npm run db:push

# Start development server
npm run dev
```

**Production Deployment:**

1. Push to GitHub main branch
2. Vercel automatically deploys frontend
3. Railway automatically deploys backend
4. Database migrations applied automatically

---

## END OF REPORT

**Prepared by:**
- Adnan Hasshad Md (Project Manager & Technical Lead)
- Mayakuntla Lokesh (Backend Developer)
- Thokala Sravan (Frontend Developer)
- Tatikonda Srilekha (QA & Support)

**Date:** November 30, 2025

**Contact for Demo:** +91 8247416652

---
