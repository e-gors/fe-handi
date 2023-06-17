/** @format */

import { Box, Chip, Tooltip, Typography } from "@mui/material";
import React from "react";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import dayjs from "dayjs";

const categoryLimit = 10;

function ProfileOverview(props) {
  const { worker } = props;
  const { profile, categories, skills, experience } = worker ? worker : [];

  if (!profile) {
    return;
  }

  const { background, about } = profile ? profile[0] : [];

  return (
    <Box>
      <Box>
        <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
          <Typography>Headline</Typography>
        </Box>
        <Typography>{about}</Typography>
        <Box>
          <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
            <Typography>Bio</Typography>
          </Box>
          {background && (
            <div
              dangerouslySetInnerHTML={{
                __html: background && background,
              }}
            ></div>
          )}
        </Box>
        {experience && (
          <Box>
            <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
              <Typography>Work Experience</Typography>
            </Box>
            <Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography sx={{ fontWeight: "bold", fontSize: 14 }}>
                  {experience.position}
                </Typography>
                <Box sx={{ display: "flex" }}>
                  <Typography sx={{ fontWeight: "bold", fontSize: 11 }}>
                    {dayjs(experience.start_date).format("MMMM DD, YYYY")}
                  </Typography>
                  <Typography sx={{ ml: 1, mr: 1, fontWeight: "bold" }}>
                    -
                  </Typography>
                  <Typography sx={{ fontWeight: "bold", fontSize: 11 }}>
                    {dayjs(experience.end_date).format("MMMM DD, YYYY")}
                  </Typography>
                </Box>
              </Box>
              <Typography sx={{ mt: 1 }}>{experience.notes}</Typography>
            </Box>
          </Box>
        )}

        <Box>
          <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
            <Typography>Job Categories</Typography>
            <Tooltip
              title="Select Job Categories and sub categories for each one. Please note that the categories bellow are used for search only and not displayed on the profile."
              placement="top"
            >
              <InfoOutlinedIcon />
            </Tooltip>
          </Box>
          {categories &&
            categories.map((category, categoryIndex) => {
              return (
                <Box key={categoryIndex}>
                  <Typography>{category.name}</Typography>
                  {category.children &&
                    category.children.map((child, childIndex) => (
                      <Chip
                        key={childIndex}
                        label={child.name}
                        variant="outlined"
                        color="primary"
                        sx={{ m: 0.5 }}
                      />
                    ))}
                  {category.children.length <= 0 && (
                    <Chip
                      key={categoryIndex}
                      label={"No Items"}
                      variant="outlined"
                      color="primary"
                      sx={{ m: 0.5 }}
                    />
                  )}
                </Box>
              );
            })}
        </Box>

        <Box>
          <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
            <Typography>Skills</Typography>
            <Tooltip
              title="This skills are selected by user and this will tell others about the user."
              placement="top"
            >
              <InfoOutlinedIcon />
            </Tooltip>
          </Box>
          {skills &&
            skills.map((skill, skillIndex) => {
              return (
                <Box key={skillIndex}>
                  <Typography>{skill.name}</Typography>
                  {skill.children &&
                    skill.children.map((child, childIndex) => (
                      <Chip
                        key={childIndex}
                        label={child.name}
                        variant="outlined"
                        color="primary"
                        sx={{ m: 0.5 }}
                      />
                    ))}
                  {skill.children.length <= 0 && (
                    <Chip
                      key={skillIndex}
                      label={"No Items"}
                      variant="outlined"
                      color="primary"
                      sx={{ m: 0.5 }}
                    />
                  )}
                </Box>
              );
            })}
        </Box>
      </Box>
    </Box>
  );
}

export default ProfileOverview;
