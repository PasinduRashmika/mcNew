import { motion } from "framer-motion";
import { Backdrop } from "./Backdrop";
import { BasicButton } from "../Button/BasicButton";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "../../utils/ContextProvider";
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

export const ConfirmationModal = ({ handleClose, content }) => {
  const navigate = useNavigate();
  const { setShowNotification, setShowProfile } = useStateContext();
  setShowProfile(false);
  setShowNotification(false);

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
          {content}
        </Typography>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-evenly",
            gap: "0.5rem",
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
              navigate("/auth/login");
            }}
          />
          <BasicButton
            variant="outlined"
            title="Cancel"
            color="button.red"
            hoverColor="none"
            hoverTextColor="button.red"
            textColor="button.text"
            handler={handleClose}
          />
        </Box>
      </motion.div>
    </Backdrop>
  );
};
