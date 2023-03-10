import style from "./Card.module.css";

export default function Card(props) {
  return (
    <div className={style.contenedor}>
      <div className={style.nameContainer}>
        <button
          onClick={() => props.onClose(props.id)}
          className={style.button}
        >
          X
        </button>
        <h2 className={style.titulo}>{props.name}</h2>
      </div>
      <div className={style.imgContainer}>
        <img src={props.image} alt="" className={style.img} />
      </div>
      <div className={style.descriptionContainer}>
        <h2 className={style.titulo}>{props.species}</h2>
        <h2 className={style.titulo}>{props.gender}</h2>
      </div>
    </div>
  );
}
