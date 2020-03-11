import React from 'react';

import IMCCalc from '../IMCCalc';

export default function IMC() {
  const weight = 68;
  const height = 1.65;

  return (
    <>
      <div>O IMC para o peso {weight}kg e altura {height}m, é: </div>
      <IMCCalc weight={weight} height={height}/>
    </>
  );
}
