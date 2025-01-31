import "./login.css";
import { Mail, Lock, User, LockKeyhole } from "lucide-react";
export const LoginPage = () => {
  return (
    <div className="container login-container">
      <div className="row">
        <div className="col-md-6 login-form-1">
          <h3>Inicia sesión</h3>
          <form>
            <div className="form-group mb-2 d-flex align-items-center gap-1">
              <Mail color="#ffffff" />
              <input
                type="text"
                className="form-control"
                placeholder="Correo"
              />
            </div>
            <div className="form-group mb-2 d-flex align-items-center gap-1 ">
              <Lock color="#ffffff" />
              <input
                type="password"
                className="form-control"
                placeholder="Contraseña"
              />
            </div>
            <div className="d-grid gap-2">
              <input type="submit" className="btnSubmit" value="Login" />
            </div>
          </form>
        </div>

        <div className="col-md-6 login-form-2">
          <h3>Registrate</h3>
          <form>
            <div
              className="form-group mb-2 d-flex align-items-center
            gap-1"
            >
              <User color="#000" />
              <input
                type="text"
                className="form-control"
                placeholder="Nombre"
              />
            </div>
            <div
              className="form-group mb-2 d-flex align-items-center
            gap-1"
            >
              <Mail color="#000" />
              <input
                type="email"
                className="form-control"
                placeholder="Correo"
              />
            </div>
            <div
              className="form-group mb-2 d-flex align-items-center
            gap-1"
            >
              <Lock color="#000" />
              <input
                type="password"
                className="form-control"
                placeholder="Contraseña"
              />
            </div>

            <div className="form-group mb-2 d-flex align-items-center gap-1">
              <LockKeyhole color="#000" />
              <input
                type="password"
                className="form-control"
                placeholder="Repita la contraseña"
              />
            </div>

            <div className="form-group mb-2">
              <input type="submit" className="btnSubmit" value="Crear cuenta" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
