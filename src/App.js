import React from "react";
import "./App.css";
import UserInput from "./UserInput_Comp/UserInput";
import Header from "./Header_Comp/Header";
import { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { lightTheme, darkTheme } from "./themes";
import { StyledEngineProvider } from "@mui/material/styles";
import Table from "./Table_Comp/Table";

function App() {
  const [display, setDisplay] = useState(false);
  function displayMode() {
    setDisplay(!display);
  }
  !display
    ? (document.body.style.backgroundColor = "white")
    : (document.body.style.backgroundColor = "rgb(50, 50, 50)");
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={!display ? lightTheme : darkTheme}>
        <div className="App">
          <Header displayFunction={displayMode} />
          <UserInput />
          <Table />
        </div>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
export default App;
