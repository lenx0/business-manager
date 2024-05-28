import { Box, Typography } from "@mui/material";
import Header from "./components/Header";
import Subscribe from "./components/Subscribe";

function App() {
  return (
    <Box gap={10}>
      <Header />
      <Subscribe />
    </Box>
  );
}

export default App;
