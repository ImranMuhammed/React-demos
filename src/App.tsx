import { ThemeProvider, useTheme } from "@mui/material";
import "./App.css";
import Form from "./components/googleForm/Form";

function App() {
  const theme = useTheme();
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Form />
      </ThemeProvider>
    </div>
  );
}

export default App;
