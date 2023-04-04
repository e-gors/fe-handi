import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useHistory } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import { isAuth } from "../utils/helpers";
import logo from "../assets/images/handi-logo.png";

export default function DrawerMenu(props) {
  const {
    singleLink,
    firstLink,
    secondLink,
    accountLink,
    withDivider,
    open,
    handleCloseDrawer,
    handleOpenDrawer,
    anchor,
  } = props;
  const history = useHistory();

  const handleNavigate = (link) => {
    history.push(link);
    handleCloseDrawer();
  };

  const list = () => (
    <Box sx={{ width: 250 }} role="presentation" onClick={handleCloseDrawer}>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <IconButton size="small" edge="end" sx={{ mr: 1, mt: 1 }}>
          <CloseIcon />
        </IconButton>
      </Box>

      <Box sx={{ textAlign: "center" }}>
        <img
          src={logo}
          alt="logo"
          style={{ width: 110, cursor: "pointer" }}
          onClick={(e) => handleNavigate("/")}
        />
      </Box>
      <List>
        {singleLink &&
          singleLink.map((data, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton onClick={(e) => handleNavigate(data.path)}>
                <ListItemIcon>{data.icon}</ListItemIcon>
                <ListItemText primary={data.label} />
              </ListItemButton>
            </ListItem>
          ))}
        {firstLink &&
          firstLink.map((data, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton onClick={(e) => handleNavigate(data.path)}>
                <ListItemIcon>{data.icon}</ListItemIcon>
                <ListItemText primary={data.label} />
              </ListItemButton>
            </ListItem>
          ))}
      </List>
      {withDivider && <Divider />}
      <List>
        {secondLink &&
          secondLink.map((data, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton onClick={(e) => handleNavigate(data.path)}>
                <ListItemIcon>{data.icon}</ListItemIcon>
                <ListItemText primary={data.label} />
              </ListItemButton>
            </ListItem>
          ))}
      </List>
      <List>
        {!isAuth() &&
          accountLink &&
          accountLink.map((data, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton onClick={(e) => handleNavigate(data.path)}>
                <ListItemIcon>{data.icon}</ListItemIcon>
                <ListItemText primary={data.label} />
              </ListItemButton>
            </ListItem>
          ))}
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment>
        <SwipeableDrawer
          anchor={anchor ? anchor : "left"}
          open={open}
          onClose={handleCloseDrawer}
          onOpen={handleOpenDrawer}
        >
          {list()}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}
