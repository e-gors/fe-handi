import { Avatar, Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import BuildBridges from "../../../assets/images/build-bridges.jpeg";
import { useHistory } from "react-router-dom";
import { styles } from "../../../assets/styles/styles";
import company from "../../../assets/images/who-we-are.png";

const dummyData = [
  {
    fullname: "Efren Goron",
    job: "Web Developer",
    description:
      "I am the team of this company. I am a web developer and I used the React and Laravel framework to build this project. I am responsible for the success of this project for our capstone. We develop this system for the purpose that we will help the skilled workers to find job and client to get the best skilled workers for their projects",
  },
  {
    fullname: "Efren Goron",
    job: "Web Developer",
    description:
      "I am the team of this company. I am a web developer and I used the React and Laravel framework to build this project. I am responsible for the success of this project for our capstone. We develop this system for the purpose that we will help the skilled workers to find job and client to get the best skilled workers for their projects",
  },
  {
    fullname: "Efren Goron",
    job: "Web Developer",
    description:
      "I am the team of this company. I am a web developer and I used the React and Laravel framework to build this project. I am responsible for the success of this project for our capstone. We develop this system for the purpose that we will help the skilled workers to find job and client to get the best skilled workers for their projects",
  },
  {
    fullname: "Efren Goron",
    job: "Web Developer",
    description:
      "I am the team of this company. I am a web developer and I used the React and Laravel framework to build this project. I am responsible for the success of this project for our capstone. We develop this system for the purpose that we will help the skilled workers to find job and client to get the best skilled workers for their projects",
  },
];

const innerStyles = {
  wrapper: {
    mt: 8,
  },
  main: {
    transition: "1s",
    p: { xs: "20px 10px 50px 20px", md: 10, lg: 15 },
  },
  header: { fontSize: { xs: 24, md: 45, lg: 55 }, color: "blue", mb: 1 },
  description: { maxWidth: 700 },
  buttonWrapper: { mt: 5 },
  buildBridgeImage: { width: "100%" },
  ourMission: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    mt: { xs: 3, md: 10 },
    flexWrap: { xs: "wrap", md: "wrap", lg: "noWrap" },
    pb: 5,
    pt: 5,
    backgroundColor: "#EEEEEE",
  },
  ourMissionTextWrapper: { p: { xs: 2, md: 5 } },
  ourMissionText: { fontSize: { xs: 18, md: 24 }, fontWeight: "bold" },
  whoWeAre: { fontWeight: "bold", fontSize: { xs: 24, md: 36 } },
  companyImage: { width: { xs: "100%", md: 820 }, m: "0 auto" },
  meetOurTeamWrapper: { mt: 5, mb: 5, p: { xs: 2, md: 5 } },
  meetOurTeamText: {
    fontWeight: "bold",
    fontSize: { xs: 24, md: 36 },
  },
  weAreTech: { maxWidth: 600 },
  cardsWrapper: {
    mt: 3,
  },
  card: {
    p: 2,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "#BDC8CE",
    color: "#424242",
    height: "auto",
    boxShadow: 10,
    borderRadius: 3,
  },
  fullname: { fontSize: 24, fontWeight: "bold" },
  job: {
    width: "100%",
    background: "#EEEEEE",
    textAlign: "center",
    p: 1,
    mb: 5,
  },
};

function Company() {
  const history = useHistory();

  return (
    <Box sx={innerStyles.wrapper}>
      <Box sx={innerStyles.main}>
        <Typography sx={innerStyles.header}>
          We build bridges between <br /> client and skilled workers.
        </Typography>
        <Typography sx={innerStyles.description}>
          It is our job to ensure that you will get the best and reliable
          skilled workers that we can offer you for your project. If you have
          more questions please contact us through the form we give you in the
          bottom of the homepage or through email and cellphone number. Thank
          you and power!
        </Typography>

        <Box sx={innerStyles.buttonWrapper}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={3.5} md={2.5}>
              <Button
                fullWidth
                variant="contained"
                sx={styles.customBlueButton}
                onClick={() => history.push("/register")}
              >
                start now?
              </Button>
            </Grid>
            <Grid item xs={12} sm={0.5} md={0.5}>
              <Typography align="center">or</Typography>
            </Grid>
            <Grid item xs={12} sm={3.5} md={2.5}>
              <Button
                fullWidth
                variant="contained"
                sx={styles.customOrangeButton}
                onClick={() => history.push("/")}
              >
                inquire?
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Box
        component="img"
        src={BuildBridges}
        sx={innerStyles.buildBridgeImage}
      ></Box>

      <Box sx={innerStyles.ourMission}>
        <Box sx={innerStyles.ourMissionTextWrapper}>
          <Typography sx={innerStyles.ourMissionText}>Our mission</Typography>
          <Typography sx={innerStyles.whoWeAre}>Who we are</Typography>
          <Typography>
            We are technologists, web developer, and designers but first and
            foremost, we are friends and colleagues. Our mission is to help you
            to find the best skilled workers or to get you a job.{" "}
          </Typography>
        </Box>

        <Box sx={innerStyles.companyImage} component="img" src={company}></Box>
      </Box>

      <Box sx={innerStyles.meetOurTeamWrapper}>
        <Typography sx={innerStyles.meetOurTeamText}>
          Meet our <br /> amazing team
        </Typography>
        <Typography sx={innerStyles.weAreTech}>
          We are technologists, web developer, and designers but first and
          foremost, we are friends and colleagues. Our mission is to help you to
          find the best skilled workers or to get you a job.{" "}
        </Typography>
        <Box sx={innerStyles.cardsWrapper}>
          <Grid container spacing={2}>
            {dummyData &&
              dummyData.map((data, i) => {
                return (
                  <Grid key={i} item xs={12} sm={6} md={4} lg={3}>
                    <Box sx={innerStyles.card}>
                      <Avatar></Avatar>
                      <Typography sx={innerStyles.fullname}>
                        {data.fullname}
                      </Typography>
                      <Typography sx={innerStyles.job}>{data.job}</Typography>
                      <Typography>{data.description}</Typography>
                    </Box>
                  </Grid>
                );
              })}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

export default Company;
