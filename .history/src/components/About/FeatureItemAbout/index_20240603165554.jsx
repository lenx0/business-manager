import { Box, Stack, Typography } from "@mui/material";

const FeatureItemAbout = ({ text }) => (
  <Stack direction="row" alignItems="center" spacing={1}>
    <Box width="10px" height="10px" bgcolor="#000000" />
    <Typography>{text}</Typography>
  </Stack>
);

export default FeatureItemAbout;
