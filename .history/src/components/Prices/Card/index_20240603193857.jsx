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
        transition: "border-color 0.3s ease",
        "&:hover": {
          borderColor: "green",
          animation: "pulse 1.5s infinite",
        },
        "@keyframes pulse": {
          "0%": {
            boxShadow: "0 0 0 0 rgba(0, 128, 0, 0.4)",
          },
          "70%": {
            boxShadow: "0 0 0 10px rgba(0, 128, 0, 0)",
          },
          "100%": {
            boxShadow: "0 0 0 0 rgba(0, 128, 0, 0)",
          },
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
          color="primary"
          style={{ padding: 15, borderRadius: 0 }}
        >
          Selecionar
        </Button>
      </Grid>
    </Card>
  </Grid>
);

export default PriceCard;
