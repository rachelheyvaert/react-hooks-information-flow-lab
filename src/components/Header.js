import React, { useState } from "react";
import Item from "./Item";

function Header({ onDarkModeClick }) {

    const [isDarkMode, setIsDarkMode] = useState(false);

    function handleDarkModeClick() {
      setIsDarkMode((isDarkMode) => !isDarkMode);
    return (
        <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkModeClick}>
          {isDarkMode ? "Dark" : "Light"} Mode
        </button>
       </header>

    )
}
}

export default Header;