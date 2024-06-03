import { Button, Card, CardContent, Grid, Typography } from "@mui/material";

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
      <Grid
        container
        direction="row"
        justifyContent="center"
        gap={20}
        backgroundColor="blue"
      >
        <Grid item backgroundColor="yellow">
          <Card sx={{ maxWidth: 345, margin: "auto", mt: 5 }}>
            <CardContent>
              <Typography variant="h5" component="div">
                Preços
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Selecione um nível de associação
              </Typography>
              <Typography variant="h6" component="div" sx={{ mt: 2 }}>
                O preço certo para você.
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                Preços listados em USD. Impostos podem ser aplicáveis.
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                Ao usar o programa, você concorda com nossos termos e políticas.
              </Typography>
            </CardContent>
            <Button variant="contained" color="primary" sx={{ m: 2 }}>
              Selecionar
            </Button>
          </Card>
        </Grid>
        <Grid item backgroundColor="grey">
        <Card sx={{ maxWidth: 345, margin: "auto", mt: 5 }}>
            <CardContent>
              <Typography variant="h5" component="div">
                Preços
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Selecione um nível de associação
              </Typography>
              <Typography variant="h6" component="div" sx={{ mt: 2 }}>
                O preço certo para você.
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                Preços listados em USD. Impostos podem ser aplicáveis.
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                Ao usar o programa, você concorda com nossos termos e políticas.
              </Typography>
            </CardContent>
            <Button variant="contained" color="primary" sx={{ m: 2 }}>
              Selecionar
            </Button>
          </Card>
        </Grid>
        <Grid item backgroundColor="green">
        <Card sx={{ maxWidth: 345, margin: "auto", mt: 5 }}>
            <CardContent>
              <Typography variant="h5" component="div">
                Preços
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Selecione um nível de associação
              </Typography>
              <Typography variant="h6" component="div" sx={{ mt: 2 }}>
                O preço certo para você.
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                Preços listados em USD. Impostos podem ser aplicáveis.
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                Ao usar o programa, você concorda com nossos termos e políticas.
              </Typography>
            </CardContent>
            <Button variant="contained" color="primary" sx={{ m: 2 }}>
              Selecionar
            </Button>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Prices;
{
  /* <img src="../src/assets/images/illustration4.png" /> */
}
