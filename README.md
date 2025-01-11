# Shortener Project

<img src="https://i.ibb.co/55ktc1v/Shortener-Image.png" />

<a href="https://shorter-ac.vercel.app/">![Visitar](https://img.shields.io/badge/Visitar%20-%23F80000.svg?style=for-the-badge&logo=oracle&logoColor=white)</a>

---

## Overview

The **Shortener Project** is a URL shortener application that allows users to generate shortened links for long URLs. Built with modern web technologies, this project demonstrates full-stack development using:

- **Frontend**: ![React](https://img.shields.io/badge/React%20-%2361DAFB.svg?style=for-the-badge&logo=react&logoColor=black)
- **Backend**: ![Next.js](https://img.shields.io/badge/Next.js%20-%23000000.svg?style=for-the-badge&logo=next.js&logoColor=white)
- **Database**: ![Mysql](https://img.shields.io/badge/Mysql-%2314354C.svg?style=for-the-badge&logo=mysql&logoColor=white)

## Features

- Generate shortened URLs
- Track usage statistics for shortened links
- Responsive design for mobile and desktop
- Easy deployment with Vercel

---

## Getting Started

Follow the steps below to clone, install, and run the project locally.

### Prerequisites

- Node.js (v18 or later recommended)
- npm or yarn
- A Prisma-supported database (SQLite for development, PostgreSQL for production)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/AlexCode04/Shortener.git
   cd shortener-project
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add the following:
   ```env
   DATABASE_URL="<provider>://<username>:<password>@localhost:<port>/<database>
   ```
   Replace `your-database-connection-url` with the connection string for your Prisma database and `your-next-auth-secret` with a random secret key.

4. Initialize Prisma:
   ```bash
   npx prisma init
   npx prisma migrate dev --name init
   ```

   This creates the database schema and applies the initial migration.

5. Seed the database (optional):
   If your `prisma/seed.js` file exists, you can run:
   ```bash
   npx prisma db seed
   ```

### Running the Project

Start the development server:
```bash
npm run dev
# or
yarn dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

---

## Prisma Configuration

1. **Install Prisma CLI**:
   If Prisma is not already installed globally:
   ```bash
   npm install prisma --save-dev
   ```

2. **Schema Configuration**:
   Open `prisma/schema.prisma` and customize your database settings. Example for SQLite:
   ```prisma
    generator client {
      provider = "prisma-client-js"
    }
    
    datasource db {
      provider = "mysql"
      url      = env("DATABASE_URL")
    }
    
    model link {
      id        String   @id @default(cuid())
      url       String   @unique
      shortUrl  String   @unique
      createdAt DateTime @default(now())
      updatedAt DateTime @updatedAt
    }
   ```

3. **Generate Prisma Client**:
   ```bash
   npx prisma generate
   ```

4. **Run Migrations**:
   Apply schema changes with:
   ```bash
   npx prisma migrate dev
   ```

---

## Deployment

The project is configured to be deployed on **Vercel**.

1. Push your code to a GitHub repository.
2. Import the repository into Vercel.
3. Set up environment variables in the Vercel dashboard.
4. Deploy the project with a single click.

---

## Technologies Used

### Frontend
- React.js
- Tailwind CSS

### Backend
- Next.js
- Prisma ORM

### Database
- Mysql (development and production)

---

## Contributing

Contributions are welcome! Please fork the repository, make changes, and submit a pull request.

---

## License

This project is licensed under the MIT License.
