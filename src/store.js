import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./features/movies/movieSlice";
import peopleReducer from "./features/people/peopleSlice";

const store = configureStore({
  reducer: {
    movies: moviesReducer,
    people: peopleReducer,
  },
});

export default store;
