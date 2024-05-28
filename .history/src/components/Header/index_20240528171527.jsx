import { Box, Typography } from "@mui/material"

const Header = () => {
  return (
    <Box display="flex" alignItems="center" gap={4}>
      <img src="../src/assets/logos/LogoBlack.png" />
      <Typography fontFamily="Neue Machina">Sobre nós</Typography>
      <Typography>Como funciona</Typography>
      <Typography>Valores</Typography>
      <Typography>Dúvidas</Typography>
    </Box>
  )
}

export default Header
