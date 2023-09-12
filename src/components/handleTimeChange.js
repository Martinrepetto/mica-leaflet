import { createSlice } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";

let initYears = [1810, 1982];

export const timeSlice = createSlice({
  name: "time",
  initialState: initYears,
  reducers: {
    startYear: (state, action) => {
      state[0] = action.payload;
      
    },
    endYear: (state, action) => {
      state[1] = action.payload;
    },
  },
});

export const { startYear, endYear } = timeSlice.actions;
export default timeSlice.reducer;
