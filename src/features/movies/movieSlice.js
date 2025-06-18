import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    list: [],
    status: "idle",
  },
  reducers: {
    setMovies: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { setMovies } = moviesSlice.actions;

export default moviesSlice.reducer;
