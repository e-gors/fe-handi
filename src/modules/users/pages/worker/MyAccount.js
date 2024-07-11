/** @format */
import { Box, Typography, Tab, Tabs } from "@mui/material";
import React from "react";
import MyAccountSettings from "./MyAccountSettings";
// import NotificationSettings from "./NotificationSettings";

const styles = {
  MyAccountTabsWrapper: {
    ml: { xs: 0, md: 0 },
    mt: { xs: 5, sm: 5, md: 2 },
    backgroundColor: "#EEEEEE",
    borderRadius: 3,
    p: 2,
    boxShadow: 5,
    width: "100%",
  },
  main: {
    maxWidth: { xs: "100%", md: "90%" },
    m: "0 auto",
  },
  wrapper: {
    mt: 8,
    p: 2,
    minHeight: "60vh",
  },
};
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
      {value === index && <Box>{children}</Box>}
    </Box>
  );
}

function MyAccount(props) {
  const { worker } = props;
  const [tab, setTab] = React.useState(0);
  const handleChangeTab = (event, newValue) => {
    setTab(newValue);
  };
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  return (
    <Box sx={styles.wrapper}>
      <Typography sx={{ fontWeight: "bold" }}>My Account</Typography>

      <Box sx={styles.main}></Box>

      <Box sx={styles.MyAccountTabsWrapper}>
        <Box>
          <Tabs
            value={tab}
            onChange={handleChangeTab}
            aria-label="basic tabs example"
          >
            <Tab label="Settings" {...a11yProps(0)} />
            <Tab label="Security" {...a11yProps(1)} />
            <Tab label="Notification" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <Box sx={{ mt: 2 }}>
          <TabPanel value={tab} index={0}>
            <MyAccountSettings worker={worker} />
          </TabPanel>
          <TabPanel value={tab} index={1}>
            {/* <NotificationSettings worker={worker} /> */}
          </TabPanel>
          <TabPanel value={tab} index={2}>
            {/* <NotificationSettings worker={worker} /> */}
          </TabPanel>
        </Box>
      </Box>
    </Box>
  );
}

export default MyAccount;
