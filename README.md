# Invoice Server

A secure, scalable, and extensible API for managing invoices and users, built with [NestJS](https://nestjs.com/), [Prisma ORM](https://www.prisma.io/), and PostgreSQL.

## Features

- **JWT Authentication**: Secure login and protected endpoints.
- **User Management**: User registration and authentication (extendable).
- **Invoice Management**: CRUD operations for invoices, linked to users.
- **Validation & Security**: Input validation, password hashing, and best practices.
- **Testing**: Includes E2E and unit test setup.
- **Modern TypeScript**: Strict typing, decorators, and latest ECMAScript features.

## Getting Started

### Prerequisites

- Node.js (v20+ recommended)
- PostgreSQL database
- [Yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/)

### Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/JokeryEU/invoice-server.git
   cd invoice-server
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Configure environment variables**

   Copy `.env.example` to `.env` and update values as needed:

   ```bash
   cp .env.example .env
   ```

   - `DATABASE_URL`: PostgreSQL connection string
   - `JWT_SECRET`: Secret for signing JWT tokens
   - `PORT`: (optional) API server port

4. **Generate Prisma client**

   ```bash
   npx prisma generate
   ```

5. **Run database migrations**

   ```bash
   npx prisma migrate deploy
   ```

6. **Seed the database (optional)**

   ```bash
   npm run prisma:seed
   # or
   npx ts-node ./prisma/seed.ts
   ```

### Running the Application

- **Development**

  ```bash
  npm run start:dev
  ```

- **Production**

  ```bash
  npm run build
  npm run start:prod
  ```

### API Overview

- **Auth**

  - `POST /auth/login` — Login with email and password, returns JWT.

- **Invoices** (JWT required)
  - `GET /invoice` — List all invoices for the authenticated user.
  - `GET /invoice/:id` — Get a specific invoice by ID.

> Extend endpoints as needed for full CRUD and user management.

### Testing

- **Unit tests**

  ```bash
  npm run test
  ```

- **E2E tests**

  ```bash
  npm run test:e2e
  ```

- **Coverage**

  ```bash
  npm run test:cov
  ```

### Code Quality

- **Lint**

  ```bash
  npm run lint
  ```

- **Format**

  ```bash
  npm run format
  ```

## Project Structure

- `src/` — Main application source (modules, controllers, services)
- `prisma/` — Prisma schema, migrations, and seed scripts
- `test/` — E2E and unit tests

## Extending

- Add new modules using NestJS CLI: `nest g module <name>`
- Add new Prisma models and run `npx prisma migrate dev`
- Implement additional endpoints and guards as needed

## Security

- Passwords are hashed with bcrypt.
- JWT secrets and DB credentials must be kept secure.
- All invoice endpoints are protected by JWT guard.

## License

[MIT](LICENSE)

---

**Author:** Mihai Ivanov ([mihai.ivanov.dev@gmail.com](mailto:mihai.ivanov.dev@gmail.com))  
**Website:** [https://mihai-ivanov.com](https://mihai-ivanov.com)
