import { Box, Grid, Stack, Typography } from "@mui/material";

const Works = () => {
  return (
    <>
      <Grid container spacing={2} style={{ height: '100vh' }}>
      {/* Esquerda - Parte Superior */}
      <Grid item xs={8}>
        <Paper style={{ backgroundColor: '#ffcccc', height: '100%' }}>Parte Esquerda Superior</Paper>
      </Grid>
      {/* Esquerda - Parte Inferior */}
      <Grid item xs={8}>
        <Paper style={{ backgroundColor: '#ccffcc', height: '100%' }}>Parte Esquerda Inferior</Paper>
      </Grid>
      {/* Direita - Imagem */}
      <Grid item xs={4} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Paper style={{ backgroundColor: '#ccccff', height: '100%', width: '100%' }}>
          <img src="sua-imagem.jpg" alt="Imagem" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </Paper>
      </Grid>
    </Grid>
    </>
  );
};

export default Works;
