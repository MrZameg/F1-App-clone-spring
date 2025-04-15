# F1 Clone Project By: Mb 🏎️

## Description

This project is a Formula 1 website clone, created for educational and practice purposes. The main goal is to improve web development skills and better understand modern frontend technologies.

## Objectives

- Practice modern and responsive UI development
- Implement web development best practices
- Improve understanding of frontend technologies
- Create a user experience similar to the official F1 website
- Learn about data and state management in web applications

## Technologies

- React.js
- Next.js
- TypeScript
- Tailwind CSS
- API Integration
- Playwright (Web Scraping)
- Next.js API Routes

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

### GET /api/teams

- Returns the complete list of F1 teams
- Information per team:
  - Team name
  - Constructor championship position
  - Points
  - Team logo
  - Current car image

## Disclaimer

This project is for educational and practice purposes only. It is not affiliated in any way with Formula 1® or any of its trademarks. All F1-related logos, brands, and content are property of their respective owners.

## Project Status

🚧 Under development 🚧
