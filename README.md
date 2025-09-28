# Grub Give Back

Welcome to Grub Give Back, a modern web application designed to connect restaurants with surplus food to communities and individuals in need. This platform facilitates the process of food donation, making it easy for restaurants to contribute and for organizations to find available resources.

## ✨ Key Features

- **Browse Restaurants**: Discover participating restaurants and their available donations.
- **Real-time Donation Listings**: View up-to-date information on available food items.
- **Seamless Donation Process**: An intuitive workflow for both donating and receiving.
- **User Authentication**: Secure sign-up and login for restaurants and organizations.
- **Responsive Design**: A clean, accessible, and mobile-friendly user interface built with shadcn/ui.

## 🚀 Tech Stack & Architecture

This project leverages a modern, industry-standard tech stack to deliver a robust and scalable frontend experience.

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![shadcn/ui](https://img.shields.io/badge/shadcn/ui-000000?style=for-the-badge&logo=shadcn-ui&logoColor=white)

## 📈 User Workflow

The following diagram illustrates the primary user journey within the Grub Give Back application.

```mermaid
flowchart TD
    A[Start] --> B{User Visits Site};
    B --> C[Views Homepage];
    C --> D{Existing User?};
    
    D -- No --> E[Signs Up];
    D -- Yes --> F[Logs In];
    
    E --> G[User Dashboard];
    F --> G;
    
    G --> H[Browse Restaurants];
    G --> I[View Donation Requests];
    
    H --> J[Selects a Restaurant];
    J --> K[Views Available Donations];
    
    I --> L[Selects a Request];
    L --> M[Fulfills Request];
    
    K --> N[Claims a Donation];
```

## 🔄 Application & Data Flow

This diagram outlines the internal data flow, from data source to UI rendering.

```mermaid
graph TD
    subgraph "Data Layer"
        A1["/src/data/restaurants.ts<br>(Mock Data Source)"];
    end

    subgraph "Application Layer"
        B1["Pages<br>(e.g., BrowseRestaurants.tsx)"];
        C1["React Hooks<br>(e.g., useState, useEffect)"];
    end

    subgraph "Component Layer"
        D1["Section Components<br>(e.g., RestaurantGrid.tsx)"];
        E1["UI Components<br>(e.g., RestaurantCard.tsx)"];
    end

    subgraph "Rendering Layer"
        F1[Rendered HTML in Browser];
    end

    A1 -- Fetched By --> B1;
    B1 -- Uses --> C1;
    B1 -- Passes Props --> D1;
    D1 -- Passes Props --> E1;
    E1 -- Renders UI --> F1;
```

## 📂 Project Structure

The codebase is organized to be modular and scalable. Here’s a brief overview of the key directories in the `src` folder:

```
/src
├── assets/         # Static assets like images and fonts
├── components/     # Reusable UI components (layout, cards, sections)
│   ├── layout/
│   ├── restaurant/
│   ├── sections/
│   └── ui/         # Core shadcn/ui components
├── data/           # Mock data and static content
├── hooks/          # Custom React hooks
├── lib/            # Utility functions and libraries
├── pages/          # Top-level page components for each route
└── ...
```

This structure separates concerns, making it easier to manage the UI, business logic, and data flow.

## 🏁 Getting Started

Follow these steps to get the project up and running on your local machine.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) (v18 or higher) and [Bun](https://bun.sh/) installed.

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone <your-repository-url>
    ```

2.  **Navigate to the project directory:**
    ```sh
    cd grub-give-back
    ```

3.  **Install dependencies:**
    ```sh
    bun install
    ```
    *(Alternatively, you can use `npm install` or `yarn install`)*

### Running the Development Server

To start the local development server, run the following command:

```sh
bun run dev
```

Open your browser and navigate to `http://localhost:5173` (or the port specified in your terminal) to see the application live.

## 📜 Available Scripts

-   `bun run dev`: Starts the development server with hot-reloading.
-   `bun run build`: Bundles the application for production.
-   `bun run lint`: Lints the codebase using ESLint to ensure code quality.
-   `bun run preview`: Serves the production build locally to preview before deployment.

## 🤝 Contributing

Contributions are welcome! If you have ideas for improvements or want to fix a bug, please feel free to open an issue or submit a pull request.
