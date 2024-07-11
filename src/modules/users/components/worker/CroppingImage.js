import React, { useState, useRef } from "react";
import Cropper from "cropperjs";
import "cropperjs/dist/cropper.css";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";

function CroppingImage() {
  const [open, setOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const cropperRef = useRef(null);

  const handleUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setImageSrc(reader.result);
      setOpen(true);
    };
    reader.readAsDataURL(file);
  };

  const handleClose = () => {
    setOpen(false);
    setImageSrc(null);
    setCroppedImage(null);
  };

  const handleCrop = () => {
    const cropper = cropperRef.current;
    if (typeof cropper.getCroppedCanvas() === "undefined") {
      return;
    }
    setCroppedImage(
      cropper.getCroppedCanvas({ width: 300, height: 300 }).toDataURL()
    );
    handleClose();
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleUpload} />
      {croppedImage ? (
        <img
          src={croppedImage}
          alt="Cropped"
          style={{ width: "100%", height: "300px", objectFit: "cover" }}
        />
      ) : (
        <div
          style={{
            width: "100%",
            height: "300px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p>Select an image to upload</p>
        </div>
      )}
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle>Crop Image</DialogTitle>
        <DialogContent>
          <Cropper
            ref={cropperRef}
            src={imageSrc}
            style={{ maxHeight: "70vh", maxWidth: "100%" }}
            initialAspectRatio={1}
            viewMode={1}
            guides={false}
            autoCropArea={1}
            responsive={true}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleCrop} color="primary">
            Crop
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default CroppingImage;
