import { Box, Tab, Tabs, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import Project from "./Project";
import ProfileOverview from "./ProfileOverview";
import Reviews from "./Reviews";

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

function ProjectReviewTabs() {
  const user = useSelector((state) => state.users.user);
  const [tab, setTab] = React.useState(0);

  const handleChangeTab = (event, newValue) => {
    setTab(newValue);
  };

  return (
    <Box>
      <Box>
        <Box>
          <Tabs
            value={tab}
            onChange={handleChangeTab}
            aria-label="basic tabs example"
          >
            <Tab label="Profile Overview" {...a11yProps(0)} />
            <Tab label="Projects" {...a11yProps(1)} />
            <Tab label="Reviews" {...a11yProps(2)} />
          </Tabs>
        </Box>

        <Box sx={{ mt: 2 }}>
          <TabPanel value={tab} index={0}>
            <ProfileOverview />
          </TabPanel>
          <TabPanel value={tab} index={1}>
            <Project />
          </TabPanel>
          <TabPanel value={tab} index={2}>
            <Reviews />
          </TabPanel>
        </Box>
      </Box>
    </Box>
  );
}

export default ProjectReviewTabs;
