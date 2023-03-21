import React, { useState } from "react";
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import { Box, Typography, useTheme, Zoom } from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import uniLogo from "../../assets/universityLogo.png";
import { SideBarPanelItem } from "./SideBarItem";
import { navigationData } from "../../data/navigationData";
import LiveHelpOutlinedIcon from "@mui/icons-material/LiveHelpOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { Tooltip } from "@mui/material";
import { useStateContext } from "../../utils/ContextProvider";

const SideBarPanel = ({ userRole }) => {
  const { collapsed, collapseSidebar } = useProSidebar();
  const [selected, setSelected] = useState("Home");
  const { showModal, closeModal, openModal } = useStateContext();
  const theme = useTheme();
  const roles = navigationData.data;

  return (
    <Box
      sx={{
        display: "flex",
        height: "100%",
      }}
    >
      <Sidebar
        backgroundColor={theme.palette.sidebar.main}
        width="270px"
        transitionDuration={500}
        defaultCollapsed={false}
      >
        <Menu
          menuItemStyles={{
            button: ({ level, active }) => {
              // only apply styles on first level elements of the tree
              if (level === 0)
                return {
                  color: active
                    ? theme.palette.sidebar.activeText
                    : theme.palette.sidebar.normalText,
                  backgroundColor: active
                    ? theme.palette.sidebar.active
                    : undefined,
                  "&:hover": {
                    color: theme.palette.sidebar.hoverText,
                    backgroundColor: theme.palette.sidebar.hover,
                  },
                };
            },
          }}
        >
          <MenuItem
            onClick={() => collapseSidebar(!collapsed)}
            icon={collapsed ? <MenuOutlinedIcon /> : undefined}
          >
            {!collapsed && (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                  }}
                >
                  MCAS
                </Typography>
                <MenuOutlinedIcon />
              </Box>
            )}
          </MenuItem>

          {/* this items will show when the sidbar is not collapsed */}
          {!collapsed && (
            <Box>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <img
                  style={{
                    width: "70px",
                  }}
                  alt="University Logo"
                  src={uniLogo}
                />
              </Box>
              <Box sx={{ textAlign: "center" }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "bold",
                    mt: "10px",
                    color: "text.main",
                  }}
                >
                  {/* to Captialize the first letter */}
                  {String(userRole).charAt(0).toUpperCase() +
                    String(userRole).slice(1)}
                </Typography>
              </Box>
            </Box>
          )}

          <Box
            sx={{
              mt: 5,
            }}
          >
            {/* dynamically creating component */}
            {roles[userRole].map((role) => {
              {
                return (
                  <SideBarPanelItem
                    title={role.title}
                    to={role.to}
                    icon={<role.icon />}
                    selected={selected}
                    setSelected={setSelected}
                    key={role.title}
                    collapsed={collapsed}
                  />
                );
              }
            })}
          </Box>
          <Tooltip
            title="Frequently Asked Questions"
            placement="right"
            TransitionComponent={Zoom}
            TransitionProps={{ timeout: 300 }}
            arrow
          >
            <Box>
              <SideBarPanelItem
                title="FAQ"
                to="/faq"
                icon={<LiveHelpOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            </Box>
          </Tooltip>

          {
            <Tooltip
              title="Log out"
              placement="right"
              TransitionComponent={Zoom}
              TransitionProps={{ timeout: 300 }}
              arrow
            >
              <Box
                style={{
                  position: "absolute",
                  bottom: "0",
                  width: "100%",
                }}
              >
                <MenuItem
                  onClick={() => (showModal ? closeModal() : openModal())}
                  icon={<LogoutOutlinedIcon />}
                >
                  <Typography sx={{ color: "sidebar.menuItemText" }}>
                    Log Out
                  </Typography>
                </MenuItem>
              </Box>
            </Tooltip>
          }
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default SideBarPanel;
