/** @format */
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  List,
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import LogoutIcon from "@mui/icons-material/Logout";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import React from "react";
import { useHistory } from "react-router-dom";

const links = [
  {
    label: "Dashboard",
    icon: <DashboardIcon />,
    path: "/dashboard",
  },
  {
    label: "Profile",
    icon: <AccountBoxIcon />,
    path: "/profile",
  },
  {
    label: "Messages",
    icon: <MailIcon />,
    path: "/messages",
  },
  {
    label: "Schedules",
    icon: <CalendarMonthIcon />,
    path: "/schedules",
  },
  {
    label: "Posts",
    icon: <DynamicFeedIcon />,
    path: "/posts",
  },
  {
    label: "Settings",
    icon: <SettingsApplicationsIcon />,
    path: "/settings",
  },
];

function Sidebar(props) {
  const {handleLogout} = props;
  const history = useHistory();

  const handleNavigate = (path) => {
    history.push(path);
  };
  return (
    <Box>
      <List>
        {links.map((data, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton onClick={(e) => handleNavigate(data.path)}>
              <ListItemIcon
                sx={{
                  color: "rgba(2,126,251)",
                }}
              >
                {data.icon}
              </ListItemIcon>
              <ListItemText primary={data.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <List sx={{ mt: -2 }}>
        <ListItem disablePadding>
          <ListItemButton onClick={() => handleLogout()}>
            <ListItemIcon
              sx={{
                color: "rgba(2,126,251)",
              }}
            >
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText>Logout</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
}
export default Sidebar;
