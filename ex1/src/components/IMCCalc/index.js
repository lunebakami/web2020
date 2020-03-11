import React from 'react';

import IMCmsg from "../IMCmsg";

export default function IMCCalc(props) {
  const { weight, height } = props;

  const imc = weight/(height*height);

  return (
    <IMCmsg imc={imc}/>
  );
}
