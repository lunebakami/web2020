import React from "react";

export default props => {
  return (
    <>
      <h2>House: {props.house}</h2>

      {React.Children.map(props.children, character => {
        return React.cloneElement(character, { ...props });
      })}
    </>
  );
};
