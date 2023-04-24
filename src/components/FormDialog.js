import React, { memo } from "react";
import Slide from "@mui/material/Slide";
import { Dialog, DialogTitle, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function FormDialog(props) {
  const { open, onClose, children, title, ...rest } = props;

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      fullWidth
      maxWidth="sm"
      {...rest}
    >
      {title && (
        <DialogTitle
          component="div"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h6">{title}</Typography>
          <IconButton edge="end" size="small" color="error" onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
      )}
      {children}
    </Dialog>
  );
}

export default memo(FormDialog);
