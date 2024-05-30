import { Grid, Stack, Typography } from "@mui/material";

const Works = () => {
  return (
    <>
      <Stack container direction="column">
        <Stack item>
          <Typography fontSize="60px">
            Construindo o melhor espaço
            <br /> para colaboração.
          </Typography>
        </Stack>

        <Stack item>
          <img src="../src/assets/icons/icon1.png" />
        </Stack>

        <Stack item>
          <img src="../src/assets/icons/icon2.png" />
          <Typography>teste</Typography>
        </Stack>

        <Stack item>
          <img src="../src/assets/icons/icon3.png" />
        </Stack>

        <Stack item>
          <img src="../src/assets/icons/icon4.png" />
        </Stack>
      </Stack>
    </>
  );
};

export default Works;
