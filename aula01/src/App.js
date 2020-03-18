import React from "react";
import GenericHouse from "./components/GenericHouse";
import Character from "./components/Character";

// import { Container } from './styles';

export default () => {
  return (
    <GenericHouse house="Stark" region="North">
      <Character name="Arya" />
      <Character name="Sansa" />
      <Character name="Aegon" />
    </GenericHouse>
  );
};
