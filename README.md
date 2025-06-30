# 🎬 MovieBrowser

A web application for browsing and managing movies and people (actors, etc.), built with React using Redux Toolkit and React Router.

---

## Live Demo

Check out the live version of the app:<br>
[Movie Browser Live Demo](https://agnieszkaszajnowska.github.io/MovieBrowser/)

---

## Features

- **Movie List** — displaying movies (data fetching from API planned)
- **People List** — displaying people related to movies (e.g., actors)
- **Movie Details** — detailed page for each movie (under development)
- **Routing** — navigation between pages using React Router
- **Global State Management** — handled by Redux Toolkit with `movies` and `people` slices
- **Basic UI Components and Layout** — navigation, containers, wrappers, tags, etc.
- **Basic Search Component** (in preparation)

---

## Project Structure

- `src/features/movies/` — components and slice for movies
- `src/features/people/` — components and slice for people
- `src/common/Navigation/` — navigation component
- `src/components/Poster.jsx` — example SVG component
- `src/App.js` — main app component with routing and Redux Provider
- `src/store.js` — Redux Toolkit store configuration

---

## API

This project uses an API provided by [The Movie Database](https://www.themoviedb.org/).

---

## Installation and Running

1. Install dependencies:

```bash
npm install
```

2. Run the app in development mode:

```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

---

## Available Scripts

- `npm start` — starts the app in development mode with hot reload
- `npm test` — runs tests (if added)
- `npm run build` — builds the app for production

---

## Future Plans

- Integrate with TheMovieDB API to fetch real movie and people data
- Expand list components and detail pages
- Add search functionality for movies and people
- Handle loading states and errors in Redux slices
- Improve UI styling and responsiveness

---

## Technologies

- React 18+
- React Router v6+
- Redux Toolkit
- Styled Components (partially)
- Create React App

---

## Notes

This project is a work in progress. The code can be extended and modified to build a full-featured movie browsing application.

---

## Learn More

This project was bootstrapped with Create React App. Learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started) and the [React documentation](https://reactjs.org/).

---
