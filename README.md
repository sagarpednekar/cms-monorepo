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
```

##📁 Project Structure

```bash

apps/
  ├── web/             # Next.js frontend
  └── docs/            # Documentation site
packages/
  ├── ui/             # Shared UI components
  ├── database/       # Database schema & migrations
  ├── config/         # Shared configurations
  └── tsconfig/       # TypeScript configurations

```
###  🚄 Development Commands


```bash
# Run development server
pnpm dev

# Build all apps
pnpm build

# Run tests
pnpm test

# Lint code
pnpm lint

# Format code
pnpm format
```

## 🔧 Environment Variables

```bash
DATABASE_URL="postgresql://..."
NEXTAUTH_SECRET="your-secret"
NEXTAUTH_URL="http://localhost:3000"

```

## 🧪 Testing
```bash
# Run unit tests
pnpm test

# Run e2e tests
pnpm test:e2e
```

## 📈 Performance

- Optimized builds with Turborepo
- Server-side rendering for better SEO
- Automatic code splitting
- Image optimization
- API route optimization
## 🤝 Contributing
- Fork the repository
- Create feature branch (git checkout -b feature/- amazing-feature)
- Commit changes (git commit -m 'Add amazing feature')
-  Push to branch (git push origin feature/amazing-feature)
-  Open Pull Request

## 📄 License
MIT License

## 👥 Authors
- Sagar Pednekar(@sagarpednekar)

Made with ❤️ using Next.js and Turborepo 