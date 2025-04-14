# F1 Clone Project By: Mb 🏎️

## Descripción / Description

### Español

Este proyecto es un clon de una página web de Fórmula 1, creado con fines educativos y de práctica. El objetivo principal es mejorar las habilidades de desarrollo web y comprender mejor las tecnologías modernas de frontend.

### English

This project is a Formula 1 website clone, created for educational and practice purposes. The main goal is to improve web development skills and better understand modern frontend technologies.

## Objetivos / Objectives

### Español

- Practicar el desarrollo de interfaces de usuario modernas y responsivas
- Implementar buenas prácticas de desarrollo web
- Mejorar el entendimiento de las tecnologías frontend
- Crear una experiencia de usuario similar a la página oficial de F1
- Aprender sobre el manejo de datos y estados en aplicaciones web

### English

- Practice modern and responsive UI development
- Implement web development best practices
- Improve understanding of frontend technologies
- Create a user experience similar to the official F1 website
- Learn about data and state management in web applications

## Tecnologías / Technologies

- React.js
- Next.js
- TypeScript
- Tailwind CSS
- API Integration
- Playwright (Web Scraping)
- Next.js API Routes

## Web Scraping

### Español

El proyecto utiliza técnicas de web scraping para obtener datos actualizados de la Fórmula 1. Utilizamos las siguientes tecnologías:

- **Playwright**: Para la automatización del navegador y extracción de datos
- **Chromium**: Como navegador headless para realizar el scraping
- **Next.js API Routes**: Para crear endpoints que sirven los datos scrapeados

La información se obtiene de manera ética y respetando los términos de uso y robots.txt del sitio oficial de Formula 1.

### English

The project uses web scraping techniques to obtain updated Formula 1 data. We use the following technologies:

- **Playwright**: For browser automation and data extraction
- **Chromium**: As headless browser for scraping
- **Next.js API Routes**: To create endpoints that serve the scraped data

The information is obtained ethically and respecting the terms of use and robots.txt of the official Formula 1 website.

## API Endpoints

### GET /api/schedule

- Retorna el calendario completo de la temporada 2025 de F1
- Incluye información detallada de cada carrera:
  - Nombre del Gran Premio
  - Circuito
  - Fecha y mes
  - Número de ronda
  - Imágenes de la bandera del país y el circuito
  - Resultados del podio para carreras finalizadas (top 3)

### GET /api/schedule/next-round

- Retorna información detallada sobre la próxima carrera
- Incluye:
  - Información básica del Gran Premio
  - Horarios de clasificación y carrera
  - Imágenes del circuito y bandera del país

### GET /api/drivers

- Retorna la lista completa de pilotos de la temporada actual
- Información por piloto:
  - Nombre y apellido
  - Posición en el campeonato
  - Puntos
  - Equipo
  - País
  - Imagen del piloto

### GET /api/teams

- Retorna la lista completa de equipos de F1
- Información por equipo:
  - Nombre del equipo
  - Posición en el campeonato de constructores
  - Puntos
  - Logo del equipo
  - Imagen del coche actual

## Descargo de Responsabilidad / Disclaimer

### Español

Este proyecto es únicamente para fines educativos y de práctica. No está afiliado de ninguna manera con Formula 1® o cualquiera de sus marcas registradas. Todos los logotipos, marcas y contenido relacionado con F1 son propiedad de sus respectivos dueños.

### English

This project is for educational and practice purposes only. It is not affiliated in any way with Formula 1® or any of its trademarks. All F1-related logos, brands, and content are property of their respective owners.

## Estado del Proyecto / Project Status

🚧 En desarrollo / Under development 🚧
