import style from "./App.module.css";
import Card from "./components/Card/Card.jsx";
import Cards from "./components/Cards/Cards.jsx";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import characters, { Rick } from "./data.js";
import nave from "./Img/NaveRaM.png";

function App() {
  return (
    <div className={style.App}>
      <div className={style.tituloContainer}>
        <h1 className={style.title}>Rick and Morty</h1>
        <img src={nave} alt="Slime" className={style.nave} />
      </div>
      <div className={style.cardContainer}>
        <Card
          name={Rick.name}
          species={Rick.species}
          gender={Rick.gender}
          image={Rick.image}
          onClose={() => window.alert("Emulamos que se cierra la card")}
        />
        <Cards characters={characters} />
      </div>
      <div>
        <SearchBar onSearch={(characterID) => window.alert(characterID)} />
      </div>
    </div>
  );
}

export default App;
