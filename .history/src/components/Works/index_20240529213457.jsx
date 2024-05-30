import { Box, Grid, Paper, Stack, Typography } from "@mui/material";

const Works = () => {
  return (
    <>
      <Grid container justifyContent="space-between" mt={60} mb={60}>
        <Grid item>
          <Typography fontSize="60px">
            Construindo o melhor
            <br /> espaço para colaboração.
          </Typography>
          <Stack spacing={2} mt={10}>
            <Stack direction="row" alignItems="center" spacing={1}>
              <img src="../src/assets/icons/icon1.png" />
              <Typography>
                Bibliotecas na Nuvem Compartilhadas
                <br />
                <br />
                Navegue até o painel Seu trabalho na barra lateral esquerda.
                <br />
                Selecione a biblioteca que você deseja compartilhar.
                <br />
                Selecione o ícone de Compartilhar
                <br /> no canto superior direito para compartilhar a biblioteca.
              </Typography>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={1}>
              <img src="../src/assets/icons/icon2.png" />
              <Typography>
                Entrega gratuita para desenvolvedores, direto no navegador
                <br />
                <br />
                O Cloud Inspector facilita para os desenvolvedores
                <br />
                obterem as informações necessárias para transformar
                <br />
                pixels em código — tudo no navegador e, o mais importante
                <br /> de forma gratuita.
              </Typography>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Box width="10px" height="10px" bgcolor="#000000" />
              <Typography>Organização fácil com projetos.</Typography>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Box width="10px" height="10px" bgcolor="#000000" />
              <Typography>
                Entrega para desenvolvedores gratuita,
                <br />
                diretamente no navegador.
              </Typography>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Box width="10px" height="10px" bgcolor="#000000" />
              <Typography>Autenticação de dois fatores e SSO.</Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid item>
          <img src="../src/assets/images/illustration2.png" />
        </Grid>
      </Grid>
    </>
  );
};

export default Works;
