import * as React from "react";
import {
  Box,
  ListItemIcon,
  ListItem,
  ListItemButton,
  List,
  Divider,
  ListItemText,
  SwipeableDrawer,
  IconButton,
} from "@mui/material";
import { useHistory, useLocation } from "react-router-dom";
import { isAuth } from "../utils/helpers";
import logo from "../assets/images/handi-logo.png";
import { icons } from "../components/Icon";

export default function PublicDrawerMenu(props) {
  const {
    singleLink,
    firstLink,
    secondLink,
    accountLink,
    mobileSecondLink,
    withDivider,
    open,
    handleCloseDrawer,
    handleOpenDrawer,
    anchor,
  } = props;

  const location = useLocation();
  const history = useHistory();

  const handleNavigate = (link) => {
    history.push(link);
    handleCloseDrawer();
  };

  const list = () => (
    <Box sx={{ width: 250 }} role="presentation" onClick={handleCloseDrawer}>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <IconButton size="small" edge="end" sx={{ mr: 1, mt: 1 }}>
          {icons.closeIcon}
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
              <ListItemButton
                onClick={(e) => handleNavigate(data.path)}
                selected={data.path === location.pathname}
              >
                <ListItemIcon>{data.icon}</ListItemIcon>
                <ListItemText primary={data.label} />
              </ListItemButton>
            </ListItem>
          ))}
        {firstLink &&
          firstLink.map((data, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton
                onClick={(e) => handleNavigate(data.path)}
                selected={data.path === location.pathname}
              >
                <ListItemIcon>{data.icon}</ListItemIcon>
                <ListItemText primary={data.label} />
              </ListItemButton>
            </ListItem>
          ))}
      </List>
      {withDivider && <Divider />}
      <List>
        {mobileSecondLink &&
          mobileSecondLink.map((data, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton
                onClick={(e) => handleNavigate(data.path)}
                selected={data.path === location.pathname}
              >
                <ListItemIcon>{data.icon}</ListItemIcon>
                <ListItemText primary={data.label} />
              </ListItemButton>
            </ListItem>
          ))}
      </List>
      <List>
        {secondLink &&
          secondLink.map((data, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton
                onClick={(e) => handleNavigate(data.path)}
                selected={data.path === location.pathname}
              >
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
              <ListItemButton
                onClick={(e) => handleNavigate(data.path)}
                selected={data.path === location.pathname}
              >
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
