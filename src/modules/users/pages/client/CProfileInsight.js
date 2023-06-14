import {
  Avatar,
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import WorkIcon from "@mui/icons-material/Work";
import ArticleIcon from "@mui/icons-material/Article";
import AssignmentIcon from "@mui/icons-material/Assignment";
import DropdownMenuItem from "../../../../components/DropdownMenuItem";
import { useSelector } from "react-redux";
import ProfileModalEdit from "../../components/ProfileModalEdit";
import PortraitIcon from "@mui/icons-material/Portrait";
import ShortTextIcon from "@mui/icons-material/ShortText";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const styles = {
  wrapper: {
    maxWidth: { xs: "100%", sm: "95%", md: "90%", lg: "85%" },
    m: "0 auto",
  },
  clientTextWrapper: {
    mb: 2,
  },
  clientText: {
    fontSize: { xs: 24, md: 36 },
    fontWeight: "bold",
  },
  profileCardWrapper: {
    backgroundColor: "#EEEEEE",
    display: "flex",
    justifyContent: "space-between",
    p: 2,
    borderRadius: 3,
    boxShadow: 5,
    mb: 5,

    "@media(max-width: 500px)": {
      flexDirection: "column",
    },
  },
  profileLeft: { display: "flex" },
  profileAvatar: { width: { xs: 75, md: 100 }, height: { xs: 75, md: 100 } },
  nameWrapper: { ml: 2 },
  name: { mb: 1, fontWeight: "bold", fontSize: { xs: 16, md: 20 } },
  buttonWrapper: {
    "@media(max-width: 650px)": {
      mt: 5,
      display: "flex",
      flexDirection: "row",
      flexWrap: "noWrap",
    },
  },
  viewProfileButton: {
    whiteSpace: "noWrap",
    "@media(max-width: 500px)": {
      width: "85%",
    },
    "@media(max-width: 390px)": {
      width: "80%",
    },
  },
  moreButton: {
    backgroundColor: "white",
    "&:hover": { backgroundColor: "#BEBEBE" },
    ml: 1,
  },
  quickActionCardWrapper: {
    backgroundColor: "#EEEEEE",
    p: 2,
    borderRadius: 3,
    boxShadow: 5,
    mb: 3,
  },
  quickAllCardsWrapper: { mt: 3 },
  quickEachCardWrapper: {
    display: "flex",
    justifyContent: "space-between",
    border: "1px solid #BEBEBE",
    boxShadow: 3,
    p: 2,
    borderRadius: 2,
    cursor: "pointer",

    "&:hover": {
      backgroundColor: "#BEBEBE",
    },
  },
  quickEachCardContentWrapper: { display: "flex" },
  goToTexts: { ml: 1 },
  credsButton: {
    m: 1,
    boxShadow: 5,
    p: 1,
    display: "flex",
    borderRadius: 2,

    "&:hover": {
      boxShadow: 10,
      backgroundColor: "#BEBEBE",
      color: "black",
    },
  },
};

// Function to check if a data field exists and is not null
const hasData = (data) => {
  return data !== null && data !== undefined;
};

function CProfileInsight() {
  const history = useHistory();

  const user = useSelector((state) => state.users.user);
  const { profile, fullname, offers, contracts, jobs } = user;
  const {
    background_url,
    profile_url,
    address,
    facebook_url,
    instagram_url,
    twitter_url,
    background,
  } = profile[0];

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openMenuMore, setOpenMenuMore] = React.useState(false);
  const [openProfileEdit, setOpenProfileEdit] = React.useState(false);
  const [type, setType] = React.useState("");

  const more = [
    {
      name: "Edit Profile",
      path: `/edit/profile/client`,
    },
  ];

  const addCreds = [
    {
      icon: <PortraitIcon color="inherit" />,
      label: "Add Profile Photo",
      name: "Profile Image",
      hasValue: profile_url ? true : false,
    },
    {
      icon: <PortraitIcon color="inherit" />,
      label: "Add Background Photo",
      name: "Background Image",
      hasValue: background_url ? true : false,
    },
    {
      icon: <ShortTextIcon color="inherit" />,
      label: "Add About",
      name: "Background",
      hasValue: background ? true : false,
    },
    {
      icon: <FacebookIcon color="inherit" />,
      label: "Facebook",
      name: "Facebook",
      hasValue: facebook_url ? true : false,
    },
    {
      icon: <TwitterIcon color="inherit" />,
      label: "Twitter",
      name: "Twitter",
      hasValue: twitter_url ? true : false,
    },
    {
      icon: <InstagramIcon color="inherit" />,
      label: "Instagram",
      name: "Instagram",
      hasValue: instagram_url ? true : false,
    },
  ];

  const handleOpenMore = (e) => {
    setOpenMenuMore(true);
    setAnchorEl(e.currentTarget);
  };

  const handleNavigate = (link) => {
    history.push(link);
  };

  const handleChoose = (type) => {
    setType(type);
    setOpenProfileEdit(true);
  };

  const handleClose = () => {
    setOpenMenuMore(false);
    setAnchorEl(null);
  };

  return (
    <Box sx={{ mt: 8, p: 2 }}>
      <ProfileModalEdit
        open={openProfileEdit}
        type={type}
        handleClose={() => setOpenProfileEdit(false)}
      />
      <Box sx={styles.wrapper}>
        <DropdownMenuItem
          anchorEl={anchorEl}
          open={openMenuMore}
          handleClose={handleClose}
          items={more}
          onNavigate={handleNavigate}
        />
        <Box sx={styles.clientTextWrapper}>
          <Typography sx={styles.clientText}>Client Profile</Typography>
        </Box>

        <Box sx={styles.profileCardWrapper}>
          <Box sx={styles.profileLeft}>
            <Avatar
              variant="rounded"
              sx={styles.profileAvatar}
              src={user && profile_url}
            ></Avatar>
            <Box sx={styles.nameWrapper}>
              <Typography sx={styles.name}>{user && fullname}</Typography>
              <Typography>{user && address}</Typography>
            </Box>
          </Box>

          <Box sx={styles.buttonWrapper}>
            <Button
              variant="contained"
              color="primary"
              sx={styles.viewProfileButton}
              onClick={() => handleNavigate("/profile/client")}
            >
              View Profile
            </Button>
            <IconButton sx={styles.moreButton} onClick={handleOpenMore}>
              <MoreVertIcon />
            </IconButton>
          </Box>
        </Box>

        <Grid
          container
          spacing={1}
          sx={{ flexDirection: { xs: "column-reverse", md: "row" } }}
        >
          <Grid item xs={12} sm={12} md={8.5}>
            {!(
              background_url &&
              profile_url &&
              address &&
              background &&
              facebook_url &&
              twitter_url &&
              instagram_url
            ) && (
              <Grid item xs={12} sm={12} md={12}>
                <Box sx={styles.quickActionCardWrapper}>
                  <Typography sx={styles.name}>
                    Add credibility to your profile
                  </Typography>
                  <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                    {addCreds &&
                      addCreds.map((cred, i) => {
                        if (!cred.hasValue) {
                          return (
                            <Button
                              key={i}
                              size="small"
                              sx={styles.credsButton}
                              onClick={() => handleChoose(cred.name)}
                            >
                              {cred.icon}
                              <Typography sx={{ ml: 2, color: "inherit" }}>
                                {cred.label}
                              </Typography>
                            </Button>
                          );
                        }
                      })}
                  </Box>
                </Box>
              </Grid>
            )}
            <Grid item xs={12} sm={12} md={12}>
              <Box sx={styles.quickActionCardWrapper}>
                <Typography sx={styles.name}>Reviews</Typography>
                <Typography align="left">No Reviews</Typography>
              </Box>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={3.5}>
            <Box sx={styles.quickActionCardWrapper}>
              <Typography>Quick Action</Typography>
              <Box sx={styles.quickAllCardsWrapper}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={12} md={12}>
                    <Box
                      sx={styles.quickEachCardWrapper}
                      onClick={() => handleNavigate("/my-jobs")}
                    >
                      <Box sx={styles.quickEachCardContentWrapper}>
                        <WorkIcon color="primary" />
                        <Typography sx={styles.goToTexts}>
                          Go to jobs
                        </Typography>
                      </Box>
                      <Typography>{jobs && jobs.length}</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12}>
                    <Box
                      sx={styles.quickEachCardWrapper}
                      onClick={() => handleNavigate("/my-offers")}
                    >
                      <Box sx={styles.quickEachCardContentWrapper}>
                        <ArticleIcon sx={{ color: "orange" }} />
                        <Typography sx={styles.goToTexts}>
                          Go to Offers
                        </Typography>
                      </Box>
                      <Typography>{offers && offers.length}</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12}>
                    <Box
                      sx={styles.quickEachCardWrapper}
                      onClick={() => handleNavigate("/contracts")}
                    >
                      <Box sx={styles.quickEachCardContentWrapper}>
                        <AssignmentIcon sx={{ color: "green" }} />
                        <Typography sx={styles.goToTexts}>
                          Go to Contracts
                        </Typography>
                      </Box>
                      <Typography>{contracts && contracts.length}</Typography>
                    </Box>
                  </Grid>
                </Grid>

                <Divider sx={{ mt: 3, mb: 3 }} />

                <Box>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={12}>
                      <Button
                        fullWidth
                        variant="outlined"
                        color="primary"
                        onClick={() => handleNavigate("/new/job-offer")}
                        sx={{ boxShadow: 5 }}
                      >
                        Send Offer
                      </Button>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={() => handleNavigate("/new/job-post")}
                        sx={{ boxShadow: 5 }}
                      >
                        Post Job
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default CProfileInsight;
