import React from "react";

export default function Student(props) {
  return (
    <h4>
      Student {props.student} from {props.course} Course
    </h4>
  );
}
