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
    "@media(max-width: 500px)": {
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
    mb: 5,
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
};

function CProfileInsight() {
  const history = useHistory();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const more = [
    {
      name: "Edit Profile",
      path: `/edit/profile/client`,
    },
  ];

  const handleOpenMore = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = (link) => {
    setAnchorEl(null);
    history.push(link);
  };

  const handleNavigate = (link) => {
    history.push(link);
  };

  return (
    <Box sx={{ mt: 8, p: 2 }}>
      <Box sx={styles.wrapper}>
        <DropdownMenuItem
          open={open}
          anchorEl={anchorEl}
          handleClose={handleClose}
          items={more}
        />
        <Box sx={styles.clientTextWrapper}>
          <Typography sx={styles.clientText}>Client Profile</Typography>
        </Box>

        <Box sx={styles.profileCardWrapper}>
          <Box sx={styles.profileLeft}>
            <Avatar variant="rounded" sx={styles.profileAvatar}>
              <Typography>Profile</Typography>
            </Avatar>
            <Box sx={styles.nameWrapper}>
              <Typography sx={styles.name}>Efren Goron</Typography>
              <Typography>Hilongos, Leyte</Typography>
            </Box>
          </Box>

          <Box sx={styles.buttonWrapper}>
            <Button
              variant="contained"
              color="primary"
              sx={styles.viewProfileButton}
              onClick={() => handleNavigate('/profile/client')}
            >
              View Profile
            </Button>
            <IconButton sx={styles.moreButton} onClick={handleOpenMore}>
              <MoreVertIcon />
            </IconButton>
          </Box>
        </Box>

        <Box sx={styles.quickActionCardWrapper}>
          <Typography>Quick Action</Typography>
          <Box sx={styles.quickAllCardsWrapper}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={4}>
                <Box
                  sx={styles.quickEachCardWrapper}
                  onClick={() => handleNavigate("/my-jobs")}
                >
                  <Box sx={styles.quickEachCardContentWrapper}>
                    <WorkIcon />
                    <Typography sx={styles.goToTexts}>Go to jobs</Typography>
                  </Box>
                  <Typography>0</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Box
                  sx={styles.quickEachCardWrapper}
                  onClick={() => handleNavigate("/my-offers")}
                >
                  <Box sx={styles.quickEachCardContentWrapper}>
                    <ArticleIcon />
                    <Typography sx={styles.goToTexts}>Go to Offers</Typography>
                  </Box>
                  <Typography>0</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Box
                  sx={styles.quickEachCardWrapper}
                  onClick={() => handleNavigate("/contracts")}
                >
                  <Box sx={styles.quickEachCardContentWrapper}>
                    <AssignmentIcon />
                    <Typography sx={styles.goToTexts}>
                      Go to Contracts
                    </Typography>
                  </Box>
                  <Typography>0</Typography>
                </Box>
              </Grid>
            </Grid>

            <Divider sx={{ mt: 3, mb: 3 }} />

            <Box>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
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
                <Grid item xs={12} sm={6}>
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

        <Box sx={styles.quickActionCardWrapper}>
          <Typography>Add credibility to your profile</Typography>

          <Box sx={{ display: "flex", flexWrap: "wrap" }}>
            <Box
              sx={{
                m: 1,
                border: "1px solid #BEBEBE",
                boxShadow: 5,
                p: 1,
                display: "flex",
                borderRadius: 2,
              }}
            >
              <Typography>icon</Typography>
              <Typography sx={{ ml: 2 }}>Required Info</Typography>
            </Box>
            <Box
              sx={{
                m: 1,
                border: "1px solid #BEBEBE",
                boxShadow: 5,
                p: 1,
                display: "flex",
                borderRadius: 2,
              }}
            >
              <Typography>icon</Typography>
              <Typography sx={{ ml: 2 }}>Required Info</Typography>
            </Box>
            <Box
              sx={{
                m: 1,
                border: "1px solid #BEBEBE",
                boxShadow: 5,
                p: 1,
                display: "flex",
                borderRadius: 2,
              }}
            >
              <Typography>icon</Typography>
              <Typography sx={{ ml: 2 }}>Required Info</Typography>
            </Box>
            <Box
              sx={{
                m: 1,
                border: "1px solid #BEBEBE",
                boxShadow: 5,
                p: 1,
                display: "flex",
                borderRadius: 2,
              }}
            >
              <Typography>icon</Typography>
              <Typography sx={{ ml: 2 }}>Required Info</Typography>
            </Box>
            <Box
              sx={{
                m: 1,
                border: "1px solid #BEBEBE",
                boxShadow: 5,
                p: 1,
                display: "flex",
                borderRadius: 2,
              }}
            >
              <Typography>icon</Typography>
              <Typography sx={{ ml: 2 }}>Required Info</Typography>
            </Box>
          </Box>
        </Box>

        <Box sx={styles.quickActionCardWrapper}>
          <Typography align="center">No Reviews</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default CProfileInsight;
