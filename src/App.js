import React from "react";
import "./App.css";
import Header from "./Header_Comp/Header";
import { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { lightTheme, darkTheme } from "./themes";
import { StyledEngineProvider } from "@mui/material/styles";
import Table from "./Table_Comp/Table";
import LeftPanel from "./LeftPanel_Comp/LeftPanel";

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
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={!display ? lightTheme : darkTheme}>
        <div className="App">
          <Header displayFunction={displayMode} />
          <LeftPanel />
          <Table />
        </div>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
export default App;
