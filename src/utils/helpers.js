import ReeValidate from "ree-validate-18";

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

export const Validator = (fields) => {
  const validator = new ReeValidate(fields);

  // const dictionary = {
  //   en: {
  //     messages: {
  //       required: () => "This field is required!",
  //       number: () => "This must be a number!",
  //     },
  //   },
  // };

  // validator.localize(dictionary);

  return validator;
};

export const isAuth = () => {
  return !!localStorage.getItem("accessToken");
};

export const isClient = () => {
  if (localStorage.getItem("role") === "Client") {
    return true;
  }
  return false;
};

export const isWorker = () => {
  if (localStorage.getItem("role") === "Worker") {
    return true;
  }
  return false;
};

export const ToastNotificationOption = () => {
  const options = {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    draggable: true,
    draggableDirection: "x" | "y",
    draggablePercent: 60,
    theme: "colored",
  };

  return options;
};
