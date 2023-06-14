import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom";

function Posted() {
  const history = useHistory();
  const url = localStorage.getItem("postedUrl");

  const handleNavigate = (link) => {
    history.push(link);
  };

  return (
    <Box sx={{ mt: 8, p: 2 }}>
      <Box
        sx={{
          maxWidth: 500,
          height: "auto",
          p: 2,
          borderRadius: 3,
          boxShadow: 5,
          m: "20px auto",
        }}
      >
        <Box align="center">
          <Typography
            sx={{ fontWeigth: "bold", fontSize: { xs: 18, sm: 22, md: 24 } }}
          >
            Your job has been posted!
          </Typography>
        </Box>
        <Box component="ul">
          <Typography
            component="li"
            sx={{ fontSize: { xs: 12, md: 14 }, m: 1 }}
          >
            Applicants will be able to apply in your posted jobs if it is
            public.
          </Typography>
          <Typography
            component="li"
            sx={{ fontSize: { xs: 12, md: 14 }, m: 1 }}
          >
            You can invite workers to appli in your private posted job.
          </Typography>
          <Typography
            component="li"
            sx={{ fontSize: { xs: 12, md: 14 }, m: 1 }}
          >
            Once applicants applied in your posted jobs, you will be notified.
          </Typography>
          <Typography
            component="li"
            sx={{ fontSize: { xs: 12, md: 14 }, m: 1 }}
          >
            You have given the authority to reject and accept applicants for
            your own interest, however you must be aware of the "Terms and
            Conditions" and "Privacy Policy".
          </Typography>
          <Typography
            component="li"
            sx={{ fontSize: { xs: 12, md: 14 }, m: 1 }}
          >
            You can visit your posted jobs in you dashboard.
          </Typography>
        </Box>
        <Box
          sx={{
            mt: 5,
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={6}>
              <Button
                color="primary"
                variant="outlined"
                fullWidth
                size="small"
                onClick={() => handleNavigate('/find-jobs')}
              >
                View posted job
              </Button>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Button
                color="primary"
                variant="contained"
                fullWidth
                size="small"
                onClick={() => handleNavigate("/new/job-post")}
              >
                Create another job
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

export default Posted;
