import { Box, Grid, Stack, Typography } from "@mui/material";

const Works = () => {
  return (
    <>
      <Grid container xs={12} backgroundColor="blue">
        <Grid container xs={6}>
        <Grid item>
          <Typography fontSize="60px">
            Construindo o melhor espaço
            <br /> para colaboração.
          </Typography>
        </Grid>
        <Grid container direction="row">
            <Grid item>
              <img src="../src/assets/icons/icon1.png" />
              <Typography>TESTE</Typography>
            </Grid>

            <Grid item>
              <img src="../src/assets/icons/icon2.png" />
              <Typography>TESTE</Typography>
            </Grid>

            <Grid item>
              <img src="../src/assets/icons/icon3.png" />
            </Grid>

            <Grid item>
              <img src="../src/assets/icons/icon4.png" />
            </Grid>
        </Grid>
        </Grid>
        
        <Grid container xs={6}>
          <Grid item>
            <img src="../src/assets/images/illustration3.png" />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Works;
