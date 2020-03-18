import React from "react";
import Class from "../Class";

export default function Course(props) {
  return (
    <>
      <h2>Course: {props.course}</h2>
      <Class class="Web Development" course={props.course} />
    </>
  );
}
