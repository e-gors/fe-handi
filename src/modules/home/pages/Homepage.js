import { Box, Button, Typography } from "@mui/material";
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

function Homepage() {
  const history = useHistory();

  return (
    <Box sx={{ mt: 8 }}>
      <Box
        component="div"
        className="section section-1"
        sx={{ height: { md: "75vh", xs: "auto" } }}
      >
        <Box
          sx={{
            transition: "1s",
            p: { xs: "20px 10px 50px 20px", md: 15, lg: 20 },
          }}
        >
          <Typography
            sx={{ fontSize: { xs: 24, md: 45, lg: 55 }, color: "blue" }}
          >
            Hire Skilled Workers based <br /> on their rating and reviews
          </Typography>
          <Typography>
            Explore thousands of job offers in one place and get the job of your
            dream
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
            <Button
              variant="contained"
              sx={styles.customBlueButton}
              onClick={() => history.push("/find-jobs")}
            >
              Find Job
            </Button>
            <Typography sx={{ m: "0 10px" }}>or</Typography>
            <Button
              variant="contained"
              sx={styles.customOrangeButton}
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

      <Box sx={{ p: 1 }}>
        <Typography sx={{ fontSize: { xs: 24, md: 36 }, fontWeight: "bold" }}>
          For skilled workers
        </Typography>
        <Typography>
          Discover the completed projects of our skilled workers.
        </Typography>

        <ImageCarousel />
      </Box>

      <Box
        sx={{
          p: 1,
          width: { xs: "100%", md: "90%" },
          m: "0 auto",
          mt: 5,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <EmailIcon sx={{ fontSize: { xs: 36, md: 50 }, m: 1 }} />
            <Box>
              <Typography
                sx={{ fontSize: { xs: 18, md: 24 }, fontWeight: "bold" }}
              >
                Email us
              </Typography>
              <Typography>Our friendly team is here to help you.</Typography>
              <Typography>handi@gmail.com</Typography>
            </Box>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <BusinessIcon sx={{ fontSize: { xs: 36, md: 50 }, m: 1 }} />
            <Box>
              <Typography
                sx={{ fontSize: { xs: 18, md: 24 }, fontWeight: "bold", mt: 2 }}
              >
                Visit us
              </Typography>
              <Typography>Come see hello at our office.</Typography>
              <Typography>Brgy. Atabay Hilongos, Leyte</Typography>
            </Box>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <CallIcon sx={{ fontSize: { xs: 36, md: 50 }, m: 1 }} />
            <Box>
              <Typography
                sx={{ fontSize: { xs: 18, md: 24 }, fontWeight: "bold", mt: 2 }}
              >
                Call us
              </Typography>
              <Typography>Mon-Fri from 8am to 5pm.</Typography>
              <Typography>(+63)905-417-0203</Typography>
            </Box>
          </Box>
        </Box>

        <Box sx={{ mt: { xs: 5, md: 1 } }}>
          <Typography sx={{ fontSize: { xs: 24, md: 36 } }}>
            Chat with us!
          </Typography>
          <Typography sx={{ fontSize: { xs: 18, md: 24 } }}>
            Tell us more about yourself and what you got in mind.
          </Typography>
          <ContactUs />
        </Box>
      </Box>
    </Box>
  );
}

export default Homepage;
