export const styles = {
  //global styles
  wrapper: {
    display: "flex",
  },
  contentWrapper: {
    width: "100%",
  },
  customBlueButton: {
    background: `linear-gradient(0deg, rgba(0,3,255,1) 0%, rgba(2,126,251,1) 100%)`,
    borderRadius: "20px 20px",
    p: "5px 30px",
  },
  customOrangeButton: {
    background: `linear-gradient(0deg, rgba(255,27,0,1) 0%, rgba(251,75,2,1) 100%)`,
    borderRadius: "20px 20px",
    p: "5px 30px",
  },
  customHide: {
    display: { xs: "none", md: "block" },
  },

  //profile styles
  bgProfile: {
    height: { xs: 180, md: 250 },
    backgroundColor: "#E6E8EC",
  },
  avatar: {
    width: { xs: 125, md: 150, lg: 180 },
    height: { xs: 125, md: 150, lg: 180 },

    "@media (max-width: 600px)": {
      width: 100,
      height: 100,
    },
  },

  //login styles
  loginContentWrapper: {
    marginTop: 10,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  loginForm: {
    mt: 1,
  },
  loginAvatar: { m: 1, bgcolor: "secondary.main" },
  loginSubmitButton: { mt: 3, mb: 2 },
  copyright: { mt: 8, mb: 4 },

  //register styles
  registerContentWrapper: {
    mt: 10,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    p: 1,
  },
  flexColumnCenter: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  reviewdataWrapper: { maxWidth: { xs: 400, md: 600 } },
  reviewdataReminder: {
    mt: 2,
    fontSize: { xs: 14, md: 20 },
    backgroundColor: "yellow",
    p: 1,
  },
  yourCredentials: { mb: 2, backgroundColor: "blue", p: 1, color: "white" },
  yourBackgroundInformation: {
    mb: 2,
    mt: 5,
    backgroundColor: "blue",
    p: 1,
    color: "white",
  },
  reviewdataButtonWrapper: { mt: 2, display: "flex", justifyContent: "center" },

  //login button style
  loginStyleButton: {
    color: "black",
    background: "none",
    border: "none",
  },

  //register button style
  registerStyleButton: {
    color: "#FE2801",
    border: `2px solid rgba(251,75,2,1)`,
    transitions: ".5s",
    borderRadius: "30px 30px",
    ml: 5,

    "&:hover": {
      backgroundColor: "#FE2801",
      color: "white",
      border: "2px solid #FE2801",
    },
  },

  //jobs styles
  divider: {
    maxHeight: 1,
    backgroundColor: "gray",
    mt: 2,
    mb: 2,
  },
  customButton: {
    loginButton: {
      backgound: "linear-gradient(to right, #, 235, 100)",
    },
    clrButton: {},
    logoutButton: {},
    cancelButton: {},
  },
  jobs: {
    wrapper: {},
    contentWrapper: {
      mt: 5,
    },
    top: {
      height: { md: 250, xs: 120 },
      backgroundColor: "#F6F8FC",
      p: { xs: 2, md: 5 },
    },
    topTitle: {
      fontSize: { xs: 24, md: 30, lg: 36 },
      fontWeight: "bold",
    },
    topDescription: {},
    content: {
      backgroundColor: "white",
      p: 3,
      display: "flex",
    },
    filters: {
      border: "2px solid #CDCFD0",
      borderRadius: "10px 10px",
      width: 400,
      p: 2,
      display: { xs: "none", md: "block" },
    },
  },
};
