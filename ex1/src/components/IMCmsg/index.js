import React from 'react';

export default function IMCmsg(props) {
  const { imc } = props;

  let msg;

  if(imc <= 19) {
    msg = 'Under weight';
  }else if(imc <= 25) {
    msg = 'Normal weight';
  }else {
    msg = 'Overweight';
  }

  return (
    <h3>{msg}</h3>
  );
}
