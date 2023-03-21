import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { useStateContext } from "../../utils/ContextProvider";

export default function PrimaryButton({ title, to, Icon }) {
  const { time, setTime } = useStateContext();

  return (
    <Link
      to={to}
      style={{
        textDecoration: "none",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          color: "button.text",
          flexDirection: "column",
          textAlign: "center",
          backgroundColor: "button.color",
          borderStyle: "solid",
          borderColor: "button.hover",
          borderWidth: "1px",
          ":hover": {
            backgroundColor: "button.hover",
            cursor: "pointer",
            transition: "all 500ms cubic-bezier(0.77, 0, 0.175, 1)",
            transform: "scale(1.03)",
            color: "button.hoverText",
          },
        }}
      >
        <Typography
          sx={{
            padding: "5px",
            "@media (max-width:412px) ": {
              fontSize: "0.8rem",
            },
          }}
        >
          {title}
        </Typography>
        {<Icon />}
      </Box>

      {/* {setTime(time + 0.1)} */}
    </Link>
  );
}
