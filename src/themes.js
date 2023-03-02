import { createTheme } from "@mui/material/styles";

// colors
// light-blue : #61dafb
// darkest-grey: #16181d
// lighter-grey: #20232a
// even-lighter-grey: #282c34
// alt-grey: #32363e
// orange: #ff8c00
// cream-orange: #faf0e6

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#f50057",
    },
    secondary: {
      main: "#ff8c00",
    },
    error: {
      main: "#d32f2f",
    },
    // background: {
    //   paper: "#1976d2",
    //   default: "#1976d2",
    // },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1de923",
    },
    secondary: {
      main: "#ff8c00",
    },
    error: {
      main: "#d32f2f",
    },
    background: {
      //   default: "#000",
      //   paper: "#282c34",
    },
  },
});

export { lightTheme, darkTheme };
