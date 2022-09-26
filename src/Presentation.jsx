import style from "./Presentation.module.css";
import github from "./assets/github.svg";

export function Presentation() {
  return (
    <>
      <div className={style.Container}>
      <div className={style.FormGeometry}></div>
        <div className={style.info}>
          <p>Hola Yo Soy</p>
          <h1>Frontend Developer</h1>
          <p></p>
        </div>
        <div className={style.buttonGithub}>
          <a
            className={style.Github}
            href="https://github.com/FullFontJ"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} />
            <p>FullFontJ</p>
          </a>
        </div>
      </div>
    </>
  );
}
