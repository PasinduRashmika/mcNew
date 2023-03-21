import { Box } from "@mui/material";

export const BasicLayout = ({ children, style }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        m: "1rem 1rem 0 1rem",
        maxHeight: "95vh",
        overflowY: "auto",
        paddingRight: "1rem",
        ...style,
      }}
    >
      {children}
    </Box>
  );
};
