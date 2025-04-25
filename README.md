# ExpiryGuard

ExpiryGuard is a SaaS web application designed to help businesses automate expiry date management, reduce product waste, and optimize inventory. The platform provides smart alerts, FEFO/FIFO inventory management, automatic discounting, real-time analytics, and user/company management—all in a modern, responsive dashboard.

## Features
- Smart, customizable alerts for expiring products
- FEFO/FIFO inventory management
- Automatic discounting as products approach expiry
- Real-time analytics and reporting
- User and company management
- Modern, responsive UI for both desktop and mobile

## Technologies Used
- React (with functional components and hooks)
- Vite
- TypeScript
- Tailwind CSS
- shadcn-ui
- Lucide-react (icons)
- React Router

## Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- npm or yarn

### Installation
```sh
# Clone the repository
git clone <YOUR_GIT_URL>
cd expiry-guard-alerts-now

# Install dependencies
npm install
# or
yarn install

# Start the development server
npm run dev
# or
yarn dev
```

The app will be available at http://localhost:5173 (or the port shown in your terminal).

## Project Structure
- `src/pages/` — Main app pages (Dashboard, Inventory, Products, Categories, Users, Reports, Settings, Auth, etc.)
- `src/components/` — Reusable UI components
- `memory-bank/` — Project documentation and context

## Deployment
This project is ready to deploy on Vercel, Netlify, or any static hosting provider that supports React/Vite.

### Deploying to Vercel
1. Push your code to GitHub.
2. Import your repo into Vercel: https://vercel.com/
3. Set the build command to `npm run build` and the output directory to `dist`.
4. Deploy!

## Customization
- Update branding, colors, and logo in `src/components/logo.tsx` and Tailwind config.
- Add backend/API integration as needed for production use.

## License
MIT
