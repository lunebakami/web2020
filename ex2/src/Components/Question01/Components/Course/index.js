import React from "react";

export default function Course(props) {
  return (
    <>
      <h2>Course name: {props.course}</h2>
      {React.Children.map(props.children, classChildren => {
        return React.cloneElement(classChildren, { course: props.course });
      })}
    </>
  );
}
