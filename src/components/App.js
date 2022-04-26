import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header";
import Filter from "./Filter"

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
function handleDarkModeClicks(){
setIsDarkMode(!isDarkMode)
}

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
     <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClicks} />
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
