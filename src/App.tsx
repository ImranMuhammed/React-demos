import { ThemeProvider, useTheme } from "@mui/material";
import "./App.css";
import FeedbackForm from "./components/feedback/FeedbackForm";
import Form from "./components/googleForm/Form";

function App() {
  const theme = useTheme();
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <FeedbackForm />
      </ThemeProvider>
    </div>
  );
}

export default App;
