import React from "react";

/* 
  LanguageButtons Component
  - Provides buttons for changing the greeting language.

  Why?
  - Each button is mapped to a specific language option to maintain clarity.
  - The state is managed in App.jsx to centralize control rather than in each button.

  Props:
  - setLanguage (function): Updates the language state in App.jsx.
*/

const LanguageButtons = ({ setLanguage }) => {
  return (
    <div>
      <button onClick={() => setLanguage("English")}>English</button>
      <button onClick={() => setLanguage("Spanish")}>Español</button>
      <button onClick={() => setLanguage("Korean")}>한국어</button>
      <button onClick={() => setLanguage("French")}>Français</button>
      <button onClick={() => setLanguage("Chinese")}>中文</button>
    </div>
  );
};

export default LanguageButtons;
