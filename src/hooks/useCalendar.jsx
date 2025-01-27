import { useSelector } from "react-redux";

export const useCalendar = () => {
  const { events } = useSelector((state) => state.calendar);
  return {
    events,
  };
};
