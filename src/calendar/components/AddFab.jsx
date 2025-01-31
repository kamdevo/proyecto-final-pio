import { Plus } from "lucide-react";
import { useUi, useCalendar } from "../../hooks";
import { addHours } from "date-fns";
export const AddFab = () => {
  const { onOpenModal } = useUi();
  const { onSetActiveEvent } = useCalendar();

  const handleAddClick = () => {
    onSetActiveEvent({
      title: "",
      notes: "",
      start: new Date(),
      end: addHours(new Date(), 2),
      bgColor: "#fafafa",
      user: {
        id: 1,
        name: "kamo",
      },
    });
    onOpenModal();
  };

  return (
    <button className="fab btn btn-primary" onClick={handleAddClick}>
      <Plus />
    </button>
  );
};
