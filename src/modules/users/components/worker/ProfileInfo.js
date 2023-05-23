import { Box, Grid, Tab, Tabs, Typography } from "@mui/material";
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
};

function ProfileInfo(props) {
  const { score, proposals, contracts, offers } = props;

  const history = useHistory();

  const [tab, setTab] = React.useState(0);

  const handleChangeTab = (event, newValue) => {
    setTab(newValue);
  };

  const handleNavigate = (link) => {
    history.push(link);
  };
  return (
    <Box>
      <Box>
        <Grid container spacing={2}>
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
                        value={tab}
                        onChange={handleChangeTab}
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
                  {tab === 0 && <Typography>30 days</Typography>}
                  {tab === 1 && <Typography>Week</Typography>}
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
                        value={tab}
                        onChange={handleChangeTab}
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
                  {tab === 0 && <Typography>30 days</Typography>}
                  {tab === 1 && <Typography>Week</Typography>}
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
                        value={tab}
                        onChange={handleChangeTab}
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
                  {tab === 0 && <Typography>30 days</Typography>}
                  {tab === 1 && <Typography>Week</Typography>}
                </Box>
              </Grid>
            </Grid>
            <Box sx={styles.scoreWrapper}>
              <Box sx={styles.scoreMainWrapper}>
                <Box sx={styles.circularWrapper}>
                  <CircularProgressbarWithChildren
                    minValue={1}
                    maxValue={10}
                    value={score}
                  >
                    <Typography sx={styles.score}>{score}</Typography>
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

              <Box sx={{ mt: 3 }}>
                <Box>
                  <Typography sx={{ ml: 1 }}>Main</Typography>

                  <Box sx={styles.scoreMainWrapper}>
                    <Box sx={styles.profileCardWrapper}>
                      <Typography>icon</Typography>
                      <Typography sx={styles.info}>Required Info</Typography>
                    </Box>
                    <Box sx={styles.profileCardWrapper}>
                      <Typography>icon</Typography>
                      <Typography sx={styles.info}>Required Info</Typography>
                    </Box>
                    <Box sx={styles.profileCardWrapper}>
                      <Typography>icon</Typography>
                      <Typography sx={styles.info}>Required Info</Typography>
                    </Box>
                    <Box sx={styles.profileCardWrapper}>
                      <Typography>icon</Typography>
                      <Typography sx={styles.info}>Required Info</Typography>
                    </Box>
                    <Box sx={styles.profileCardWrapper}>
                      <Typography>icon</Typography>
                      <Typography sx={styles.info}>Required Info</Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
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
                        <Typography>{proposals && proposals.length}</Typography>
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
                        <Typography>{contracts && contracts.length}</Typography>
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
                        <Typography>{offers && offers.length}</Typography>
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
