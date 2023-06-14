import { Box, Tab, Tabs } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";
import Project from "./Project";
import ProfileOverview from "./ProfileOverview";
import NewReview from "../NewReview";
import { isAuth } from "../../../../utils/helpers";

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

function ProjectReviewTabs(props) {
  const { user } = props;

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
            <ProfileOverview user={user && user} />
          </TabPanel>
          <TabPanel value={tab} index={1}>
            <Project user={user && user} />
          </TabPanel>
          <TabPanel value={tab} index={2}>
            <NewReview worker={user && user} isOwner={true} user={user} />
          </TabPanel>
        </Box>
      </Box>
    </Box>
  );
}

export default ProjectReviewTabs;
