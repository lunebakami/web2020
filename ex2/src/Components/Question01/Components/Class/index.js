import React from "react";

export default function Class(props) {
  return (
    <>
      <h3>Class name:{props.class}</h3>
      {React.Children.map(props.children, student => {
        return React.cloneElement(student, { ...props });
      })}
    </>
  );
}
