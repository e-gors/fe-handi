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
    path: "/faq",
    component: "modules/home/pages/FQQuestion",
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
    path: "/join-us/Worker",
    component: "modules/register/pages/JoinUsWorker",
  },
  {
    path: "/join-us/Client",
    component: "modules/register/pages/JoinUsClient",
  },
  {
    path: "/confirm-registration",
    component: "modules/register/pages/ConfirmRegistration",
  },

  // Private components
  {
    path: "/confirmed/:id",
    component: "modules/register/pages/ConfirmedUser",
    auth: true,
  },
  {
    path: "/onboarding",
    component: "modules/register/pages/OnBoarding",
    auth: true,
  },
  {
    path: "/overview/:role/:id",
    component: "modules/users/pages/DefaultProfile",
    auth: true,
  },
  {
    path: "/dashboard",
    component: "modules/users/pages/DefaultDashboard",
    auth: true,
  },
  {
    path: "/marketplace",
    component: "modules/users/pages/DefaultMarketplace",
    auth: true,
  },
  {
    path: "/contracts",
    component: "modules/users/pages/DefaultContracts",
    auth: true,
  },
  {
    path: "/my-jobs",
    component: "modules/users/pages/JobPosted",
    auth: true,
  },
  {
    path: "/my-offers",
    component: "modules/users/pages/DefaultOffers",
    auth: true,
  },
  {
    path: "/my-proposals",
    component: "modules/users/pages/Proposals",
    auth: true,
  },
  {
    path: "/reports",
    component: "modules/users/pages/DefaultReports",
    auth: true,
  },
];

export default routes;
