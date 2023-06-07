/** @format */

import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Badge,
  MenuItem,
  Menu,
  Button,
  Avatar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
// import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import { useHistory, useLocation } from "react-router-dom";
import PrivateDrawerMenu from "./PrivateDrawerMenu";
import HomeIcon from "@mui/icons-material/Home";
import BusinessIcon from "@mui/icons-material/Business";
import TabIcon from "@mui/icons-material/Tab";
import { isAuth } from "../utils/helpers";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import { styles } from "../assets/styles/styles";
import logo from "../assets/images/handi-logo.png";
import LogoutIcon from "@mui/icons-material/Logout";
import AssessmentIcon from "@mui/icons-material/Assessment";
import WorkIcon from "@mui/icons-material/Work";
import PeopleIcon from "@mui/icons-material/People";
import ConfirmationModal from "../components/ConfirmationModal";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../redux/actions/userActions";

const userAnchorItemsOnSmallDevice = [
  {
    label: "Messages",
    ariaLabel: "show 4 new mails",
    badgeContent: 4,
    icon: <MailIcon />,
  },
  {
    label: "Notifications",
    ariaLabel: "show 17 new notifications",
    badgeContent: 17,
    icon: <NotificationsIcon />,
  },
];

const workerNavLinks = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: <HomeIcon />,
  },
  {
    label: "Contracts",
    path: "/contracts",
    icon: <BusinessIcon />,
  },
  {
    label: "Offers",
    path: "/my-offers",
    icon: <TabIcon />,
  },
  {
    label: "Proposals",
    path: "/my-proposals",
    icon: <PersonSearchIcon />,
  },
  {
    label: "Marketplace",
    path: "/marketplace",
    icon: <WorkIcon />,
  },
  {
    label: "Reports",
    path: "/reports",
    icon: <AssessmentIcon />,
  },
];
const clientNavLinks = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: <HomeIcon />,
  },
  {
    label: "Contracts",
    path: "/contracts",
    icon: <BusinessIcon />,
  },
  {
    label: "Job Posts",
    path: "/my-jobs",
    icon: <WorkIcon />,
  },
  {
    label: "Offers",
    path: "/my-offers",
    icon: <TabIcon />,
  },
  {
    label: "Marketplace",
    path: "/marketplace",
    icon: <WorkIcon />,
  },
  {
    label: "Reports",
    path: "/reports",
    icon: <AssessmentIcon />,
  },
];

const clientMobileSecondLink = [
  {
    label: "Hire",
    path: "/marketplace",
    icon: <PeopleIcon />,
  },
  {
    label: "Post Job",
    path: "/new/job-post",
    icon: <WorkIcon />,
  },
];

const accountLinks = [
  {
    label: "Login",
    path: "/login",
    style: styles.customBlueButton,
    variant: "contained",
    icon: <LockOpenIcon />,
  },
  {
    label: "Register",
    path: "/register",
    style: styles.registerStyleButton,
    variant: "outlined",
    icon: <HowToRegIcon />,
  },
];

const workerAnchorItemsOnLaptop = [
  {
    path: "/overview/worker",
    label: "Profile",
  },
  {
    path: "/my-account",
    label: "My Account",
  },
  {
    path: "/account/settings",
    label: "Settings",
  },
];

const clientAnchorItemsOnLaptop = [
  {
    path: "/overview/client",
    label: "Profile",
  },
  {
    path: "/my-account",
    label: "My Account",
  },
  {
    path: "/account/settings",
    label: "Settings",
  },
];

const logout = [
  {
    label: "Logout",
    icon: <LogoutIcon />,
  },
];

