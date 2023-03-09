import style from "./SearchBar.module.css";

export default function SearchBar(props) {
  return (
    <div>
      <input type="search" className={style.input} />
      <button
        className={style.button}
        onClick={() => alert("Emulamos que se busca la card")}
      >
        Agregar
      </button>
    </div>
  );
}
