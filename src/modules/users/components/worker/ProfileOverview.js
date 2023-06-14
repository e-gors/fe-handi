import { Box, Chip, IconButton, Tooltip, Typography } from "@mui/material";
import React from "react";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ProfileModalEdit from "../ProfileModalEdit";
import UpdateTxtDefault from "../UpdateTxtDefault";
import FeedIcon from "@mui/icons-material/Feed";
import NotesIcon from "@mui/icons-material/Notes";

const categoryLimit = 10;

function ProfileOverview(props) {
  const { user } = props;

  const { profile, categories, skills } = user;
  const { background, about } = profile[0];

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
          <Typography>Headline</Typography>
          {about && (
            <IconButton sx={{ ml: 1 }} onClick={() => handleOpen("Headline")}>
              <EditOutlinedIcon />
            </IconButton>
          )}
        </Box>
        {!about && (
          <UpdateTxtDefault
            icon={<FeedIcon color="primary" />}
            title="Headline"
            content="What's your job title, job description, personal motto, or get creative. Your call. Just know this is your most visible self description."
            handleSetType={(type) => handleOpen(type)}
          />
        )}
        {about && <Typography>{about}</Typography>}
        <Box>
          <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
            <Typography>Background</Typography>
            <IconButton sx={{ ml: 1 }} onClick={() => handleOpen("Background")}>
              <EditOutlinedIcon />
            </IconButton>
          </Box>
          {!background && (
            <UpdateTxtDefault
              icon={<NotesIcon color="primary" />}
              title="Background"
              content="Make a great first impression by giving people a snapshot of who you are. Keep it simple and punchy for maximum effect!."
              handleSetType={(type) => handleOpen(type)}
            />
          )}
          {background && (
            <div
              dangerouslySetInnerHTML={{ __html: background && background }}
            ></div>
          )}
        </Box>
        <Box>
          <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
            <Typography>Work Experience</Typography>
            <IconButton
              sx={{ ml: 1 }}
              onClick={() => handleOpen("Work Experience")}
            >
              <EditOutlinedIcon />
            </IconButton>
          </Box>
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
            <IconButton onClick={() => handleOpen("Skills")}>
              <EditOutlinedIcon />
            </IconButton>
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
