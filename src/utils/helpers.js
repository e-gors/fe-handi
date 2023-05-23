export const handleErrorResponse = (err) => {
  if (
    err &&
    err.response &&
    err.response.data &&
    err.response.data &&
    err.response.data.errors
  ) {
    const message = [];
    for (const key in err.response.data.errors) {
      message.push(err.response.data.errors[key][0]);
    }

    return message.join(" ");
  }

  return (
    (err && err.response && err.response.data && err.response.data.message) ||
    err.message
  );
};

export const isAuth = () => {
  return !!localStorage.getItem("accessToken");
};

export const formatValue = (value) => {
  if (
    value === undefined ||
    value === "" ||
    value === null ||
    value.length === 0
  ) {
    return "";
  } else {
    const floatValue = parseFloat(value.replace(/,/g, ""));
    const hasMoreThan3Digits = Math.floor(floatValue) >= 1000;

    if (isNaN(floatValue)) return ""; // Return empty string if value is not a valid number

    if (hasMoreThan3Digits) {
      const formattedValue = floatValue.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
      return formattedValue;
    }

    return floatValue.toFixed(2);
  }
};

export const CropImage = (imageSrc, crop) => {
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
};

export const FormFieldRegex = (data, type) => {
  const number = new RegExp("^09[0-9]{9}$", "i");
  //   const address = new RegExp(
  //     "^[0-9]+(?:[ -][a-zA-Z0-9]+)*(?:[ ]*(?:Apt|Unit)[ ]*[0-9]+)?,[ ]*[a-zA-Z0-9 ]+,[ ]*[a-zA-Z0-9 ]+,[ ]*[a-zA-Z ]+,[ ]*[A-Z]{2}$",
  //     "i"
  //   );
  //   const email = new RegExp("^[^s@]+@[^s@]+.[^s@]+@gmail.com$", "i");

  //   if (type === "number") {
  //     return number.test(data);
  //   } else if (type === "address") {
  //     return address.test(data);
  //   } else {
  //     return email.test(data);
  //   }

  if (type === "number") {
    return number.test(data);
  }
};

export const SocialLinkRegex = (data, type) => {
  const facebook = new RegExp(
    "^(?:https?://)?(?:www.)?facebook.com/[a-zA-Z0-9-_.]{1,30}/?$",
    "i"
  );
  const instagram = new RegExp(
    "^(?:https?://)?(?:www.)?instagram.com/[a-zA-Z0-9-_.]{1,30}/?$",
    "i"
  );
  const twitter = new RegExp(
    "^(?:https?://)?(?:www.)?twitter.com/[a-zA-Z0-9_]{1,15}(?:/w+)*$",
    "i"
  );

  if (type === "facebook" || type === "Facebook") {
    return facebook.test(data);
  } else if (type === "instagram" || type === "Instagram") {
    return instagram.test(data);
  } else {
    return twitter.test(data);
  }
};
