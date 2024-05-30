import { Box, Grid, Typography } from "@mui/material";

const Works = () => {
  return (
    <>
      <Grid container>
        <Grid>
          <Typography fontSize="60px">
            Construindo o melhor espaço
            <br /> para colaboração.
          </Typography>
        </Grid>
        <Grid textAlign="center" alignContent="center" alignItems="center">
          <Grid>
            <img src="../src/assets/icons/icon1.png" />
          </Grid>

          <Grid display="flex">
            <img src="../src/assets/icons/icon2.png" />
            <Typography>teste</Typography>
          </Grid>

          <Grid>
            <img src="../src/assets/icons/icon3.png" />
          </Grid>

          <Grid>
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
