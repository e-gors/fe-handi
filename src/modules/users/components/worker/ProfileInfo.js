import { Box, Button, Grid, Tab, Tabs, Typography } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import FindInPageIcon from "@mui/icons-material/FindInPage";
import StarsIcon from "@mui/icons-material/Stars";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import MarkEmailUnreadIcon from "@mui/icons-material/MarkEmailUnread";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";
import { useHistory } from "react-router-dom";
import ProfileModalEdit from "../../components/ProfileModalEdit";
import PortraitIcon from "@mui/icons-material/Portrait";
import ShortTextIcon from "@mui/icons-material/ShortText";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import NotesIcon from "@mui/icons-material/Notes";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && { children }}
    </Box>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const styles = {
  wrapper: {
    backgroundColor: "#EEEEEE",
    borderRadius: 3,
    boxShadow: 5,
    p: 2,
  },
  mainWrapper: {
    display: "flex",
    justifyContent: "space-between",
  },
  icons: { width: 30, height: 30 },
  title: { ml: 1, whiteSpace: "noWrap" },
  tabWrapper: { mt: -2, mb: 2 },
  tabLabel: { fontSize: 11 },
  scoreWrapper: { mt: 5, backgroundColor: "#EEEEEE", borderRadius: 3, p: 1 },
  scoreMainWrapper: { display: "flex", flexWrap: "wrap" },
  circularWrapper: {
    width: { xs: 120, md: 150 },
    height: { xs: 120, md: 150 },

    "@media(max-width: 865px)": {
      margin: "20px auto",
    },
  },
  score: { fontSize: { xs: 22, md: 28 }, fontWeight: "bold" },
  profileTitle: { fontSize: { xs: 20, md: 24 }, fontWeight: "bold" },
  profileCardWrapper: {
    m: 0.5,
    border: "1px solid #BEBEBE",
    boxShadow: 5,
    p: 1,
    display: "flex",
    borderRadius: 2,
  },
  info: { ml: 2 },
  quickAction: {
    backgroundColor: "#EEEEEE",
    borderRadius: 3,
    boxShadow: 5,
    p: 2,
  },
  quickActionCardWrapper: {
    backgroundColor: "#BEBEBE",
    borderRadius: 3,
    boxShadow: 5,
    p: 2,
    cursor: "pointer",

    "&:hover": {
      backgroundColor: "#CCCCCC",
    },
  },
  quickMainWrapper: {
    display: "flex",
    justifyContent: "space-between",
  },
  quoteIcon: { color: "green", width: 30, height: 30 },
  credsButton: {
    m: 1,
    boxShadow: 5,
    p: 1,
    display: "flex",
    borderRadius: 2,

    "&:hover": {
      boxShadow: 10,
      backgroundColor: "#BEBEBE",
      color: "black",
    },
  },
};

