import { addHours, differenceInSeconds } from "date-fns";
import { useEffect, useState, useMemo } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import { es } from "date-fns/locale/es";
import Modal from "react-modal";
import "react-datepicker/dist/react-datepicker.css";
import { useUi, useCalendar } from "../../hooks";
import Swal from "sweetalert2";

registerLocale("es", es);

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
  overlay: {
    zIndex: 4,
  },
};

Modal.setAppElement("#root");

export const CalendarModal = () => {
  const { isModalOpen, onCloseModal } = useUi();
  const { activeEvent, eventSaving } = useCalendar();

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formValue, setFormValue] = useState({
    title: "evento",
    notes: "notas",
    start: new Date(),
    end: addHours(new Date(), 2),
  });

  useEffect(() => {
    if (activeEvent !== null) {
      setFormValue({ ...activeEvent });
    }
  }, [activeEvent]);

  const titleClass = useMemo(() => {
    if (!formSubmitted) return "";

    return formValue.title.length > 0 ? "is-valid" : "is-invalid";
  }, [formValue.title, formSubmitted]);

  const handleInputChange = ({ target }) => {
    setFormValue((prevFormValue) => ({
      ...prevFormValue,
      [target.name]: target.value,
    }));
  };

  const handleDateChange = (event, changing) => {
    setFormValue((prevFormValue) => ({
      ...prevFormValue,
      [changing]: event,
    }));

    console.log(formValue);
  };

  const handleSubmit = (event) => {
    setFormSubmitted(true);
    event.preventDefault();
    const dif = differenceInSeconds(formValue.end, formValue.start);

    if (isNaN(dif) || dif <= 0) {
      console.log("Error en fechas");
      Swal.fire("Fechas incorrectas", "Revisar las fechas ingresadas", "error");
      return;
    }

    if (formValue.title.length <= 0) {
      return;
    }

    eventSaving(formValue);
    onCloseModal();
    setFormSubmitted(false);
  };

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={onCloseModal}
      style={customStyles}
      className="modal"
      overlayClassName="modal-fondo"
      closeTimeoutMS={200}
    >
      <h1>Evento </h1>
      <hr />
      <form className="container" onSubmit={handleSubmit}>
        <div className="form-group mb-2">
          <label>Fecha y hora inicio</label>
          <DatePicker
            selected={formValue.start}
            onChange={(event) => handleDateChange(event, "start")}
            className="form-control"
            dateFormat="dd/MM/yyyy h:mm aa"
            wrapperClassName="form-control "
            showTimeSelect
            locale="es"
            timeCaption="hora"
          />
        </div>

        <div className="form-group mb-2">
          <label>Fecha y hora fin</label>
          <DatePicker
            selected={formValue.end}
            onChange={(event) => handleDateChange(event, "end")}
            className="form-control"
            dateFormat="dd/MM/yyyy h:mm aa"
            wrapperClassName="form-control "
            showTimeSelect
            locale="es"
            timeCaption="hora"
          />
        </div>

        <hr />
        <div className="form-group mb-2">
          <label>Titulo y notas</label>
          <input
            type="text"
            className="form-control"
            placeholder="Título del evento"
            name="title"
            autoComplete="off"
            value={formValue.title}
            onChange={handleInputChange}
          />
          <small id="emailHelp" className="form-text text-muted">
            Una descripción corta
          </small>
        </div>

        <div className="form-group mb-2">
          <textarea
            type="text"
            className="form-control"
            placeholder="Notas"
            rows="5"
            name="notes"
            value={formValue.notes}
            onChange={handleInputChange}
          ></textarea>
          <small id="emailHelp" className="form-text text-muted">
            Información adicional
          </small>
        </div>

        <button type="submit" className="btn btn-outline-primary btn-block">
          <i className="far fa-save"></i>
          <span> Guardar</span>
        </button>
      </form>
    </Modal>
  );
};
