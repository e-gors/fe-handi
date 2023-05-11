import { Box, Grid, LinearProgress, Stack, Typography } from "@mui/material";
import React from "react";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import UserRating from "./UserRating";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";

const styles = {
  rating: { fontSize: 24, fontWeight: "bold" },
  overAllUserWhoRate: { display: "flex", mt: 1 },
  linearWrapper: { width: "100%", color: "grey.500" },
  linearMain: {
    display: "flex",
    alignItems: "center",
  },
  linearRanking: { fontWeight: "bold", fontSize: 16, color: "black" },
  linear5: {
    width: "100%",
    borderRadius: 1,
    height: 10,
    ml: 1,
    boxShadow: 4,
    backgroundColor: "white",

    "& .MuiLinearProgress-bar": {
      bgcolor: "#5BB85F",
    },
  },
  linear4: {
    width: "100%",
    borderRadius: 1,
    height: 10,
    ml: 1,
    boxShadow: 4,
    backgroundColor: "white",

    "& .MuiLinearProgress-bar": {
      bgcolor: "#5691CB",
    },
  },
  linear3: {
    width: "100%",
    borderRadius: 1,
    height: 10,
    ml: 1,
    boxShadow: 4,
    backgroundColor: "white",

    "& .MuiLinearProgress-bar": {
      bgcolor: "#6BC0D4",
    },
  },
  linear2: {
    width: "100%",
    borderRadius: 1,
    height: 10,
    ml: 1,
    boxShadow: 4,
    backgroundColor: "white",

    "& .MuiLinearProgress-bar": {
      bgcolor: "#EDAE51",
    },
  },
  linear1: {
    width: "100%",
    borderRadius: 1,
    height: 10,
    ml: 1,
    boxShadow: 4,
    backgroundColor: "white",

    "& .MuiLinearProgress-bar": {
      bgcolor: "#D75253",
    },
  },
};

export default function UserRatingLinearProgress() {
  return (
    <Box>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={3} md={12}>
            <Box>
              <Box>
                <Typography>
                  <span style={styles.rating}>4.5</span> / 5
                </Typography>
                <UserRating value={4.5} />
              </Box>
              <Box sx={styles.overAllUserWhoRate}>
                <PersonOutlinedIcon />
                <Typography>144,405,054 total</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={9} md={12}>
            <Stack sx={styles.linearWrapper}>
              <Box sx={styles.linearMain}>
                <Typography sx={styles.linearRanking}>5</Typography>
                <StarBorderOutlinedIcon />
                <LinearProgress
                  variant="determinate"
                  value={89}
                  sx={styles.linear5}
                />
              </Box>
              <Box sx={styles.linearMain}>
                <Typography sx={styles.linearRanking}>4</Typography>
                <StarBorderOutlinedIcon />
                <LinearProgress
                  variant="determinate"
                  value={95}
                  sx={styles.linear4}
                />
              </Box>
              <Box sx={styles.linearMain}>
                <Typography sx={styles.linearRanking}>3</Typography>
                <StarBorderOutlinedIcon />
                <LinearProgress
                  variant="determinate"
                  value={24}
                  sx={styles.linear3}
                />
              </Box>
              <Box sx={styles.linearMain}>
                <Typography sx={styles.linearRanking}>2</Typography>
                <StarBorderOutlinedIcon />
                <LinearProgress
                  variant="determinate"
                  value={38}
                  sx={styles.linear2}
                />
              </Box>
              <Box sx={styles.linearMain}>
                <Typography sx={styles.linearRanking}>1</Typography>
                <StarBorderOutlinedIcon />
                <LinearProgress
                  variant="determinate"
                  value={3}
                  sx={styles.linear1}
                />
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
