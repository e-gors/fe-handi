import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import PlaylistAddCheckCircleRoundedIcon from "@mui/icons-material/PlaylistAddCheckCircleRounded";
import WorkIcon from "@mui/icons-material/Work";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const convertToPercentage = (num) => {
  return `${(num / 10) * 100}%`;
};

function WorkerDashboard() {
  const history = useHistory();
  const user = useSelector((state) => state.users.user);
  const { role, uuid, profile } = user;

  const handleNavigate = (link) => {
    history.push(link);
  };

  return (
    <Box sx={{ p: 2 }}>
      <Box
        sx={{
          borderRadius: 5,
          maxWidth: 1000,
          backgroundColor: "#F4F5F8",
          margin: "30px auto",
          boxShadow: 10,
        }}
      >
        <Typography sx={{ p: "10px 30px", fontWeight: "bold" }}>
          Profile Insights
        </Typography>
        <Divider />
        <Grid container spacing={2} sx={{ p: "10px 30px" }}>
          <Grid
            item
            xs={12}
            md={3}
            sx={{
              display: "flex",
              alignItems: "center",
              maxHeight: { xs: "100%", md: 75 },
            }}
          >
            <VisibilityIcon
              sx={{ p: 1, backgroundColor: "#EDF3FF", width: 50, height: 50 }}
              color="primary"
            />
            <Box sx={{ ml: 2 }}>
              <Typography>Monthly view</Typography>
              <Typography sx={{ fontWeight: "bold", fontSize: 24 }}>
                0
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={3}
            sx={{
              display: "flex",
              alignItems: "center",
              maxHeight: { xs: "100%", md: 75 },
            }}
          >
            <PlaylistAddCheckCircleRoundedIcon
              sx={{ p: 1, backgroundColor: "#EDF3FF", width: 50, height: 50 }}
              color="primary"
            />
            <Box sx={{ ml: 2 }}>
              <Typography>Profile Completeness</Typography>
              <Typography sx={{ fontWeight: "bold", fontSize: 24 }}>
                {profile &&
                  convertToPercentage(profile[0].profile_completeness)}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography sx={{ fontWeight: "bold" }}>
              When you complete all required fields in your Profile:
            </Typography>
            <Typography component="li">
              Clients will see you in their search results if your profile is
              public.
            </Typography>
            <Typography component="li">
              You will be able to apply for posted Jobs.
            </Typography>

            <Button
              variant="contained"
              color="primary"
              sx={{ mt: 3 }}
              onClick={() => handleNavigate(`/overview/${role}/${uuid}`)}
            >
              Complete Profile
            </Button>
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          borderRadius: 5,
          maxWidth: 1000,
          backgroundColor: "#F4F5F8",
          margin: "30px auto",
          boxShadow: 10,
        }}
      >
        <Typography sx={{ p: "10px 30px" }}>Recommended Jobs</Typography>
        <Divider />
        <Box>
          <Box sx={{ maxWidth: 600, margin: "10px auto", p: 2 }}>
            <Box sx={{ textAlign: "center" }}>
              <WorkIcon sx={{ height: 100, width: 100 }} color="primary" />
            </Box>
            <Typography sx={{ textAlign: { xs: "center", md: "left" } }}>
              Sorry, we can’t find relevant jobs for you. We will send you a
              note as soon as a new job is posted. Please make sure to turn
              email or Telegram notifications on. Or try to add more Categories
              and Skills so we could recommend you more jobs.
            </Typography>

            <Box sx={{ width: "100%", mt: 2, p: 3 }}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleNavigate(`/overview/${role}/${uuid}`)}
              >
                Edit Profile
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default WorkerDashboard;
