export const Navbar = () => {
  return (
    <header className="w-full flex justify-center items-center">
      <nav className=" fixed z-50 p-4 flex top-4 justify-between items-center w-full max-w-4xl mx-auto bg-transparent backdrop-blur-lg shadow shadow-slate-400 rounded-2xl">
        <div className="img">
          <img src="../../assets/react.svg" alt="Logo" />
        </div>
        <ul className="flex gap-4 justify-center *:cursor-pointer">
          <li>Github</li>
          <li>Comunícate con nosotros</li>
        </ul>
        <div className="nav-btns  flex gap-4 *:cursor-pointer">
          <a className="p-2 bg-white rounded-xl border-2 border-black/10">
            Inicia sesión
          </a>

          <a className="p-2 bg-white rounded-xl border-2 border-black/10">
            Registrarse
          </a>
        </div>
      </nav>
    </header>
  );
};
