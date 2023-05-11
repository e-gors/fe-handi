import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import { useHistory, useLocation } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";

const links = [
  {
    label: "Dashboard",
    path: "/admin/dashboard",
    icon: <DashboardIcon />,
  },
];

function Sidebar() {
  const history = useHistory();
  const location = useLocation();

  const handleNavigate = (url) => {
    history.push(url);
  };

  return (
    <div>
      <List>
        {links.map((link, index) => (
          <ListItem
            sx={{
              display: "block",
              "& .Mui-selected": {
                backgroundColor: "darkgray",
              },
              "&:hover .Mui-selected": {
                backgroundColor: "darkgray",
              },
            }}
            key={index}
            disablePadding
          >
            <ListItemButton
              onClick={() => handleNavigate(link.path)}
              selected={link.path === location.pathname}
            >
              <ListItemIcon sx={{ color: "#0E4C91" }}>{link.icon}</ListItemIcon>
              <ListItemText primary={link.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default Sidebar;
