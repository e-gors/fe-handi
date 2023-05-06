import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useHistory } from "react-router-dom";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ProjectReviewTabs from "../../components/worker/ProjectReviewTabs";
import UserRating from "../../../../components/UserRating";
import AddAPhotoOutlinedIcon from "@mui/icons-material/AddAPhotoOutlined";
import ProfileModalEdit from "../../components/ProfileModalEdit";
import { useSelector } from "react-redux";

function WProfileEdit() {
  const history = useHistory();
  const user = useSelector((state) => state.users.user);
  const { profile } = user;
  const { background_url, profile_url } = profile[0];

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
    profileImageWrapper: {
      display: "flex",
    },
    mainProfileWrapper: {
      position: "relative",
      top: { xs: -50, md: -120 },
      left: 20,
    },
    profileImage: {
      position: "relative",
      backgroundImage: `url(${profile_url})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundColor: profile_url ? "transparent" : "#BEBEBE",
      border: "2px solid white",
      borderRadius: 3,
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
        width: { xs: 40, sm: 50, md: 60 },
        height: { xs: 40, sm: 50, md: 60 },
        padding: 2,
        borderRadius: "50%",
        cursor: "pointer",
        display: "none",
      },
    },
    nameWrapper: {
      ml: 5,
      mt: 1,
    },
    fullname: {
      fontSize: { xs: 14, sm: 16, md: 18 },
      fontWeight: "bold",
    },
    location: { fontSize: { xs: 12, sm: 14, md: 16 } },
    amount: { fontSize: { xs: 12, sm: 14, md: 16 } },
    userRatingWrapper: { mt: { xs: -2, md: -12 }, ml: { xs: 2, md: 5 }, mb: 2 },
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

            <Box sx={styles.profileImageWrapper}>
              <Box sx={styles.mainProfileWrapper}>
                <Box
                  sx={styles.profileImage}
                  onClick={() => handleOpen("Profile Image")}
                >
                  <AddAPhotoOutlinedIcon className="profile-camera-icon" />
                </Box>
              </Box>

              <Box sx={styles.nameWrapper}>
                <Typography sx={styles.fullname}>Efren Goron</Typography>
                <Typography sx={styles.location}>
                  Purok Lapulapu Brgy. Atabay Hilongos, Leyte
                </Typography>
                <Typography sx={styles.amount}>P500</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box sx={styles.userRatingWrapper}>
          <UserRating />
        </Box>
        <Box>
          <ProjectReviewTabs />
        </Box>
      </Box>
    </Box>
  );
}

export default WProfileEdit;
