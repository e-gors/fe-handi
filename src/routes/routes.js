/** @format */

const routes = [
  {
    path: "/",
    component: "modules/home/pages/Homepage",
  },
  {
    path: "/forbidden",
    component: "routes/Forbidden",
  },
  {
    path: "/company",
    component: "modules/home/pages/Company",
  },
  {
    path: "/find-people",
    component: "modules/users/pages/worker/WMarketplace",
  },
  {
    path: "/find-jobs",
    component: "modules/users/pages/client/CMarketplace",
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
    component: "modules/login/pages/LoginSide",
  },
  {
    path: "/register",
    component: "modules/register/pages/Register",
  },
  {
    path: "/join-us/Worker",
    component: "modules/register/pages/JoinAsWorker",
  },
  {
    path: "/join-us/Client",
    component: "modules/register/pages/JoinAsClient",
  },
  {
    path: "/confirm-registration",
    component: "modules/register/pages/ConfirmRegistration",
  },
  {
    path: "/fq-question",
    component: "modules/home/pages/FQQuestion",
  },
  {
    path: "/confirmed/:id",
    component: "modules/register/pages/ConfirmedUser",
  },
  {
    path: "/worker/profile/overview/:uuid",
    component: "modules/home/pages/worker/Profile",
  },

  // Private components

  //Admin Routes
  {
    path: "/admin/dashboard",
    component: "modules/users/admin/pages/AdminDashboard",
    auth: true,
    role: "Super Admin",
  },
  {
    path: "/admin/users",
    component: "modules/users/admin/pages/AdminUsers",
    auth: true,
    role: "Super Admin",
  },
  {
    path: "/admin/contracts",
    component: "modules/users/admin/pages/AdminContract",
    auth: true,
    role: "Super Admin",
  },
  {
    path: "/admin/job-post",
    component: "modules/users/admin/pages/AdminJobpost",
    auth: true,
    role: "Super Admin",
  },
  {
    path: "/admin/offers",
    component: "modules/users/admin/pages/AdminOffers",
    auth: true,
    role: "Super Admin",
  },
  {
    path: "/admin/reports",
    component: "modules/users/admin/pages/AdminReports",
    auth: true,
    role: "Super Admin",
  },
  {
    path: "/admin/settings",
    component: "modules/users/admin/pages/AdminSettings",
    auth: true,
    role: "Super Admin",
  },

  // Worker Routes
  {
    path: "/onboarding",
    component: "modules/register/pages/OnBoarding",
    auth: true,
    role: "Worker",
  },

  {
    path: "/my-proposals",
    component: "modules/users/pages/worker/Proposal",
    auth: true,
    role: "Worker",
  },
  {
    path: "/overview/worker",
    component: "modules/users/pages/worker/WProfileInsight",
    auth: true,
    role: "Worker",
  },
  {
    path: "/edit/profile/worker",
    component: "modules/users/pages/worker/WProfileEdit",
    auth: true,
    role: "Worker",
  },
  {
    path: "/account/settings/notifications",
    component: "modules/users/pages/worker/NotificationSettings",
    auth: true,
    role: "Worker",
  },
  {
    path: "/profile/worker",
    component: "modules/users/pages/worker/WProfile",
    auth: true,
    role: "Worker",
  },

  // Client Routes
  {
    path: "/my-jobs",
    component: "modules/users/pages/client/JobPosted",
    auth: true,
    role: "Client",
  },
  {
    path: "/new/job-post",
    component: "modules/users/pages/client/NewJobPost",
    auth: true,
    role: "Client",
  },
  {
    path: "/new/job-offer",
    component: "modules/users/pages/worker/NewJobOffer",
    auth: true,
    role: "Client",
  },
  {
    path: "/new/job/posted",
    component: "modules/users/components/jobs/Posted",
    auth: true,
    role: "Client",
  },
  {
    path: "/overview/client",
    component: "modules/users/pages/client/CProfileInsight",
    auth: true,
    role: "Client",
  },
  {
    path: "/profile/client",
    component: "modules/users/pages/client/CProfile",
    auth: true,
    role: "Client",
  },
  {
    path: "/edit/profile/client",
    component: "modules/users/pages/client/CProfileEdit",
    auth: true,
    role: "Client",
  },

  {
    path: "/dashboard",
    component: "modules/users/pages/Dashboard",
    auth: true,
  },
  {
    path: "/marketplace",
    component: "modules/users/pages/Marketplace",
    auth: true,
  },
  {
    path: "/contracts",
    component: "modules/users/pages/DefaultContracts",
    auth: true,
  },

  {
    path: "/my-offers",
    component: "modules/users/pages/DefaultOffers",
    auth: true,
  },
  {
    path: "/reports",
    component: "modules/users/pages/Reports",
    auth: true,
  },
  {
    path: "/overview/worker/:uuid",
    component: "modules/users/pages/WorkerOverview",
    auth: true,
  },
  {
    path: "/overview/client/:uuid",
    component: "modules/users/pages/ClientOverview",
    auth: true,
  },
  // {
  //   path: "/new/reviews",
  //   component: "modules/users/components/ReviewForm",
  //   auth: true,
  // },
];

export default routes;
