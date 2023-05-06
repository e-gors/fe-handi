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

function ProfileInfo(props) {
  const {score} = props;

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
                <Box
                  sx={{
                    backgroundColor: "#EEEEEE",
                    borderRadius: 3,
                    boxShadow: 5,
                    p: 2,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box sx={{ display: "flex" }}>
                      <AccountBoxIcon
                        color="primary"
                        sx={{ width: 30, height: 30 }}
                      />
                      <Typography sx={{ ml: 1, whiteSpace: "noWrap" }}>
                        Profile views
                      </Typography>
                    </Box>
                    <Box sx={{ mt: -2, mb: 2 }}>
                      <Tabs
                        value={tab}
                        onChange={handleChangeTab}
                        aria-label="basic tabs example"
                      >
                        <Tab
                          label="30 days"
                          {...a11yProps(0)}
                          sx={{ fontSize: 11 }}
                        />
                        <Tab
                          label="Week"
                          {...a11yProps(1)}
                          sx={{ fontSize: 11 }}
                        />
                      </Tabs>
                    </Box>
                  </Box>
                  {tab === 0 && <Typography>30 days</Typography>}
                  {tab === 1 && <Typography>Week</Typography>}
                </Box>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <Box
                  sx={{
                    backgroundColor: "#EEEEEE",
                    borderRadius: 3,
                    boxShadow: 5,
                    p: 2,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box sx={{ display: "flex" }}>
                      <FindInPageIcon
                        color="secondary"
                        sx={{ width: 30, height: 30 }}
                      />
                      <Typography sx={{ ml: 1, whiteSpace: "noWrap" }}>
                        Search results
                      </Typography>
                    </Box>
                    <Box sx={{ mt: -2, mb: 2 }}>
                      <Tabs
                        value={tab}
                        onChange={handleChangeTab}
                        aria-label="basic tabs example"
                      >
                        <Tab
                          label="30 days"
                          {...a11yProps(0)}
                          sx={{ fontSize: 11 }}
                        />
                        <Tab
                          label="Week"
                          {...a11yProps(1)}
                          sx={{ fontSize: 11 }}
                        />
                      </Tabs>
                    </Box>
                  </Box>
                  {tab === 0 && <Typography>30 days</Typography>}
                  {tab === 1 && <Typography>Week</Typography>}
                </Box>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <Box
                  sx={{
                    backgroundColor: "#EEEEEE",
                    borderRadius: 3,
                    boxShadow: 5,
                    p: 2,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box sx={{ display: "flex" }}>
                      <StarsIcon
                        color="warning"
                        sx={{ width: 30, height: 30 }}
                      />
                      <Typography sx={{ ml: 1, whiteSpace: "noWrap" }}>
                        Reviews
                      </Typography>
                    </Box>
                    <Box sx={{ mt: -2, mb: 2 }}>
                      <Tabs
                        value={tab}
                        onChange={handleChangeTab}
                        aria-label="basic tabs example"
                      >
                        <Tab
                          label="30 days"
                          {...a11yProps(0)}
                          sx={{ fontSize: 11 }}
                        />
                        <Tab
                          label="Week"
                          {...a11yProps(1)}
                          sx={{ fontSize: 11 }}
                        />
                      </Tabs>
                    </Box>
                  </Box>
                  {tab === 0 && <Typography>30 days</Typography>}
                  {tab === 1 && <Typography>Week</Typography>}
                </Box>
              </Grid>
            </Grid>
            <Box
              sx={{ mt: 5, backgroundColor: "#EEEEEE", borderRadius: 3, p: 1 }}
            >
              <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                <Box
                  sx={{
                    width: { xs: 120, md: 150 },
                    height: { xs: 120, md: 150 },

                    "@media(max-width: 865px)": {
                      margin: "20px auto",
                    },
                  }}
                >
                  <CircularProgressbarWithChildren
                    minValue={1}
                    maxValue={10}
                    value={score}
                  >
                    <Typography
                      sx={{ fontSize: { xs: 22, md: 28 }, fontWeight: "bold" }}
                    >
                      {score}
                    </Typography>
                    <Typography>out of 10</Typography>
                  </CircularProgressbarWithChildren>
                </Box>
                <Box sx={{ ml: 2 }}>
                  <Typography
                    sx={{ fontSize: { xs: 20, md: 24 }, fontWeight: "bold" }}
                  >
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

                  <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                    <Box
                      sx={{
                        m: 0.5,
                        border: "1px solid #BEBEBE",
                        boxShadow: 5,
                        p: 1,
                        display: "flex",
                        borderRadius: 2,
                      }}
                    >
                      <Typography>icon</Typography>
                      <Typography sx={{ ml: 2 }}>Required Info</Typography>
                    </Box>
                    <Box
                      sx={{
                        m: 0.5,
                        border: "1px solid #BEBEBE",
                        boxShadow: 5,
                        p: 1,
                        display: "flex",
                        borderRadius: 2,
                      }}
                    >
                      <Typography>icon</Typography>
                      <Typography sx={{ ml: 2 }}>Required Info</Typography>
                    </Box>
                    <Box
                      sx={{
                        m: 0.5,
                        border: "1px solid #BEBEBE",
                        boxShadow: 5,
                        p: 1,
                        display: "flex",
                        borderRadius: 2,
                      }}
                    >
                      <Typography>icon</Typography>
                      <Typography sx={{ ml: 2 }}>Required Info</Typography>
                    </Box>
                    <Box
                      sx={{
                        m: 0.5,
                        border: "1px solid #BEBEBE",
                        boxShadow: 5,
                        p: 1,
                        display: "flex",
                        borderRadius: 2,
                      }}
                    >
                      <Typography>icon</Typography>
                      <Typography sx={{ ml: 2 }}>Required Info</Typography>
                    </Box>
                    <Box
                      sx={{
                        m: 0.5,
                        border: "1px solid #BEBEBE",
                        boxShadow: 5,
                        p: 1,
                        display: "flex",
                        borderRadius: 2,
                      }}
                    >
                      <Typography>icon</Typography>
                      <Typography sx={{ ml: 2 }}>Required Info</Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={12} lg={2.5}>
            <Box
              sx={{
                backgroundColor: "#EEEEEE",
                borderRadius: 3,
                boxShadow: 5,
                p: 2,
              }}
            >
              <Typography
                sx={{ fontSize: { xs: 20, md: 24 }, fontWeight: "bold" }}
              >
                Quick Actions
              </Typography>
              <Box sx={{ mt: 2 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6} md={4} lg={12}>
                    <Box
                      sx={{
                        backgroundColor: "#BEBEBE",
                        borderRadius: 3,
                        boxShadow: 5,
                        p: 2,
                        cursor: "pointer",

                        "&:hover": {
                          backgroundColor: "#CCCCCC",
                        },
                      }}
                      onClick={() => handleNavigate("/my-proposals")}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Box sx={{ display: "flex" }}>
                          <MarkEmailUnreadIcon
                            color="primary"
                            sx={{ width: 30, height: 30 }}
                          />
                          <Typography sx={{ ml: 1 }}>
                            Go to Proposals
                          </Typography>
                        </Box>
                        <Typography>0</Typography>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={12}>
                    <Box
                      sx={{
                        backgroundColor: "#BEBEBE",
                        borderRadius: 3,
                        boxShadow: 5,
                        p: 2,
                        cursor: "pointer",

                        "&:hover": {
                          backgroundColor: "#CCCCCC",
                        },
                      }}
                      onClick={() => handleNavigate("/contracts")}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Box sx={{ display: "flex" }}>
                          <NoteAltIcon
                            color="warning"
                            sx={{ width: 30, height: 30 }}
                          />
                          <Typography sx={{ ml: 1 }}>
                            Go to Contracts
                          </Typography>
                        </Box>
                        <Typography>0</Typography>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={12}>
                    <Box
                      sx={{
                        backgroundColor: "#BEBEBE",
                        borderRadius: 3,
                        boxShadow: 5,
                        p: 2,
                        cursor: "pointer",

                        "&:hover": {
                          backgroundColor: "#CCCCCC",
                        },
                      }}
                      onClick={() => handleNavigate("/my-offers")}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Box sx={{ display: "flex" }}>
                          <RequestQuoteIcon
                            sx={{ color: "green", width: 30, height: 30 }}
                          />
                          <Typography sx={{ ml: 1 }}>Go to Offers</Typography>
                        </Box>
                        <Typography>0</Typography>
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
