import { Box, Typography, useTheme } from "@mui/material";
import { RightLeftMotion } from "../../components/Motion/RightLeftMotion";
export default function PageHeader({ title, subtitle }) {
  const theme = useTheme();
  return (
    <RightLeftMotion delayTime={0.2}>
      <Box
        sx={{
          display: "inline-flex",
          flexDirection: "column",
          width: "18em",
          backgroundColor: theme.palette.text.background,
          border: `1px solid ${theme.palette.primary.main}`,
          borderRadius: "10px",
        }}
      >
        <Typography variant="h5" sx={{ ml: "10px", color: "text.main" }}>
          {title}
        </Typography>
        <Typography variant="h6" sx={{ ml: "10px", color: "text.sub" }}>
          {subtitle}
        </Typography>
      </Box>
    </RightLeftMotion>
  );
}
