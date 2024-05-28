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
        <Grid item mt={5}>
          <TextField
            placeholder="Enter your email"
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "5px 0 0 5px",
              },
            }}
          />
          <Button
            variant="contained"
            style={{
              height: "55px",
              borderRadius: "0 5px 5px 0",
            }}
          >
            Get started
          </Button>
        </Grid>
        <Grid container gap={5}>
          <Grid item >
            <img src="../src/assets/logos/visa.png" />
            <img src="../src/assets/logos/master.png" />
            <img src="../src/assets/logos/paypall.png" />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <img src="../src/assets/images/illustration1.png" />
      </Grid>
    </Grid>
  );
};

export default Subscribe;
