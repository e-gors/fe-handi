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
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
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
import WorkIcon from "@mui/icons-material/Work";
import PeopleIcon from "@mui/icons-material/People";
import ConfirmationModal from "../components/ConfirmationModal";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../redux/actions/userActions";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import HubIcon from "@mui/icons-material/Hub";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";

// const userAnchorItemsOnSmallDevice = [
//   {
//     label: "Messages",
//     ariaLabel: "show 4 new mails",
//     badgeContent: 4,
//     icon: <MailIcon color="primary" />,
//   },
//   {
//     label: "Notifications",
//     ariaLabel: "show 17 new notifications",
//     badgeContent: 17,
//     icon: <NotificationsIcon color="primary" />,
//   },
// ];

const workerNavLinks = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: <HomeIcon color="primary" />,
  },
  {
    label: "Contracts",
    path: "/contracts",
    icon: <BusinessIcon color="primary" />,
  },
  {
    label: "Offers",
    path: "/my-offers",
    icon: <TabIcon color="primary" />,
  },
  {
    label: "Proposals",
    path: "/my-proposals",
    icon: <PersonSearchIcon color="primary" />,
  },
  {
    label: "Marketplace",
    path: "/marketplace",
    icon: <HubIcon color="primary" />,
  },
  // {
  //   label: "Reports",
  //   path: "/reports",
  //   icon: <AssessmentIcon color="primary" />,
  // },
];
const clientNavLinks = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: <HomeIcon color="primary" />,
  },
  {
    label: "Contracts",
    path: "/contracts",
    icon: <BusinessIcon color="primary" />,
  },
  {
    label: "Job Posts",
    path: "/my-jobs",
    icon: <WorkIcon color="primary" />,
  },
  {
    label: "Offers",
    path: "/my-offers",
    icon: <TabIcon color="primary" />,
  },
  {
    label: "Marketplace",
    path: "/marketplace",
    icon: <HubIcon color="primary" />,
  },
  // {
  //   label: "Reports",
  //   path: "/reports",
  //   icon: <AssessmentIcon color="primary" />,
  // },
];

const clientMobileSecondLink = [
  {
    label: "Hire",
    path: "/new/job-offer",
    icon: <PeopleIcon color="primary" />,
  },
  {
    label: "Post Job",
    path: "/new/job-post",
    icon: <HomeRepairServiceIcon color="primary" />,
  },
];

