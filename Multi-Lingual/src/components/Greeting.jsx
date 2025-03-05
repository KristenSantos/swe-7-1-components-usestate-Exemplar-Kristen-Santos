import React from "react";

/* 
  Greeting Component
  - Displays the translated greeting message.
  - Font size is dynamically adjusted based on user selection.

  Why?
  - The text and font size should be controlled externally via props
    so that this component remains reusable and does not handle state directly.
  - Keeping it simple ensures separation of concerns.
*/

const Greeting = ({ text, fontSize }) => {
  return <h1 style={{ fontSize: `${fontSize}px` }}>{text}</h1>;
};

export default Greeting;
