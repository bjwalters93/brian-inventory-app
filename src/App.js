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

  const [dataMapByName, setDataMapByName] = useState(
    new Map([
      [
        "SNICKERS",
        { name: "SNICKERS", code: "00000001", quantity: 200, cost: 5.99 },
      ],
      [
        "SKITTLES",
        { name: "SKITTLES", code: "00000002", quantity: 200, cost: 5.99 },
      ],
      [
        "ICE CREAM",
        { name: "ICE CREAM", code: "00000003", quantity: 200, cost: 5.99 },
      ],
      [
        "BBQ CHIPS",
        { name: "BBQ CHIPS", code: "00000004", quantity: 200, cost: 5.99 },
      ],
      [
        "NACHOS",
        { name: "NACHOS", code: "00000005", quantity: 200, cost: 5.99 },
      ],
      [
        "COTTON CANDY",
        { name: "COTTON CANDY", code: "00000006", quantity: 200, cost: 5.99 },
      ],
      [
        "TWIZZLERS",
        { name: "TWIZZLERS", code: "00000007", quantity: 200, cost: 5.99 },
      ],
      [
        "POPCORN",
        { name: "POPCORN", code: "00000008", quantity: 200, cost: 5.99 },
      ],
      [
        "PRETZEL",
        { name: "PRETZEL", code: "00000009", quantity: 200, cost: 5.99 },
      ],
      [
        "BUTTERFINGER",
        { name: "BUTTERFINGER", code: "00000010", quantity: 200, cost: 5.99 },
      ],
      ["OREOS", { name: "OREOS", code: "00000011", quantity: 200, cost: 5.99 }],
      ["PIZZA", { name: "PIZZA", code: "00000012", quantity: 200, cost: 5.99 }],
      ["TACOS", { name: "TACOS", code: "00000013", quantity: 200, cost: 5.99 }],
      [
        "FRENCH FRIES",
        { name: "FRENCH FRIES", code: "00000014", quantity: 200, cost: 5.99 },
      ],
      [
        "HAMBURGER",
        { name: "HAMBURGER", code: "00000015", quantity: 200, cost: 5.99 },
      ],
      [
        "HOT DOG",
        { name: "HOT DOG", code: "00000016", quantity: 200, cost: 5.99 },
      ],
      [
        "BREAD STICKS",
        { name: "BREAD STICKS", code: "00000017", quantity: 200, cost: 5.99 },
      ],
      [
        "POTATO CHIPS",
        { name: "POTATO CHIPS", code: "00000018", quantity: 200, cost: 5.99 },
      ],
      [
        "STARBURST",
        { name: "STARBURST", code: "00000019", quantity: 200, cost: 5.99 },
      ],
      ["PEPSI", { name: "PEPSI", code: "00000020", quantity: 200, cost: 5.99 }],
    ])
  );
  const [dataMapByCode, setDataMapByCode] = useState(
    new Map([
      [
        "00000001",
        { name: "SNICKERS", code: "00000001", quantity: 200, cost: 5.99 },
      ],
      [
        "00000002",
        { name: "SKITTLES", code: "00000002", quantity: 200, cost: 5.99 },
      ],
      [
        "00000003",
        { name: "ICE CREAM", code: "00000003", quantity: 200, cost: 5.99 },
      ],
      [
        "00000004",
        { name: "BBQ CHIPS", code: "00000004", quantity: 200, cost: 5.99 },
      ],
      [
        "00000005",
        { name: "NACHOS", code: "00000005", quantity: 200, cost: 5.99 },
      ],
      [
        "00000006",
        { name: "COTTON CANDY", code: "00000006", quantity: 200, cost: 5.99 },
      ],
      [
        "00000007",
        { name: "TWIZZLERS", code: "00000007", quantity: 200, cost: 5.99 },
      ],
      [
        "00000008",
        { name: "POPCORN", code: "00000008", quantity: 200, cost: 5.99 },
      ],
      [
        "00000009",
        { name: "PRETZEL", code: "00000009", quantity: 200, cost: 5.99 },
      ],
      [
        "00000010",
        { name: "BUTTERFINGER", code: "00000010", quantity: 200, cost: 5.99 },
      ],
      [
        "00000011",
        { name: "OREOS", code: "00000011", quantity: 200, cost: 5.99 },
      ],
      [
        "00000012",
        { name: "PIZZA", code: "00000012", quantity: 200, cost: 5.99 },
      ],
      [
        "00000013",
        { name: "TACOS", code: "00000013", quantity: 200, cost: 5.99 },
      ],
      [
        "00000014",
        { name: "FRENCH FRIES", code: "00000014", quantity: 200, cost: 5.99 },
      ],
      [
        "00000015",
        { name: "HAMBURGER", code: "00000015", quantity: 200, cost: 5.99 },
      ],
      [
        "00000016",
        { name: "HOT DOG", code: "00000016", quantity: 200, cost: 5.99 },
      ],
      [
        "00000017",
        { name: "BREAD STICKS", code: "00000017", quantity: 200, cost: 5.99 },
      ],
      [
        "00000018",
        { name: "POTATO CHIPS", code: "00000018", quantity: 200, cost: 5.99 },
      ],
      [
        "00000019",
        { name: "STARBURST", code: "00000019", quantity: 200, cost: 5.99 },
      ],
      [
        "00000020",
        { name: "PEPSI", code: "00000020", quantity: 200, cost: 5.99 },
      ],
    ])
  );
  const [searchNameTruth, setSearchNameTruth] = useState(false);
  const [searchCodeTruth, setSearchCodeTruth] = useState(false);
  const [searchNameResults, setSearchNameResults] = useState();
  const [searchCodeResults, setSearchCodeResults] = useState();
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  function resetErrorSuccess() {
    setSuccess("");
    setError("");
  }

  function searchByName(key) {
    if (dataMapByName.has(key)) {
      setSearchNameTruth(true);
      setSearchCodeTruth(false);
      setSearchNameResults(dataMapByName.get(key));
      let text = dataMapByName.get(key);
      setSuccess(`You can update ${text.name} below!`);
      setError("");
    } else {
      setSearchNameTruth(false);
      setSearchCodeTruth(false);
      setError("Item name doesn't exist!");
      setSuccess("");
    }
  }

  function searchByCode(key) {
    if (dataMapByCode.has(key)) {
      setSearchCodeTruth(true);
      setSearchNameTruth(false);
      setSearchCodeResults(dataMapByCode.get(key));
      let text = dataMapByCode.get(key);
      setSuccess(`You can update ${text.name} below!`);
      setError("");
    } else {
      setSearchNameTruth(false);
      setSearchCodeTruth(false);
      setError("Item code doesn't exist");
      setSuccess("");
    }
  }

  function resetSearchTruth() {
    setSearchNameTruth(false);
    setSearchCodeTruth(false);
  }

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
    setDataMapByName((prevState) => new Map(prevState.set(key, value)));
  }

  function updateMapByCode(key, value) {
    setDataMapByCode((prevState) => new Map(prevState.set(key, value)));
  }

  function deleteItems(selectedElements) {
    let selectedElementsArray = selectedElements;
    let codesArray = [];
    setDataMapByName((prevState) => {
      let myNewState = new Map(prevState);
      selectedElementsArray.forEach((key) => {
        myNewState.delete(key);
      });
      return myNewState;
    });
    setDataMapByCode((prevState) => {
      let myNewState = new Map(prevState);
      selectedElementsArray.forEach((key) => {
        let item = dataMapByName.get(key);
        let itemCode = item.code;
        codesArray.push(itemCode);
      });
      codesArray.forEach((key) => myNewState.delete(key));
      return myNewState;
    });
  }

  console.log(dataMapByName);
  console.log(dataMapByCode);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={!display ? lightTheme : darkTheme}>
        <div className="App">
          <Header displayFunction={displayMode} />
          <LeftPanel
            data={pushData}
            dataMapByName={dataMapByName}
            dataMapByCode={dataMapByCode}
            searchByName={searchByName}
            searchByCode={searchByCode}
            resetSearchTruth={resetSearchTruth}
            searchNameResults={searchNameResults}
            searchCodeResults={searchCodeResults}
            searchNameTruth={searchNameTruth}
            searchCodeTruth={searchCodeTruth}
            success={success}
            error={error}
            resetErrorSuccess={resetErrorSuccess}
          />
          <DataTableBeta
            deleteItems={deleteItems}
            dataMapByName={dataMapByName}
            dataMapByCode={dataMapByCode}
            searchNameTruth={searchNameTruth}
            searchCodeTruth={searchCodeTruth}
            searchNameResults={searchNameResults}
            searchCodeResults={searchCodeResults}
            resetSearchTruth={resetSearchTruth}
          />
        </div>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
export default App;
