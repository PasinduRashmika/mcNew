import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material";

export const Backdrop = ({ children, onClick }) => {
  const theme = useTheme();

  return (
    <motion.div
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        zIndex: "10",
        position: "absolute",
        top: 0,
        left: 0,
        height: "100%",
        width: "100%",
        backgroundColor: theme.palette.modal.secondary,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflowY: "hidden",
      }}
    >
      {children}
    </motion.div>
  );
};
