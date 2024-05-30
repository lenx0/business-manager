import { Box, Grid, Paper, Stack, Typography } from "@mui/material";

const Works = () => {
  return (
    <>
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        mt={60}
        mb={60}
      >
        <Grid item>
          <Typography fontSize="60px">
            Construindo o melhor
            <br /> espaço para colaboração.
          </Typography>
          <Stack spacing={4} mt={5}>
            <Stack direction="row" alignItems="center" spacing={1}>
              <img src="../src/assets/icons/icon1.png" />
              <Stack direction="column" alignItems="flex-start" spacing={1}>
                <Typography fontSize="28px">
                  Bibliotecas na Nuvem Compartilhadas
                </Typography>
                <Typography fontSize="18px">
                  Navegue até o painel Seu trabalho na barra lateral esquerda.
                  <br />
                  Selecione a biblioteca que você deseja compartilhar.
                  <br />
                  Selecione o ícone de Compartilhar
                  <br /> no canto superior direito para compartilhar a
                  biblioteca.
                </Typography>
              </Stack>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={1}>
              <img src="../src/assets/icons/icon2.png" />
              <Stack direction="column" alignItems="flex-start" spacing={1}>
                <Typography fontSize="28px">
                  Entrega gratuita para desenvolvedores, direto no navegador
                </Typography>
                <Typography fontSize="18px">
                  O Cloud Inspector facilita para os desenvolvedores
                  <br />
                  obterem as informações necessárias para transformar
                  <br />
                  pixels em código — tudo no navegador e, o mais importante
                  <br /> de forma gratuita.
                </Typography>
              </Stack>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={1}>
              <img src="../src/assets/icons/icon4.png" />
              <Stack direction="column" alignItems="flex-start" spacing={1}>
                <Typography fontSize="28px">
                  Edição colaborativa em tempo real
                </Typography>
                <Typography fontSize="18px">
                  O Room Service ajuda você a criar recursos colaborativos em
                  tempo real.
                  <br />
                  Adicione sincronização de dados em tempo real!
                  <br />
                  Permita que os usuários editem os mesmos dados ao mesmo tempo.
                </Typography>
              </Stack>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={1}>
              <img src="../src/assets/icons/icon3.png" />
              <Stack direction="column" alignItems="flex-start" spacing={1}>
                <Typography fontSize="28px">
                  Integrações com a API da Nuvem
                </Typography>
                <Typography fontSize="18px">
                  Desbloquear esse valor requer um iPaaS que
                  <br />
                  entregue o poder transformador das APIs e integração.
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Grid>
        <Grid item>
          <img src="../src/assets/images/illustration3.png" />
        </Grid>
      </Grid>
    </>
  );
};

export default Works;
