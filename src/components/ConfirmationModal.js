import {
  Button,
  CircularProgress,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormHelperText,
  Typography,
} from "@mui/material";
import React from "react";
import FormDialog from "./FormDialog";

function ConfirmationModal(props) {
  const { open, onClose, message, onConfirm, title, loading } = props;
  return (
    <FormDialog open={open}>
      <DialogTitle>{title ? title : "Confirm"}</DialogTitle>
      <DialogContent>
        <Typography>{message}</Typography>
        <FormHelperText sx={{ mt: 1, mb: 1, color: "red" }}>
          Note: This process is irreversible if you proceed.
        </FormHelperText>
      </DialogContent>
      <DialogActions sx={{ backgroundColor: "#F2F2F2" }}>
        <Button
          disabled={loading}
          variant="outlined"
          color="primary"
          onClick={onClose}
        >
          No, please wait
        </Button>
        <Button
          disabled={loading}
          variant="contained"
          onClick={onConfirm}
          color="error"
          sx={{ background: "#E22850" }}
        >
          {loading ? <CircularProgress size={24} /> : "Yes, please"}
        </Button>
      </DialogActions>
    </FormDialog>
  );
}

export default ConfirmationModal;
