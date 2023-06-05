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
import FindJobCardModal from "./FindJobCardModal";
import { useSelector } from "react-redux";

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

      ".position": {
        color: "blue",
      },
    },
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

const skillLimit = 2;

const newPosts = (date) => {
  const oneWeekAgo = new Date();
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
  const isOlderThanOneWeek = date < oneWeekAgo;

  if (isOlderThanOneWeek) {
    return null;
  } else {
    return date;
  }
};
function FindJobCard(props) {
  const { jobs, loading, handleForceUpdate } = props;

  const user = useSelector((state) => state.users.user);

  const [open, setOpen] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState({});

  const handleOpen = (value) => {
    setSelectedItem(value);
    setOpen(!open);
  };

  return (
    <Box sx={styles.wrapper}>
      {loading && (
        <Box align="center">
          <CircularProgress size={40} />
        </Box>
      )}
      <FindJobCardModal
        open={open}
        handleClose={handleOpen}
        selectedItem={selectedItem}
        user={user && user}
        handleForceUpdate={handleForceUpdate}
      />
      <Grid container spacing={1}>
        {!loading &&
          jobs &&
          jobs.map((job, postIndex) => {
            const limitedSkills = job.skills.slice(0, skillLimit);
            return (
              <Grid key={postIndex} item xs={12} sm={12} md={6}>
                <Box sx={styles.cardWrapper} onClick={() => handleOpen(job)}>
                  <Box sx={{ display: "flex" }}>
                    <Typography
                      sx={styles.jobCategoryText}
                      className="position"
                    >
                      {job.position}
                    </Typography>
                    <Typography sx={{ ml: 1, color: "green" }}>•</Typography>
                    <Typography
                      sx={{ ml: 1, color: "green", fontSize: 12, mt: 0.5 }}
                    >
                      Posted {newPosts(job.created_at)}
                    </Typography>
                  </Box>
                  <Box sx={styles.cardTop}>
                    <Avatar
                      alt={job.client.fullname}
                      src={
                        job.client.profile &&
                        job.client.profile[0]["profile_url"]
                      }
                    />
                    <Box sx={styles.categoryWrapper}>
                      <Box sx={styles.fullname}>
                        <Typography sx={styles.fullnameText}>
                          {job.client.fullname}
                        </Typography>

                        <Box sx={styles.categoryMainWrapper}>
                          <Chip
                            size="small"
                            key={postIndex}
                            label={job.category}
                            variant="contained"
                            sx={styles.category}
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>

                  <div
                    style={styles.backgroundText}
                    dangerouslySetInnerHTML={{ __html: job.description }}
                  />
                  <Stack sx={styles.skillWrapper}>
                    {limitedSkills &&
                      limitedSkills.map((skill, skillIndex) => (
                        <Chip
                          size="small"
                          key={skillIndex}
                          label={skill}
                          variant="contained"
                          sx={styles.skill}
                        />
                      ))}
                    {job.skills.length > skillLimit && (
                      <Chip
                        size="small"
                        key={`${postIndex}-more`}
                        label={`+${job.skills.length - skillLimit}`}
                        variant="contained"
                        sx={styles.moreSkill}
                      />
                    )}
                  </Stack>

                  <Box sx={styles.cardBottom}>
                    <Box sx={styles.cardBottomWrapper}>
                      <Typography>
                        ₱ {job.rate ? `${job.rate} / day` : job.budget}
                      </Typography>
                      <Typography>{job.job_type}</Typography>
                      {job.job_type === "Daily Rate" && (
                        <Typography>{job.days} days</Typography>
                      )}
                    </Box>
                  </Box>
                </Box>
              </Grid>
            );
          })}
      </Grid>

      {!loading && jobs && jobs.length === 0 && (
        <Box align="center">
          <Typography>No Jobs found!</Typography>
        </Box>
      )}
    </Box>
  );
}

export default FindJobCard;
