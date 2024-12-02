# Cat Delivery

Welcome to Cat Delivery! This project consists of a NestJS backend, a Next.js frontend, and leverages Tailwind CSS for styling. It uses React Server Components with the App Router in Next.js.

## Monorepo Setup
This project uses Lerna to manage a monorepo with multiple packages -  the backend service (NestJS) and the frontend service (NextJS)


## Getting Started

To get started with Cat Delivery, you'll need to have Node.js (>= 18), Yarn, and Lerna installed.

1. Clone the repository
   git clone https://github.com/yourusername/api-practice.git
   cd api-practice
2. Install Dependencies
   Run the following command to install all the dependencies for the monorepo:

yarn install 

3. Run Both Backend and Frontend in Parallel
To run both the backend (NestJS) and frontend (Next.js) services in parallel, use:

yarn dev
Otherwise just cd into each folder (packages/**) and run yarn dev from there

Head to localhost:3000/<USER-ID> with a specified userID
