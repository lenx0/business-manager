import { Box, Grid, Stack, Typography } from "@mui/material"

const About = () => {
  return (
    <>
      <Grid container justifyContent="space-between" mt={60} mb={60}>
        <Grid item>
          <img src="../src/assets/images/illustration2.png" />
        </Grid>
        <Grid item>
          <Typography fontSize="60px">
            Laços de feedback mais
            <br /> rápidos e amigáveis
            <br /> tornam a vida mais fácil.
          </Typography>
          <Typography fontSize="18px">
            Adicione um Visualizador à sua equipe para que eles possam ver tudo{" "}
            <br /> o que você compartilha, ou convide pessoas para documentos
            individuais.
            <br />
            A escolha é sua. Os interessados podem conferir designs em seus
            <br />
            navegadores da web, testar protótipos e deixar feedback
            gratuitamente.
            <br />
          </Typography>
          <Stack spacing={2} mt={3}>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Box width="10px" height="10px" bgcolor="#000000" />
              <Typography>Bibliotecas na Nuvem Compartilhada</Typography>
            </Stack>

            <Stack direction="row" alignItems="center" spacing={1}>
              <Box width="10px" height="10px" bgcolor="#000000" />
              <Typography>Visualizações de protótipos para testes de usuário e pesquisa.</Typography>
            </Stack>

            <Stack direction="row" alignItems="center" spacing={1}>
              <Box width="10px" height="10px" bgcolor="#000000" />
              <Typography>Organização fácil com projetos.</Typography>
            </Stack>

            <Stack direction="row" alignItems="center" spacing={1}>
              <Box width="10px" height="10px" bgcolor="#000000" />
              <Typography>Entrega para desenvolvedores gratuita,<br/>
          diretamente no navegador.</Typography>
            </Stack>

            <Stack direction="row" alignItems="center" spacing={1}>
              <Box width="10px" height="10px" bgcolor="#000000" />
              <Typography>Autenticação de dois fatores e SSO.</Typography>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </>
  )
}

export default About;

