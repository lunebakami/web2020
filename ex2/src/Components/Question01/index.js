import React from "react";
import Course from "./Components/Course";
import Class from "./Components/Class";
import Student from "./Components/Student";

export default function Question01() {
  return (
    <>
      <h2>Question 01</h2>
      <Course course="Information Systems">
        <Class class="Programming Fundamentals" course="Information Systems">
          <Student student="Alina" />
          <Student student="Ellyo" />
        </Class>
      </Course>
    </>
  );
}
