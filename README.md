# fastify-prisma-api

## Overview

This project is a backend application built with Node.js, TypeScript, Prisma, and Fastify. It includes various features such as user management and post handling with a clean MVC architecture. The project uses DTOs and Zod for validation, and Prisma for database management.

## Project Structure

```
/your-project
│
├── /dist/                      # Compiled JavaScript
├── /node_modules/              # Dependencies
├── /prisma/                    # Prisma schema & migrations
├── /src/                       # Source code
│   ├── /config/                # Config files
│   ├── /controllers/           # Route handlers
│   ├── /dtos/                  # DTOs & validation
│   ├── /services/              # Business logic
│   ├── /routes/                # Route definitions
│   └── index.ts                # Entry point
│
├── .env                        # Environment variables
├── .gitignore                   # Git ignore file
├── package.json                 # NPM configuration
├── tsconfig.json                # TypeScript config
└── README.md                    # Project overview
```

## Setup

1. **Clone & Install:**

   ```bash
   git clone https://github.com/your-username/your-project.git
   cd your-project
   npm install
   ```

2. **Configure:**

   ```bash
   cp .env.example .env
   ```

3. **Migrate & Seed:**

   ```bash
   npx prisma migrate dev
   npx ts-node prisma/seed.ts  # Optional
   ```

4. **Run:**

   ```bash
   npm run build
   npm start
   ```

   For development:

   ```bash
   npm run dev
   ```

## API Endpoints

- **Users:**
  - `POST /users` - Create
  - `GET /users/:id` - Read
  - `PUT /users/:id` - Update
  - `DELETE /users/:id` - Delete

- **Posts:**
  - `POST /users/:userId/posts` - Create
  - `GET /users/:userId/posts` - Read

## Error Handling

Centralized error handler for user-friendly messages and logging.
