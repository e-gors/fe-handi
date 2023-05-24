/** @format */

import { Box, Chip, Tooltip, Typography } from "@mui/material";
import React from "react";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const categoryLimit = 10;

function ProfileOverview(props) {
  const { worker } = props;
  const { profile, categories, skills } = worker;
  if (!profile) {
    return console.log(profile);
  }
  const { background } = profile ? profile[0] : null;

  return (
    <Box>
      <Box>
        <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
          <Typography>This is a headline</Typography>
        </Box>
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
                    category.children
                      .slice(categoryIndex, categoryLimit)
                      .map((child, childIndex) => (
                        <Chip
                          key={childIndex}
                          label={child.name}
                          variant="outlined"
                          color="primary"
                          sx={{ m: 0.5 }}
                        />
                      ))}
                  {category.children.length > categoryLimit && (
                    <Chip
                      key={categoryIndex}
                      label={`+${category.children.length - categoryLimit}`}
                      variant="outlined"
                      color="primary"
                      sx={{ m: 0.5 }}
                    />
                  )}
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
                    skill.children
                      .slice(skillIndex, categoryLimit)
                      .map((child, childIndex) => (
                        <Chip
                          key={childIndex}
                          label={child.name}
                          variant="outlined"
                          color="primary"
                          sx={{ m: 0.5 }}
                        />
                      ))}
                  {skill.children.length > categoryLimit && (
                    <Chip
                      key={skillIndex}
                      label={`+${skill.children.length - categoryLimit}`}
                      variant="outlined"
                      color="primary"
                      sx={{ m: 0.5 }}
                    />
                  )}
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
