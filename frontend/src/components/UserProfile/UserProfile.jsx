import {
  Box,
  Typography,
  IconButton,
  Avatar,
  Button,
  useTheme,
} from "@mui/material";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import { useStateContext } from "../../utils/ContextProvider";
import userProfileLogo from "../../Images/img1.jpg";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { motion } from "framer-motion";
export const UserProfile = () => {
  const { authUser, setShowProfile, showModal, openModal, closeModal } =
    useStateContext();
  const theme = useTheme();
  return (
    <Box
      sx={{
        zIndex: "10",
        backgroundColor: "sidebar.main",
        border: "1px solid blue",
        color: "red",
        position: "absolute",
        right: "0.30rem",
        top: "4rem",
        width: "20vw",
        padding: "2rem",
        borderRadius: "0.5rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        marginTop: "2px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: `1px solid ${theme.palette.primary.main}`,
        }}
      >
        <Typography sx={{ color: "sidebar.normalText" }} variant="h5">
          User Profile
        </Typography>
        <IconButton onClick={() => setShowProfile(false)}>
          <HighlightOffOutlinedIcon />
        </IconButton>
      </Box>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        {" "}
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "column",
            padding: "0.5rem",
            gap: "0.5rem",
            borderBottom: `1px solid ${theme.palette.primary.main}`,
            color: "text.main",
          }}
        >
          <Avatar
            src={userProfileLogo}
            alt="User Logo"
            sx={{ width: "5rem", height: "5rem" }}
          />
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Mr.Unkown
          </Typography>
          <Typography variant="h5">{authUser}</Typography>
          <Typography>unkown@gmail.com</Typography>
        </Box>
      </motion.div>

      <Box sx={{ borderBottom: `1px solid ${theme.palette.primary.main}` }}>
        <Button
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            color: "sidebar.normalText",
            ":hover": {
              color: "sidebar.hoverText",
              backgroundColor: "sidebar.hover",
            },
          }}
          onClick={() => (showModal ? closeModal() : openModal())}
        >
          <Typography sx={{ color: "sidebar.ButtonText" }}>Log Out</Typography>
          <LogoutOutlinedIcon />
        </Button>
      </Box>
    </Box>
  );
};
