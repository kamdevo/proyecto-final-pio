import { addHours, differenceInSeconds } from "date-fns";
import { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import { es } from "date-fns/locale/es";

import Modal from "react-modal";
import "react-datepicker/dist/react-datepicker.css";

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

const CalendarModal = () => {
  const [formValue, setFormValue] = useState({
    title: "evento",
    notes: "notas",
    start: new Date(),
    end: addHours(new Date(), 2),
  });
  const [isOpen, setIsOpen] = useState(true);

  const onCloseModal = () => {
    console.log("Cerrando modal");
    setIsOpen(false);
  };

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
    event.preventDefault();
    const dif = differenceInSeconds(formValue.end, formValue.start);

    if (!dif || dif < 0) {
      console.log("error");
    }

    if (formValue.title.trim().length <= 0) {
      return;
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onCloseModal}
      style={customStyles}
      className="modal"
      overlayClassName="modal-fondo"
      closeTimeoutMS={200}
    >
      <h1> Nuevo evento </h1>
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

export default CalendarModal;
