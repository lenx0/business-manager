import { Box } from "@mui/material";
import Header from "./components/Header";
import Subscribe from "./components/Subscribe";
import About from "./components/About";
import Works from "./components/Works";

function App() {
  return (
    <Box margin="0 80px 30px 80px">
      <Header />
      <Subscribe />
      <About />
      <Works />
    </Box>
  );
}

export default App;
