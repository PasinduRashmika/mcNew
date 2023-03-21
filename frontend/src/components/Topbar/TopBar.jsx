import {
  Box,
  IconButton,
  useTheme,
  Zoom,
  Avatar,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { ColorModeContext } from "../../utils/ColorModeContext";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { Tooltip } from "@mui/material";
import ProfilePic from "../../Images/img1.jpg";
import { useStateContext } from "../../utils/ContextProvider";
import { Notification } from "../Notification/Notification";
import { UserProfile } from "../UserProfile/UserProfile";

const TopBar = () => {
  //get the theme from mui
  const theme = useTheme();
  //toggle different states states for the color mode
  const colorMode = useContext(ColorModeContext);
  const { showNotification, setShowNotification, showProfile, setShowProfile } =
    useStateContext();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        padding: "2px",
        backgroundColor: "topbar.main",
      }}
    >
      <Box
        sx={{
          display: "flex",
          backgroundColor: "topbar.searchBox",
          borderRadius: "3px",
        }}
      >
        <InputBase
          sx={{
            ml: 2,
            flex: 1,
          }}
          placeholder="serach"
        />
        <Tooltip
          title="Go"
          placement="bottom"
          TransitionComponent={Zoom}
          TransitionProps={{ timeout: 300 }}
          arrow
        >
          <IconButton type="button" sx={{ padding: "1px" }}>
            <SearchIcon />
          </IconButton>
        </Tooltip>
      </Box>

      <Box sx={{ display: "flex" }}>
        <Tooltip
          title="change color mode"
          placement="bottom"
          TransitionComponent={Zoom}
          TransitionProps={{ timeout: 300 }}
          arrow
        >
          <IconButton onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === "dark" ? (
              <DarkModeOutlinedIcon />
            ) : (
              <LightModeOutlinedIcon />
            )}
          </IconButton>
        </Tooltip>
        <Tooltip
          title="Notification"
          placement="bottom"
          TransitionComponent={Zoom}
          TransitionProps={{ timeout: 300 }}
          arrow
        >
          <IconButton
            onClick={() => {
              setShowProfile(false);
              setShowNotification((prev) => !prev);
            }}
          >
            <NotificationsOutlinedIcon />
          </IconButton>
        </Tooltip>
        <Tooltip
          title="User Profile"
          placement="bottom"
          TransitionComponent={Zoom}
          TransitionProps={{ timeout: 300 }}
          arrow
        >
          <IconButton
            sx={{
              display: "flex",
              gap: "0.5rem",
            }}
            onClick={() => {
              setShowProfile((prev) => !prev);
              setShowNotification(false);
            }}
          >
            <Avatar src={ProfilePic} alt="Profile Picture" />
            <Typography variant="h6">
              Hi, <span style={{ fontWeight: "bold" }}>User</span>
            </Typography>
            <KeyboardArrowDownOutlinedIcon />
          </IconButton>
        </Tooltip>

        {showNotification && <Notification />}
        {showProfile && <UserProfile />}
      </Box>
    </Box>
  );
};

export default TopBar;
