import React from "react";
import { MenuItem } from "react-pro-sidebar";
import { Typography, Tooltip, Zoom } from "@mui/material";
import { Link } from "react-router-dom";
export const SideBarPanelItem = ({
  title,
  to,
  icon,
  selected,
  setSelected,
  collapsed,
}) => {
  // return (
  //   <Tooltip
  //     title={title}
  //     placement="right"
  //     TransitionComponent={Zoom}
  //     TransitionProps={{ timeout: 300 }}
  //     arrow
  //   >
  //     <div>
  //       <MenuItem
  //         active={selected === title}
  //         onClick={() => setSelected(title)}
  //         icon={icon}
  //         component={<Link to={to} />}
  //       >
  //         <Typography sx={{ color: "sidebar.menuItemText" }}>
  //           {title}
  //         </Typography>
  //       </MenuItem>
  //     </div>
  //   </Tooltip>
  // );

  const Item = () => {
    return (
      <MenuItem
        active={selected === title}
        onClick={() => setSelected(title)}
        icon={icon}
        component={<Link to={to} />}
      >
        <Typography sx={{ color: "sidebar.menuItemText" }}>{title}</Typography>
      </MenuItem>
    );
  };

  return (
    <>
      {collapsed ? (
        <Tooltip
          title={title}
          placement="right"
          TransitionComponent={Zoom}
          TransitionProps={{ timeout: 300 }}
          arrow
        >
          <div>
            <Item />
          </div>
        </Tooltip>
      ) : (
        <Item />
      )}
    </>
  );
};
