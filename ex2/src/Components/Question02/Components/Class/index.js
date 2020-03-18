import React from "react";
import Student from "../Student";

export default function Class(props) {
  return (
    <>
      <h3>Class name: {props.class}</h3>
      <Student student="Joyce" course={props.course} />
      <Student student="Natan" course={props.course} />
    </>
  );
}
