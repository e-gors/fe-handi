import { Box, Chip, IconButton, Tooltip, Typography } from "@mui/material";
import React from "react";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { useSelector } from "react-redux";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ProfileModalEdit from "../ProfileModalEdit";
import parse from "html-react-parser";

const categoryLimit = 10;

function ProfileOverview() {
  const user = useSelector((state) => state.users.user);
  const { profile, categories, skills } = user;
  const { background } = profile[0];

  const [open, setOpen] = React.useState(false);
  const [type, setType] = React.useState("");

  const handleOpen = (type) => {
    setOpen(true);
    setType(type);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <ProfileModalEdit type={type} open={open} handleClose={handleClose} />
      <Box>
        <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
          <Typography>This is a headline</Typography>
          <IconButton sx={{ ml: 1 }} onClick={() => handleOpen("Background")}>
            <EditOutlinedIcon />
          </IconButton>
        </Box>
        <Box>
          <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
            <Typography>Bio</Typography>
            <IconButton sx={{ ml: 1 }} onClick={() => handleOpen("Bio")}>
              <EditOutlinedIcon />
            </IconButton>
          </Box>
          <Typography
            sx={{
              textIndent: 50,
              textAlign: "justify",
              fontSize: { xs: 14, md: 16 },
            }}
          >
            {background && parse(background)}
          </Typography>
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
            <IconButton onClick={() => handleOpen("Categories")}>
              <EditOutlinedIcon />
            </IconButton>
          </Box>
          {categories.map((category, categoryIndex) => {
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
            <IconButton onClick={() => handleOpen("Skills")}>
              <EditOutlinedIcon />
            </IconButton>
          </Box>
          {skills.map((skill, skillIndex) => {
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
