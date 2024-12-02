# Cat Delivery

Welcome to Cat Delivery! This project consists of a NestJS backend, a Next.js frontend, and leverages Tailwind CSS for styling. It uses React Server Components with the App Router in Next.js.

## Monorepo Setup
This project uses Lerna to manage a monorepo with multiple packages -  the backend service (NestJS) and the frontend service (NextJS)


## Getting Started

To get started with Cat Delivery, you'll need to have Node.js (>= 18) and Yarn installed.

1. Clone the repository

       git clone https://github.com/yourusername/api-practice.git
       cd api-practice

2. Install Dependencies
   Run the following command to install all the dependencies for the monorepo:

	`yarn install`

### 3. Run Backend and Frontend Services

To run both the backend (NestJS) and frontend (Next.js) simultaneously, run :

`yarn dev` 

from the root.

Alternatively, you can run each service individually by navigating into their respective directories:

`cd packages/backend
yarn dev` 


`cd packages/frontend
yarn dev` 

### 4. Access the Application

Open your browser and navigate to:

`http://localhost:3000/welcome/<USER-ID>` 

Replace  `<USER-ID>`  with the specific user ID you want to use - e.g. ff535484-6880-4653-b06e-89983ecf4ed5
