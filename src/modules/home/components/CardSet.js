import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import WorkIcon from "@mui/icons-material/Work";
import EngineeringIcon from "@mui/icons-material/Engineering";
import PeopleIcon from "@mui/icons-material/People";
import TaskIcon from "@mui/icons-material/Task";

const sectionTwoData = [
  {
    icon: (
      <WorkIcon
        sx={{
          width: { xs: 60, md: 75 },
          height: { xs: 60, md: 75 },
        }}
      />
    ),
    num: 100000,
    text: "Job Offers",
  },
  {
    icon: (
      <EngineeringIcon
        sx={{
          width: { xs: 60, md: 75 },
          height: { xs: 60, md: 75 },
        }}
      />
    ),
    num: 100000,
    text: "Skilled Workers",
  },
  {
    icon: (
      <PeopleIcon
        sx={{
          width: { xs: 60, md: 75 },
          height: { xs: 60, md: 75 },
        }}
      />
    ),
    num: 100000,
    text: "Active Clients",
  },
  {
    icon: (
      <TaskIcon
        sx={{
          width: { xs: 60, md: 75 },
          height: { xs: 60, md: 75 },
        }}
      />
    ),
    num: 100000,
    text: "Completed Projects",
  },
];

const styles = {
  wrapper: {
    backgroundColor: "#1976D2",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    p: 2,
  },
  cardWrapper: {
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    alignItems: "center",
    color: "white",
    border: "1px solid #0135FE",
    boxShadow: 20,
    p: 2,
  },
  number: {
    fontSize: { xs: 22, md: 26 },
    fontWeigth: 600,
    textAlign: { xs: "center", md: "left" },
  },
  text: {
    fontSize: { xs: 18, md: 20 },
    textAlign: { xs: "center", md: "left" },
  },
};

function CardSet() {
  return (
    <Box component="div" sx={styles.wrapper}>
      <Grid container spacing={2}>
        {sectionTwoData &&
          sectionTwoData.map((data, i) => {
            return (
              <Grid key={i} item xs={12} sm={6} md={4} lg={3}>
                <Box sx={styles.cardWrapper}>
                  {data.icon}
                  <Box>
                    <Typography sx={styles.number}>+{data.num}</Typography>
                    <Typography sx={styles.text}>{data.text}</Typography>
                  </Box>
                </Box>
              </Grid>
            );
          })}
      </Grid>
    </Box>
  );
}

export default CardSet;
