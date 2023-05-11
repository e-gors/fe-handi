import * as React from "react";
import {
  CssBaseline,
  Box,
  Typography,
  Container,
  Divider,
  IconButton,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { isAuth } from "../utils/helpers";
import { useHistory } from "react-router-dom";
import logo from "../assets/images/handi-logo.png";

const styles = {
  wrapper: {
    width: "100%",
    position: "relative",
    mt: "100px",
    backgroundColor: (theme) =>
      theme.palette.mode === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[800],
  },
  footerTopContainer: { mt: 8, mb: 2 },
  logo: { width: 120, cursor: "pointer" },
  mainWrapper: { display: "flex", flexWrap: "wrap" },
  navTexts: {
    mr: 2,
    cursor: "pointer",
    "&:hover": { textDecoration: "underline" },
  },
  isAuthNavWrapper: { display: "flex" },

  iconsWrapper: { color: "white" },
  icons: {
    mr: 2,
    borderRadius: "50%",
    cursor: "pointer",
    "&:hover": { color: "blue" },
  },
  footerBottomWrapper: {
    py: 3,
    px: 2,
    mt: "auto",
    color: "white",
    backgroundColor: (theme) =>
      theme.palette.mode === "dark"
        ? theme.palette.grey[200]
        : theme.palette.grey[800],
  },
  mainFooterBottom: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  termsWrapper: {
    display: "flex",
    flexDirection: "row",
  },
  terms: {
    mr: 2,
    cursor: "pointer",
    "&:hover": { textDecoration: "underline" },
  },
};

const navLinks = [
  {
    path: "/",
    label: "Home",
  },
  {
    path: "/company",
    label: "Company",
  },
  {
    path: "/find-jobs",
    label: "Find Job",
  },
  {
    path: "/find-people",
    label: "Hire Worker",
  },
];

const isAuthNavs = [
  {
    path: "/login",
    label: "login",
  },
  {
    path: "/register",
    label: "Register",
  },
];

const socialIcons = [
  {
    icon: <FacebookIcon sx={styles.icons} />,
  },
  {
    icon: <YouTubeIcon sx={styles.icons} />,
  },
  {
    icon: <TwitterIcon sx={styles.icons} />,
  },
  {
    icon: <InstagramIcon sx={styles.icons} />,
  },
];
export default function Footer() {
  const history = useHistory();

  const handleNavigate = (link) => {
    history.push(link);
  };

  return (
    <Box sx={styles.wrapper}>
      <CssBaseline />
      <Container component="main" sx={styles.footerTopContainer}>
        <Box
          component="img"
          src={logo}
          sx={styles.logo}
          onClick={() => handleNavigate("/")}
        ></Box>
        <Box sx={styles.mainWrapper}>
          {navLinks &&
            navLinks.map((link, i) => (
              <Typography
                key={i}
                sx={styles.navTexts}
                onClick={() => handleNavigate(link.path)}
              >
                {link.label}
              </Typography>
            ))}
          <Box sx={styles.isAuthNavWrapper}>
            {!isAuth() &&
              isAuthNavs &&
              isAuthNavs.map((link, i) => (
                <Typography
                  key={i}
                  sx={styles.navTexts}
                  onClick={() => handleNavigate(link.path)}
                >
                  {link.label}
                </Typography>
              ))}
          </Box>
        </Box>
      </Container>
      <Box component="footer" sx={styles.footerBottomWrapper}>
        <Container sx={styles.mainFooterBottom}>
          <Typography variant="body1">
            © 2023 Handi. All rights reserved.
          </Typography>
          <Box>
            {socialIcons &&
              socialIcons.map((icon, i) => (
                <IconButton key={i} sx={styles.iconsWrapper}>
                  {icon.icon}
                </IconButton>
              ))}
          </Box>
          <Box sx={styles.termsWrapper}>
            <Typography
              sx={styles.terms}
              onClick={() => history.push("/terms-of-services")}
            >
              Terms
            </Typography>
            <Typography
              sx={styles.terms}
              onClick={() => history.push("/privacy-policy")}
            >
              Privacy
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
