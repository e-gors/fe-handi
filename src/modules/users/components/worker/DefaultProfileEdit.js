import { Box, Button, IconButton, Modal, Typography } from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import CancelIcon from "@mui/icons-material/Cancel";

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

function DefaultProfileEdit(props) {
  const { content, open, handleClose, handleSubmit } = props;

  const user = useSelector((state) => state.users.user);
  const { role, uuid, profile } = user;

  const [data, setData] = React.useState({
    values: {
      profile_url: "",
    },
  });

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
              <Typography>Title</Typography>
              <IconButton onClick={handleClose}>
                <CancelIcon />
              </IconButton>
            </Box>

            <Box>
              <Typography>Main Content</Typography>
            </Box>
          </Box>

          <Box
            align="right"
            sx={{ backgroundColor: "#F4F5FB", p: 2, borderRadius: 3 }}
          >
            <Button variant="outlined" onClick={handleClose}>
              Cancel
            </Button>
            <Button
              variant="contained"
              color="primary"
              sx={{ ml: 1 }}
              onClick={() => handleSubmit(data.values)}
            >
              Save
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}

export default DefaultProfileEdit;
