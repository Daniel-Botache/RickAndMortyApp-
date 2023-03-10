import style from "./App.module.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
import nave from "./Img/NaveRaM.png";
import { useState } from "react";

function App() {
  const [characters, setCharacters] = useState([]);
  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name && !characters.find((char) => char.id === data.id)) {
          setCharacters((oldCharacters) => [...oldCharacters, data]);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  }
  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
  };

  return (
    <div className={style.App}>
      <Nav onSearch={onSearch} />
      <div className={style.tituloContainer}>
        <h1 className={style.title}>Rick and Morty</h1>
        <img src={nave} alt="Slime" className={style.nave} />
      </div>
      <div className={style.cardContainer}>
        <Cards characters={characters} onClose={onClose} />
      </div>
      <div></div>
    </div>
  );
}

export default App;
