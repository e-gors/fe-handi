import {
  Avatar,
  Badge,
  Box,
  Button,
  Chip,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import AddIcon from "@mui/icons-material/Add";
import MenuBar from "../../../layouts/MenuBar";
import UserRating from "../../../components/UserRating";
import { styles } from "../../../assets/styles/styles";
import { useSelector } from "react-redux";

const skills = ["UX Design", "Product Design", "Webflow", "Figma", "Canva"];

function Profile() {
  const user = useSelector((state) => state.users.user);
  const { fullname, profile } = user;

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={styles.wrapper}>
      {open && (
        <MenuBar
          open={open}
          anchorEl={anchorEl}
          handleClose={(e) => handleClose()}
          menuItems={["Rate", "Message", "Report"]}
        />
      )}
      <Box sx={styles.contentWrapper}>
        <Box sx={styles.bgProfile}></Box>
        <Box>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              position: "relative",
              top: { xs: -30, md: -40 },
              p: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <Avatar alt="User" src={profile.profile_url} sx={styles.avatar} />
              <Box sx={{ ml: 2 }}>
                <Typography
                  sx={{ fontSize: { xs: 18, md: 24 }, fontWeight: "bold" }}
                >
                  {fullname}
                  <Badge
                    overlap="circular"
                    size="lg"
                    badgeContent=" "
                    variant="dot"
                    color="primary"
                  />
                </Typography>
                <Typography sx={{ maxWidth: 400 }}>
                  {profile.background}
                </Typography>
                <UserRating />
              </Box>
            </Box>
            <Box>
              <IconButton
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleOpen}
              >
                <MoreHorizIcon
                  sx={{
                    border: "1px solid gray",
                    p: "2px 8px",
                    borderRadius: 1,
                  }}
                />
              </IconButton>
              <Button variant="outlined" sx={{ m: "0 10px" }} size="small">
                Hire me
              </Button>
              <Button startIcon={<AddIcon />} variant="contained" size="small">
                Follow
              </Button>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  width: { xs: "100%", md: "60%" },
                  mt: 5,
                  p: 2,
                  backgroundColor: "#E6E8EC",
                  borderRadius: 2,
                }}
              >
                <Typography sx={{ fontSize: 18, fontWeight: "600" }}>
                  Experience
                </Typography>
                <Typography sx={{ textIndent: 50 }}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </Typography>
                <Divider sx={{ m: 2 }} />
                <Typography sx={{ fontSize: 18, fontWeight: "600" }}>
                  About me
                </Typography>
                <Typography sx={{ textIndent: 50 }}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </Typography>
              </Box>

              <Box
                sx={{
                  width: { xs: "100%", md: "30%" },
                  mt: 5,
                  p: 2,
                  backgroundColor: "#E6E8EC",
                  borderRadius: 2,
                }}
              >
                <Typography sx={{ mt: 2, fontWeight: "600" }}>
                  Skills
                </Typography>
                {skills &&
                  skills.map((skill, i) => (
                    <Chip
                      color="primary"
                      onClick={function () {}}
                      variant="soft"
                      label={skill}
                      sx={{ m: 0.5 }}
                      key={i}
                    />
                  ))}
                <Typography sx={{ mt: 2, fontWeight: "600" }}>
                  Location
                </Typography>
                <Typography>Hilongos, Leyte</Typography>

                <Typography sx={{ mt: 2, fontWeight: "600" }}>Email</Typography>
                <Typography>egoronweb@gmail.com</Typography>

                <Box sx={{ flexWrap: "nowrap" }}>
                  <Button
                    size="small"
                    variant="contained"
                    sx={{ backgroundColor: "white", color: "black", mr: 2 }}
                  >
                    Add to list
                  </Button>
                  <Button
                    size="small"
                    variant="contained"
                    sx={{ backgroundColor: "black", color: "white" }}
                  >
                    Message
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Profile;
