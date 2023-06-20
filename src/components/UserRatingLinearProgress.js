import React from "react";
import { Box, Grid, LinearProgress, Stack, Typography } from "@mui/material";
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

const UserRatingLinearProgress = (props) => {
  const { ratings } = props;

  const [ratingsData, setRatingsData] = React.useState([
    {
      value: 5,
      count: 0,
      style: styles.linear5,
    },
    {
      value: 4,
      count: 0,
      style: styles.linear4,
    },
    {
      value: 3,
      count: 0,
      style: styles.linear3,
    },
    {
      value: 2,
      count: 0,
      style: styles.linear2,
    },
    {
      value: 1,
      count: 0,
      style: styles.linear1,
    },
  ]);

  React.useEffect(() => {
    if (ratings && ratings.length > 0) {
      const updatedRatingsData = ratingsData.map((ratingData) => {
        const count = ratings.filter(
          (rating) => rating.rating === ratingData.value
        ).length;
        return { ...ratingData, count };
      });
      setRatingsData(updatedRatingsData);
    }
  }, [ratings]);

  // Total reviews
  const totalRatings = ratings?.length;

  // Calculate the average rating
  const averageRating =
    totalRatings > 0
      ? ratings.reduce((sum, rating) => sum + rating.rating, 0) / totalRatings
      : 0;

  return (
    <Box>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={3} md={12}>
            <Box>
              <Box>
                <Typography>
                  <span style={styles.rating}>{averageRating.toFixed(1)}</span>{" "}
                  / 5
                </Typography>
                <UserRating
                  value={parseInt(averageRating.toFixed(1))}
                  precision={0.5}
                />
              </Box>
              <Box sx={styles.overAllUserWhoRate}>
                <PersonOutlinedIcon />
                <Typography>{ratings?.length} total</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={9} md={12}>
            <Stack sx={styles.linearWrapper}>
              {ratingsData &&
                ratingsData.map((rating) => {
                  const value =
                    rating.count > 0 ? (rating.count / totalRatings) * 100 : 0;
                  return (
                    <Box key={rating.value} sx={styles.linearMain}>
                      <Typography sx={styles.linearRanking}>
                        {rating.value}
                      </Typography>
                      <StarBorderOutlinedIcon />
                      <LinearProgress
                        variant="determinate"
                        value={value}
                        sx={rating.style}
                      >
                        <Typography
                          level="body3"
                          fontWeight="xl"
                          textColor="common.white"
                          sx={{ mixBlendMode: "difference" }}
                        >
                          {rating.count}
                        </Typography>
                      </LinearProgress>
                    </Box>
                  );
                })}
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default UserRatingLinearProgress;
