# Pokemon Task

A modern Pokemon application built with React Router, TypeScript, and TailwindCSS.

## Features

- ⚡️ Hot Module Replacement (HMR)
- 📦 Asset bundling and optimization
- 🔄 Data loading and mutations
- 🔒 TypeScript by default
- 🎉 TailwindCSS for styling
- 📖 [React Router docs](https://reactrouter.com/)
- 📱 Responsive design
- 🚀 Infinite scroll and pagination

## Getting Started

### Prerequisites

- Node.js
- pnpm (recommended package manager)

### Installation

Install the dependencies:

```bash
pnpm install
```

Or use the task runner:

```bash
task install
```

### Development

Start the development server with HMR:

```bash
pnpm run dev
```

Or use the task runner:

```bash
task start
```

Your application will be available at `http://localhost:5173`.

## Available Scripts

### Package.json Scripts

- `pnpm run dev` - Start development server
- `pnpm run build` - Build for production
- `pnpm run start` - Start production server
- `pnpm run typecheck` - Run TypeScript type checking
- `pnpm run lint` - Run linting with oxlint
- `pnpm run lint:fix` - Run linting with auto-fix

### Task Runner Commands

- `task start` - Start app in dev mode
- `task install` - Install all dependencies
- `task build` - Build project and start production server
- `task lint` - Lint code, format, and type check TypeScript

## Building for Production

Create a production build:

```bash
pnpm run build
```

Or use the task runner:

```bash
task build
```

## Deployment

### Docker Deployment

To build and run using Docker:

```bash
docker build -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

---

Built with ❤️ using React Router.
