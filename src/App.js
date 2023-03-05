import React from "react";
import "./App.css";
import Header from "./Header_Comp/Header";
import { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { lightTheme, darkTheme } from "./themes";
import { StyledEngineProvider } from "@mui/material/styles";
import Table from "./Table_Comp/Table";
import LeftPanel from "./LeftPanel_Comp/LeftPanel";
import { InventoryItem } from "./LeftPanel_Comp/component_extras";
import { colorTheme } from "./color-theme";

function App() {
  const [display, setDisplay] = useState(false);
  const root = document.querySelector(":root");

  function displayMode() {
    setDisplay((prev) => !prev);
  }

  function setColors() {
    for (let i = 0; i < colorTheme.length; i++) {
      root.style.setProperty(
        colorTheme[i].variableName,
        !display
          ? colorTheme[i].colorValue.lightTheme
          : colorTheme[i].colorValue.darkTheme
      );
      if (!display) {
        document.body.style.backgroundColor = "white";
      } else document.body.style.backgroundColor = "#282c34";
    }
  }

  setColors();

  const [itemMapByName, setItemMapByName] = useState(new Map());
  const [itemMapByCode, setItemMapByCode] = useState(new Map());

  function pushData(name, code, quantity, price) {
    const item = new InventoryItem(
      name,
      code,
      quantity,
      Number(price).toFixed(2)
    );
    updateMapByName(item.name, item);
    updateMapByCode(item.code, item);
  }

  function updateMapByName(key, value) {
    setItemMapByName((prevState) => new Map(prevState.set(key, value)));
  }

  function updateMapByCode(key, value) {
    setItemMapByCode((prevState) => new Map(prevState.set(key, value)));
  }

  console.log(itemMapByName);
  console.log(itemMapByCode);
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={!display ? lightTheme : darkTheme}>
        <div className="App">
          <Header displayFunction={displayMode} />
          <LeftPanel
            data={pushData}
            dataMapByName={itemMapByName}
            dataMapByCode={itemMapByCode}
          />
          <Table />
        </div>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
export default App;
