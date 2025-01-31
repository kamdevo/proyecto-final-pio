import { Navbar, CalendarEvent, CalendarModal, AddFab, DeleteFab } from "../";

import { act, useState } from "react";
import { Calendar } from "react-big-calendar";
import { localizer, getMessageES } from "../../helpers";
import { useUi, useCalendar } from "../../hooks";

import "react-big-calendar/lib/css/react-big-calendar.css";
import "../calendar.css";

export const CalendarPage = () => {
  const { onOpenModal } = useUi();
  const { events, onSetActiveEvent, activeEvent } = useCalendar();

  const [lastView, setLastView] = useState(
    localStorage.getItem("lastView") || "week"
  );

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

  const onSelect = (event) => {
    console.log({ click: event });
    onSetActiveEvent(event);
  };

  const onDoubleClick = () => {
    onOpenModal();
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
      <AddFab />

      {activeEvent && <DeleteFab />}
    </main>
  );
};
