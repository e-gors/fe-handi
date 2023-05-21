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

const styles = {
  wrapper: {
    mt: 10,
    p: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "51vh",
  },
  WhenYou: { fontWeight: "bold", fontSize: 18, mb: 1 },
  lists: { mt: 1 },
  completeProfile: { mt: 5 },
  skip: {
    color: "blue",
    cursor: "pointer",
    mt: 2,
  },
};

function OnBoarding() {
  const history = useHistory();
  const user = useSelector((state) => state.users.user);
  const { role, uuid } = user;
  return (
    <Box sx={styles.wrapper}>
      <Modal
        open={true}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box>
            <Typography sx={styles.WhenYou}>
              When you complete all required fields in your profile:
            </Typography>
            <Typography component="li" sx={styles.lists}>
              Clients will see you in their search results if your profile is
              public.
            </Typography>
            <Typography component="li" sx={styles.lists}>
              You can navigate to our system freely.
            </Typography>
            <Typography component="li" sx={styles.lists}>
              You will able to apply for posted Jobs.{" "}
            </Typography>

            <Button
              variant="contained"
              color="primary"
              onClick={() => history.push("/edit/profile/worker")}
              sx={styles.completeProfile}
            >
              Complete Profile
            </Button>
          </Box>

          <Typography
            align="right"
            sx={styles.skip}
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
