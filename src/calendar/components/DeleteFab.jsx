import { Trash } from "lucide-react";
import { useCalendar } from "../../hooks";
export const DeleteFab = () => {
  const { onDeleteEvent } = useCalendar();

  const handleClick = () => {
    onDeleteEvent();
  };

  return (
    <button className="fab btn btn-danger fab-danger" onClick={handleClick}>
      <Trash style={{ width: 64, height: 64 }} />
    </button>
  );
};
