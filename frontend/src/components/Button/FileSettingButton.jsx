import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import Tooltip from "@mui/material/Tooltip";
import { Box, Button } from "@mui/material";
import { Palette } from "@mui/icons-material";

const FileSettingButton = ({ handler }) => {
  return (
    <Box
      sx={{
        position: "absolute",
        right: "1rem",
        bottom: "1rem",
        zIndex: "1000",
      }}
    >
      <Tooltip title="Setting" placement="top" arrow>
        <Button
          type="Button"
          sx={{
            backgroundColor: "button.color",
            color: "button.text",
            borderRadius: "50%",
            padding: "1rem",
            ":hover": {
              backgroundColor: "button.hover",
              color: "button.hoverText",
            },
          }}
          onClick={handler}
        >
          <SettingsOutlinedIcon />
        </Button>
      </Tooltip>
    </Box>
  );
};

export default FileSettingButton;
