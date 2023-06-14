import { Box, Typography, Button } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useHistory } from "react-router-dom";

function CProfile() {
  const history = useHistory();
  const user = useSelector((state) => state.users.user);
  const { profile, fullname, jobs, contracts, created_at } = user;
  const {
    background_url,
    profile_url,
    address,
    facebook_url,
    instagram_url,
    twitter_url,
    background,
  } = profile[0];

  const styles = {
    wrapper: {
      mt: 8,
      p: 2,
    },
    main: {
      maxWidth: { xs: "100%", md: "90%" },
      m: "0 auto",
    },
    exitIcon: { fontSize: 16 },
    contentWrapper: {
      mt: 2,
    },
    bgImageWrapper: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundImage: `url(${background_url})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundColor: background_url ? "transparent" : "#BEBEBE",
      width: "100%",
      height: { xs: 120, md: 240 },
      borderRadius: 3,
      transition: "0.5s",
      border: "2px solid #EEEEEE",
      boxShadow: 5,
    },
    mainProfileWrapper: {
      display: "flex",
      flexWrap: "noWrap",

      "@media (max-width: 380px)": {
        flexWrap: "wrap",
      },
    },
    profileImage: {
      position: "relative",
      backgroundImage: `url(${profile_url})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundColor: profile_url ? "transparent" : "#BEBEBE",
      border: "2px solid white",
      borderRadius: 3,
      minWidth: 90,
      width: { xs: 100, sm: 120, md: 240 },
      height: { xs: 100, sm: 120, md: 240 },
      transition: "0.5s",
      boxShadow: 5,
    },
    profileWrapper: {
      position: "relative",
      height: "auto",
      top: { xs: -50, sm: -70, md: -120 },
      ml: 2,
      width: { xs: 100, sm: 150, md: 210 },
    },
    leftProfileWrapper: {
      display: "block",
      width: "100%",
    },
    fullnameWrapper: {
      textAlign: "left",
      p: 1,
      ml: { xs: -2, md: 0 },

      "@media (max-width: 380px)": {
        textAlign: "center",
        mt: -5,
      },
    },
    fullnameText: { fontWeight: "bold", fontSize: { xs: 16, sm: 18, md: 22 } },
    backgroundText: {
      fontSize: { xs: 12, sm: 14, md: 16 },
    },
    mainContentWrapper: {
      width: "100%",
      mt: { xs: 0, sm: -5, md: -10 },
      backgroundColor: "#EEEEEE",
      borderRadius: 3,
      p: 1,
      boxShadow: 5,
    },
    socialMediaWrapper: {
      mt: 2,
    },
    projectReviewTabsWrapper: {
      width: "100%",
      ml: { xs: 0, md: 3 },
      mt: { xs: -3, sm: -2, md: 0 },
      p: 2,
    },
    socialNetwork: { width: "100%" },
    socialNetworkMain: { display: "flex", alignItems: "center" },
    socialNetworkText: {
      fontWeight: "bold",
      fontSize: { xs: 16, sm: 18, md: 20 },
    },
    social: {
      mt: 1.5,
      border: "1px solid #BEBEBE",
      p: 0.3,
      borderRadius: 1,
      transition: ".5s",
      cursor: "pointer",
      boxShadow: 3,
      display: "flex",
      justifyContent: "center",
      maxWidth: 400,

      "&:hover": {
        backgroundColor: "#BEBEBE",
      },
    },
    socialText: {
      ml: 1,
    },
  };

  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.main}>
        <Box>
          {user.role === "Client" && (
            <Button
              variant="text"
              onClick={() => history.push("/edit/profile/client")}
            >
              {<ArrowBackIosIcon sx={styles.exitIcon} />} Edit Profile
            </Button>
          )}
          <Box sx={styles.contentWrapper}>
            <Box sx={styles.bgImageWrapper}>
              <Box
                sx={{
                  position: "absolute",
                  right: 10,
                  bottom: 10,
                  // backgroundColor: "#A0EEEEEE",
                  backgroundColor: `rgba(238, 238, 238, 0.8)`,
                  borderRadius: 2,
                  boxShadow: 5,
                  p: 0.5,
                  display: "flex",
                }}
              >
                <Box sx={{ m: 0.5, textAlign: "center" }}>
                  <Typography
                    sx={{ fontWeight: "bold", fontSize: { xs: 9, md: 12 } }}
                  >
                    {jobs && jobs.length > 0 ? jobs.length : 0}
                  </Typography>
                  <Typography sx={{ fontSize: { xs: 9, md: 12 } }}>
                    Job Published
                  </Typography>
                </Box>
                <Box sx={{ m: 0.5, textAlign: "center" }}>
                  <Typography
                    sx={{ fontWeight: "bold", fontSize: { xs: 9, md: 12 } }}
                  >
                    {contracts && contracts.length > 0 ? contracts.length : 0}
                  </Typography>
                  <Typography sx={{ fontSize: { xs: 9, md: 12 } }}>
                    Contracts
                  </Typography>
                </Box>
                <Box sx={{ m: 0.5, textAlign: "center" }}>
                  <Typography
                    sx={{ fontWeight: "bold", fontSize: { xs: 9, md: 12 } }}
                  >
                    {created_at && new Date(created_at).getFullYear()}
                  </Typography>
                  <Typography sx={{ fontSize: { xs: 9, md: 12 } }}>
                    Member since
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box sx={styles.mainProfileWrapper}>
              <Box sx={styles.profileWrapper}>
                <Box sx={styles.leftProfileWrapper}>
                  <Box sx={styles.profileImage}></Box>
                </Box>
              </Box>
              <Box sx={styles.projectReviewTabsWrapper}>
                <Box sx={styles.fullnameWrapper}>
                  <Box sx={styles.socialNetworkMain}>
                    <Typography sx={styles.fullnameText}>
                      {fullname && fullname}
                    </Typography>
                  </Box>
                  <Box sx={styles.socialNetworkMain}>
                    <Typography sx={styles.backgroundText}>
                      {address && address}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box sx={styles.mainContentWrapper}>
              <Box sx={styles.socialMediaWrapper}>
                <Box sx={styles.socialNetworkMain}>
                  <Typography sx={styles.socialNetworkText}>About</Typography>
                </Box>
                <Box sx={styles.socialNetwork}>
                  {background && (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: background && background,
                      }}
                    ></div>
                  )}
                  {!background && (
                    <Typography sx={{ fontSize: 14 }}>
                      You didn't add you background information yet. Adding
                      background information makes a great impression.
                    </Typography>
                  )}
                </Box>
              </Box>
              <Box sx={styles.socialMediaWrapper}>
                <Box sx={styles.socialNetworkMain}>
                  <Typography sx={styles.socialNetworkText}>
                    Social Networks
                  </Typography>
                </Box>
                {!(facebook_url || instagram_url || twitter_url) && (
                  <Box sx={styles.socialNetwork}>
                    <Typography sx={{ fontSize: 14 }}>
                      You haven't add any social links yet. Adding your social
                      media accounts helps showcase you as a person and can help
                      to strengthen your reputability.
                    </Typography>
                  </Box>
                )}

                {facebook_url && (
                  <Box
                    sx={styles.social}
                    onClick={() => window.open(facebook_url)}
                  >
                    <FacebookIcon color="primary" />
                    <Typography sx={styles.socialText}>
                      Facebook Link
                    </Typography>
                  </Box>
                )}
                {instagram_url && (
                  <Box
                    sx={styles.social}
                    onClick={() => window.open(instagram_url)}
                  >
                    <InstagramIcon color="primary" />
                    <Typography sx={styles.socialText}>
                      Instagram Link
                    </Typography>
                  </Box>
                )}
                {twitter_url && (
                  <Box
                    sx={styles.social}
                    onClick={() => window.open(twitter_url)}
                  >
                    <TwitterIcon color="primary" />
                    <Typography sx={styles.socialText}>Twitter Link</Typography>
                  </Box>
                )}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default CProfile;
