# System Patterns: ExpiryGuard

## System Architecture
- **Frontend:** React (functional components, hooks)
- **Routing:** React Router for client-side navigation
- **State Management:** useState/useEffect for local state; React Query for async data (planned/partial)
- **UI:** Custom components with Tailwind CSS utility classes
- **Component Structure:** Modular, with separation for navigation, sections, dashboard, and UI primitives

## Key Technical Decisions
- Use of React Router for SPA navigation
- Modular page structure for scalability (pages for inventory, products, categories, users, etc.)
- Placeholder and scaffolded pages for future features
- Consistent use of a modern, accessible UI library (Tailwind)

## Design Patterns
- Container/presentational split for dashboard pages
- Reusable Button, Input, Card, and other UI primitives
- Responsive design with mobile-first breakpoints
- Semantic HTML and ARIA where appropriate

## Component Relationships
- Navigation and Footer are global layout components
- Each dashboard page is a standalone route/component
- Shared UI primitives are imported across pages
- Logo and branding are reused in navigation, footer, and dashboard headers 