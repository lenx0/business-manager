import { Grid, Stack, Typography } from "@mui/material";
import FeatureItem from "./FeatureItem";

const Works = () => {
  const features = [
    {
      iconSrc: "/assets/icons/icon1.png",
      title: "Bibliotecas na Nuvem Compartilhadas",
      description: `
        Navegue até o painel Seu trabalho na barra lateral esquerda.
        Selecione a biblioteca que você deseja compartilhar.
        Selecione o ícone de Compartilhar no canto superior direito para compartilhar a biblioteca.
      `,
    },
    {
      iconSrc: "/assets/icons/icon2.png",
      title: "Entrega gratuita para desenvolvedores, direto no navegador",
      description: `
        O Cloud Inspector facilita para os desenvolvedores obterem as informações necessárias
        para transformar pixels em código — tudo no navegador e, o mais importante de forma gratuita.
      `,
    },
    {
      iconSrc: "/assets/icons/icon4.png",
      title: "Edição colaborativa em tempo real",
      description: `
        O Room Service ajuda você a criar recursos colaborativos em tempo real.
        Adicione sincronização de dados em tempo real! Permita que os usuários editem os mesmos dados ao mesmo tempo.
      `,
    },
    {
      iconSrc: "/assets/icons/icon3.png",
      title: "Integrações com a API da Nuvem",
      description: `
        Desbloquear esse valor requer um iPaaS que entregue o poder transformador das APIs e integração.
      `,
    },
  ];

  return (
    <Grid container justifyContent="space-between" mt={60} mb={60} spacing={4}>
      <Grid item xs={12} md={6}>
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
      <Grid
        item
        xs={12}
        md={5}
        container
        justifyContent="center"
        alignItems="center"
      >
        <img
          src="/assets/images/Illustration3.png"
          alt="Illustration"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </Grid>
    </Grid>
  );
};

export default Works;
