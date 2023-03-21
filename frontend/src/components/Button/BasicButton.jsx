import { Button, useTheme } from "@mui/material";

export const BasicButton = ({
  handler,
  icon,
  title,
  style,
  type,
  color,
  hoverColor,
  textColor,
  hoverTextColor,
}) => {
  return (
    <Button
      onClick={handler}
      title={title}
      startIcon={icon}
      type={type}
      sx={{
        backgroundColor: color,
        color: textColor,
        width: "8rem",
        minWidth: "4.8rem",
        height: "3rem",
        minHeight: "3rem",
        padding: "0 2rem",
        border: `1px solid `,
        margin: "2rem auto 1rem auto",
        ":hover": {
          backgroundColor: hoverColor,
          color: hoverTextColor,
          transform: "scale(1.1)",
        },
        borderRadius: "5px",
        transition: "background ease 400ms",
      }}
      style={style}
    >
      {title}
    </Button>
  );
};
