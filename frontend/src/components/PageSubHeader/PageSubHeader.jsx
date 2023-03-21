import { Typography } from "@mui/material";
import { RightLeftMotion } from "../Motion/RightLeftMotion";
export default function PageSubHeader({ subtitle }) {
  return (
    <RightLeftMotion delayTime={0.3}>
      <Typography variant="h5" sx={{ color: "text.sub" }}>
        {subtitle}
      </Typography>
    </RightLeftMotion>
  );
}
