# Custom Resource App
<img width="1470" height="767" alt="Screenshot 2026-01-11 at 1 32 43 PM" src="https://github.com/user-attachments/assets/6ecce911-582b-479b-bbbd-17e89c6380a1" />
<img width="1462" height="830" alt="Screenshot 2026-01-11 at 1 32 51 PM" src="https://github.com/user-attachments/assets/7352170d-6680-4007-a0c6-7a22ae4a2289" />
<img width="1467" height="698" alt="Screenshot 2026-01-11 at 1 32 54 PM" src="https://github.com/user-attachments/assets/c432adfe-9c6d-4719-92c8-1529b74f84bb" />


## Description

This is a Shopify App built with React Router v7 (migrated from Remix) that demonstrates how to fetch and display Shopify resources like Products, Variants, and Collections. It uses the Shopify Admin GraphQL API to retrieve data and displays it using a custom Resource Picker component.

## Tech Stack

-   **Framework:** React Router v7
-   **Platform:** Shopify App (Node.js)
-   **Database:** SQLite (via Prisma)
-   **Styling:** Polaris (Shopify's Design System)
-   **Tooling:** Vite, Shopify CLI

## Prerequisites

-   Node.js (v18 or higher)
-   npm, yarn, or pnpm
-   A Shopify Partner account and a development store

## Installation

1.  Clone the repository.
2.  Install dependencies:

    ```bash
    npm install
    ```

## Running the App

To start the development server:

```bash
npm run dev
```

This command will start the Shopify CLI, which handles the local development environment, tunneling, and authentication. Press `p` in the terminal to open the app in your Shopify development store.

## Database Setup

This app uses Prisma with SQLite. To set up the database (generate client and run migrations):

```bash
npm run setup
```

## Deployment

To build the application for production:

```bash
npm run build
```

To start the production server:

```bash
npm run start
```
