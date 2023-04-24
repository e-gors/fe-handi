import axios from "axios";

const api = process.env.REACT_APP_API_DOMAIN;

export const workerRegister = (role, formValues, expertise) => {
  return axios.post(
    `${api}/join-us/${role}`,
   {
    params: {
      formValues: formValues.values,
      expertise: expertise.values,
    },
   },
    {
      headers: {
        Accept: "application/json",
      },
    }
  );
};

export const clientRegister = (role, params) => {
  return axios.post(`${api}/join-us/${role}`, params.values, {
    headers: {
      Accept: "application/json",
    },
  });
};
