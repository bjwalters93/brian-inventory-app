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
  const root = document.querySelector(":root");
  function displayMode() {
    setDisplay(!display);
  }

  if (!display) {
    document.body.style.backgroundColor = "white";
    root.style.setProperty("--compBackground", "#faf0e6");
    root.style.setProperty("--compFontColor", "black");
    root.style.setProperty("--headerBackground", "#32363e");
    root.style.setProperty("--headerFontColor", "#faf0e6");
  } else {
    document.body.style.backgroundColor = "#282c34";
    root.style.setProperty("--compBackground", "#20232a");
    root.style.setProperty("--compFontColor", "white");
    root.style.setProperty("--headerBackground", "#16181d");
    root.style.setProperty("--headerFontColor", "#ff8c00");
  }

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
