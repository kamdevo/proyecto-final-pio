import { createSlice } from "@reduxjs/toolkit";
import { addHours } from "date-fns";

const tempEvent = {
  title: "Japan trip",
  notes: "Trip to Japan with my family",
  start: new Date(),
  end: new addHours(new Date(), 2),
  bgColor: "#fafafa",
  user: {
    id: 1,
    name: "kamo",
  },
};

export const calendarSlice = createSlice({
  name: "calendar",
  initialState: {
    events: [tempEvent],
    activeEvents: null,
  },
  reducers: {
    increment: (state) => {},
  },
});

// Action creators are generated for each case reducer function
export const { increment } = calendarSlice.actions;
