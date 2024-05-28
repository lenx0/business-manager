import { Button, Grid, TextField, Typography } from "@mui/material";

const Subscribe = () => {
  return (
    <Grid container mt={10} justifyContent="space-between">
      <Grid item alignContent="center">
        <Typography fontSize="70px">
          Sempre Acompanhe & <br />
          Analise as Estatísticas do Seu
          <br /> Negócio para Ter Sucesso.
        </Typography>
        <Typography>
        Uma maneira melhor de gerenciar suas vendas, equipe, clientes e marketing <br />-
        tudo em uma única plataforma. Poderoso, acessível e fácil.
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
            Comece agora
          </Button>
        </Grid>
        <Grid container gap={3} mt={5}>
          <Grid item>
            <img src="../src/assets/logos/visa.png" />
          </Grid>
          <Grid item>
            <img src="../src/assets/logos/master.png" />
          </Grid>
          <Grid item>
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
