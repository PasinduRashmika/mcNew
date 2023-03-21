import { Box, Typography, IconButton, useTheme, Avatar } from "@mui/material";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import { useStateContext } from "../../utils/ContextProvider";
import userProfileLogo from "../../Images/img1.jpg";
import { motion } from "framer-motion";

const data = [
  {
    image: userProfileLogo,
    message: "New message received",
  },
  {
    image: userProfileLogo,
    message: "New message received",
  },
  {
    image: userProfileLogo,
    message: "New message received",
  },
  {
    image: userProfileLogo,
    message: "New message received",
  },
];

export const Notification = () => {
  const { setShowNotification } = useStateContext();
  const theme = useTheme();
  return (
    <Box
      sx={{
        zIndex: "10",
        backgroundColor: "sidebar.main",
        border: "1px solid blue",
        color: "red",
        position: "absolute",
        right: "1.30rem",
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
          Notification
        </Typography>
        <IconButton
          onClick={() => {
            setShowNotification(false);
          }}
        >
          <HighlightOffOutlinedIcon />
        </IconButton>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {data?.map((item, index) => {
          return (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
              style={{
                display: "flex",
                gap: "1rem",
                borderBottom: `1px solid ${theme.palette.primary.main}`,
              }}
              key={index}
            >
              <Avatar src={item.image} alt="log" />
              <Typography sx={{ flex: "1" }}>{item.message}</Typography>
              <IconButton>
                <HighlightOffOutlinedIcon />
              </IconButton>
            </motion.div>
          );
        })}
      </Box>
    </Box>
  );
};