function ProfileInfo(props) {
  const { user } = props;

  const { profile, bids, contracts, offers, tracker } = user;
  const { profile_completeness } = profile[0];

  const history = useHistory();

  const [activeTabs, setActiveTabs] = React.useState([0, 0, 0]);
  const [openProfileEdit, setOpenProfileEdit] = React.useState(false);
  const [type, setType] = React.useState("");

  const addCreds = [
    {
      icon: <PortraitIcon color="inherit" />,
      label: "Add Profile Photo",
      name: "Profile Image",
      hasValue: profile?.profile_url ? true : false,
    },
    {
      icon: <PortraitIcon color="inherit" />,
      label: "Add Background Photo",
      name: "Background Image",
      hasValue: profile?.background_url ? true : false,
    },
    {
      icon: <ShortTextIcon color="inherit" />,
      label: "Add About",
      name: "About",
      hasValue: profile?.about ? true : false,
    },
    {
      icon: <NotesIcon color="inherit" />,
      label: "Add Background",
      name: "Background",
      hasValue: profile?.background ? true : false,
    },
    {
      icon: <FacebookIcon color="inherit" />,
      label: "Facebook",
      name: "Facebook",
      hasValue: profile?.facebook_url ? true : false,
    },
    {
      icon: <TwitterIcon color="inherit" />,
      label: "Twitter",
      name: "Twitter",
      hasValue: profile?.twitter_url ? true : false,
    },
    {
      icon: <InstagramIcon color="inherit" />,
      label: "Instagram",
      name: "Instagram",
      hasValue: profile?.instagram_url ? true : false,
    },
  ];

  const handleChangeTab = (cardIndex, newTabValue) => {
    setActiveTabs((prevActiveTabs) =>
      prevActiveTabs.map((tab, index) =>
        index === cardIndex ? newTabValue : tab
      )
    );
  };

  const handleNavigate = (link) => {
    history.push(link);
  };

  const handleChoose = (type) => {
    setType(type);
    setOpenProfileEdit(true);
  };

  return (
    <Box>
      <ProfileModalEdit
        open={openProfileEdit}
        type={type}
        handleClose={() => setOpenProfileEdit(false)}
      />
      <Box>
        <Grid
          container
          spacing={2}
          sx={{ flexDirection: { xs: "column-reverse", md: "row" } }}
        >
          <Grid item xs={12} md={12} lg={9.5}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} lg={4}>
                <Box sx={styles.wrapper}>
                  <Box sx={styles.mainWrapper}>
                    <Box sx={{ display: "flex" }}>
                      <AccountBoxIcon color="primary" sx={styles.icons} />
                      <Typography sx={styles.title}>Profile views</Typography>
                    </Box>
                    <Box sx={styles.tabWrapper}>
                      <Tabs
                        value={activeTabs[0]}
                        onChange={(event, newValue) =>
                          handleChangeTab(0, newValue)
                        }
                        aria-label="basic tabs example"
                      >
                        <Tab
                          label="30 days"
                          {...a11yProps(0)}
                          sx={styles.tabLabel}
                        />
                        <Tab
                          label="Week"
                          {...a11yProps(1)}
                          sx={styles.tabLabel}
                        />
                      </Tabs>
                    </Box>
                  </Box>
                  {activeTabs[0] === 0 && (
                    <Typography>
                      {tracker && tracker.profile_view_m
                        ? tracker.profile_view_m
                        : 0}
                    </Typography>
                  )}
                  {activeTabs[0] === 1 && (
                    <Typography>
                      {" "}
                      {tracker && tracker.profile_view_w
                        ? tracker.profile_view_w
                        : 0}
                    </Typography>
                  )}
                </Box>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <Box sx={styles.wrapper}>
                  <Box sx={styles.mainWrapper}>
                    <Box sx={{ display: "flex" }}>
                      <FindInPageIcon color="secondary" sx={styles.icons} />
                      <Typography sx={styles.title}>Search results</Typography>
                    </Box>
                    <Box sx={styles.tabWrapper}>
                      <Tabs
                        value={activeTabs[1]}
                        onChange={(event, newValue) =>
                          handleChangeTab(1, newValue)
                        }
                        aria-label="basic tabs example"
                      >
                        <Tab
                          label="30 days"
                          {...a11yProps(0)}
                          sx={styles.tabLabel}
                        />
                        <Tab
                          label="Week"
                          {...a11yProps(1)}
                          sx={styles.tabLabel}
                        />
                      </Tabs>
                    </Box>
                  </Box>
                  {activeTabs[1] === 0 && (
                    <Typography>
                      {" "}
                      {tracker && tracker.search_result_m
                        ? tracker.search_result_m
                        : 0}
                    </Typography>
                  )}
                  {activeTabs[1] === 1 && (
                    <Typography>
                      {" "}
                      {tracker && tracker.search_result_w
                        ? tracker.search_result_w
                        : 0}
                    </Typography>
                  )}
                </Box>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <Box sx={styles.wrapper}>
                  <Box sx={styles.mainWrapper}>
                    <Box sx={{ display: "flex" }}>
                      <StarsIcon color="warning" sx={styles.icons} />
                      <Typography sx={styles.title}>Reviews</Typography>
                    </Box>
                    <Box sx={styles.tabWrapper}>
                      <Tabs
                        value={activeTabs[2]}
                        onChange={(event, newValue) =>
                          handleChangeTab(2, newValue)
                        }
                        aria-label="basic tabs example"
                      >
                        <Tab
                          label="30 days"
                          {...a11yProps(0)}
                          sx={styles.tabLabel}
                        />
                        <Tab
                          label="Week"
                          {...a11yProps(1)}
                          sx={styles.tabLabel}
                        />
                      </Tabs>
                    </Box>
                  </Box>
                  {activeTabs[2] === 0 && <Typography>30 days</Typography>}
                  {activeTabs[2] === 1 && <Typography>Week</Typography>}
                </Box>
              </Grid>
            </Grid>
            <Box sx={styles.scoreWrapper}>
              <Box sx={styles.scoreMainWrapper}>
                <Box sx={styles.circularWrapper}>
                  <CircularProgressbarWithChildren
                    minValue={1}
                    maxValue={10}
                    value={profile_completeness}
                  >
                    <Typography sx={styles.score}>
                      {profile_completeness}
                    </Typography>
                    <Typography>out of 10</Typography>
                  </CircularProgressbarWithChildren>
                </Box>
                <Box sx={styles.info}>
                  <Typography sx={styles.profileTitle}>
                    Profile Score
                  </Typography>
                  <Typography>
                    Add your Main profile information to appear in search
                    results and submit proposals.
                  </Typography>
                </Box>
              </Box>

              {!(
                profile.profile_url &&
                profile.background_url &&
                profile.background &&
                profile.facebook_url &&
                profile.twitter_url &&
                profile.instagram_url &&
                profile.about
              ) && (
                <Box sx={{ mt: 3 }}>
                  <Typography>Add credibility to your profile</Typography>
                  <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                    {addCreds &&
                      addCreds.map((cred, i) => {
                        if (!cred.hasValue) {
                          return (
                            <Button
                              key={i}
                              size="small"
                              sx={styles.credsButton}
                              onClick={() => handleChoose(cred.name)}
                            >
                              {cred.icon}
                              <Typography sx={{ ml: 2, color: "inherit" }}>
                                {cred.label}
                              </Typography>
                            </Button>
                          );
                        }
                      })}
                  </Box>
                </Box>
              )}
            </Box>
          </Grid>
          <Grid item xs={12} md={12} lg={2.5}>
            <Box sx={styles.quickAction}>
              <Typography sx={styles.profileTitle}>Quick Actions</Typography>
              <Box sx={{ mt: 2 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6} md={4} lg={12}>
                    <Box
                      sx={styles.quickActionCardWrapper}
                      onClick={() => handleNavigate("/my-proposals")}
                    >
                      <Box sx={styles.quickMainWrapper}>
                        <Box sx={{ display: "flex" }}>
                          <MarkEmailUnreadIcon
                            color="primary"
                            sx={styles.icons}
                          />
                          <Typography sx={{ ml: 1 }}>
                            Go to Proposals
                          </Typography>
                        </Box>
                        <Typography>{bids ? bids.length : 0}</Typography>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={12}>
                    <Box
                      sx={styles.quickActionCardWrapper}
                      onClick={() => handleNavigate("/contracts")}
                    >
                      <Box sx={styles.quickMainWrapper}>
                        <Box sx={{ display: "flex" }}>
                          <NoteAltIcon color="warning" sx={styles.icons} />
                          <Typography sx={{ ml: 1 }}>
                            Go to Contracts
                          </Typography>
                        </Box>
                        <Typography>
                          {contracts ? contracts.length : 0}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={12}>
                    <Box
                      sx={styles.quickActionCardWrapper}
                      onClick={() => handleNavigate("/my-offers")}
                    >
                      <Box sx={styles.quickMainWrapper}>
                        <Box sx={{ display: "flex" }}>
                          <RequestQuoteIcon sx={styles.quoteIcon} />
                          <Typography sx={{ ml: 1 }}>Go to Offers</Typography>
                        </Box>
                        <Typography>{offers ? offers.length : 0}</Typography>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default ProfileInfo;
