import * as React from "react";
import PropTypes from "prop-types";
import { Tabs, Tab, Box, Typography } from "@mui/material";
import Offers from "./Offers";
import { useSelector } from "react-redux";

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
    name: "worker",
    label: "Contractor",
    customBodyRender: (item) => {
      return item.full_name;
    },
  },
  {
    name: "client",
    label: "Client",
    customBodyRender: (item) => {
      return item.full_name;
    },
  },
  {
    name: "job",
    label: "Contract Name",
    customBodyRender: (item) => {
      return item.title;
    },
  },
  {
    name: "job",
    label: "Job Position",
    customBodyRender: (item) => {
      return item.position;
    },
  },
  {
    name: "job",
    label: "Job Type",
    customBodyRender: (item) => {
      return item.job_type;
    },
  },
  {
    name: "job",
    label: "Days",
    customBodyRender: (item) => {
      return item.days;
    },
  },
  {
    name: "job",
    label: "Rate",
    customBodyRender: (item) => {
      return item.rate;
    },
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
    name: "worker",
    label: "Contractor",
    customBodyRender: (item) => {
      return item.full_name;
    },
  },
  {
    name: "client",
    label: "Client",
    customBodyRender: (item) => {
      return item.full_name;
    },
  },
  {
    name: "job",
    label: "Contract Name",
    customBodyRender: (item) => {
      return item.title;
    },
  },
  {
    name: "job",
    label: "Job Position",
    customBodyRender: (item) => {
      return item.position;
    },
  },
  {
    name: "job",
    label: "Job Type",
    customBodyRender: (item) => {
      return item.job_type;
    },
  },
  {
    name: "job",
    label: "Budget",
    customBodyRender: (item) => {
      return item.budget;
    },
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

export default function DefaultOffers() {
  const [tab, setTab] = React.useState(0);

  const user = useSelector((state) => state.users.user);

  const handleChangeTab = (event, newValue) => {
    setTab(newValue);
  };

  return (
    <Box sx={{ width: "100%", mt: 10 }}>
      <Box sx={{ p: 2, width: "95%", m: "0 auto" }}>
        <Typography sx={{ fontSize: { xs: 20, md: 24 }, m: 2 }}>
          My Offers
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
            <Offers type="Daily Rate" role={user.role} columns={dailyColumns} />
          </TabPanel>
          <TabPanel value={tab} index={1}>
            <Offers type="Fixed Cost" role={user.role} columns={fixedColumns} />
          </TabPanel>
        </Box>
      </Box>
    </Box>
  );
}
