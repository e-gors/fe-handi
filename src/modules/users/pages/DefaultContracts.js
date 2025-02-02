import * as React from "react";
import PropTypes from "prop-types";
import { Tabs, Tab, Box, Typography } from "@mui/material";
import Contracts from "../components/Contracts";

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

const defaultContractColumns = [
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
    name: "post",
    label: "Contract Name",
    customBodyRender: (item) => {
      return item?.title;
    },
  },
  {
    name: "post",
    label: "Job Position",
    customBodyRender: (item) => {
      return item?.position;
    },
  },
  {
    name: "post",
    label: "Type",
    customBodyRender: (item) => {
      return item?.job_type;
    },
  },
  {
    name: "start_date",
    label: "Start Date",
  },
  {
    name: "end_date",
    label: "End Date",
  },
  {
    name: "post",
    label: "Rate/Budget",
    customBodyRender: (item) => {
      return item.rate ? item.rate : item.budget;
    },
  },
  {
    name: "status",
    label: "Status",
  },
];

export default function DefaultContracts() {
  const [tab, setTab] = React.useState(0);

  const handleChangeTab = (event, newValue) => {
    setTab(newValue);
  };

  return (
    <Box sx={{ width: "100%", mt: 10 }}>
      <Box sx={{ p: 2, width: "95%", m: "0 auto" }}>
        <Typography
          sx={{ fontSize: { xs: 30, md: 36 }, fontWeight: "bold", ml: 1 }}
        >
          Contracts
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Tabs
            value={tab}
            onChange={handleChangeTab}
            aria-label="basic tabs example"
          >
            <Tab label="All Contracts" {...a11yProps(0)} />
            <Tab label="Daily" {...a11yProps(1)} />
            <Tab label="Fixed" {...a11yProps(2)} />
          </Tabs>
        </Box>

        <Box>
          <TabPanel value={tab} index={0}>
            <Contracts type="all" columns={defaultContractColumns} />
          </TabPanel>
          <TabPanel value={tab} index={1}>
            <Contracts type="Daily Rate" columns={defaultContractColumns} />
          </TabPanel>
          <TabPanel value={tab} index={2}>
            <Contracts type="Fixed Cost" columns={defaultContractColumns} />
          </TabPanel>
        </Box>
      </Box>
    </Box>
  );
}
