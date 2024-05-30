import { Box, Grid, Typography } from "@mui/material";

const Works = () => {
  return (
    <>
      <Grid container backgroundColor="blue">
        <Grid item>
          <Typography fontSize="60px">
            Construindo o melhor espaço
            <br /> para colaboração.
          </Typography>
        </Grid>
        <Grid item>
          <Grid>
            <img src="../src/assets/icons/icon1.png" />
          </Grid>

          <Grid item>
            <img src="../src/assets/icons/icon2.png" />
            <Typography>teste</Typography>
          </Grid>

          <Grid item>
            <img src="../src/assets/icons/icon3.png" />
          </Grid>

          <Grid item>
            <img src="../src/assets/icons/icon4.png" />
          </Grid>
        </Grid>
        <Grid item>
          <img src="../src/assets/images/illustration3.png" />
        </Grid>
      </Grid>
    </>
  );
};

export default Works;
