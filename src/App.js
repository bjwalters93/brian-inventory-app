import React from "react";
import "./App.css";
import Header from "./Header_Comp/Header";
import { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { lightTheme, darkTheme } from "./themes";
import { StyledEngineProvider } from "@mui/material/styles";
// import DataTable from "./Table_Comp/DataTable";
import DataTableBeta from "./Table_Comp/DataTableBeta";
import LeftPanel from "./LeftPanel_Comp/LeftPanel";
import { InventoryItem } from "./LeftPanel_Comp/component_extras";
import { colorTheme } from "./color-theme";

function App() {
  // _________Display Mode___________
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
        document.body.style.backgroundColor = "var(--mainBackgroundColorLight)";
      } else
        document.body.style.backgroundColor = "var(--mainBackgroundColorDark)";
    }
  }

  setColors();

  const [itemMapByName, setItemMapByName] = useState(
    new Map([
      [
        "SNICKERS",
        { name: "SNICKERS", code: "00000001", quantity: 200, cost: 5 },
      ],
      [
        "SKITTLES",
        { name: "SKITTLES", code: "00000002", quantity: 200, cost: 5 },
      ],
      [
        "ICE CREAM",
        { name: "ICE CREAM", code: "00000003", quantity: 200, cost: 5 },
      ],
      [
        "BBQ CHIPS",
        { name: "BBQ CHIPS", code: "00000004", quantity: 200, cost: 5 },
      ],
      ["NACHOS", { name: "NACHOS", code: "00000005", quantity: 200, cost: 5 }],
      [
        "COTTON CANDY",
        { name: "COTTON CANDY", code: "00000006", quantity: 200, cost: 5 },
      ],
      [
        "TWIZZLERS",
        { name: "TWIZZLERS", code: "00000007", quantity: 200, cost: 5 },
      ],
      [
        "POPCORN",
        { name: "POPCORN", code: "00000008", quantity: 200, cost: 5 },
      ],
      [
        "PRETZEL",
        { name: "PRETZEL", code: "00000009", quantity: 200, cost: 5 },
      ],
      [
        "BUTTERFINGER",
        { name: "BUTTERFINGER", code: "00000010", quantity: 200, cost: 5 },
      ],
      ["OREOS", { name: "OREOS", code: "00000011", quantity: 200, cost: 5 }],
      ["PIZZA", { name: "PIZZA", code: "00000012", quantity: 200, cost: 5 }],
      ["TACOS", { name: "TACOS", code: "00000013", quantity: 200, cost: 5 }],
      [
        "FRENCH FRIES",
        { name: "FRENCH FRIES", code: "00000014", quantity: 200, cost: 5 },
      ],
      [
        "HAMBURGER",
        { name: "HAMBURGER", code: "00000015", quantity: 200, cost: 5 },
      ],
      [
        "HOT DOG",
        { name: "HOT DOG", code: "00000016", quantity: 200, cost: 5 },
      ],
      [
        "BREAD STICKS",
        { name: "BREAD STICKS", code: "00000017", quantity: 200, cost: 5 },
      ],
      [
        "POTATO CHIPS",
        { name: "POTATO CHIPS", code: "00000018", quantity: 200, cost: 5 },
      ],
      [
        "STARBURST",
        { name: "STARBURST", code: "00000019", quantity: 200, cost: 5 },
      ],
      ["PEPSI", { name: "PEPSI", code: "00000020", quantity: 200, cost: 5 }],
    ])
  );
  const [itemMapByCode, setItemMapByCode] = useState(
    new Map([
      [
        "00000001",
        { name: "SNICKERS", code: "00000001", quantity: 200, cost: 5 },
      ],
      [
        "00000002",
        { name: "SKITTLES", code: "00000002", quantity: 200, cost: 5 },
      ],
      [
        "00000003",
        { name: "ICE CREAM", code: "00000003", quantity: 200, cost: 5 },
      ],
      [
        "00000004",
        { name: "BBQ CHIPS", code: "00000004", quantity: 200, cost: 5 },
      ],
      [
        "00000005",
        { name: "NACHOS", code: "00000005", quantity: 200, cost: 5 },
      ],
      [
        "00000006",
        { name: "COTTON CANDY", code: "00000006", quantity: 200, cost: 5 },
      ],
      [
        "00000007",
        { name: "TWIZZLERS", code: "00000007", quantity: 200, cost: 5 },
      ],
      [
        "00000008",
        { name: "POPCORN", code: "00000008", quantity: 200, cost: 5 },
      ],
      [
        "00000009",
        { name: "PRETZEL", code: "00000009", quantity: 200, cost: 5 },
      ],
      [
        "00000010",
        { name: "BUTTERFINGER", code: "00000010", quantity: 200, cost: 5 },
      ],
      ["00000011", { name: "OREOS", code: "00000011", quantity: 200, cost: 5 }],
      ["00000012", { name: "PIZZA", code: "00000012", quantity: 200, cost: 5 }],
      ["00000013", { name: "TACOS", code: "00000013", quantity: 200, cost: 5 }],
      [
        "00000014",
        { name: "FRENCH FRIES", code: "00000014", quantity: 200, cost: 5 },
      ],
      [
        "00000015",
        { name: "HAMBURGER", code: "00000015", quantity: 200, cost: 5 },
      ],
      [
        "00000016",
        { name: "HOT DOG", code: "00000016", quantity: 200, cost: 5 },
      ],
      [
        "00000017",
        { name: "BREAD STICKS", code: "00000017", quantity: 200, cost: 5 },
      ],
      [
        "00000018",
        { name: "POTATO CHIPS", code: "00000018", quantity: 200, cost: 5 },
      ],
      [
        "00000019",
        { name: "STARBURST", code: "00000019", quantity: 200, cost: 5 },
      ],
      ["00000020", { name: "PEPSI", code: "00000020", quantity: 200, cost: 5 }],
    ])
  );
  // _________________________Data Logic_____________________________
  function pushData(name, code, quantity, cost) {
    const item = new InventoryItem(
      name,
      code,
      quantity,
      Number(cost).toFixed(2)
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

  function deleteItems(selectedElements) {
    let selectedElementsArray = selectedElements;
    let codesArray = [];
    setItemMapByName((prevState) => {
      let myNewState = new Map(prevState);
      selectedElementsArray.forEach((key) => {
        myNewState.delete(key);
      });
      return myNewState;
    });
    setItemMapByCode((prevState) => {
      let myNewState = new Map(prevState);
      selectedElementsArray.forEach((key) => {
        let item = itemMapByName.get(key);
        let itemCode = item.code;
        codesArray.push(itemCode);
      });
      codesArray.forEach((key) => myNewState.delete(key));
      return myNewState;
    });
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
          {/* <DataTable
            dataMapByName={itemMapByName}
            dataMapByCode={itemMapByCode}
          /> */}
          <DataTableBeta
            deleteItems={deleteItems}
            dataMapByName={itemMapByName}
            dataMapByCode={itemMapByCode}
          />
        </div>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
export default App;
