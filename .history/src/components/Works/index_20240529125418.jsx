import { Grid, Stack, Typography } from "@mui/material";

const Works = () => {
  return (
    <>
      <Box container direction="column">
        <Box>
          <Typography fontSize="60px">
            Construindo o melhor espaço
            <br /> para colaboração.
          </Typography>
        </Box>

        <Box width="5px" height="5px">
          <img src="../src/assets/icons/icon1.png" />
        </Box>

        <Box>
          <img src="../src/assets/icons/icon2.png" />
          <Typography>teste</Typography>
        </Box>

        <Box>
          <img src="../src/assets/icons/icon3.png" />
        </Box>

        <Box>
          <img src="../src/assets/icons/icon4.png" />
        </Box>
      </Box>
    </>
  );
};

export default Works;
