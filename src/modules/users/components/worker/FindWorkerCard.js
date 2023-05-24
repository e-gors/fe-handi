/** @format */

import {
  Avatar,
  Box,
  Chip,
  CircularProgress,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ToastNotificationContainer from "../../../../components/ToastNotificationContainer";

const categoryLimit = 2;
const skillLimit = 2;

const styles = {
  wrapper: {
    mt: 5,
  },
  cardWrapper: {
    backgroundColor: "#EBEBEB",
    p: 2,
    borderRadius: 3,
    cursor: "pointer",

    "&:hover": {
      boxShadow: 5,

      ".fullname": {
        color: "blue",
      },
    },
  },
  cardTop: {
    display: "flex",
    alignItems: "center",
  },
  categoryWrapper: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
  fullname: {
    ml: 1,
  },
  fullnameText: { fontWeight: "bold" },
  categoryMainWrapper: { display: "flex", flexWrap: "wrap" },
  category: {
    m: 0.3,
    fontSize: { xs: 12, md: 14 },
    backgroundColor: "white",
    boxShadow: 1,
  },
  moreCategory: { border: "2px solid white", boxShadow: 1 },
  bookmark: {
    cursor: "pointer",
    "&:hover": { color: "blue" },
  },
  backgroundText: {
    mt: 1,
    mb: 1,
    display: "-webkit-box",
    WebkitLineClamp: 3,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
    lineHeight: 10,
  },
  skillWrapper: {
    mt: 2,
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "center",
  },
  skill: {
    m: 0.3,
    fontSize: { xs: 12, md: 14 },
    border: "2px solid white",
    boxShadow: 1,
  },
  moreSkill: { border: "2px solid white", boxShadow: 1 },
  projectWrapper: {
    mt: 1,
    display: "inlineFlex",
    overflowX: "scroll",

    "::-webkit-scrollbar": {
      display: "none",
    },
  },
  project: {
    width: 200,
    height: 150,
    backgroundColor: "#BEBEBE",
    m: 1,
  },
  cardBottom: { mt: 1 },
  cardBottomWrapper: {
    display: "flex",
    justifyContent: "space-between",
    p: 2,
  },
};

function FindWorkerCard(props) {
  const { workers, loading } = props;

  const handleNavigate = (link) => {
    window.open(link);
  };

  return (
    <Box sx={styles.wrapper}>
      {loading && (
        <Box align="center">
          <CircularProgress size={40} color="primary" />
        </Box>
      )}

      <Grid container spacing={1}>
        {!loading &&
          workers &&
          workers.map((worker, workerIndex) => {
            const limitedCategories = worker.categoryChildren.slice(
              0,
              categoryLimit
            );
            const limitedSkills = worker.skillChildren.slice(0, skillLimit);
            return (
              <Grid key={workerIndex} item xs={12} sm={12} md={6} lg={4}>
                <Box
                  sx={styles.cardWrapper}
                  onClick={() => handleNavigate(worker.profile[0].profile_link)}
                >
                  <Box sx={styles.cardTop}>
                    <Avatar
                      alt={worker.fullname}
                      src={worker.profile && worker.profile[0].profile_url}
                    />
                    <Box sx={styles.categoryWrapper}>
                      <Box sx={styles.fullname}>
                        <Typography
                          sx={styles.fullnameText}
                          className="fullname"
                        >
                          {worker.fullname}
                        </Typography>

                        <Box sx={styles.categoryMainWrapper}>
                          {limitedCategories.map((category, categoryIndex) => {
                            return (
                              <Chip
                                size="small"
                                key={categoryIndex}
                                label={category.name}
                                variant="contained"
                                sx={styles.category}
                              />
                            );
                          })}
                          {worker.categoryChildren.length > categoryLimit && (
                            <Chip
                              size="small"
                              key={`${workerIndex}-more`}
                              label={`+${
                                worker.categoryChildren.length - categoryLimit
                              }`}
                              variant="outlined"
                              sx={styles.moreCategory}
                            />
                          )}
                        </Box>
                      </Box>
                      <BookmarkBorderIcon sx={styles.bookmark} />
                    </Box>
                  </Box>

                  <Box sx={styles.backgroundText} align="justify">
                    <Typography>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </Typography>

                    {/* {worker.profile.map((user, i) => (
                    <Typography>
                      {user.background && user.background}
                    </Typography>
                  ))} */}
                  </Box>
                  <Stack sx={styles.skillWrapper}>
                    {limitedSkills.map((skill, skillIndex) => (
                      <Chip
                        size="small"
                        key={skillIndex}
                        label={skill.name}
                        variant="outlined"
                        sx={styles.skill}
                      />
                    ))}
                    {worker.skills.length > skillLimit && (
                      <Chip
                        size="small"
                        key={`${workerIndex}-more`}
                        label={`+${worker.skillChildren.length - skillLimit}`}
                        variant="outlined"
                        sx={styles.moreSkill}
                      />
                    )}
                  </Stack>

                  <Box sx={styles.projectWrapper}>
                    <Box sx={styles.project}></Box>
                    <Box sx={styles.project}></Box>
                    <Box sx={styles.project}></Box>
                  </Box>

                  <Box sx={styles.cardBottom}>
                    {worker.profile.map((user, i) => (
                      <Box key={i} sx={styles.cardBottomWrapper}>
                        <Typography>
                          {user.daily_rate ? user.daily_rate : "No rates"}
                        </Typography>
                        <Typography>
                          {user.rating ? user.rating : "Star 5.0 (5)"}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Grid>
            );
          })}
      </Grid>

      {!loading && workers && workers.length === 0 && (
        <Box align="center">
          <Typography>No workers found!</Typography>
        </Box>
      )}
    </Box>
  );
}

export default FindWorkerCard;
