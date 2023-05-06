import * as React from "react";
import { Divider, MenuItem, Box, Menu, Fade } from "@mui/material";

export default function DropdownMenuItem(props) {
  const { anchorEl, open, handleClose, items = [] } = props;

  const handleNavigate = (link) => {
    handleClose(link);
  };

  return (
    <Box>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
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
