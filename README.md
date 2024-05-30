# Homemark Seller Portal

A fully responsive real estate app made with NextJs 13 (app router), PostgresDB, Next-Auth and Docker.

- **[NextJs](https://nextjs.org/)** (13.4.x)
- **[Docker](https://docs.docker.com/desktop/install/mac-install/)**
- **[React](https://facebook.github.io/react/)** (18.x)
- **[Next-Auth](https://next-auth.js.org/)** (4.x)
- **[Typescript](https://www.typescriptlang.org/)** (5.x)

## Features

- Login Page
- Site Map
- Forms

## Installation

### Setup Project

1. Clone/download repo
2. Create a file called .env.local in the root directory of your project, type the following in cmd/powershell
   ```
   cp env.example .env.local
   ```
3. Inside the `.env` file, add the Postgres Credentials from the previous steps
4. `yarn install` to install the dependencies (run `npm install yarn` if you don't have yarn installed)
5. `yarn prisma db push` to create the DB collections
6. `prisma generate` to create the prisma client

### Setup Postgres
1. Open Docker Desktop App
2. Run Command
   ```
   docker-compose up
   ```
3. Migrate Database
   ```
   npx prisma migrate dev —name init
   ```
4. Seed Database
   ```
   npx prisma db seed
   ```

## Usage

**Development**

`yarn dev`

- Build app continuously (HMR enabled)

**Production**

`yarn build`
`yarn start`

- Build app once (HMR disabled) to `/.next/`

---

**All commands**

| Command      | Description                                |
| ------------ | ------------------------------------------ |
| `yarn dev`   | Build app continuously (HMR enabled)       |
| `yarn build` | Build app once (HMR disabled) to `/.next/` |
| `yarn start` | Run production build                       |

## See also
- Project was bootstrapped with [create-next-app](https://nextjs.org/docs/api-reference/create-next-app)
