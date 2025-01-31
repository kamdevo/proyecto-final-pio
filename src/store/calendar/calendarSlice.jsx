import { createSlice } from "@reduxjs/toolkit";
import { addHours } from "date-fns";

const tempEvent = {
  _id: new Date().getTime(),
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

const initialState = {
  events: [tempEvent],
  activeEvent: null,
};

export const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    setActiveEvent: (state, action) => {
      const { payload } = action;
      state.activeEvent = payload;
    },

    addNewEvent: (state, { payload }) => {
      state.events.push(payload);
      state.activeEvent = null;
    },

    updateEvent(state, { payload }) {
      state.events = state.events.map((event) =>
        event._id === payload._id ? payload : event
      );
    },

    deleteEvent(state) {
      if (!state.activeEvent) return;

      state.events = state.events.filter(
        (event) => event._id !== state.activeEvent._id
      );
      state.activeEvent = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setActiveEvent, addNewEvent, updateEvent, deleteEvent } =
  calendarSlice.actions;
