import { Navbar, CalendarEvent } from "../";
import CalendarModal from "../components/CalendarModal";
import { useState } from "react";
import { Calendar } from "react-big-calendar";
import { localizer, getMessageES } from "../../helpers";
import { addHours } from "date-fns";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "../calendar.css";

const timeEvents = [
  {
    title: "Japan trip",
    notes: "Trip to Japan with my family",
    start: new Date(),
    end: new addHours(new Date(), 2),
    bgColor: "#fafafa",
    user: {
      id: 1,
      name: "kamo",
    },
  },
];

export const CalendarPage = () => {
  const [lastView, setLastView] = useState(
    localStorage.getItem("lastView") || "week"
  );
  const eventStyleGetter = (event, start, end, isSelected) => {
    const style = {
      backgroundColor: "red",
      borderRadius: "0px",
      opacity: 0.8,
      color: "white",
    };

    return {
      style,
    };
  };

  const onDoubleClick = (event) => {
    console.log({ doubleClick: event });
  };

  const onSelect = (event) => {
    console.log({ click: event });
  };

  const onViewChanged = (event) => {
    localStorage.setItem("lastView", event);
    setLastView(event);
  };

  return (
    <main>
      <Navbar />
      <Calendar
        messages={getMessageES()}
        culture="es-ES"
        localizer={localizer}
        events={timeEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        eventPropGetter={eventStyleGetter}
        components={{
          event: CalendarEvent,
        }}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelect}
        onView={onViewChanged}
      />

      <CalendarModal />
    </main>
  );
};
