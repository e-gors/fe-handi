import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import client from "../../../assets/images/client-finding.jpg";
import { icons } from "../../../components/Icon";
import { useHistory } from "react-router-dom";

const styles = {
  wrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    mt: 3,
    flexWrap: { xs: "wrap", md: "wrap", lg: "noWrap" },
    p: 1,
  },
  main: {},
  forClientLeft: {
    p: 1,
    width: { xs: "100%", sm: "100%" },
  },
  forClientText: { fontSize: { xs: 18, md: 24 }, fontWeight: "bold" },
  forClientSubHeader: { fontWeight: "bold", fontSize: { xs: 24, md: 36 } },
  forClientCard: {
    display: "flex",
    alignItems: "center",
    border: "1px solid gray",
    cursor: "pointer",
    mt: 1,
    p: 1,
    mb: 2,
    transition: "0.5s",

    "&:hover": {
      backgroundColor: "#EEEEEE",
    },
  },
  findJob: { fontWeight: "bold", fontSize: { xs: 18, md: 24 } },
  clientImage: { maxWidth: { xs: "100%", md: 820 }, m: "20px auto" },
};

function ForClientSection() {
  const history = useHistory();

  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.forClientLeft}>
        <Typography sx={styles.forClientText}>For Client</Typography>
        <Typography sx={styles.forClientSubHeader}>
          Find skilled workers
        </Typography>
        <Typography sx={styles.forClientSubHeader}>in your best way</Typography>
        <Typography>
          Work with so many skilled workers and find clients based on your
          expertise! You can also post job for your project.
        </Typography>

        <Box sx={styles.forClientCard}>
          {icons.workIcon}
          <Box onClick={() => history.push("/find-jobs")}>
            <Typography sx={styles.findJob}>Find job</Typography>
            <Typography>
              Filter the job posts and find the job that are align to your
              skills and talents.
            </Typography>
          </Box>
        </Box>

        <Box sx={styles.forClientCard}>
          {icons.engineeringIcon}

          <Box onClick={() => history.push("/find-people")}>
            <Typography sx={styles.forClientText}>
              Browse skilled workers
            </Typography>
            <Typography>
              Find the best skilled workers base on their rating for your
              project.
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={styles.clientImage} component="img" src={client}></Box>
    </Box>
  );
}

export default ForClientSection;
