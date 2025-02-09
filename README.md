# Reddit Clone

This is a Reddit Clone built using Next.js, Prisma, and MongoDB, allowing users to create subreddits, submit posts, and engage in discussions.

## Features
- Google authentication with NextAuth
- Dynamic subreddit creation and management
- User-friendly post submission and commenting system
- Image uploads with @uploadthing/react
- Styled with Material-UI (MUI) and CSS files

## Tech Stack
- **Frontend:** Next.js, Material-UI (MUI), CSS
- **Backend:** Next.js API routes, Prisma, MongoDB
- **Authentication:** NextAuth.js (Google OAuth)
- **File Uploads:** @uploadthing/react

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/HarshalPatel21/Reddit-Clone.git
   ```
2. Navigate to the project directory:
   ```sh
   cd Reddit-Clone
   ```
3. Install dependencies:
   ```sh
   yarn install
   ```
4. Set up environment variables:
   Create a `.env` file in the root directory and add the required values:
   ```env
   DATABASE_URL=
   
   NEXTAUTH_SECRET=
   NEXTAUTH_URL=
   GOOGLE_CLIENT_ID=
   GOOGLE_CLIENT_SECRET=
   
   UPLOADTHING_SECRET=
   UPLOADTHING_APP_ID=
   UPLOADTHING_TOKEN=

   REDIS_URL=
   REDIS_SECRET=
   ```
5. Run database migrations:
   ```sh
   yarn prisma migrate dev
   ```
6. Start the development server:
   ```sh
   yarn dev
   ```

## Folder Structure
```
Reddit-Clone/
│-- prisma/               # Prisma schema & migrations
│-- public/               # Static assets
│-- src/
│   ├── app/              # Next.js pages & API routes
│   ├── components/       # Reusable UI components
│   ├── styles/           # CSS stylesheets
│   ├── utils/            # Helper functions
│-- next.config.js        # Next.js configuration
│-- package.json          # Project dependencies
│-- .env                  # Environment variables
```

