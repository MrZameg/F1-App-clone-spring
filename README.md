# F1 Clone Project By: Mb 🏎️

## Description

This project is a Formula 1 website clone, created for educational and practice purposes. The main goal is to improve web development skills and better understand modern frontend technologies.

## Technologies

- React.js
- Next.js
- TypeScript
- Tailwind CSS
- API Integration
- Playwright (Web Scraping)
- Next.js API Routes
- Authentication System (Clerk)

## How to Use

### Prerequisites

- Node.js (version 18.x or higher)
- npm, yarn, or Bun
- Git

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/f1-clone.git
   cd f1-clone
   ```

2. Install dependencies:

   ```bash
   # Using npm
   npm install

   # Using yarn
   yarn install

   # Using Bun
   bun install
   ```

3. Set up environment variables:
   - Create a `.env.local` file in the root directory
   - Add your Clerk authentication keys:
     ```
     NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key
     CLERK_SECRET_KEY=your_secret_key
     ```

### Running the Project

1. Start the development server:

   ```bash
   # Using npm
   npm run dev

   # Using yarn
   yarn dev

   # Using Bun
   bun dev
   ```

2. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

### API Usage

You can access the API endpoints directly:

- Driver statistics: `http://localhost:3000/api/drivers/statistics?season=2025`
- Team statistics: `http://localhost:3000/api/teams/statistics?season=2025`
- Schedule: `http://localhost:3000/api/schedule`
- Next race: `http://localhost:3000/api/schedule/next-round`

## Web Scraping

The project uses web scraping techniques to obtain updated Formula 1 data. We use the following technologies:

- **Playwright**: For browser automation and data extraction
- **Chromium**: As headless browser for scraping
- **Next.js API Routes**: To create endpoints that serve the scraped data

The information is obtained ethically and respecting the terms of use and robots.txt of the official Formula 1 website.

## API Endpoints

### GET /api/schedule

- Returns the complete F1 2025 season calendar
- Includes detailed information for each race:
  - Grand Prix name
  - Circuit
  - Date and month
  - Round number
  - Country flag and circuit images
  - Podium results for completed races (top 3)

### GET /api/schedule/next-round

- Returns detailed information about the next race
- Includes:
  - Basic Grand Prix information
  - Qualifying and race schedules
  - Circuit and country flag images

### GET /api/drivers

- Returns the complete list of drivers for the current season
- Information per driver:
  - First and last name
  - Championship position
  - Points
  - Team
  - Country
  - Driver image

### GET /api/drivers/statistics

- Returns detailed statistics for all drivers in the specified season (defaults to current year)
- Parameters:
  - `season`: Optional parameter to specify the year (e.g., 2024, 2025)
- Information per driver:
  - Position in the championship
  - Driver details (name, last name, abbreviated code, ID)
  - Country
  - Team information (name, ID)
  - Points earned

### GET /api/teams

- Returns the complete list of F1 teams
- Information per team:
  - Team name
  - Constructor championship position
  - Points
  - Team logo
  - Current car image

### GET /api/teams/statistics

- Returns detailed statistics for all teams in the specified season (defaults to current year)
- Parameters:
  - `season`: Optional parameter to specify the year (e.g., 2024, 2025)
- Information per team:
  - Position in the championship
  - Team name
  - Points earned
  - Team ID

## Authentication

The project includes a complete authentication system with the following features:

- User registration (sign-up)
- User login (sign-in)
- Protected routes for authenticated users
- Custom layout for authentication pages

## Disclaimer

This project is for educational and practice purposes only. It is not affiliated in any way with Formula 1® or any of its trademarks. All F1-related logos, brands, and content are property of their respective owners.

## Project Status

🚧 Under development 🚧
