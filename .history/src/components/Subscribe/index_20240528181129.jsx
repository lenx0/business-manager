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
        <TextField
          placeholder="Enter your email"
          borderRadius= "5px 0 0 5px"
          sx={{
            '& .MuiOutlinedInput-root': {
                borderRadius: "5px 0 0 5px",
              }
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
      <Grid item>
        <img src="../src/assets/images/illustration1.png" />
      </Grid>
    </Grid>
  );
};

export default Subscribe;
