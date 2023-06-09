/** @format */

import { Box, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import ProjectReviewTabs from "./ProjectReviewTabs";
import { useDispatch, useSelector } from "react-redux";
import UserRatingLinearProgress from "../../../../components/UserRatingLinearProgress";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { filterWorkers } from "../../../../redux/actions/profileActions";
import noGuardHttp from "../../../register/service";

function Profile() {
  const { uuid } = useParams();
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(filterWorkers(uuid));
  }, [uuid, dispatch]);

  const worker = useSelector((state) => state.profiles.worker);

  const { profile } = worker;

  const profs = profile && profile[0] ? profile[0] : null;
  const year = new Date(profs?.created_at).getFullYear();
  const rate = profs && profs.rate;

  const styles = {
    wrapper: {
      mt: 8,
      p: 2,
      minHeight: "60vh",
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
      backgroundImage: `url(${profs && profs.background_url})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundColor:
        profs && profs.background_url ? "transparent" : "#BEBEBE",
      width: "100%",
      height: { xs: 120, md: 240 },
      borderRadius: 3,
      transition: "0.5s",
      border: "2px solid #EEEEEE",
      boxShadow: 5,
    },
    mainProfileWrapper: {
      display: "flex",
      flexWrap: { xs: "wrap", md: "noWrap" },
    },
    profileImage: {
      position: "relative",
      backgroundImage: `url(${profs && profs.profile_url})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundColor: profs && profs.profile_url ? "transparent" : "#BEBEBE",
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
      width: { xs: "100%", md: 240 },
    },
    leftProfileWrapper: {
      display: { xs: "flex", md: "block" },
      width: "100%",
    },
    fullnameWrapper: {
      textAlign: { xs: "left", md: "center" },
      backgroundColor: { xs: "transparent", md: "#EEEEEE" },
      p: 1,
      mt: { xs: 6, sm: 8, md: 0 },
      boxShadow: { xs: 0, md: 5 },
    },
    fullnameText: { fontWeight: "bold", fontSize: { xs: 16, sm: 18, md: 22 } },
    backgroundText: {
      fontSize: { xs: 12, sm: 14, md: 16 },
    },
    userRatingWrapper: {
      width: { xs: "105%", sm: "102%", md: "100%" },
      mt: 3,
      backgroundColor: "#EEEEEE",
      borderRadius: 3,
      p: 1,
      boxShadow: 5,
      ml: { xs: -2, md: 0 },
    },
    projectReviewTabsWrapper: {
      ml: { xs: 0, md: 5 },
      mt: { xs: -3, sm: -5, md: 2 },
      backgroundColor: "#EEEEEE",
      borderRadius: 3,
      p: 2,
      boxShadow: 5,
      width: "100%",
    },
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
    members: {
      width: { xs: "105%", sm: "102%", md: "100%" },
      mt: 3,
      backgroundColor: "#EEEEEE",
      borderRadius: 3,
      p: 1,
      boxShadow: 5,
      ml: { xs: -2, md: 0 },
      display: "flex",
      justifyContent: "space-between",
    },
    membersEachWrapper: {
      display: "flex",
      flexDirection: "column",
      textAlign: "center",
    },
    value: {
      fontWeight: "bold",
      fontSize: { xs: 14, md: 11 },
    },
    label: {
      fontSize: { xs: 12, md: 9 },
    },
  };

  const inCrementViewedUser = () => {
    noGuardHttp
      .post("/increment/view/users")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.main}>
        <Box>
          <Box sx={styles.contentWrapper}>
            <Box sx={styles.bgImageWrapper}></Box>

            <Box sx={styles.mainProfileWrapper}>
              <Box sx={styles.profileWrapper}>
                <Box sx={styles.leftProfileWrapper}>
                  <Box sx={styles.profileImage}></Box>
                  <Box sx={styles.fullnameWrapper}>
                    <Typography sx={styles.fullnameText}>
                      {worker.fullname}
                    </Typography>
                    <Typography sx={styles.backgroundText}>
                      {profs && profs.address}
                    </Typography>
                  </Box>
                </Box>
                <Box sx={styles.members}>
                  <Box sx={styles.membersEachWrapper}>
                    <Typography sx={styles.value}>{year && year}</Typography>
                    <Typography sx={styles.label}>Member Since</Typography>
                  </Box>
                  <Box sx={styles.membersEachWrapper}>
                    <Typography sx={styles.value}>
                      ₱{rate ? rate : "0"}
                    </Typography>
                    <Typography sx={styles.label}>Rates</Typography>
                  </Box>
                  <Box sx={styles.membersEachWrapper}>
                    <Typography sx={styles.value}>49</Typography>
                    <Typography sx={styles.label}>Completed Jobs</Typography>
                  </Box>
                </Box>
                <Box sx={styles.userRatingWrapper}>
                  <UserRatingLinearProgress />
                </Box>
                {profs &&
                  (profs.facebook_url ||
                    profs.instagram_url ||
                    profs.twitter_url) && (
                    <Box sx={styles.userRatingWrapper}>
                      <Box sx={styles.socialNetworkMain}>
                        <Typography sx={styles.socialNetworkText}>
                          Social Networks
                        </Typography>
                      </Box>
                      {profs.facebook_url && (
                        <Box
                          sx={styles.social}
                          onClick={() => window.open(profs.facebook_url)}
                        >
                          <FacebookIcon color="primary" />
                          <Typography sx={styles.socialText}>
                            Facebook Link
                          </Typography>
                        </Box>
                      )}
                      {profs.instagram_url && (
                        <Box
                          sx={styles.social}
                          onClick={() => window.open(profs.instagram_url)}
                        >
                          <InstagramIcon color="primary" />
                          <Typography sx={styles.socialText}>
                            Instagram Link
                          </Typography>
                        </Box>
                      )}
                      {profs.twitter_url && (
                        <Box
                          sx={styles.social}
                          onClick={() => window.open(profs.twitter_url)}
                        >
                          <TwitterIcon color="primary" />
                          <Typography sx={styles.socialText}>
                            Twitter Link
                          </Typography>
                        </Box>
                      )}
                    </Box>
                  )}
              </Box>
              <Box sx={styles.projectReviewTabsWrapper}>
                <Box>
                  <ProjectReviewTabs worker={worker && worker} />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Profile;
