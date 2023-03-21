import { Box, useMediaQuery } from "@mui/material";

export const FormControlLayout = ({ children, style, onSubmit }) => {
  const isMobile = useMediaQuery("(max-width:412px)");
  return (
    <Box
      component="form"
      onSubmit={onSubmit}
      sx={{
        border: "1px solid #339BFF",
        padding: "1.05rem 2rem 2rem 2rem",
        borderRadius: "10px",
        display: "grid",
        gap: "2rem",
        marginBottom: "1.5rem",
        gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
        mt: "1rem",
        "& > div": {
          gridColumn: isMobile ? "span 4" : undefined,
        },
        ...style,
      }}
    >
      {children}
    </Box>
  );
};
