import { Avatar, Box, Button, Typography } from "@mui/material";
import React from "react";
import BuildBridges from "../../../assets/images/build-bridges.jpeg";
import { useHistory } from "react-router-dom";
import { styles } from "../../../assets/styles/styles";
import company from "../../../assets/images/who-we-are.png";

function Company() {
  const history = useHistory();

  return (
    <Box sx={{ mt: 8 }}>
      <Box
        sx={{
          transition: "1s",
          p: { xs: "20px 10px 50px 20px", md: 10, lg: 15 },
        }}
      >
        <Typography
          sx={{ fontSize: { xs: 24, md: 45, lg: 55 }, color: "blue" }}
        >
          We build bridges between <br /> client and skilled workers.
        </Typography>
        <Typography sx={{ maxWidth: 700 }}>
          It is our job to ensure that you will get the best and reliable
          skilled workers that we can offer you for your project. If you have
          more questions please contact us through the form we give you in the
          bottom of the homepage or through email and cellphone number. Thank
          you and power!
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
          <Button
            variant="contained"
            sx={styles.customBlueButton}
            onClick={() => history.push("/registers")}
          >
            start now ?
          </Button>
          <Typography sx={{ m: "0 10px" }}>or</Typography>
          <Button
            variant="contained"
            sx={styles.customOrangeButton}
            onClick={() => history.push("/")}
          >
            inquire ?
          </Button>
        </Box>
      </Box>

      <Box component="img" src={BuildBridges} sx={{ width: "100%" }}></Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mt: { xs: 3, md: 10 },
          flexWrap: { xs: "wrap", md: "wrap", lg: "noWrap" },
          p: 1,
        }}
      >
        <Box sx={{ p: { xs: 2, md: 5 } }}>
          <Typography sx={{ fontSize: { xs: 18, md: 24 }, fontWeight: "bold" }}>
            Our mission
          </Typography>
          <Typography sx={{ fontWeight: "bold", fontSize: { xs: 24, md: 36 } }}>
            Who we are
          </Typography>
          <Typography>
            We are technologists, web developer, and designers but first and
            foremost, we are friends and colleagues. Our mission is to help you
            to find the best skilled workers or to get you a job.{" "}
          </Typography>
        </Box>

        <Box
          sx={{ width: { xs: "100%", md: 820 }, m: "0 auto" }}
          component="img"
          src={company}
        ></Box>
      </Box>

      <Box sx={{ mt: 5, mb: 5, p: { xs: 2, md: 5 } }}>
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: { xs: 24, md: 36 },
          }}
        >
          Meet our <br /> amazing team
        </Typography>
        <Typography sx={{ maxWidth: 600 }}>
          We are technologists, web developer, and designers but first and
          foremost, we are friends and colleagues. Our mission is to help you to
          find the best skilled workers or to get you a job.{" "}
        </Typography>
        <Box
          sx={{
            p: 2,
            display: "flex",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
          }}
        >
          <Box
            sx={{
              m: 1,
              p: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              background: "rgb(30, 36, 46)",
              color: "#fff",
              height: "auto",
              boxShadow: "0 0 20px rgba(0, 0, 0, 0.3)",
              width: { xs: "100%", md: "23%" },
              minWidth: "300px",
            }}
          >
            <Avatar></Avatar>
            <Typography sx={{ fontSize: 24, fontWeight: "bold" }}>
              Efren Goron
            </Typography>
            <Typography
              sx={{
                width: "100%",
                background: "linear-gradient(to right, #ee0979, #ff6a00)",
                textAlign: "center",
                p: 1,
                mb: 5,
              }}
            >
              Web Developer
            </Typography>
            <Typography>
              I am the team of this company. I am a web developer and I used the
              React and Laravel framework to build this project. I am
              responsible for the success of this project for our capstone. We
              develop this system for the purpose that we will help the skilled
              workers to find job and client to get the best skilled workers for
              their projects.
            </Typography>
          </Box>
          <Box
            sx={{
              m: 1,
              p: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              background: "rgb(30, 36, 46)",
              color: "#fff",
              height: "auto",
              boxShadow: "0 0 20px rgba(0, 0, 0, 0.3)",
              width: { xs: "100%", md: "23%" },
              minWidth: "300px",
            }}
          >
            <Avatar></Avatar>
            <Typography sx={{ fontSize: 24, fontWeight: "bold" }}>
              Efren Goron
            </Typography>
            <Typography
              sx={{
                width: "100%",
                background: "linear-gradient(to right, #ee0979, #ff6a00)",
                textAlign: "center",
                p: 1,
                mb: 5,
              }}
            >
              Web Developer
            </Typography>
            <Typography>
              I am the team of this company. I am a web developer and I used the
              React and Laravel framework to build this project. I am
              responsible for the success of this project for our capstone. We
              develop this system for the purpose that we will help the skilled
              workers to find job and client to get the best skilled workers for
              their projects.
            </Typography>
          </Box>
          <Box
            sx={{
              m: 1,
              p: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              background: "rgb(30, 36, 46)",
              color: "#fff",
              height: "auto",
              boxShadow: "0 0 20px rgba(0, 0, 0, 0.3)",
              width: { xs: "100%", md: "23%" },
              minWidth: "300px",
            }}
          >
            <Avatar></Avatar>
            <Typography sx={{ fontSize: 24, fontWeight: "bold" }}>
              Efren Goron
            </Typography>
            <Typography
              sx={{
                width: "100%",
                background: "linear-gradient(to right, #ee0979, #ff6a00)",
                textAlign: "center",
                p: 1,
                mb: 5,
              }}
            >
              Web Developer
            </Typography>
            <Typography>
              I am the team of this company. I am a web developer and I used the
              React and Laravel framework to build this project. I am
              responsible for the success of this project for our capstone. We
              develop this system for the purpose that we will help the skilled
              workers to find job and client to get the best skilled workers for
              their projects.
            </Typography>
          </Box>
          <Box
            sx={{
              m: 1,
              p: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              background: "rgb(30, 36, 46)",
              color: "#fff",
              height: "auto",
              boxShadow: "0 0 20px rgba(0, 0, 0, 0.3)",
              width: { xs: "100%", md: "23%" },
              minWidth: "300px",
            }}
          >
            <Avatar></Avatar>
            <Typography sx={{ fontSize: 24, fontWeight: "bold" }}>
              Efren Goron
            </Typography>
            <Typography
              sx={{
                width: "100%",
                background: "linear-gradient(to right, #ee0979, #ff6a00)",
                textAlign: "center",
                p: 1,
                mb: 5,
              }}
            >
              Web Developer
            </Typography>
            <Typography>
              I am the team of this company. I am a web developer and I used the
              React and Laravel framework to build this project. I am
              responsible for the success of this project for our capstone. We
              develop this system for the purpose that we will help the skilled
              workers to find job and client to get the best skilled workers for
              their projects.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Company;
