import { Box, IconButton, Modal, Typography } from "@mui/material";
import React from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import UploadBGImage from "./worker/UploadBGImage";
import UploadProfileImage from "./worker/UploadProfileImage";
import UpdateBio from "./worker/UpdateBio";
import UpdateBackground from "./worker/UpdateBackground";
import UpdateCategories from "./worker/UpdateCategories";
import UpdateSkills from "./worker/UpdateSkills";
import UpdateSocialNetworks from "./worker/UpdateSocialNetworks";
import UpdateSocialNetwork from "./worker/UpdateSocialNetwork";

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

  return (
    <Box>
      <Modal
        open={open}
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
              {type === "Bio" && (
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
            </Box>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}

export default ProfileModalEdit;
