import { render } from "@testing-library/react";
import React from "react";

const AwesomeAnimals = () => {
  const animals = [
    "Chicken",
    "Sloth",
    "Porcupine",
    "Killer whale",
    "Velociraptor",
  ];
  return (
    <ul>
      {animals.map((animal, index) => {
        return (
          <li key={index}>
            Awesomeness level {index + 1}:{animal}
          </li>
        );
      })}
    </ul>
  );
};

export default AwesomeAnimals;
