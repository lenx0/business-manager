import { Grid, Typography } from "@mui/material";

const Prices = () => {
  return (
    <Grid container backgroundColor="red">
      <Grid item>
        <img src="../src/assets/images/illustration4.png" />
      </Grid>
      <Grid item>
        <Typography fontSize="60px">
          Selecione um nível de associação
        </Typography>
        <Typography>Subtitulo</Typography>
      </Grid>
      <Grid container direction="row" justifyContent="center" gap={10} backgroundColor="blue">
        <Grid item backgroundColor="yellow">
          <Typography>card1</Typography>
        </Grid>
        <Grid item backgroundColor="grey">
          <Typography>card2</Typography>
        </Grid>
        <Grid item backgroundColor="green">
          <Typography>card3</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Prices;
{
  /* <img src="../src/assets/images/illustration4.png" /> */
}