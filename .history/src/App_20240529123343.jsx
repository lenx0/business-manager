import { Box } from "@mui/material"
import Header from "./components/Header"
import Subscribe from "./components/Subscribe"
import About from "./components/About"

function App() {
  return (
    <Box margin="30px 80px 30px 80px">
      <Header />
      <Subscribe />
      <About />
    </Box>
  );
}

export default App;
