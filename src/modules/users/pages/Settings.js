/** @format */

import { Box, Tab, Tabs, Typography } from "@mui/material";
import React from "react";
import MyAccountSettings from "./MyAccountSettings";
import Security from "./Security";
import NotificationSettings from "./NotificationSettings";
import { useSelector } from "react-redux";

const styles = {
  wrapper: {
    mt: 10,
    p: 2,
  },
  MyAccountTabsWrapper: {
    backgroundColor: "#EEEEEE",
    borderRadius: 3,
    p: 2,
    boxShadow: 5,
    width: { xs: "95%", md: "80%" },
    m: "0 auto",
  },
  main: {
    maxWidth: { xs: "100%", md: "90%" },
    m: "0 auto",
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

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Settings() {
  const user = useSelector((state) => state.users.user);

  const [tab, setTab] = React.useState(0);
  const handleChangeTab = (event, newValue) => {
    setTab(newValue);
  };

  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.MyAccountTabsWrapper}>
        <Box>
          <Tabs
            value={tab}
            onChange={handleChangeTab}
            aria-label="basic tabs example"
          >
            <Tab label="Settings" {...a11yProps(0)} />
            <Tab label="Security" {...a11yProps(1)} />
            <Tab label="Notifications" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <Box sx={{ mt: 2 }}>
          <TabPanel value={tab} index={0}>
            <MyAccountSettings user={user} />
          </TabPanel>
          <TabPanel value={tab} index={1}>
            <Security user={user} />
          </TabPanel>
          <TabPanel value={tab} index={2}>
            <NotificationSettings user={user} />
          </TabPanel>
        </Box>
      </Box>
    </Box>
  );
}
