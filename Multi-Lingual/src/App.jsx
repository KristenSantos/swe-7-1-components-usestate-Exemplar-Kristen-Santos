import React, { useState } from "react";
import Greeting from "./components/Greeting";
import LanguageButtons from "./components/LanguageButtons";
import FontSizeButtons from "./components/FontSizeButtons";

/* 
  App Component
  - Manages application state and renders child components.

  Why?
  - The App component acts as the *single source of truth* for:
    - Selected language (state)
    - Font size (state)
    - Functions for updating both
  - This ensures a clear data flow and avoids unnecessary prop drilling.

  State:
  - language (string): Tracks the selected language.
  - fontSize (number): Tracks font size of the greeting.

  Functions:
  - setLanguage: Updates language state when a button is clicked.
  - increaseFont: Increases font size by 4px.
  - decreaseFont: Decreases font size but maintains a minimum of 16px.
*/

export const App = () => {
  const [language, setLanguage] = useState("English");
  const [fontSize, setFontSize] = useState(32);

  // Object containing translations for greetings
  const greetings = {
    English: "Good Morning",
    Spanish: "Buenos Días",
    Korean: "좋은 아침",
    French: "Bonjour",
    Chinese: "早上好",
  };
  // Increments font size by 4px
  const increaseFont = () => setFontSize((size) => size + 4);
  // Decrements font size but ensures it does not go below 16px
  const decreaseFont = () => setFontSize((size) => Math.max(16, size - 4));

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <FontSizeButtons
        increaseFont={increaseFont}
        decreaseFont={decreaseFont}
      />
      <Greeting text={greetings[language]} fontSize={fontSize} />
      <LanguageButtons setLanguage={setLanguage} />
    </div>
  );
};
