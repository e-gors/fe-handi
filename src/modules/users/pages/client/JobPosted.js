import * as React from "react";
import PropTypes from "prop-types";
import { Tabs, Tab, Box, Typography } from "@mui/material";
import Jobs from "./Jobs";

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
      {value === index && <Box sx={{ mt: 2 }}>{children}</Box>}
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

const dailyColumns = [
  {
    name: "bids.length",
    label: "Proposals",
  },
  {
    name: "title",
    label: "Title",
  },
  {
    name: "position",
    label: "Job Position",
  },
  {
    name: "locations",
    label: "Locations",
  },
  {
    name: "job_type",
    label: "Type",
  },
  {
    name: "rate",
    label: "Rate",
  },
  {
    name: "status",
    label: "Status",
  },
  {
    name: "created_at",
    label: "Date Posted",
  },
];

const fixedColumns = [
  {
    name: "bids.length",
    label: "Proposals",
  },
  {
    name: "title",
    label: "Title",
  },
  {
    name: "position",
    label: "Job Position",
  },
  {
    name: "locations",
    label: "Locations",
  },
  {
    name: "job_type",
    label: "Type",
  },
  {
    name: "budget",
    label: "Budget",
  },
  {
    name: "status",
    label: "Status",
  },
  {
    name: "created_at",
    label: "Date Posted",
  },
];

export default function JobPosted() {
  const [tab, setTab] = React.useState(0);

  const handleChangeTab = (event, newValue) => {
    setTab(newValue);
  };

  return (
    <Box sx={{ width: "100%", mt: 10 }}>
      <Box sx={{ p: 2, width: "95%", m: "0 auto" }}>
        <Typography sx={{ fontSize: { xs: 20, md: 24 }, m: 2 }}>
          My Jobs
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Tabs
            value={tab}
            onChange={handleChangeTab}
            aria-label="basic tabs example"
          >
            <Tab label="Daily" {...a11yProps(0)} />
            <Tab label="Fixed" {...a11yProps(1)} />
          </Tabs>
        </Box>

        <Box>
          <TabPanel value={tab} index={0}>
            <Jobs columns={dailyColumns} type="Daily Rate" />
          </TabPanel>
          <TabPanel value={tab} index={1}>
            <Jobs columns={fixedColumns} type="Fixed Cost" />
          </TabPanel>
        </Box>
      </Box>
    </Box>
  );
}