export default function PrivateAppBarMenu() {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.user);
  const { id, role, uuid } = user;
  const { profile, fullname } = user;
  const profile_url =
    user && user.role !== "Super Admin" && user.profile
      ? user.profile[0].profile_url
      : "";

  const location = useLocation();

  const [loading, setLoading] = React.useState(false);
  const [openConfirmModal, setOpenConfirmModal] = React.useState(false);
  const [scrollHeight, setScrollHeight] = React.useState(0);
  const [state, setState] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  React.useEffect(() => {
    let tokenExpiration = localStorage.getItem("token_expiration");

    if (!tokenExpiration || new Date().getTime() > tokenExpiration) {
      localStorage.removeItem("token");
      localStorage.removeItem("expirationTime");
    }

    function handleScroll() {
      setScrollHeight(window.scrollY);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleConfirmLogout = () => {
    handleMenuClose();
    setOpenConfirmModal(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    dispatch(removeUser(id));
    history.push("/login");
  };

  const handleOpenDrawer = () => {
    setState(true);
  };

  const handleCloseDrawer = () => {
    setState(false);
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleNavigate = (link) => {
    history.push(link);
  };
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {role && role === "Worker"
        ? workerAnchorItemsOnLaptop &&
          workerAnchorItemsOnLaptop.map((page, i) => (
            <MenuItem onClick={(e) => handleNavigate(page.path)} key={i}>
              {page.label}
            </MenuItem>
          ))
        : clientAnchorItemsOnLaptop &&
          clientAnchorItemsOnLaptop.map((page, i) => (
            <MenuItem onClick={(e) => handleNavigate(page.path)} key={i}>
              {page.label}
            </MenuItem>
          ))}
      <MenuItem onClick={handleConfirmLogout}>Logout</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {userAnchorItemsOnSmallDevice &&
        userAnchorItemsOnSmallDevice.map((item, i) => (
          <MenuItem key={i}>
            <IconButton
              size="large"
              aria-label={item.ariaLabel}
              color="inherit"
            >
              <Badge badgeContent={item.badgeContent} color="error">
                {item.icon}
              </Badge>
            </IconButton>
            <p>{item.label}</p>
          </MenuItem>
        ))}

      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <Avatar
            alt={fullname && fullname}
            src={profile_url && profile_url}
            sx={{
              boxShadow: 5,
              border: "1px solid #EEEEEE",
            }}
          />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  const renderMenuNotAuth = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {accountLinks &&
        accountLinks.map((page, i) => (
          <MenuItem onClick={handleProfileMenuOpen} key={i}>
            <Typography
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
              onClick={(e) => handleNavigate(page.path)}
            >
              {page.label}
            </Typography>
          </MenuItem>
        ))}
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <ConfirmationModal
        open={openConfirmModal}
        title="Are you sure?"
        onConfirm={handleLogout}
        loading={loading}
        message="If you logout you need to login again!"
        onClose={() => setOpenConfirmModal(false)}
      />
      <PrivateDrawerMenu
        withDivider
        singleLink={
          user && user.role === "Worker" ? workerNavLinks : clientNavLinks
        }
        mobileSecondLink={
          user.role === "Client" ? clientMobileSecondLink : null
        }
        accountLink={accountLinks}
        logout={logout}
        handleOpenDrawer={handleOpenDrawer}
        handleCloseDrawer={handleCloseDrawer}
        open={state}
        anchor="left"
      />
      <AppBar position="fixed" sx={{ color: "black", background: "white" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2, display: { xs: "block", md: "none" } }}
            onClick={handleOpenDrawer}
          >
            <MenuIcon />
          </IconButton>
          <img
            src={logo}
            alt="logo"
            style={{ width: 110, cursor: "pointer" }}
            onClick={(e) => handleNavigate("/")}
          />
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {user && user.role === "Worker"
              ? workerNavLinks.map((page, i) => (
                  <MenuItem
                    key={i}
                    onClick={() => handleNavigate(page.path)}
                    selected={page.path === location.pathname}
                  >
                    <Typography textAlign="center">{page.label}</Typography>
                  </MenuItem>
                ))
              : clientNavLinks.map((page, i) => (
                  <MenuItem
                    key={i}
                    onClick={() => handleNavigate(page.path)}
                    selected={page.path === location.pathname}
                  >
                    <Typography textAlign="center">{page.label}</Typography>
                  </MenuItem>
                ))}
          </Box>
          <Box sx={{ flexGrow: 1 }} />

          {!isAuth() &&
            accountLinks.map((page, i) => (
              <Button
                sx={[page.style, styles.customHide]}
                variant={page.variant}
                onClick={() => handleNavigate(page.path)}
                key={i}
              >
                {page.label}
              </Button>
            ))}

          {isAuth() && role === "Client" && (
            <Box sx={{ "@media(max-width: 1056px)": { display: "none" } }}>
              <Button
                size="small"
                variant="outlined"
                sx={{ mr: 0.5 }}
                onClick={() => handleNavigate("/marketplace")}
              >
                Hire
              </Button>
              <Button
                size="small"
                variant="contained"
                color="primary"
                onClick={() => handleNavigate("/new/job-post")}
              >
                Post Job
              </Button>
            </Box>
          )}
          {isAuth() && (
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
              >
                <Badge badgeContent={4} color="error">
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={17} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <Avatar
                  alt={fullname && fullname}
                  src={profile_url && profile_url}
                  sx={{
                    boxShadow: 5,
                    border: "1px solid #EEEEEE",
                  }}
                />
              </IconButton>
            </Box>
          )}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {isAuth() && renderMobileMenu}
      {isAuth() && renderMenu}
      {!isAuth() && renderMenuNotAuth}
    </Box>
  );
}
