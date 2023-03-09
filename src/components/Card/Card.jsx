import style from "./Card.module.css";
import slime from "../../Img/SlimeRaM.png";

export default function Card(props) {
  return (
    <div className={style.contenedor}>
      <div className={style.nameContainer}>
        <button
          onClick={() => alert("Emulamos que se cierra la card")}
          className={style.button}
        >
          X
        </button>
        <h2 className={style.titulo}>{props.name}</h2>
      </div>
      <div className={style.imgContainer}>
        <img src={props.image} alt="" className={style.img} />
        {/* <img src={slime} alt="Slime" className={style.slime} /> */}
      </div>
      <div className={style.descriptionContainer}>
        <h2 className={style.titulo}>{props.species}</h2>
        <h2 className={style.titulo}>{props.gender}</h2>
      </div>
    </div>
  );
}
