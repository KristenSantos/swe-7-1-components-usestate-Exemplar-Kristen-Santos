import React from "react";


/* 
  FontSizeButtons Component
  - Provides UI controls to increase or decrease the greeting text size.

  Why?
  - This keeps UI interactions separate from the Greeting component, making it 
    easier to modify or reuse this functionality in other parts of the app.

  Props:
  - increaseFont (function): Increases font size.
  - decreaseFont (function): Decreases font size with a minimum limit.
*/

const FontSizeButtons = ({ increaseFont, decreaseFont }) => {
  return (
    <div>
      <button onClick={increaseFont}>+</button>
      <button onClick={decreaseFont}>-</button>
    </div>
  );
};

export default FontSizeButtons;
