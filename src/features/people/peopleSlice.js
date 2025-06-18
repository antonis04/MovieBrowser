<<<<<<< HEAD
=======
// src/features/people/peopleSlice.js
>>>>>>> e523189 (feat: add peopleSlice for managing people state)
import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
  name: "people",
  initialState: {
    list: [],
    status: "idle",
  },
  reducers: {
    setPeople: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { setPeople } = peopleSlice.actions;

export default peopleSlice.reducer;
