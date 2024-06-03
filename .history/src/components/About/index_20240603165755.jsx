import { Grid, Typography } from "@mui/material";

const About = () => {
  const features = [
    "Bibliotecas na Nuvem Compartilhada",
    "Visualizações de protótipos para testes de usuário e pesquisa.",
    "Organização fácil com projetos.",
    "Entrega para desenvolvedores gratuita, diretamente no navegador.",
    "Autenticação de dois fatores e SSO.",
  ];

  return (
    <Grid container justifyContent="space-between" mt={4} mb={4}>
      <Grid item xs={12} md={6}>
        <img
          src="../src/assets/images/illustration2.png"
          alt="Illustration"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography variant="h2" mt={4}>
          Laços de feedback mais rápidos e amigáveis tornam a vida mais fácil.
        </Typography>
        <Typography variant="body1" mt={2}>
          Adicione um Visualizador à sua equipe para que eles possam ver tudo o
          que você compartilha, ou convide pessoas para documentos individuais.
          A escolha é sua. Os interessados podem conferir designs em seus
          navegadores da web, testar protótipos e deixar feedback gratuitamente.
        </Typography>
        <ul style={{ paddingLeft: 20 }}>
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </Grid>
    </Grid>
  );
};

export default About;
