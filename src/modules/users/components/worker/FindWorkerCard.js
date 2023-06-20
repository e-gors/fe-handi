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
import StarIcon from "@mui/icons-material/Star";
import ImageIcon from "@mui/icons-material/Image";
import noImage from "../../../../assets/images/no-img-trans-bg.png";
import Http from "../../../../utils/Http";
import ToastNotification from "../../../../components/ToastNotification";
import { options } from "../../../../components/options";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../../../redux/actions/userActions";
import { isAuth } from "../../../../utils/helpers";

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
    display: "flex",
    flexDirection: "row",
    overflowX: "scroll",

    "::-webkit-scrollbar": {
      display: "none",
    },
  },
  project: {
    display: "block",
    minWidth: 200,
    height: 110,
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

  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.user);
  const [loadingOnShortlist, setLoadingOnShortlist] = React.useState(false);

  const handleNavigate = (e, link) => {
    const target = e.target;
    const hasDesiredClass = target.classList.contains("MuiBox-root");
    if (hasDesiredClass) {
      window.open(link);
    }
  };

  const handleAddWorkerToList = (e, id) => {
    const target = e.target;
    const hasDesiredClass = target.classList.contains("MuiSvgIcon-root");
    if (hasDesiredClass) {
      handleAddWorkerToShortlist(id);
    }
  };

  const handleRemoveWorkerToList = (e, id) => {
    const target = e.nativeEvent.target;
    if (
      target.tagName === "path" &&
      target.getAttribute("d") ===
        "M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
    ) {
      handleRemoveWorkerToShortList(id);
    }
  };

  const handleAddWorkerToShortlist = (id) => {
    setLoadingOnShortlist(true);
    Http.post(`/new/shortlist/user/${id}`)
      .then((res) => {
        if (res.data.code === 200) {
          dispatch(updateUser(res.data.user));
          ToastNotification("success", res.data.message, options);
        } else {
          ToastNotification("error", res.data.message, options);
        }
        setLoadingOnShortlist(false);
      })
      .catch((err) => {
        setLoadingOnShortlist(false);
        ToastNotification("error", err.message, options);
      });
  };

  const handleRemoveWorkerToShortList = (id) => {
    setLoadingOnShortlist(true);
    Http.delete(`/remove/shortlist/user/${id}`)
      .then((res) => {
        if (res.data.code === 200) {
          dispatch(updateUser(res.data.user));
          ToastNotification("success", res.data.message, options);
        } else {
          ToastNotification("error", res.data.message, options);
        }
        setLoadingOnShortlist(false);
      })
      .catch((err) => {
        setLoadingOnShortlist(false);
        ToastNotification("error", err.message, options);
      });
  };

  return (
    <Box sx={styles.wrapper}>
      <ToastNotificationContainer />
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
            const isFavorite =
              isAuth() &&
              user.shortlists?.some(
                (item) => Number(item.profile_id) === worker.id
              );
            return (
              <Grid key={workerIndex} item xs={12} sm={12} md={6} lg={4}>
                <Box
                  sx={styles.cardWrapper}
                  onClick={(e) =>
                    handleNavigate(e, worker.profile[0].profile_link)
                  }
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
                      {loadingOnShortlist && <CircularProgress size={24} />}
                      {!loadingOnShortlist && !isFavorite && (
                        <BookmarkBorderIcon
                          sx={styles.bookmark}
                          variant="outlined"
                          color="primary"
                          onClick={(e) => handleAddWorkerToList(e, worker.id)}
                        />
                      )}
                      {!loadingOnShortlist && isFavorite && (
                        <BookmarkIcon
                          sx={styles.bookmark}
                          variant="contained"
                          color="primary"
                          onClick={(e) =>
                            handleRemoveWorkerToList(e, worker.id)
                          }
                        />
                      )}
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

                  {worker && worker.projects.length === 0 && (
                    <Box sx={styles.projectWrapper}>
                      <Box component="img" src={noImage} sx={styles.project} />
                      <Box component="img" src={noImage} sx={styles.project} />
                      <Box component="img" src={noImage} sx={styles.project} />
                    </Box>
                  )}
                  {worker && worker.projects.length > 0 && (
                    <Box sx={styles.projectWrapper}>
                      {worker.projects.map((project, i) => (
                        <Box
                          key={i}
                          sx={{
                            background: `url(${project.image})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            minWidth: 210,
                            height: 110,
                            mt: 2,
                            mb: 2,
                            mr: 1,
                            boxShadow: 5,
                            borderRadius: 3,
                          }}
                        />
                      ))}
                    </Box>
                  )}

                  <Box sx={styles.cardBottom}>
                    {worker.profile.map((user, i) => (
                      <Box key={i} sx={styles.cardBottomWrapper}>
                        <Typography>
                          ₱ {user.rate ? user.rate : "0"} / day
                        </Typography>
                        {user.rating && (
                          <Box sx={{ display: "flex" }}>
                            <StarIcon color="warning" />
                            <Typography>{user.rating}</Typography>
                            {/* <Typography>4.5</Typography> */}
                            {/* <Typography sx={{ ml: 1 }}>(10000000)</Typography> */}
                          </Box>
                        )}
                        {!user.rating && (
                          <Box sx={{ display: "flex" }}>
                            <Typography>No Rating</Typography>
                          </Box>
                        )}
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
