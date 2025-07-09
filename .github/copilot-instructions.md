# Copilot Instructions for AI Skill Tree Project

<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

## Project Overview
This is an AI-powered skill tree application with gamification, task management, and social features. The project includes:

- **Gamified Skill Tree System**: Random skill point generation with AI recommendations
- **Life Simulation**: 100-year timeline with configurable daily learning time
- **Skill Progression Levels**: 认识、了解、会用、熟悉、精通、大神
- **Task Management**: Notion-style interface integrated with skill trees
- **Social Circles**: Communities based on skills and tags
- **Note-taking System**: Flomo-style microblogging
- **AI Integration**: Age-based learning capacity recommendations

## Technology Stack
- **Frontend**: Next.js 15 with TypeScript, React 19, App Router
- **Styling**: Tailwind CSS v4
- **State Management**: Zustand (planned)
- **Database**: Prisma with PostgreSQL (planned)
- **AI Integration**: OpenAI API (planned)
- **Real-time**: Socket.io (planned)
- **Authentication**: NextAuth.js (planned)

## Code Style Guidelines
- Use TypeScript strict mode
- Follow React 19 best practices with Server Components
- Use Tailwind CSS for styling
- Implement responsive design (mobile-first)
- Use modern React patterns (hooks, suspense, etc.)
- Follow Next.js App Router conventions
- Use server actions for mutations
- Implement proper error boundaries

## Key Features to Implement
1. **Skill Tree Visualization**: Interactive tree with D3.js or similar
2. **Gamification Elements**: XP, levels, achievements, streaks
3. **AI Recommendations**: Skill suggestions based on user profile
4. **Task Management**: CRUD operations with Notion-like interface
5. **Social Features**: User circles, skill sharing, collaboration
6. **Note System**: Quick notes linked to skills and tasks
7. **Time Management**: Daily learning time tracking
8. **User Profiles**: Age, learning capacity, preferences

## Architecture Patterns
- Use Server Components for data fetching
- Implement Client Components for interactivity
- Use React Suspense for loading states
- Implement proper SEO optimization
- Use middleware for authentication
- Follow atomic design principles for components
