import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

const PriceCard = ({ price, title, features }) => (
  <Grid item>
    <Card
      sx={{
        width: 436,
        height: 744,
        margin: "auto",
        mt: 5,
        p: 4,
        borderRadius: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        transition: "border-color 0.9s ease",
        "&:hover": {
          boxShadow: "0 0 0 0 #1976d2",
          
        },
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
        }}
      >
        <Grid container position="relative">
          <Grid item>
            <Typography
              variant="h5"
              component="div"
              fontSize="20px"
              fontWeight={700}
            >
              $
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="h5"
              component="div"
              fontSize="80px"
              fontWeight={700}
            >
              {price}
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="h5"
              component="div"
              fontSize="20px"
              fontWeight={700}
              position="absolute"
              bottom={0}
            >
              mês
            </Typography>
          </Grid>
        </Grid>
        <Typography color="text.secondary" mt={3} textAlign="center">
          {title}
        </Typography>
        <Stack mt={7} mb={3} spacing={6}>
          {features.map((feature, index) => (
            <Stack key={index} direction="row" alignItems="center" spacing={3}>
              <Box width="10px" height="10px" bgcolor="#000000" />
              <Typography variant="body1" fontSize="16px">
                {feature}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </CardContent>
      <Grid container justifyContent="center">
        <Button
          variant="contained"
          fullWidth
          sx={{
            padding: 2,
            borderRadius: 0,
            backgroundColor: "black",
            "&:hover": {
              backgroundColor: "#1976d2",
            },
          }}
        >
          Selecionar
        </Button>
      </Grid>
    </Card>
  </Grid>
);

export default PriceCard;
