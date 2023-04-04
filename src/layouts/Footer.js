import * as React from "react";
import {
  CssBaseline,
  Box,
  Typography,
  Container,
  Divider,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { isAuth } from "../utils/helpers";
import { useHistory } from "react-router-dom";
import logo from "../assets/images/handi-logo.png";

export default function Footer() {
  const history = useHistory();

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
      }}
    >
      <CssBaseline />
      <Container component="main" sx={{ mt: 8, mb: 2 }}>
        <Box
          component="img"
          src={logo}
          sx={{ width: 120, cursor: "pointer" }}
          onClick={() => history.push("/")}
        ></Box>
        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
          <Typography
            sx={{
              mr: 2,
              cursor: "pointer",
              "&:hover": { textDecoration: "underline" },
            }}
            onClick={() => history.push("/")}
          >
            Home
          </Typography>
          <Typography
            sx={{
              mr: 2,
              cursor: "pointer",
              "&:hover": { textDecoration: "underline" },
            }}
            onClick={() => history.push("/company")}
          >
            Company
          </Typography>
          <Typography
            sx={{
              mr: 2,
              cursor: "pointer",
              "&:hover": { textDecoration: "underline" },
            }}
            onClick={() => history.push("/find-jobs")}
          >
            Find Job
          </Typography>
          <Typography
            sx={{
              mr: 2,
              cursor: "pointer",
              "&:hover": { textDecoration: "underline" },
            }}
            onClick={() => history.push("/find-people")}
          >
            Hire Worker
          </Typography>
          {!isAuth() && (
            <Box sx={{ display: "flex" }}>
              <Typography
                sx={{
                  mr: 2,
                  cursor: "pointer",
                  "&:hover": { textDecoration: "underline" },
                }}
                onClick={() => history.push("/login")}
              >
                Login
              </Typography>
              <Typography
                sx={{
                  mr: 2,
                  cursor: "pointer",
                  "&:hover": { textDecoration: "underline" },
                }}
                onClick={() => history.push("/register")}
              >
                Register
              </Typography>
            </Box>
          )}
        </Box>
      </Container>
      {/* <Divider sx={{ height: 2 }} /> */}
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
          color: "white",
          backgroundColor: (theme) =>
            theme.palette.mode === "dark"
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="body1">
            © 2023 Handi. All rights reserved.
          </Typography>
          <Box>
            <FacebookIcon
              sx={{
                mr: 2,
                borderRadius: "50%",
                cursor: "pointer",
                "&:hover": { color: "blue" },
              }}
            />
            <YouTubeIcon
              sx={{
                mr: 2,
                borderRadius: "50%",
                cursor: "pointer",
                "&:hover": { color: "blue" },
              }}
            />
            <TwitterIcon
              sx={{
                mr: 2,
                borderRadius: "50%",
                cursor: "pointer",
                "&:hover": { color: "blue" },
              }}
            />
            <InstagramIcon
              sx={{
                mr: 2,
                borderRadius: "50%",
                cursor: "pointer",
                "&:hover": { color: "blue" },
              }}
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Typography
              sx={{
                mr: 2,
                cursor: "pointer",
                "&:hover": { textDecoration: "underline" },
              }}
              onClick={() => history.push("/terms-of-services")}
            >
              Terms
            </Typography>
            <Typography
              sx={{
                cursor: "pointer",
                "&:hover": { textDecoration: "underline" },
              }}
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
