import { Grid, Stack, Typography } from "@mui/material";

const Works = () => {
  const features = [
    {
      iconSrc: "../src/assets/icons/icon1.png",
      title: "Bibliotecas na Nuvem Compartilhadas",
      description: `
        Navegue até o painel Seu trabalho na barra lateral esquerda.
        Selecione a biblioteca que você deseja compartilhar.
        Selecione o ícone de Compartilhar no canto superior direito para compartilhar a biblioteca.
      `,
    },
    {
      iconSrc: "../src/assets/icons/icon2.png",
      title: "Entrega gratuita para desenvolvedores, direto no navegador",
      description: `
        O Cloud Inspector facilita para os desenvolvedores obterem as informações necessárias
        para transformar pixels em código — tudo no navegador e, o mais importante de forma gratuita.
      `,
    },
    {
      iconSrc: "../src/assets/icons/icon4.png",
      title: "Edição colaborativa em tempo real",
      description: `
        O Room Service ajuda você a criar recursos colaborativos em tempo real.
        Adicione sincronização de dados em tempo real! Permita que os usuários editem os mesmos dados ao mesmo tempo.
      `,
    },
    {
      iconSrc: "../src/assets/icons/icon3.png",
      title: "Integrações com a API da Nuvem",
      description: `
        Desbloquear esse valor requer um iPaaS que entregue o poder transformador das APIs e integração.
      `,
    },
  ];

  return (
    <Grid container justifyContent="space-between" mt={60} mb={60}>
      <Grid item>
        <Typography fontSize="60px">
          Construindo o melhor
          <br /> espaço para colaboração.
        </Typography>
        <Stack spacing={4} mt={5}>
          {features.map((feature, index) => (
            <FeatureItem
              key={index}
              iconSrc={feature.iconSrc}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </Stack>
      </Grid>
      <Grid item>
        <img src="../src/assets/images/illustration3.png" alt="Illustration" />
      </Grid>
    </Grid>
  );
};

export default Works;
