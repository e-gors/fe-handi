/** @format */

const routes = [
  {
    path: "/",
    component: "modules/home/pages/Homepage",
  },
  {
    path: "/company",
    component: "modules/home/pages/Company",
  },
  {
    path: "/find-jobs",
    component: "modules/home/pages/FindJob",
  },
  {
    path: "/find-people",
    component: "modules/home/pages/FindPeople",
  },
  {
    path: "/terms-of-services",
    component: "modules/contracts/pages/TermsOfService",
  },
  {
    path: "/privacy-policy",
    component: "modules/contracts/pages/PrivacyPolicy",
  },
  {
    path: "/login",
    component: "modules/login/pages/Login",
  },
  {
    path: "/register",
    component: "modules/register/pages/Register",
  },
  {
    path: "/registration-process",
    component: "modules/register/pages/RegisterFlow",
  },
  {
    path: "/profile",
    component: "modules/users/pages/Profile",
  },
  {
    path: "/fq-question",
    component: "modules/home/pages/FQQuestion",
  },
];

export default routes;
