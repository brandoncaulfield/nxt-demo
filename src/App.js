import React from "react";
import logo from "./logo.svg";
import "./App.css";

// Mui stuff
import { ThemeProvider, createTheme } from "@mui/material/styles";

import World from "./World";

function App() {
  const [mode, setMode] = React.useState("dark");
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <World />
      </div>
    </ThemeProvider>
  );
}

export default App;
