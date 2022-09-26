import style from "./Menu.module.css"

export function Menu() {
  return (
    <>
      <header className={style.NavHeder}>
        <nav className={style.NavMenu}>
          <ButtonNav name="About" enlace="#About" />
          <ButtonNav name="Proyectos" enlace="#Proyectos" />
          <ButtonNav name="Skills" enlace="#Skills"  />
        </nav>
      </header>
    </>
  );
}

const ButtonNav = ({ name, enlace }) => {
  return (
    <div className={style.textBotton}>
      <a href={enlace}>{name}</a>
    </div>
  );
};
