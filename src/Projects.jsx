import style from "./Projects.module.css";
import arrowup from "./assets/arrow-up-right.svg"
import PageOne from "./assets/page-01.png";
import PageTwo from "./assets/page-02.png";
import PageThree from "./assets/page-03.png";

export function Projects() {
  return (
    <>
      <div className={style.ContainerProjects} id="Proyectos">
        <div className={style.ContainerTitle}>
          <h2>Portafolio</h2>
        </div>
        <div className={style.CardsProject}>
        <CardProject
          title="Portafolio Landing Page"
          tipo="Web/LadingPage"
          imagen={PageOne}
        />
        <CardProject
          title="Zip School Landing Page"
          tipo="Web/LadingPage"
          imagen={PageTwo}
        />
        <CardProject
          title="Food Delivery Landing Page"
          tipo="Web/LadingPage"
          imagen={PageThree}
        />
        </div>
      </div>
    </>
  );
}

const CardProject = ({ title, tipo, enlace, imagen, posicion }) => {
  return (
    <div className={style.Card}>
      <hr className={style.Linea} />
      <div className={style.CardContent}>
        <div className={style.CardInfo}>
          <h3>{title}</h3>
          <p>{tipo}</p>
        </div>
        <a className={style.CardEnlace} href={enlace} target="_blank" rel="noopener noreferrer">
          <img src={arrowup} />
        </a>
      </div>
      <div className={style.CardImg}>
        <img src={imagen} />
      </div>
    </div>
  );
};
