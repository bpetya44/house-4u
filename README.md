# Full Stack HOME 4U App with Next.js 13 App Router: React, Tailwind, Prisma, MongoDB, NextAuth

![Image ](https://user-images.githubusercontent.com)

This is a repository for a Full Stack Property App with Next.js 13 App Router: React, Tailwind, Prisma, MongoDB, NextAuth.

Features:

- Tailwind design
- Tailwind animations and effects
- Full responsiveness
- Credential authentication
- Google authentication
- Github authentication
- Image upload using Cloudinary CDN
- Client form validation and handling using react-hook-form
- Server error handling using react-toast
- Calendars with react-date-range
- Page loading state
- Page empty state
- Booking / Reservation system
- Guest reservation cancellation
- Owner reservation cancellation
- Creation and deletion of properties
- Pricing calculation
- Advanced search algorithm by category, date range, map location, number of guests, rooms and bathrooms
  - filter out properties that have a reservation in your desired date range to travel
- Favorites system
- Shareable URL filters
  - if you select a category, location and date range, you will be able to share URL with a logged out friend in another browser and they will see the same results

### Prerequisites

**Node version 14.x**

### Cloning the repository

```shell
git clone https://github.com/bpetya44/house-4u.git
```

### Install packages

```shell
npm i
```

### Setup .env file

- or you can fill in with your data the `.env.example` file and rename it to `.env`

```js
DATABASE_URL="mongodb+srv://<your-username>:<password>@cluster0.bqx0y8r.mongodb.net/test"
NEXTAUTH_SECRET="NEXTAUTH_SECRET"
GITHUB_ID=<your-github-id>
GITHUB_SECRET=<your-github-secret>
GOOGLE_CLIENT_ID=<your-google-client-id>
GOOGLE_CLIENT_SECRET=<your-google-client-secret>
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="<Your Cloud Name>"
```

### Setup Prisma

```shell
npx prisma db push

```

### Start the app

```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command | description                              |
| :------ | :--------------------------------------- |
| `dev`   | Starts a development instance of the app |
