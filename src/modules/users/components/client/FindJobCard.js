import { Avatar, Box, Chip, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

const categoryLimit = 3;
const skillLimit = 3;

const styles = {
  wrapper: {
    mt: 5,
  },
  cardWrapper: {
    backgroundColor: "#EBEBEB",
    p: 2,
    borderRadius: 3,
  },
  jobCategoryText: {
    fontWeight: "bold",
    fontSize: { xs: 14, md: 16 },
    mb: 1,
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
  cardBottom: { mt: 1 },
  cardBottomWrapper: {
    display: "flex",
    justifyContent: "space-between",
    p: 2,
  },
};

function FindJobCard(props) {
  const { workers } = props;

  return (
    <Box sx={styles.wrapper}>
      <Grid container spacing={1}>
        {workers.map((worker, workerIndex) => {
          const limitedCategories = worker.categoryChildren.slice(
            0,
            categoryLimit
          );
          const limitedSkills = worker.skillChildren.slice(0, skillLimit);
          return (
            <Grid key={workerIndex} item xs={12} sm={12} md={6}>
              <Box sx={styles.cardWrapper}>
                <Typography sx={styles.jobCategoryText}>
                  Job Category
                </Typography>
                <Box sx={styles.cardTop}>
                  <Avatar
                    alt={worker.fullname}
                    src={worker.profile && worker.profile[0]["profile_url"]}
                  />
                  <Box sx={styles.categoryWrapper}>
                    <Box sx={styles.fullname}>
                      <Typography sx={styles.fullnameText}>
                        {worker.fullname}
                      </Typography>

                      <Box sx={styles.categoryMainWrapper}>
                        {limitedCategories.map((category, categoryIndex) => {
                          return (
                            <Chip
                              size="medium"
                              key={categoryIndex}
                              label={category.name}
                              variant="contained"
                              sx={styles.category}
                            />
                          );
                        })}
                        {worker.categoryChildren.length > categoryLimit && (
                          <Chip
                            size="medium"
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
                      size="medium"
                      key={skillIndex}
                      label={skill.name}
                      variant="outlined"
                      sx={styles.skill}
                    />
                  ))}
                  {worker.skills.length > skillLimit && (
                    <Chip
                      size="medium"
                      key={`${workerIndex}-more`}
                      label={`+${worker.skillChildren.length - skillLimit}`}
                      variant="outlined"
                      sx={styles.moreSkill}
                    />
                  )}
                </Stack>

                <Box sx={styles.cardBottom}>
                  {worker.profile.map((user, i) => (
                    <Box key={i} sx={styles.cardBottomWrapper}>
                      <Typography>
                        {user.daily_rate
                          ? user.daily_rate
                          : "$1 - $3 / Daily rate"}
                      </Typography>
                      <Typography>
                        {user.rating ? user.rating : "2 weeks"}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

export default FindJobCard;
