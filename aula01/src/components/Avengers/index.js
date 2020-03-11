import React from 'react';

// import { Container } from './styles';

const IronMan = props => {
  return (
  <h3>Hello {props.name}, I'm IronMan</h3>
  );
};

const CaptainAmerica = props => {
  return (
  <h3>Hello {props.name}, I'm CaptainAmerica</h3>
  );
};

export {CaptainAmerica, IronMan};