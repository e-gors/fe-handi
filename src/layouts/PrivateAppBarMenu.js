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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import { useHistory } from "react-router-dom";
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

const userAnchorItemsOnLaptop = [
  {
    path: "/dashboard",
    label: "Dashboard",
  },
  {
    path: "/profile",
    label: "Profile",
  },
  {
    path: "/my-account",
    label: "My Account",
  },
  {
    path: "/settings",
    label: "Settings",
  },
];

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
    label: "Reports",
    path: "/reports",
    icon: <AssessmentIcon />,
  },
  {
    label: "Marketplace",
    path: "/marketplace",
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

const logout = [
  {
    label: "Logout",
    icon: <LogoutIcon />,
  },
];

export default function PrivateAppBarMenu() {
  const history = useHistory();
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
      {userAnchorItemsOnLaptop &&
        userAnchorItemsOnLaptop.map((page, i) => (
          <MenuItem onClick={(e) => handleNavigate(page.path)} key={i}>
            {page.label}
          </MenuItem>
        ))}
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
          <AccountCircle />
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
      <PrivateDrawerMenu
        withDivider
        singleLink={workerNavLinks}
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
          <Box
            sx={{ ml: 10, flexGrow: 1, display: { xs: "none", md: "flex" } }}
          >
            {workerNavLinks.map((page, i) => (
              <MenuItem key={i} onClick={() => handleNavigate(page.path)}>
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
                <AccountCircle />
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