const accountLinks = [
  {
    label: "Login",
    path: "/login",
    style: styles.customBlueButton,
    variant: "contained",
    icon: <LockOpenIcon color="primary" />,
  },
  {
    label: "Register",
    path: "/register",
    style: styles.registerStyleButton,
    variant: "outlined",
    icon: <HowToRegIcon color="primary" />,
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

  const baseUrl = process.env.REACT_APP_BACKEND_DOMAIN;

  const workerAnchorItemsOnLaptop = [
    {
      path: "/overview/worker",
      label: "Profile",
      icon: <AccountCircleRoundedIcon color="primary" />,
    },
    {
      label: "Messages",
      icon: <MailIcon color="primary" />,
      path: `${baseUrl}/chats`,
      isRedirect: true,
    },
    {
      path: "/account/settings",
      label: "Account Settings",
      icon: <SettingsRoundedIcon color="primary" />,
    },
    {
      label: "Logout",
      icon: <LogoutIcon color="primary" />,
    },
  ];

  const clientAnchorItemsOnLaptop = [
    {
      path: "/overview/client",
      label: "Profile",
      icon: <AccountCircleRoundedIcon color="primary" />,
    },
    {
      label: "Messages",
      icon: <MailIcon color="primary" />,
      path: `${baseUrl}/chats`,
      isRedirect: true,
    },
    {
      path: "/account/settings",
      label: "Account Settings",
      icon: <SettingsRoundedIcon color="primary" />,
    },
    {
      label: "Logout",
      icon: <LogoutIcon color="primary" />,
    },
  ];

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
      anchorEl={mobileMoreAnchorEl}
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
      open={isMobileMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem sx={{ "&:Hover": { backgroundColor: "transparent" } }}>
        <AdminPanelSettingsIcon sx={{ color: "#EB6C51", mr: 1 }} />
        <Typography sx={{ textAlign: "center" }}>{user?.role}</Typography>
        <Divider
          orientation="vertical"
          flexItem
          sx={{ width: 5, ml: 1, mr: 1 }}
        />
        <Typography>role</Typography>
      </MenuItem>
      <Divider />
      {role && role === "Worker"
        ? workerAnchorItemsOnLaptop &&
          workerAnchorItemsOnLaptop.map((page, i) => (
            <MenuItem
              selected={page.path === location.pathname}
              onClick={(e) =>
                !page.path
                  ? handleConfirmLogout()
                  : page.isRedirect
                  ? window.open(page.path, "_blank")
                  : handleNavigate(page.path)
              }
              key={i}
            >
              <IconButton>{page.icon}</IconButton>
              <Typography>{page.label}</Typography>
            </MenuItem>
          ))
        : clientAnchorItemsOnLaptop &&
          clientAnchorItemsOnLaptop.map((page, i) => (
            <MenuItem
              selected={page.path === location.pathname}
              onClick={(e) =>
                !page.path
                  ? handleConfirmLogout()
                  : page.isRedirect
                  ? window.open(page.path, "_blank")
                  : handleNavigate(page.path)
              }
              key={i}
            >
              <IconButton>{page.icon}</IconButton>
              <Typography>{page.label}</Typography>
            </MenuItem>
          ))}
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  // const renderMobileMenu = (
  //   <Menu
  //     anchorEl={mobileMoreAnchorEl}
  //     anchorOrigin={{
  //       vertical: "top",
  //       horizontal: "right",
  //     }}
  //     id={mobileMenuId}
  //     keepMounted
  //     transformOrigin={{
  //       vertical: "top",
  //       horizontal: "right",
  //     }}
  //     open={isMobileMenuOpen}
  //     onClose={handleMobileMenuClose}
  //   >
  //     {/* {userAnchorItemsOnSmallDevice &&
  //       userAnchorItemsOnSmallDevice.map((item, i) => (
  //         <MenuItem key={i}>
  //           <IconButton
  //             size="large"
  //             aria-label={item.ariaLabel}
  //             color="inherit"
  //           >
  //             <Badge badgeContent={item.badgeContent} color="error">
  //               {item.icon}
  //             </Badge>
  //           </IconButton>
  //           <p>{item.label}</p>
  //         </MenuItem>
  //       ))} */}

  //     <MenuItem onClick={handleProfileMenuOpen}>
  //       <IconButton
  //         size="large"
  //         aria-label="account of current user"
  //         aria-controls="primary-search-account-menu"
  //         aria-haspopup="true"
  //         color="inherit"
  //       >
  //         <Avatar
  //           alt={fullname && fullname}
  //           src={profile_url && profile_url}
  //           sx={{
  //             boxShadow: 5,
  //             border: "1px solid #EEEEEE",
  //           }}
  //         />
  //       </IconButton>
  //       <p>Profile</p>
  //     </MenuItem>
  //   </Menu>
  // );

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
            <Box sx={{ "@media(max-width: 900px)": { display: "none" } }}>
              <Button
                size="small"
                variant="outlined"
                sx={{ mr: 0.5 }}
                onClick={() => handleNavigate("/new/job-offer")}
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
              {/* <IconButton
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
              </IconButton> */}
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <Avatar
                  alt={fullname && fullname}
                  src={profile_url && profile_url}
                  sx={{
                    boxShadow: 5,
                    border: "1px solid #EEEEEE",
                    margin: "10px",
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

      {/* {isAuth() && renderMobileMenu} */}
      {isAuth() && renderMenu}
      {!isAuth() && renderMenuNotAuth}
    </Box>
  );
}
