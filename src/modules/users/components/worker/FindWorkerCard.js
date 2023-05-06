import { Avatar, Box, Chip, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

const categoryLimit = 2;
const skillLimit = 3;

function FindWorkerCard(props) {
  const { workers } = props;

  return (
    <Box
      sx={{
        mt: 5,
      }}
    >
      <Grid container spacing={2}>
        {workers.map((worker, workerIndex) => {
          const limitedCategories = worker.categoryChildren.slice(
            0,
            categoryLimit
          );
          const limitedSkills = worker.skillChildren.slice(0, skillLimit);
          return (
            <Grid key={workerIndex} item xs={12} sm={12} md={6} lg={4}>
              <Box
                sx={{
                  backgroundColor: "#EBEBEB",
                  p: 2,
                  mt: 2,
                  borderRadius: 3,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Avatar
                    alt={worker.fullname}
                    src={worker.profile && worker.profile[0]["profile_url"]}
                  />
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box
                      sx={{
                        ml: 1,
                      }}
                    >
                      <Typography sx={{ fontWeight: "bold" }}>
                        {worker.fullname}
                      </Typography>

                      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                        {limitedCategories.map((category, categoryIndex) => {
                          return (
                            <Chip
                              size="medium"
                              key={categoryIndex}
                              label={category.name}
                              variant="contained"
                              sx={{
                                m: 0.3,
                                fontSize: { xs: 12, md: 14 },
                                backgroundColor: "white",
                                boxShadow: 1,
                              }}
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
                            sx={{ border: "2px solid white", boxShadow: 1 }}
                          />
                        )}
                      </Box>
                    </Box>
                    <BookmarkBorderIcon
                      sx={{
                        cursor: "pointer",
                        "&:hover": { color: "blue" },
                      }}
                    />
                  </Box>
                </Box>

                <Box
                  sx={{
                    mt: 2,
                    mb: 2,
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    lineHeight: 10,
                  }}
                  align="justify"
                >
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
                <Stack
                  sx={{
                    mt: 2,
                    display: "flex",
                    flexWrap: "wrap",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  {limitedSkills.map((skill, skillIndex) => (
                    <Chip
                      size="medium"
                      key={skillIndex}
                      label={skill.name}
                      variant="outlined"
                      sx={{
                        m: 0.3,
                        fontSize: { xs: 12, md: 14 },
                        border: "2px solid white",
                        boxShadow: 1,
                      }}
                    />
                  ))}
                  {worker.skills.length > skillLimit && (
                    <Chip
                      size="medium"
                      key={`${workerIndex}-more`}
                      label={`+${worker.skillChildren.length - skillLimit}`}
                      variant="outlined"
                      sx={{ border: "2px solid white", boxShadow: 1 }}
                    />
                  )}
                </Stack>

                <Box
                  sx={{
                    mt: 2,
                    display: "inline-block",
                    overflowX: "scroll",

                    "::-webkit-scrollbar": {
                      display: "none",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 200,
                      height: 200,
                      backgroundColor: "#BEBEBE",
                      m: 1,
                    }}
                  ></Box>
                  <Box
                    sx={{
                      width: 200,
                      height: 200,
                      backgroundColor: "#BEBEBE",
                      m: 1,
                    }}
                  ></Box>
                  <Box
                    sx={{
                      width: 200,
                      height: 200,
                      backgroundColor: "#BEBEBE",
                      m: 1,
                    }}
                  ></Box>
                </Box>

                <Box sx={{ mt: 1 }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      p: 2,
                    }}
                  >
                    <Typography>1 - 1500 / h</Typography>
                    <Typography>Star 5.0 (5)</Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

export default FindWorkerCard;
