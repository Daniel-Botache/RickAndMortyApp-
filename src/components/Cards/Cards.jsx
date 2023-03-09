import React from "react";
import Card from "../Card/Card";

export default function Cards(props) {
  const { characters } = props;
  return (
    <React.Fragment>
      {props.characters.map((character) => {
        return (
          <Card
            name={character.name}
            species={character.species}
            gender={character.gender}
            image={character.image}
          />
        );
      })}
    </React.Fragment>
  );
}
