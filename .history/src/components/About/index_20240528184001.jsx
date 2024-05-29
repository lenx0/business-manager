import { Grid, Typography } from "@mui/material";

const About = () => {
  return (
    <Grid container justifyContent="space-between" mt={50}>
      <Grid item>
        <img src="../src/assets/images/illustration2.png" />
      </Grid>
      <Grid item>
        <Typography fontSize="60px">
        Laços de feedback mais<br/> rápidos e amigáveis<br/> tornam a vida mais fácil.
        </Typography>
        <Typography>
          Adicione um Visualizador à sua equipe para que eles possam ver tudo <br/> o
          que você compartilha, ou convide pessoas para documentos individuais.<br/>
          A escolha é sua. Os interessados podem conferir designs em seus<br/>
          navegadores da web, testar protótipos e deixar feedback gratuitamente.<br/>
          Bibliotecas na Nuvem Compartilhada, para uma única fonte de verdade.
          Visualizações de protótipos para testes de usuário e pesquisa.
          Organização fácil com projetos. Entrega para desenvolvedores gratuita,
          diretamente no navegador. Autenticação de dois fatores e SSO.
        </Typography>
      </Grid>
      
    </Grid>
  );
};

export default About;
