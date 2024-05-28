import { Box, Typography } from "@mui/material"

const Header = () => {
  return (
    <Box display="flex">
      <img src="../src/assets/logos/LogoBlack.png" />
      <Typography>Sobre nós</Typography>
      <Typography>Como funciona</Typography>
      <Typography>Valores</Typography>
      <Typography>Dúvidas</Typography>
    </Box>
  )
}

export default Header
