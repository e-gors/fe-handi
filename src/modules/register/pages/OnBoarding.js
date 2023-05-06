import { Box, Button, Modal, Typography } from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "90%", sm: 400, md: 400 },
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 3,
};

function OnBoarding() {
  const history = useHistory();
  const user = useSelector((state) => state.users.user);
  const { role, uuid } = user;
  return (
    <Box
      sx={{
        mt: 10,
        p: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "51vh",
      }}
    >
      <Modal
        open={true}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box>
            <Typography sx={{ fontWeight: "bold", fontSize: 18, mb: 1 }}>
              When you complete all required fields in your profile:
            </Typography>
            <Typography component="li" sx={{ mt: 1 }}>
              Clients will see you in their search results if your profile is
              public.
            </Typography>
            <Typography component="li" sx={{ mt: 1 }}>
              You can navigate to our system freely.
            </Typography>
            <Typography component="li" sx={{ mt: 1 }}>
              You will able to apply for posted Jobs.{" "}
            </Typography>

            <Button
              variant="contained"
              color="primary"
              onClick={() => history.push(`/overview/${role}/${uuid}`)}
              sx={{ mt: 5 }}
            >
              Complete Profile
            </Button>
          </Box>

          <Typography
            align="right"
            sx={{
              color: "blue",
              cursor: "pointer",
              mt: 2,
            }}
            onClick={() => history.push("/dashboard")}
          >
            skip
          </Typography>
        </Box>
      </Modal>
    </Box>
  );
}

export default OnBoarding;
