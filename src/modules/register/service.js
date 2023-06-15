import publicHttp from "../../utils/publicHttp";

export const workerRegister = (role, formValues, expertise) => {
  return publicHttp.post(`/join-us/${role}`, {
    formValues: formValues.values,
    expertise: expertise.values,
  });
};

export const clientRegister = (role, formValues) => {
  return publicHttp.post(`/join-us/${role}`, formValues.values);
};

export const registerOnApply = (formValues, expertise) => {
  return publicHttp.post(`/apply/register`, {
    formValues: formValues.values,
    expertise: expertise.values,
  });
};
