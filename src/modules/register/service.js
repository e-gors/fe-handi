import axios from "axios";
const api = process.env.REACT_APP_API_DOMAIN;

const noGuardHttp = axios.create();

noGuardHttp.defaults.baseURL = api;
noGuardHttp.defaults.headers.common["Accept"] = "application/json";
noGuardHttp.defaults.headers.common["Content-Type"] = "application/json";
noGuardHttp.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.message === "Network Error") {
      return Promise.reject(error);
    }

    return Promise.reject(error);
  }
);

export default noGuardHttp;

export const workerRegister = (role, formValues, expertise) => {
  return axios.post(
    `${api}/join-us/${role}`,
    {
      formValues: formValues.values,
      expertise: expertise.values,
    },
    {
      headers: {
        Accept: "application/json",
      },
    }
  );
};

export const clientRegister = (role, formValues) => {
  return axios.post(`${api}/join-us/${role}`, formValues.values, {
    headers: {
      Accept: "application/json",
    },
  });
};

export const registerOnApply = (formValues, expertise) => {
  return axios.post(
    `${api}/apply/register`,
    {
      formValues: formValues.values,
      expertise: expertise.values,
    },
    {
      headers: {
        Accept: "application/json",
      },
    }
  );
};
