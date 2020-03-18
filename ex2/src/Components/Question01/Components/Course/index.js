import React from "react";

export default function Course(props) {
  return (
    <>
      <h2>Course name: {props.course}</h2>
      {props.children}
    </>
  );
}
