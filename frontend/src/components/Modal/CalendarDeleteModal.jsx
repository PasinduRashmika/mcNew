import { Typography } from "@mui/material";
import { Backdrop } from "./Backdrop";
import React from "react";
import { motion } from "framer-motion";
import { Box } from "@mui/system";
import { BasicButton } from "../Button/BasicButton";

export const CalendarDeleteModal = ({
  handleClose,
  setShowCalendarModal,
  selected,
}) => {
  const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
    },
  };
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        style={{
          width: "min(50%, 700px)",
          height: "min(50%, 300px)",
          margin: "auto 20px",
          padding: "0 2rem",
          borderRadius: "12px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage:
            "linear-gradient(to bottom, #0396fb, #007ed0, #0066a6, #004f7e, #0a3958)",
        }}
      >
        <Typography variant="h5" sx={{ color: "modal.text" }}>
          Are you sure want to delete the event?
        </Typography>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-evenly",
          }}
        >
          <BasicButton
            variant="contained"
            title="Yes"
            color="primary.main"
            textColor="primary.light"
            hoverColor="none"
            hoverTextColor="primary.main"
            handler={() => {
              selected.event.remove();
              setShowCalendarModal(false);
            }}
          />
          <BasicButton
            variant="outlined"
            title="Cancel"
            color="button.red"
            hoverColor="none"
            hoverTextColor="button.red"
            textColor="button.text"
            handler={() => setShowCalendarModal(false)}
          />
        </Box>
      </motion.div>
    </Backdrop>
  );
};
