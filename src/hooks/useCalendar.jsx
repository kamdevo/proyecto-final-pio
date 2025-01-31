import { useSelector, useDispatch } from "react-redux";
import {
  setActiveEvent,
  addNewEvent,
  updateEvent,
  deleteEvent,
} from "../store";
export const useCalendar = () => {
  const { events } = useSelector((state) => state.calendar);

  const dispatch = useDispatch();

  const activeEvent = useSelector((state) => state.calendar.activeEvent);

  const onSetActiveEvent = (event, type) => {
    dispatch(setActiveEvent(event, type));
  };

  const eventSaving = (event) => {
    if (event._id) {
      dispatch(updateEvent({ ...event }));
    } else {
      dispatch(addNewEvent({ ...event, _id: new Date().getTime() }));
    }
  };

  const onDeleteEvent = () => {
    dispatch(deleteEvent());
  };

  return {
    dispatch,
    events,
    eventSaving,
    onSetActiveEvent,
    onDeleteEvent,
    activeEvent,
  };
};
