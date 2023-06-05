import { Box, Modal } from "@mui/material";
import React from "react";
import ToastNotificationContainer from "../../../../../components/ToastNotificationContainer";
import ApplyStepper from "./ApplyStepper";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "95%",
  maxHeight: "90vh",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 3,
  overflow: "auto",

  "::-webkit-scrollbar": {
    display: "none",
  },
};

function EditBid(props) {
  const { open, handleClose, selectedItem, onHandleSubmit, bid } = props;

  return (
    <Box>
      <ToastNotificationContainer />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ApplyStepper
            handleCancel={handleClose}
            selectedItem={selectedItem}
            onHandleSubmit={onHandleSubmit}
            bid={bid}
            onEdit
          />
        </Box>
      </Modal>
    </Box>
  );
}

export default EditBid;
