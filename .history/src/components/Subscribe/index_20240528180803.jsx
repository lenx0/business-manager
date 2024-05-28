import { Box, Button, Grid, TextField, Typography } from "@mui/material";

const Subscribe = () => {
  return (
    <Grid container mt={10} justifyContent="space-between">
      <Grid item alignContent="center">
        <Typography fontSize="70px">
          Always Track & <br />
          Analyze Your Business
          <br /> Statistics To Succeed.
        </Typography>
        <Typography>
          A better way to manage your sales, team, clients & marketing <br />-
          on a single platform. Powerful, affordable & easy
        </Typography>
        <TextField placeholder="Enter your email" />
        <Button variant="contained"
        style={{
            height:"60px"
        }}>
          Get started
        </Button>
      </Grid>
      <Grid item>
        <img src="../src/assets/images/illustration1.png" />
      </Grid>
    </Grid>
  );
};

export default Subscribe;
