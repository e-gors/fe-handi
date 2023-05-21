/** @format */
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import List from "@mui/material/List";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import WorkIcon from "@mui/icons-material/Work";
import GavelIcon from "@mui/icons-material/Gavel";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import React from "react";
import { useHistory } from "react-router-dom";

const links = [
  {
    label: "Dashboard",
    icon: <DashboardIcon />,
    link: "/admin/dashboard",
  },
  {
    label: "Users",
    icon: <PersonIcon />,
    link: "/admin/users",
  },
  {
    label: "Contracts",
    icon: <GavelIcon />,
    link: "/admin/contracts",
  },
  {
    label: "Job Posts",
    icon: <WorkIcon />,
    link: "/admin/job-post",
  },
  {
    label: "Offers",
    icon: <LocalOfferIcon />,
    link: "/admin/offers",
  },
  {
    label: "Reports",
    icon: <AccountBoxIcon />,
    link: "/admin/reports",
  },
  {
    label: "Settings",
    icon: <SettingsApplicationsIcon />,
    link: "/admin/settings",
  },
];

function Sidebar() {
  const history = useHistory();

  const handleNavigate = (link) => {
    history.push(link);
  };
  return (
    <div>
      <List>
        {links.map((data, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton onClick={(e) => handleNavigate(data.link)}>
              <ListItemIcon>{data.icon}</ListItemIcon>
              <ListItemText primary={data.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
}
export default Sidebar;
