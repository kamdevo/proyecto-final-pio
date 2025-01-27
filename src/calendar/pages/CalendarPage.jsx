import { Navbar, CalendarEvent } from "../";
import CalendarModal from "../components/CalendarModal";
import { useState } from "react";
import { Calendar } from "react-big-calendar";
import { localizer, getMessageES } from "../../helpers";
import { addHours } from "date-fns";
import { useUi } from "../../hooks/useUi";
import { useCalendar } from "../../hooks/useCalendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "../calendar.css";

export const CalendarPage = () => {
  const [lastView, setLastView] = useState(
    localStorage.getItem("lastView") || "week"
  );
  const { onOpenModal } = useUi();

  const { events } = useCalendar();

  const eventStyleGetter = (event, start, end, isSelected) => {
    const style = {
      backgroundColor: "red",
      borderRadius: "5px",
      opacity: 0.8,
      color: "white",
    };

    return {
      style,
    };
  };

  const onDoubleClick = (event) => {
    console.log({ doubleClick: event });
    onOpenModal();
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
        events={events}
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
