import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store.js";
import Navigation from "./common/Navigation/index.js";
import PeoplePage from "./features/people/PeoplePage.js";
import MovieList from "./features/movies/MovieList.js";
import MoviePage from "./features/movies/MoviePage.js";
import PeopleList from "./features/people/PeopleList.js";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<MoviePage />} />
          <Route path="/peoplelist" element={<PeopleList />} />
          <Route path="/movielist" element={<MovieList />} />
          <Route path="/peoplepage" element={<PeoplePage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
