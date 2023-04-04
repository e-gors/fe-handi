import * as React from "react";
import { Box, Button, Typography, Modal } from "@mui/material";
import TermsOfService from "../../contracts/pages/TermsOfService";
import PrivacyPolicy from "../../contracts/pages/PrivacyPolicy";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const style = {
  margin: "0 auto",
  overflowY: "scroll",
  bgcolor: "white",
  border: "1px solid #000",
  boxShadow: 24,
  height: "100%",
  width: { xs: "100%", md: 400 },
  p: 2,
  display: "block",
};

export default function BasicModal(props) {
  const { open, setOpen, setAgree } = props;

  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{
              background: "rgb(30, 36, 46)",
              p: 1,
              textAlign: "center",
              color: "white",
            }}
          >
            Agreement between "us" ("Handi") and "You" as "User"
          </Typography>
          <Box>
            <TermsOfService />
            <PrivacyPolicy />
          </Box>

          <Box sx={{ mb: 1 }}>
            <Box sx={{ display: "flex" }}>
              <CheckCircleIcon color="primary" />
              <Typography sx={{ fontSize: 14 }}>
                I agree with the{" "}
                <span style={{ fontWeight: "bold" }}>Terms and Conditions</span>
              </Typography>
            </Box>
            <Box sx={{ display: "flex" }}>
              <CheckCircleIcon color="primary" />
              <Typography sx={{ fontSize: 14 }}>
                I agree with the{" "}
                <span style={{ fontWeight: "bold" }}> Privacy Policy</span>
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: "flex" }}>
            <Button
              fullWidth
              variant="outlined"
              color="error"
              onClick={() => setAgree(false)}
              sx={{ mr: 1 }}
            >
              I Decline
            </Button>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={() => setAgree(true)}
            >
              I Agree
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
