import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import { useSelector } from "react-redux";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

function ProfileOverview() {
  const user = useSelector((state) => state.users.user);
  const { profile, categories, skills } = user;

  return (
    <Box>
      <Box>
        <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
          <Typography>This is a headline</Typography>
          <IconButton sx={{ ml: 1 }}>
            <EditIcon />
          </IconButton>
        </Box>
        <Box>
          <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
            <Typography>Bio</Typography>
            <IconButton sx={{ ml: 1 }}>
              <EditIcon />
            </IconButton>
          </Box>
          <Typography>I am currently this is bio.</Typography>
        </Box>

        <Box>
          <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
            <Typography>Job Categories</Typography>
            <Tooltip
              title="Select up Job Categories and select sub categories for each one. Please note that the categories bellow are used for search only and not displayed on the profile."
              placement="top"
            >
              <InfoOutlinedIcon />
            </Tooltip>
            <IconButton sx={{ ml: 1 }}>
              <EditIcon />
            </IconButton>
          </Box>
          {categories.map((category, i) => {
            console.log(category);
          })}
        </Box>
      </Box>
    </Box>
  );
}

export default ProfileOverview;
