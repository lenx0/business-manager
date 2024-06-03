import { Grid, Typography } from "@mui/material";

const Prices = () => {
  return (
    <Grid container direction="column" backgroundColor="red">
      <Grid item>
        <img src="../src/assets/images/illustration4.png" />
        <Typography fontSize="30px">
          Selecione um nível de associação
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Prices;
