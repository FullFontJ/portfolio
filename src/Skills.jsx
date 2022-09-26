import style from "./Skills.module.css";

export function Skills() {
  return (
    <>
      <div className={style.Container} id="Skills">
        <h2>Skills</h2>
        <div className={style.ExpeMeter}>
          <NivelExperencia text="Practicante" />
          <NivelExperencia text="Profesional" />
          <NivelExperencia text="Semi Senior" />
          <NivelExperencia text="Senior" />
        </div>
        <div className={style.Skills}>
          <BarExperience skill="Html" nivel={2} />
          <BarExperience skill="Css" nivel={2} />
          <BarExperience skill="javascript" nivel={2} />
          <BarExperience skill="react" nivel={1} />
        </div>
      </div>
    </>
  );
}

const NivelExperencia = ({ estilos, text }) => {
  return (
    <div className={style.ExpeLevel}>
      <p>{text}</p>
      <div className={style.Level}></div>
    </div>
  );
};

const BarExperience = ({ nivel, skill }) => {
  let nivelBar;

  switch (nivel) {
    case 1:
      nivelBar = style.BarNivelOne;
      break;
    case 2:
      nivelBar = style.BarNivelTwo;
      break;
    case 3:
      nivelBar = style.BarNivelThree;
      break;
    case 4:
      nivelBar = style.BarNivelFour;
      break;
  }

  return (
    <div className={style.BarSkill}>
      <label>{skill + ":"}</label>
      <div>
        <div className={style.BarNivel + " " + nivelBar}></div>
      </div>
    </div>
  );
};
