import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#f50057",
    },
    secondary: {
      main: "#1976d2",
    },
    error: {
      main: "#d26f19",
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1de923",
    },
    secondary: {
      main: "#1976d2",
    },
    error: {
      main: "#d26f19",
    },
    background: {
      default: "#121212",
      paper: "#121212",
    },
  },
});

export { lightTheme, darkTheme };
