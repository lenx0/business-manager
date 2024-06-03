import { Grid, Typography } from "@mui/material";

const Prices = () => {
  return (
    <Grid container direction="column" alignItems="flex-start" backgroundColor="red">
      <Grid item>
        <img src="../src/assets/images/illustration4.png" />
        <Typography fontSize="20px">
          Selecione um nível de associação
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Prices;
