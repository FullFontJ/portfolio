import style from "./ChallengeFrontend.module.css";
import challenges from "./challenge.json";
import iconarrow from './assets/arrow-link.svg';

export function ChallengeFrontend() {
  return (
    <>
      <div className={style.Container}>
        <p>Retos frontend mentor</p>
        <div className={style.gridChallenge}>
          {challenges.map((challenge) => (
            <Challege
              key={challenge.id}
              namePage={challenge.title}
              imagen={challenge.urlImagen}
              urlPage={challenge.paginaUrl}
            />
          ))}
        </div>
      </div>
    </>
  );
}

const Challege = ({ namePage, imagen, urlPage }) => {
  return (
    <div className={style.cardChallenge}>
      <div className={style.urlChallenge}>
        <a href={urlPage} target="_blank" rel="noopener noreferrer">
        <img src={iconarrow}/>
         </a>
      </div>
      <img src={imagen}></img>
      <p>{namePage}</p>
    </div>
  );
};
