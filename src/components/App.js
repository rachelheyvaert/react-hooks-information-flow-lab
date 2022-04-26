import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "../Header.js"

function App() {
function handleDarkModeClicks(newClick){
  
}

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
     <Header onDarkModeClick={handleDarkModeClicks} />
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
