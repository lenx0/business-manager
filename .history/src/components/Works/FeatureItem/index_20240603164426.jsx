import { Stack, Typography } from "@mui/material";

const FeatureItem = ({ iconSrc, title, description }) => (
    <Stack direction="row" alignItems="center" spacing={1}>
      <img src={iconSrc} alt={title} />
      <Stack direction="column" alignItems="flex-start" spacing={1}>
        <Typography fontSize="28px">{title}</Typography>
        <Typography fontSize="18px" whiteSpace="pre-line">
          {description}
        </Typography>
      </Stack>
    </Stack>
  );