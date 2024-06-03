import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

const Prices = () => {
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="space-between"
      textAlign="right"
    >
      <Grid item>
        <img src="../src/assets/images/illustration4.png" />
      </Grid>
      <Grid item>
        <Typography fontSize="60px">
          Selecione um nível de associação
          <br />o preço certo para você.
        </Typography>
        <Typography>
          Preços listados em USD. Taxas não inclusas.
          <br />
          Ao utilizar o programa, você concorda com nossos termos e politicas.
        </Typography>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="center"
        gap={20}
        backgroundColor="blue"
      >
        <Grid item>
          <Card sx={{ maxWidth: 436, maxHeight: 644, margin: "auto", mt: 5, p: 4 }}>
            <CardContent>
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
                    49
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
                Uma licença de pagamento único, só para você
              </Typography>
              <Stack mt={7} mb={3} spacing={6}>
                <Stack direction="row" alignItems="center" spacing={3}>
                  <Box width="10px" height="10px" bgcolor="#000000" />
                  <Typography variant="body1" fontSize="16px">
                    Aplicativo para MAC - 1 usuário
                  </Typography>
                </Stack>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Box width="10px" height="10px" bgcolor="#000000" />
                  <Typography variant="body1" fontSize="16px">
                    1 ano de atualizações no app MAC
                  </Typography>
                </Stack>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Box width="10px" height="10px" bgcolor="#000000" />
                  <Typography variant="body1" fontSize="16px">
                    1 ano de armazenamento na nuvem
                  </Typography>
                </Stack>
              </Stack>
              <Grid container mt={10}justifyContent="center">
                <Button variant="contained" fullWidth color="primary">
                  Selecionar
                </Button>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
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
        <Grid item>
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
