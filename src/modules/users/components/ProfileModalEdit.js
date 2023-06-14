import { Box, IconButton, Modal, Typography } from "@mui/material";
import React from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import UploadBGImage from "../components/UploadBGImage";
import UploadProfileImage from "../components/UploadProfileImage";
import UpdateBio from "../components/UpdateBio";
import UpdateBackground from "../components/UpdateBackground";
import UpdateCategories from "../components/UpdateCategories";
import UpdateSkills from "../components/UpdateSkills";
import UpdateSocialNetworks from "../components/UpdateSocialNetworks";
import UpdateSocialNetwork from "../components/UpdateSocialNetwork";
import UpdateFullname from "./UpdateFullname";
import { useSelector } from "react-redux";
import UpdateAddress from "./UpdateAddress";
import UpdateWorkExperience from "./worker/UpdateWorkExperience";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "90%", md: 800 },
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 3,
};

function ProfileModalEdit(props) {
  const { type, open, handleClose } = props;

  const user = useSelector((state) => state.users.user);
  const { profile, experience } = user && user;
  const { first_name, last_name, address } = profile && profile[0];

  const full_name = {
    first_name,
    last_name,
  };

  return (
    <Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={{ p: 2 }}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography
                sx={{ fontSize: { xs: 20, md: 24 }, fontWeight: "bold", mb: 5 }}
              >
                {type}
              </Typography>
              <IconButton onClick={handleClose}>
                <CancelIcon />
              </IconButton>
            </Box>

            <Box>
              {type === "Background Image" && (
                <UploadBGImage
                  handleClose={handleClose}
                  onConfirm={handleClose}
                />
              )}
              {type === "Profile Image" && (
                <UploadProfileImage
                  handleClose={handleClose}
                  onConfirm={handleClose}
                />
              )}
              {type === "Social Networks" && (
                <UpdateSocialNetworks
                  handleClose={handleClose}
                  onConfirm={handleClose}
                />
              )}
              {(type === "Facebook" ||
                type === "Twitter" ||
                type === "Instagram") && (
                <UpdateSocialNetwork
                  type={type}
                  handleClose={handleClose}
                  onConfirm={handleClose}
                />
              )}
              {type === "Background" && (
                <UpdateBackground
                  handleClose={handleClose}
                  onConfirm={handleClose}
                />
              )}
              {type === "Headline" && (
                <UpdateBio handleClose={handleClose} onConfirm={handleClose} />
              )}
              {type === "Categories" && (
                <UpdateCategories
                  handleClose={handleClose}
                  onConfirm={handleClose}
                />
              )}
              {type === "Skills" && (
                <UpdateSkills
                  handleClose={handleClose}
                  onConfirm={handleClose}
                />
              )}
              {type === "Fullname" && (
                <UpdateFullname
                  handleClose={handleClose}
                  onConfirm={handleClose}
                  full_name={full_name}
                />
              )}
              {type === "Address" && (
                <UpdateAddress
                  handleClose={handleClose}
                  onConfirm={handleClose}
                  adds={address}
                />
              )}
              {type === "Address" && (
                <UpdateWorkExperience
                  handleClose={handleClose}
                  onConfirm={handleClose}
                  expers={experience}
                />
              )}
            </Box>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}

export default ProfileModalEdit;
