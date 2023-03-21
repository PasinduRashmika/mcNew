import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { MiniCalendar } from "../Calendar/Calendar";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import { Link } from "react-router-dom";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import { useStateContext } from "../../utils/ContextProvider";
import { motion } from "framer-motion";
export default function RightSideBar() {
  const { setShowRightSidebar } = useStateContext();
  const theme = useTheme();

  return (
    <motion.aside>
      <Box
        initial={{ width: 0 }}
        animate={{ width: "300px" }}
        exit={{}}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "20vw",
          minWidth: "10vw",
          top: 0,
          right: 0,
          height: "100vh",
          backgroundColor: theme.palette.sidebar.main,
          paddingTop: "5px",
          gap: "2px",
          marginBottom: "0.5rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            paddingTop: "4px",
            justifyContent: "space-between",
            borderBottom: `1px solid ${theme.palette.primary.main}`,
            marginLeft: "5px",
          }}
        >
          <Typography sx={{ color: "sidebar.normalText" }} variant="h5">
            Settings
          </Typography>
          <IconButton onClick={() => setShowRightSidebar(false)}>
            <HighlightOffOutlinedIcon />
          </IconButton>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            flex: 2,
          }}
        >
          <MiniCalendar />
          <Button
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100%",
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
                color: "button.hoverText",
              },
            }}
            // onClick={navigate("/calendar")}
          >
            <Link to="/calendar">
              <Typography
                sx={{
                  padding: "5px",
                  "@media (max-width:412px) ": {
                    fontSize: "0.8rem",
                  },
                }}
              >
                Full Calendar
              </Typography>
              {<CalendarMonthOutlinedIcon />}
            </Link>
          </Button>
        </Box>
      </Box>
    </motion.aside>
  );
}
