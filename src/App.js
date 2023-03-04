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

function App() {
  // Dark Mode _____ Light Mode
  const [display, setDisplay] = useState(false);
  const root = document.querySelector(":root");
  //   Changes Theme.
  function displayMode() {
    setDisplay(!display);
  }
  // Changes everything else that the theme doesn't change.
  if (!display) {
    document.body.style.backgroundColor = "white";
    root.style.setProperty("--compBackground", "#f2f2f2");
    root.style.setProperty("--compFontColor", "black");
    root.style.setProperty("--headerBackground", "#32363e");
    root.style.setProperty("--headerFontColor", "white");
    root.style.setProperty("--scrollBarColor", "#e1e1e1");
    root.style.setProperty("--scrollBarColorHover", "#ff8c00");
  } else {
    document.body.style.backgroundColor = "#282c34";
    root.style.setProperty("--compBackground", "#20232a");
    root.style.setProperty("--compFontColor", "white");
    root.style.setProperty("--headerBackground", "#16181d");
    root.style.setProperty("--headerFontColor", "#61dafb");
    root.style.setProperty("--scrollBarColor", "#191b21");
    root.style.setProperty("--scrollBarColorHover", "#61dafb");
  }
  // Dark Mode _____ Light Mode
  //   Data logic starts here.
  // --------------------------------------
  const [inventoryItemList, setInventoryItemList] = useState([]);
  const [itemMapByName, setItemMapByName] = useState(new Map());
  const [itemMapByCode, setItemMapByCode] = useState(new Map());

  function pushData(name, code, quantity, price) {
    const item = new InventoryItem(
      name.value,
      code.value,
      quantity.value,
      Number(price.value).toFixed(2)
    );
    setInventoryItemList([...inventoryItemList, item]);

    updateMapByName(item.itemName, item);
    updateMapByCode(item.itemCode, item);
  }

  function updateMapByName(key, value) {
    setItemMapByName((prevState) => new Map(prevState.set(key, value)));
  }

  function updateMapByCode(key, value) {
    setItemMapByCode((prevState) => new Map(prevState.set(key, value)));
  }
  console.log(inventoryItemList);
  console.log("itemMapByName", itemMapByName);
  console.log("itemMapByCode", itemMapByCode);
  const snickers = itemMapByName.get("SNICKERS");
  const snickersTmp = itemMapByName["SNICKERS"];
  console.log("snickers", snickers);
  console.log("snickersTmp", snickersTmp);
  const hasSnickers = itemMapByName.has("SNICKERS");
  console.log("hasSnickers", hasSnickers);

  //   Data Logic ends here.
  // ---------------------------

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={!display ? lightTheme : darkTheme}>
        <div className="App">
          <Header displayFunction={displayMode} />
          <LeftPanel
            data={pushData}
            dataArray={inventoryItemList}
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
