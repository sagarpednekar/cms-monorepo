# Modern CMS Monorepo

A powerful, full-stack CMS application built with modern technologies and monorepo architecture.

## 🚀 Tech Stack

- **Framework:** Next.js 15+ with App Router
- **Database:** PostgreSQL with Prisma ORM
- **Styling:** Ant Design (antd)
- **Monorepo:** Turborepo
- **Language:** TypeScript
- **Form Handling:** React Forms
- **Server Actions:** React Server Actions
- **Authentication:** NextAuth.js
- **State Management:** React Context + Hooks

## ✨ Features

- Monorepo architecture with shared packages
- Type-safe database operations
- Server-side rendering
- Modern form handling
- Responsive UI components
- Role-based access control
- Real-time data updates
- Optimized build system

## 🛠️ Installation

```bash
# Clone the repository
git clone <repository-url>

# Install dependencies
pnpm install

# Setup environment variables
cp .env.example .env

# Setup database
pnpm db:push

# Run development server
pnpm dev