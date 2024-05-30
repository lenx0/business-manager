import { Box, Grid, Typography } from "@mui/material";

const Works = () => {
  return (
    <>
      {/* <Grid container backgroundColor="blue">
        <Grid item>
          <Typography fontSize="60px">
            Construindo o melhor espaço
            <br /> para colaboração.
          </Typography>
        </Grid>
        <Grid container direction="row">
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
        </Grid>
        <Grid container direction="column">
          <Grid item>
            <img src="../src/assets/images/illustration3.png" />
          </Grid>
        </Grid>
      </Grid> */}
      <Grid container backgroundColor="blue">
        <Grid item xs={6} backgroundColor="red">
          <Typography>Título</Typography>
          <Grid item direction="row" backgroundColor="grey">
            <Typography>Imagem pequena</Typography>
            <Typography>Subtitulo</Typography>
          </Grid>
        </Grid>
        <Grid item xs={6} backgroundColor="yellow">
          <Typography>Imagem</Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Works;
