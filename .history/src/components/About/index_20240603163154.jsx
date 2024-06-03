import { Box, Grid, Stack, Typography } from "@mui/material";

const FeatureItem = ({ text }) => (
  <Stack direction="row" alignItems="center" spacing={1}>
    <Box width="10px" height="10px" bgcolor="#000000" />
    <Typography>{text}</Typography>
  </Stack>
);

const About = () => {
  const features = [
    "Bibliotecas na Nuvem Compartilhada",
    "Visualizações de protótipos para testes de usuário e pesquisa.",
    "Organização fácil com projetos.",
    "Entrega para desenvolvedores gratuita, diretamente no navegador.",
    "Autenticação de dois fatores e SSO.",
  ];

  return (
    <Grid container justifyContent="space-between" mt={60} mb={60}>
      <Grid item>
        <img src="../src/assets/images/illustration2.png" alt="Illustration" />
      </Grid>
      <Grid item>
        <Typography fontSize="60px">
          Laços de feedback mais
          <br /> rápidos e amigáveis
          <br /> tornam a vida mais fácil.
        </Typography>
        <Typography fontSize="18px" mt={2}>
          Adicione um Visualizador à sua equipe para que eles possam ver tudo
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
          {features.map((feature, index) => (
            <FeatureItem key={index} text={feature} />
          ))}
        </Stack>
      </Grid>
    </Grid>
  );
};

export default About;
