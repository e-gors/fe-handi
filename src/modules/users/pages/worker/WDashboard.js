import {
  Box,
  Button,
  Divider,
  Grid,
  Pagination,
  Typography,
} from "@mui/material";
import React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import PlaylistAddCheckCircleRoundedIcon from "@mui/icons-material/PlaylistAddCheckCircleRounded";
import WorkIcon from "@mui/icons-material/Work";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import Http from "../../../../utils/Http";
import ToastNotificationContainer from "../../../../components/ToastNotificationContainer";
import FindJobCard from "../../components/worker/FindJobCard";

const convertToPercentage = (num) => {
  return `${(num / 10) * 100}%`;
};

function WDashboard() {
  const history = useHistory();
  const user = useSelector((state) => state.users.user);

  const { role, uuid, profile } = user;
  const [loading, setLoading] = React.useState(false);
  const [onLoadLoading, setOnLoadLoading] = React.useState(false);

  const [jobs, setJobs] = React.useState({
    data: [],
    meta: {},
  });
  const [limit, setLimit] = React.useState({
    limit: 10,
    page: 1,
  });

  React.useEffect(() => {
    optimizedFn();
  }, []); // eslint-disable-line

  const fetchingData = (params = {}) => {
    setLoading(true);
    Http.get("/recommended/jobs", {
      params: {
        ...limit,
        ...params,
      },
    }).then((res) => {
      if (res.data.data) {
        setJobs({
          data: res.data.data,
          meta: res.data.meta,
        });
      }
      setLoading(false);
      setOnLoadLoading(false);
    });
  };

  const debounce = (func) => {
    let timer;
    return function (...args) {
      const context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, 700);
    };
  };

  const optimizedFn = React.useCallback(debounce(fetchingData), []); // eslint-disable-line

  const handleChangePage = (e, newPage) => {
    if (limit.page !== newPage) {
      setOnLoadLoading(true);
      setLimit((prev) => ({
        limit: prev.limit,
        page: newPage,
      }));
      optimizedFn({ page: newPage });
    }
  };

  const handleNavigate = (link) => {
    history.push(link);
  };

  return (
    <Box sx={{ mt: 8, p: 2 }}>
      <ToastNotificationContainer />
      <Box
        sx={{
          borderRadius: 5,
          maxWidth: 1000,
          backgroundColor: "#F4F5F8",
          margin: "30px auto",
          boxShadow: 10,
          p: 2,
        }}
      >
        <Typography sx={{ fontWeight: "bold" }}>Profile Insights</Typography>
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
              onClick={() => handleNavigate(`/edit/profile/worker`)}
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
          p: 2,
        }}
      >
        <Typography sx={{ fontWeight: "bold" }}>Recommended Jobs</Typography>
        {jobs.data &&
          jobs.data.length > 0 &&
          profile[0].profile_completeness > 7 && (
            <FindJobCard jobs={jobs.data} loading={loading} />
          )}
        {jobs.data &&
          jobs.data.length > 0 &&
          profile[0].profile_completeness > 7 && (
            <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
              <Pagination
                count={Math.ceil(jobs.meta.total / limit.limit)}
                page={limit.page}
                onChange={handleChangePage}
                disabled={onLoadLoading} // Disable pagination when loading more jobs
                color="primary"
                variant="outlined"
                shape="rounded"
              />
            </Box>
          )}
        {(jobs.data.length === 0 || profile[0].profile_completeness < 6) && (
          <Box>
            <Box sx={{ maxWidth: 600, margin: "10px auto", p: 2 }}>
              <Box sx={{ textAlign: "center" }}>
                <WorkIcon sx={{ height: 100, width: 100 }} color="primary" />
              </Box>
              <Typography sx={{ textAlign: { xs: "center", md: "left" } }}>
                Sorry, we can’t find relevant jobs for you. We will send you a
                note as soon as a new job is posted. Please make sure to turn
                email or Telegram notifications on. Or try to add more
                Categories and Skills so we could recommend you more jobs.
              </Typography>

              <Box sx={{ width: "100%", mt: 2, p: 3 }} align="center">
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={5} md={5}>
                    <Button
                      fullWidth
                      variant="contained"
                      color="primary"
                      onClick={() =>
                        handleNavigate(`/account/settings`)
                      }
                    >
                      Notifications Settings
                    </Button>
                  </Grid>
                  <Grid item xs={12} sm={5} md={5}>
                    <Button
                      fullWidth
                      variant="outlined"
                      color="primary"
                      onClick={() => handleNavigate(`/edit/profile/worker`)}
                    >
                      Edit Profile
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default WDashboard;
