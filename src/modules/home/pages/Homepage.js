/** @format */

import { Box, Button, Typography, Grid } from "@mui/material";
import React from "react";
import ImageCarousel from "../components/ImageCarousel";
import ContactUs from "../components/ContactUs";
import { styles } from "../../../assets/styles/styles";
import { useHistory } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
import BusinessIcon from "@mui/icons-material/Business";
import CallIcon from "@mui/icons-material/Call";
import CardSet from "../components/CardSet";
import JoinUsSection from "../components/JoinUsSection";
import ForClientSection from "../components/ForClientSection";
import { useDispatch } from "react-redux";
import { setCategories } from "../../../redux/actions/categoryActions";
import {
  setSkills,
  setSkillsChildren,
} from "../../../redux/actions/skillActions";
import { setLocations } from "../../../redux/actions/locationActions";
import ToastNotificationContainer from "../../../components/ToastNotificationContainer";
import noGuardHttp from "../../register/service";
import ToastNotification from "../../../components/ToastNotification";
import { options } from "../../../components/options";
import { setWorkers } from "../../../redux/actions/profileActions";

const innerStyles = {
  wrapper: {
    mt: 8,
  },
  main: {
    height: "auto",
  },
  section1: {
    transition: "1s",
    p: { xs: "20px 10px 50px 20px", md: 15, lg: 20 },
  },
  header: {
    fontSize: { xs: 30, md: 45, lg: 55 },
    color: "black",
    fontWeight: "bold",
  },
  buttonWrapper: {
    mt: 2,
    display: "flex",
    "@media(max-width: 500px)": {
      flexDirection: "column",
    },
  },
  button: {
    width: 200,
    height: 40,
    boxShadow: 5,

    "@media(max-width: 500px)": {
      width: "100%",
    },
  },
  or: { m: "0 10px" },
  forSkilledWorkerWrapper: {
    p: 1,
  },
  forSkilledWorkerText: { fontSize: { xs: 30, md: 24 }, fontWeight: "bold" },

  contactWrapper: {
    p: 2,
    mt: 5,
  },
  infoCardWrapper: { display: "flex", alignItems: "center" },
  contactIcon: { width: { xs: 40, md: 50 }, height: { xs: 40, md: 50 }, m: 1 },
  cardHeader: { fontSize: { xs: 18, md: 24 }, fontWeight: "bold", mt: 2 },
  contactLeft: { mt: { xs: 5, md: 1 } },
  contactLeftHeader: { fontSize: { xs: 20, md: 24 }, fontWeight: "bold" },
  tellUs: { fontSize: { xs: 18, md: 24 } },
};

function Homepage() {
  const history = useHistory();
  const dispatch = useDispatch();

  React.useEffect(() => {
    fetchWorkers();
    fetchCategories();
    fetchSkills();
    fetchSkillChildren();
    fetchLocations();
  }, []);

  const fetchWorkers = () => {
    noGuardHttp
      .get("workers")
      .then((res) => {
        dispatch(setWorkers(res.data.data));
      })
      .catch((err) => {
        ToastNotification("error", err.message, options);
      });
  };

  const fetchCategories = () => {
    noGuardHttp
      .get("categories")
      .then((res) => {
        dispatch(setCategories(res.data.data));
      })
      .catch((err) => {
        ToastNotification("error", err.message, options);
      });
  };

  const fetchSkills = () => {
    noGuardHttp
      .get("skills")
      .then((res) => {
        dispatch(setSkills(res.data.data));
      })
      .catch((err) => {
        ToastNotification("error", err.message, options);
      });
  };

  const fetchSkillChildren = () => {
    noGuardHttp
      .get("skills/children")
      .then((res) => {
        dispatch(setSkillsChildren(res.data.data));
      })
      .catch((err) => {
        ToastNotification("error", err.message, options);
      });
  };
  const fetchLocations = () => {
    noGuardHttp
      .get("locations")
      .then((res) => {
        dispatch(setLocations(res.data.data));
      })
      .catch((err) => {
        ToastNotification("error", err.message, options);
      });
  };

  return (
    <React.Fragment>
      <Box sx={innerStyles.wrapper}>
        <ToastNotificationContainer />
        <Box
          component="div"
          className="section section-1"
          sx={innerStyles.main}
        >
          <Box sx={innerStyles.section1}>
            <Typography sx={innerStyles.header}>
              Hire Skilled Workers based <br /> on their rating and reviews
            </Typography>
            <Typography>
              Explore thousands of job offers in one place and get the job of
              your dream
            </Typography>

            <Box sx={innerStyles.buttonWrapper}>
              <Button
                fullWidth
                variant="contained"
                sx={[styles.customBlueButton, innerStyles.button]}
                onClick={() => history.push("/find-jobs")}
              >
                Find Job
              </Button>
              <Typography align="center" sx={innerStyles.or}>
                or
              </Typography>
              <Button
                fullWidth
                variant="contained"
                sx={[styles.customOrangeButton, innerStyles.button]}
                onClick={() => history.push("/find-people")}
              >
                Hire Worker
              </Button>
            </Box>
          </Box>
        </Box>

        <CardSet />
        <JoinUsSection />
        <ForClientSection />

        <Box sx={innerStyles.forSkilledWorkerWrapper}>
          <Typography sx={innerStyles.forSkilledWorkerText}>
            For skilled workers
          </Typography>
          <Typography>
            Discover the completed projects of our skilled workers.
          </Typography>

          <ImageCarousel />
        </Box>

        <Box sx={innerStyles.contactWrapper}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Box>
                <Box sx={innerStyles.infoCardWrapper}>
                  <EmailIcon sx={innerStyles.contactIcon} />
                  <Box>
                    <Typography sx={innerStyles.cardHeader}>
                      Email us
                    </Typography>
                    <Typography>
                      Our friendly team is here to help you.
                    </Typography>
                    <Typography>handi@gmail.com</Typography>
                  </Box>
                </Box>

                <Box sx={innerStyles.infoCardWrapper}>
                  <BusinessIcon sx={innerStyles.contactIcon} />
                  <Box>
                    <Typography sx={innerStyles.cardHeader}>
                      Visit us
                    </Typography>
                    <Typography>Come see hello at our office.</Typography>
                    <Typography>Brgy. Atabay Hilongos, Leyte</Typography>
                  </Box>
                </Box>

                <Box sx={innerStyles.infoCardWrapper}>
                  <CallIcon sx={innerStyles.contactIcon} />
                  <Box>
                    <Typography sx={innerStyles.cardHeader}>Call us</Typography>
                    <Typography>Mon-Fri from 8am to 5pm.</Typography>
                    <Typography>(+63)905-417-0203</Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box sx={innerStyles.contactLeft}>
                <Typography sx={innerStyles.contactLeftHeader}>
                  Chat with us!
                </Typography>
                <Typography sx={innerStyles.tellUs}>
                  Tell us more about yourself and what you got in mind.
                </Typography>
                <ContactUs />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default Homepage;
