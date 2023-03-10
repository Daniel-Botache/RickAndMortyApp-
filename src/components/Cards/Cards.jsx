import React from "react";
import Card from "../Card/Card";

export default function Cards({ characters, onClose }) {
  return (
    <React.Fragment>
      {characters.map(({ id, name, species, gender, image }) => {
        return (
          <Card
            id={id}
            name={name}
            species={species}
            gender={gender}
            image={image}
            onClose={onClose}
          />
        );
      })}
    </React.Fragment>
  );
}
