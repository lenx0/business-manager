import { Box, Grid, Stack, Typography } from "@mui/material";

const Works = () => {
  return (
    <>
      <Box container xs={12} backgroundColor="blue">
        <Box container xs={6} backgroundColor="yellow">
          <Box item>
            <Typography fontSize="60px">
              Construindo o melhor espaço
              <br /> para colaboração.
            </Typography>
          </Box>
        </Box>
        <Box container direction="column" backgroundColor="grey">
          <Box item >
            <img src="../src/assets/icons/icon1.png" />
            <Typography>TESTE</Typography>
          </Box>

          <Box item>
            <img src="../src/assets/icons/icon2.png" />
            <Typography>TESTE</Typography>
          </Box>

          <Box item>
            <img src="../src/assets/icons/icon3.png" />
          </Box>

          <Box item>
            <img src="../src/assets/icons/icon4.png" />
          </Box>
        </Box>

        <Box container xs={6}>
          <Box item>
            <img src="../src/assets/images/illustration3.png" />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Works;
