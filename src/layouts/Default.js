/** @format */

import * as React from "react";
import Sidebar from "./Sidebar";
import {
  Box,
  Avatar,
  Badge,
  Menu,
  MenuItem,
  Tooltip,
  AppBar,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
  CssBaseline,
  FormHelperText,
} from "@mui/material";
import logo from "../assets/images/handi-logo.png";
import { useHistory } from "react-router-dom";
import ConfirmationModal from "../components/ConfirmationModal";
import { icons } from "../components/Icon";
import Searchbar from "./Searchbar";
import { useSelector, useDispatch } from "react-redux";
import Http from "../utils/Http";
import { setUser } from "../redux/actions/userActions";
import CustomLoading from "../components/CustomLoading";

// import { Default } from "react-toastify/dist/utils";

const drawerWidth = 240;

function Default(props) {
  const { children, label } = props;
  const history = useHistory();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.users.user);
  const { fullname, profile } = user;

  const [loading, setLoading] = React.useState(false);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [openConfirmModal, setOpenConfirmModal] = React.useState(false);

  React.useEffect(() => {
    if (user.length === 0) {
      fetchAuthUser();
    }
  }, []);

  const fetchAuthUser = () => {
    setLoading(true);
    Http.get("get-user").then((res) => {
      if (res.data.data) {
        dispatch(setUser(res.data.data));
        setLoading(false);
      }
    });
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    history.push("/login");
  };

  const drawer = (
    <Box>
      <Toolbar />
      <Box
        component="img"
        src={logo}
        sx={{ width: 120, m: "0 0 0 45px", cursor: "pointer" }}
        onClick={() => history.push("/")}
      ></Box>
      <Divider />
      <Sidebar handleLogout={() => setOpenConfirmModal(true)} />
    </Box>
  );

  return (
    <React.Fragment>
      {loading && <CustomLoading />}
      {!loading && (
        <Box sx={{ display: "flex" }}>
          <ConfirmationModal
            open={openConfirmModal}
            title="Are you sure?"
            onConfirm={handleLogout}
            loading={loading}
            message="If you logout you need to login again!"
            onClose={() => setOpenConfirmModal(false)}
          />
          <CssBaseline />
          <AppBar
            position="fixed"
            sx={{
              width: { sm: `calc(100% - ${drawerWidth}px)` },
              ml: { sm: `${drawerWidth}px` },
              background: `linear-gradient(0deg, rgba(0,3,255,1) 0%, rgba(2,126,251,1) 100%)`,
            }}
          >
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: "none" } }}
              >
                {icons.menuIcon}
              </IconButton>
              <IconButton
                sx={{ display: { xs: "none", sm: "block" } }}
                onClick={() => history.goBack()}
              >
                {icons.arrowBackIcon}
              </IconButton>
              <Typography variant="h6" noWrap>
                {label}
              </Typography>
              <Searchbar color="white" />
              <Box sx={{ flexGrow: 0, position: "absolute", right: 10 }}>
                <IconButton
                  size="medium"
                  aria-label="show 4 new mails"
                  color="inherit"
                >
                  <Badge badgeContent={4} color="error">
                    {icons.mailIcon}
                  </Badge>
                </IconButton>
                <IconButton
                  size="medium"
                  aria-label="show 17 new notifications"
                  color="inherit"
                >
                  <Badge badgeContent={17} color="error">
                    {icons.notificationIcon}
                  </Badge>
                </IconButton>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 2 }}>
                    <Avatar
                      alt={fullname ? fullname : "Full Name"}
                      src={profile.profile_url ? profile.profile_url : '/#'}
                    />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {user && (
                    <Box>
                      <MenuItem>
                        <Typography textAlign="center">
                          {fullname}
                        </Typography>
                      </MenuItem>
                      <FormHelperText sx={{ textAlign: "center", mt: -1 }}>
                        {user.email}
                      </FormHelperText>
                    </Box>
                  )}
                  <Divider />
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">Settings</Typography>
                  </MenuItem>
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography
                      textAlign="center"
                      onClick={() => setOpenConfirmModal(true)}
                    >
                      Logout
                    </Typography>
                  </MenuItem>
                </Menu>
              </Box>
            </Toolbar>
          </AppBar>
          <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
            aria-label="mailbox folders"
          >
            <Drawer
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true,
              }}
              sx={{
                display: { xs: "block", sm: "none" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                },
              }}
            >
              {drawer}
            </Drawer>
            <Drawer
              variant="permanent"
              sx={{
                display: { xs: "none", sm: "block" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                },
              }}
              open
            >
              {drawer}
            </Drawer>
          </Box>
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              p: 1,
              width: { sm: `calc(100% - ${drawerWidth}px)` },
              mt: 8,
            }}
          >
            {children}
          </Box>
        </Box>
      )}
    </React.Fragment>
  );
}

export default Default;
