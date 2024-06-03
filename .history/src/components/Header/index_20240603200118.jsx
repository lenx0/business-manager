import { Box, Typography } from "@mui/material";

const NavItem = ({ children, fontFamily }) => (
  <Typography fontFamily={fontFamily} variant="body1">
    {children}
  </Typography>
);

const Header = () => {
  const navItems = [
    { text: "Sobre nós"},
    { text: "Como funciona" },
    { text: "Valores" },
    { text: "Dúvidas" },
  ];

  return (
    <Box display="flex" alignItems="center" gap={10}>
      <img src="/assets/logos/LogoBlack.png" alt="Logo" />
      {navItems.map((item, index) => (
        <NavItem key={index} fontFamily={item.fontFamily}>
          {item.text}
        </NavItem>
      ))}
    </Box>
  );
};

export default Header;
