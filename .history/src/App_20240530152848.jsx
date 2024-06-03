import { Box } from "@mui/material";
import Header from "./components/Header";
import Subscribe from "./components/Subscribe";
import About from "./components/About";
import Works from "./components/Works";
import Prices from "./components/Prices";

function App() {
  return (
    <Box margin="0 80px 30px 80px">
      <Header />
      <Subscribe />
      <About />
      <Works />
      <Prices />
    </Box>
  );
}

export default App;
