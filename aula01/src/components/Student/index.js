import React from 'react';

// import { Container } from './styles';

export default (props) => {
  return (
    <ul>
      <li>Name: {props.name}</li>
      <li>Age: {props.age}</li>
      <li>City: {props.city}</li>
      <li>Course: {props.course}</li>
    </ul>
  );
}
