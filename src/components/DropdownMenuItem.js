import * as React from "react";
import { MenuItem, Box, Menu, Fade } from "@mui/material";

export default function DropdownMenuItem(props) {
  const { anchorEl, open, handleClose, onNavigate, items = [] } = props;

  const handleNavigate = (link) => {
    onNavigate(link);
  };

  return (
    <Box>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        {items.map((item, i) => {
          return (
            <MenuItem key={i} onClick={() => handleNavigate(item.path)}>
              {item.icon && item.icon}
              {item.name}
            </MenuItem>
          );
        })}
      </Menu>
    </Box>
  );
}
