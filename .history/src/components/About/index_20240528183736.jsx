import { Grid, Typography } from "@mui/material";

const About = () => {
  return (
    <Grid container justifyContent="space-between" mt={50}>
      
      <Grid item>
        <Typography fontSize="60px">
        Laços de feedback mais rápidos e amigáveis<br/> tornam a vida mais fácil.
        </Typography>
        <Typography>
          Adicione um Visualizador à sua equipe para que eles possam ver tudo o
          que você compartilha, ou convide pessoas para documentos individuais.
          A escolha é sua. Os interessados podem conferir designs em seus
          navegadores da web, testar protótipos e deixar feedback gratuitamente.
          Bibliotecas na Nuvem Compartilhada, para uma única fonte de verdade.
          Visualizações de protótipos para testes de usuário e pesquisa.
          Organização fácil com projetos. Entrega para desenvolvedores gratuita,
          diretamente no navegador. Autenticação de dois fatores e SSO.
        </Typography>
      </Grid>
      <Grid item>
        <img src="../src/assets/images/illustration2.png" />
      </Grid>
    </Grid>
  );
};

export default About;
