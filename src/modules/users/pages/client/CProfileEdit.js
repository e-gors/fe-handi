import { Box, Button, IconButton, Typography } from "@mui/material";
import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useHistory } from "react-router-dom";
import AddAPhotoOutlinedIcon from "@mui/icons-material/AddAPhotoOutlined";
import ProfileModalEdit from "../../components/ProfileModalEdit";
import { useSelector } from "react-redux";
import SocialNetworks from "../../components/worker/SocialNetworks";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

function CProfileEdit() {
  const history = useHistory();
  const user = useSelector((state) => state.users.user);
  const { profile, fullname } = user;
  const {
    background_url,
    profile_url,
    address,
    facebook_url,
    instagram_url,
    twitter_url,
  } = profile[0];

  const [open, setOpen] = React.useState(false);
  const [type, setType] = React.useState("");

  const handleGoBack = () => {
    history.goBack();
  };

  const handleOpen = (type) => {
    setOpen(true);
    setType(type);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
      cursor: "pointer",
      transition: "0.5s",
      border: "2px solid #EEEEEE",
      boxShadow: 5,

      "&::before": {
        content: '""',
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        opacity: 0,
        mixBlendMode: "multiply",
        borderRadius: 3,
        transition: "opacity 0.3s ease-in-out",
      },
      "&:hover::before": {
        opacity: 1,
      },
      "&:hover .bg-camera-icon": {
        display: "block",
      },
      ".bg-camera-icon": {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        color: "#333",
        padding: 2,
        borderRadius: "50%",
        cursor: "pointer",
        display: "none",
        width: { xs: 60, sm: 80, md: 100 },
        height: { xs: 60, sm: 80, md: 100 },
      },
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
      cursor: "pointer",
      transition: "0.5s",
      boxShadow: 5,

      "&::before": {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        opacity: 0,
        mixBlendMode: "multiply",
        transition: "opacity 0.3s ease-in-out",
        borderRadius: 3,
      },
      "&:hover::before": {
        opacity: 1,
      },
      "&:hover .profile-camera-icon": {
        display: "block",
      },
      ".profile-camera-icon": {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        width: { xs: 60, md: 70 },
        height: { xs: 60, md: 70 },
        padding: 2,
        borderRadius: "50%",
        cursor: "pointer",
        display: "none",
      },
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
    socialNetwork: { width: { xs: "100%", sm: "70%", md: "50%" } },
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
      <ProfileModalEdit type={type} open={open} handleClose={handleClose} />
      <Box sx={styles.main}>
        <Box>
          <Button variant="text" onClick={handleGoBack}>
            {<ArrowBackIosIcon sx={styles.exitIcon} />} Exit Edit Mode
          </Button>
          <Box sx={styles.contentWrapper}>
            <Box
              sx={styles.bgImageWrapper}
              onClick={() => handleOpen("Background Image")}
            >
              <AddAPhotoOutlinedIcon className="bg-camera-icon" />
            </Box>

            <Box sx={styles.mainProfileWrapper}>
              <Box sx={styles.profileWrapper}>
                <Box sx={styles.leftProfileWrapper}>
                  <Box
                    sx={styles.profileImage}
                    onClick={() => handleOpen("Profile Image")}
                  >
                    <AddAPhotoOutlinedIcon className="profile-camera-icon" />
                  </Box>
                </Box>
              </Box>
              <Box sx={styles.projectReviewTabsWrapper}>
                <Box sx={styles.fullnameWrapper}>
                  <Box sx={styles.socialNetworkMain}>
                    <Typography sx={styles.fullnameText}>
                      {fullname && fullname}
                    </Typography>
                    <IconButton onClick={() => handleOpen("Fullname")}>
                      <EditOutlinedIcon />
                    </IconButton>
                  </Box>
                  <Box sx={styles.socialNetworkMain}>
                    <Typography sx={styles.backgroundText}>
                      {address && address}
                    </Typography>
                    <IconButton onClick={() => handleOpen("Address")}>
                      <EditOutlinedIcon />
                    </IconButton>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box sx={styles.mainContentWrapper}>
              <Box sx={styles.socialMediaWrapper}>
                <Box sx={styles.socialNetworkMain}>
                  <Typography sx={styles.socialNetworkText}>About</Typography>
                  <IconButton onClick={() => handleOpen("Social Networks")}>
                    <EditOutlinedIcon />
                  </IconButton>
                </Box>
                <Box sx={styles.socialNetwork}>
                  <SocialNetworks
                    title={"Add info about yourself"}
                    Icon={FormatAlignRightIcon}
                    content={
                      "Make a great impression by giving people a snapshot of who you are."
                    }
                    handleOpen={handleOpen}
                  />
                </Box>
              </Box>
              <Box sx={styles.socialMediaWrapper}>
                <Box sx={styles.socialNetworkMain}>
                  <Typography sx={styles.socialNetworkText}>
                    Social Networks
                  </Typography>
                  {(facebook_url || instagram_url || twitter_url) && (
                    <IconButton onClick={() => handleOpen("Social Networks")}>
                      <EditOutlinedIcon />
                    </IconButton>
                  )}
                </Box>
                {(!facebook_url || !instagram_url || !twitter_url) && (
                  <Box sx={styles.socialNetwork}>
                    <SocialNetworks
                      title={"Add Social Networks"}
                      Icon={ThumbUpOutlinedIcon}
                      content={
                        "Adding your social media accounts helps showcase you as a person andcan help to strengthen your reputability."
                      }
                      handleOpen={handleOpen}
                    />
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

export default CProfileEdit;
