import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store.js";
import Navigation from "./common/Navigation/index.js";
import PeoplePage from "./features/people/PeoplePage.js";
import MovieList from "./features/movies/MovieList.js";
import MoviePage from "./features/movies/MoviePage.js";
import PeopleList from "./features/people/PeopleList.js";
import { SearchProvider } from "./contexts/SearchContext";

function App() {
  return (
    <Provider store={store}>
      <SearchProvider>
        <Router basename={process.env.PUBLIC_URL || "/"}>
          <Navigation />
          <Routes>
            <Route path="/" element={<MovieList />} />
            <Route path="/movielist" element={<MovieList />} />
            <Route path="/movie/:id" element={<MoviePage />} />
            <Route path="/peoplelist" element={<PeopleList />} />
            <Route path="/people/:id" element={<PeoplePage />} />
          </Routes>
        </Router>
      </SearchProvider>
    </Provider>
  );
}

export default App;
