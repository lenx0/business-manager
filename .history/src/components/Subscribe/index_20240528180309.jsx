import { Box, Grid, Typography } from "@mui/material"

const Subscribe = () => {
  return (
    <Grid container mt={10} justifyContent="space-between" backgroundColor="red">
      <Grid item alignContent="center">
      <Typography fontSize="70px">
        Always Track & <br/>Analyze Your Business<br/> Statistics To Succeed.
      </Typography>
      </Grid>
      <Grid item>
        <img src="../src/assets/images/illustration1.png"/>
      </Grid>
    </Grid>
  )
}

export default Subscribe
