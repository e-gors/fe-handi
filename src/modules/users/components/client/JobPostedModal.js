import { Box, Button, Modal, Typography } from "@mui/material";
import FindJobCardModal from "../worker/FindJobCardModal";
import React from "react";

function JobPostedModal(props) {
  const { jobs, setSelectedItem, selectedItem, handleNext, handleBack, user } = props;

  return (
    <Box>
      <Modal
        open={selectedItem !== null}
        onClose={() => setSelectedItem(null)}
        aria-labelledby="job-modal"
        aria-describedby="job-details"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
          }}
        >
          <FindJobCardModal
            open={selectedItem !== null}
            handleClose={() => setSelectedItem(null)}
            selectedItem={selectedItem}
            user={user && user}
          />
          <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
            <Button
              onClick={handleBack}
              disabled={jobs.findIndex((item) => item === selectedItem) === 0}
            >
              Previous
            </Button>
            <Button
              onClick={handleNext}
              disabled={
                jobs.findIndex((item) => item === selectedItem) ===
                jobs.length - 1
              }
            >
              Next
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}

export default JobPostedModal;
