import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default function MenuBar(props) {
  const { anchorEl, open, handleClose, menuItems } = props;

  return (
    <div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {menuItems &&
          menuItems.map((item, i) => (
            <MenuItem onClick={handleClose} key={i}>
              {item}
            </MenuItem>
          ))}
      </Menu>
    </div>
  );
}
