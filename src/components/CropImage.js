export default function CropImage(imageSrc, crop) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.src = imageSrc;
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const destWidth = crop.width * 4;
    const destHeight = crop.height * 4;
    canvas.width = destWidth;
    canvas.height = destHeight;

    image.onload = () => {
      try {
        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;
        const croppedAreaX = crop.x * scaleX;
        const croppedAreaY = crop.y * scaleY;
        const croppedAreaWidth = crop.width * scaleX;
        const croppedAreaHeight = crop.height * scaleY;
        ctx.drawImage(
          image,
          croppedAreaX,
          croppedAreaY,
          croppedAreaWidth,
          croppedAreaHeight,
          0,
          0,
          destWidth,
          destHeight
        );

        canvas.toBlob((blob) => {
          const file = new File([blob], "cropped.jpeg", { type: "image/jpeg" });
          resolve(file);
        }, "image/jpeg");
      } catch (e) {
        reject(e);
      }
    };
    image.onerror = reject;
  });
}
