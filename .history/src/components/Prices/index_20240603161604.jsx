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
      <Grid container direction="row" justifyContent="center" gap={5}>
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
                Licença básica, somente 1 usuário
              </Typography>
              <Stack mt={7} mb={3} spacing={6}>
                <Stack direction="row" alignItems="center" spacing={3}>
                  <Box width="10px" height="10px" bgcolor="#000000" />
                  <Typography variant="body1" fontSize="16px">
                    Aplicativo para MAC
                  </Typography>
                </Stack>
                <Stack direction="row" alignItems="center" spacing={3}>
                  <Box width="10px" height="10px" bgcolor="#000000" />
                  <Typography variant="body1" fontSize="16px">
                    1 ano de atualizações no app para MAC
                  </Typography>
                </Stack>
                <Stack direction="row" alignItems="center" spacing={3}>
                  <Box width="10px" height="10px" bgcolor="#000000" />
                  <Typography variant="body1" fontSize="16px">
                    1 ano de armazenamento gratuito na nuvem
                  </Typography>
                </Stack>
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
                    99
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
                Licença premium, somente 1 usuário
              </Typography>
              <Stack mt={7} mb={3} spacing={6}>
                <Stack direction="row" alignItems="center" spacing={3}>
                  <Box width="10px" height="10px" bgcolor="#000000" />
                  <Typography variant="body1" fontSize="16px">
                    Aplicativo para MAC
                  </Typography>
                </Stack>
                <Stack direction="row" alignItems="center" spacing={3}>
                  <Box width="10px" height="10px" bgcolor="#000000" />
                  <Typography variant="body1" fontSize="16px">
                    1 ano de atualizações no app para MAC
                  </Typography>
                </Stack>
                <Stack direction="row" alignItems="center" spacing={3}>
                  <Box width="10px" height="10px" bgcolor="#000000" />
                  <Typography variant="body1" fontSize="16px">
                    1 ano de armazenamento gratuito na nuvem
                  </Typography>
                </Stack>
                <Stack direction="row" alignItems="center" spacing={3}>
                  <Box width="10px" height="10px" bgcolor="#000000" />
                  <Typography variant="body1" fontSize="16px">
                    Um espaço de trabalho pessoal na nuvem
                  </Typography>
                </Stack>
                <Stack direction="row" alignItems="center" spacing={3}>
                  <Box width="10px" height="10px" bgcolor="#000000" />
                  <Typography variant="body1" fontSize="16px">
                    Todas as ferramentas, somente para você
                  </Typography>
                </Stack>
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
                    299
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
                Uma assinatura para toda a equipe
              </Typography>
              <Stack mt={7} mb={3} spacing={6}>
                <Stack direction="row" alignItems="center" spacing={3}>
                  <Box width="10px" height="10px" bgcolor="#000000" />
                  <Typography variant="body1" fontSize="16px">
                    Acesso ao aplicativo para MAC para todos
                  </Typography>
                </Stack>
                <Stack direction="row" alignItems="center" spacing={3}>
                  <Box width="10px" height="10px" bgcolor="#000000" />
                  <Typography variant="body1" fontSize="16px">
                    Espaço de trabalho compartilhado na nuvem
                  </Typography>
                </Stack>
                <Stack direction="row" alignItems="center" spacing={3}>
                  <Box width="10px" height="10px" bgcolor="#000000" />
                  <Typography variant="body1" fontSize="16px">
                    Acesso gratuito à nuvem por tempo ilimitado
                  </Typography>
                </Stack>
                <Stack direction="row" alignItems="center" spacing={3}>
                  <Box width="10px" height="10px" bgcolor="#000000" />
                  <Typography variant="body1" fontSize="16px">
                    Gerenciamento de equipe fácil
                  </Typography>
                </Stack>
                <Stack direction="row" alignItems="center" spacing={3}>
                  <Box width="10px" height="10px" bgcolor="#000000" />
                  <Typography variant="body1" fontSize="16px">
                    Nenhuma chave de licença necessária
                  </Typography>
                </Stack>
              </Stack>
            </CardContent>
            <Grid container mt={20} justifyContent="center">
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
      </Grid>
    </Grid>
  );
};

export default Prices;
{
  /* <img src="../src/assets/images/illustration4.png" /> */
}
