import { Box, Grid, Stack, Typography } from "@mui/material";

const Works = () => {
  return (
    <>
      <Box backgroundColor="blue">
        <Box backgroundColor="yellow">
          <Box>
            <Typography fontSize="60px">
              Construindo o melhor espaço
              <br /> para colaboração.
            </Typography>
          </Box>
        </Box>
        <Box container direction="column" backgroundColor="grey">
          <Box>
            <img src="../src/assets/icons/icon1.png" />
            <Typography>TESTE</Typography>
          </Box>

          <Box>
            <img src="../src/assets/icons/icon2.png" />
            <Typography>TESTE</Typography>
          </Box>

          <Box>
            <img src="../src/assets/icons/icon3.png" />
          </Box>

          <Box>
            <img src="../src/assets/icons/icon4.png" />
          </Box>
        </Box>

        <Box container xs={6}>
          <Box>
            <img src="../src/assets/images/illustration3.png" />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Works;
