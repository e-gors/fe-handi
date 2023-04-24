import { Box, Button, Grid, Tab, Tabs, Typography } from "@mui/material";
import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import PropTypes from "prop-types";
import ProfileOverview from "./ProfileOverview";
import Project from "./Project";
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

function WorkerProfile() {
  const [tab, setTab] = React.useState(0);

  const handleChangeTab = (event, newValue) => {
    setTab(newValue);
  };

  return (
    <Box>
      <Box>
        <Button variant="text">
          {<ArrowBackIcon sx={{ mr: 1 }} />} Exit Edit Mode
        </Button>
      </Box>

      <Box sx={{ position: "relative" }}>
        <Box
          sx={{
            width: "100%",
            height: { xs: 150, md: 300 },
            backgroundColor: "#EEEEEE",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 3,
            color: "#BEBEBE",
            transition: "0.5s",

            "&:hover": {
              backgroundColor: "#BEBEBE",
              color: "white",
            },
          }}
        >
          <AddAPhotoIcon
            sx={{
              width: { xs: 50, md: 100 },
              height: { xs: 50, md: 100 },
              color: "inherit",
            }}
          />
        </Box>

        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: 20,
            width: { xs: 100, md: 200 },
            height: "auto",
            backgroundColor: "white",
            p: 0.5,
            borderRadius: 3,
            transition: "0.5s",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: { xs: 100, md: 200 },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#EEEEEE",
              borderRadius: 3,
              color: "#BEBEBE",
              transition: "0.5s",

              "&:hover": {
                backgroundColor: "#BEBEBE",
                color: "white",
              },
            }}
          >
            <AddAPhotoIcon
              sx={{
                width: { xs: 25, md: 50 },
                height: { xs: 25, md: 50 },
                color: "inherit",
              }}
            />
          </Box>
        </Box>
      </Box>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={4} md={3} lg={2}>
          <Box sx={{ mt: { xs: 5, md: 8 } }}>
            <Box sx={{ textAlign: { xs: "left", md: "center" } }}>
              <Typography>Rating star star</Typography>
              <Typography>Efren Goron</Typography>
              <Typography>
                Purok Lapulapu Barangay Atabay Hilongos, Leyte
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={8} md={9} lg={10}>
          <Box sx={{ p: { xs: 1, md: 5 } }}>
            <Box sx={{ width: "100%" }}>
              <Box>
                <Box>
                  <Tabs
                    value={tab}
                    onChange={handleChangeTab}
                    aria-label="basic tabs example"
                  >
                    <Tab label="Profile Overview" {...a11yProps(0)} />
                    <Tab label="Projects" {...a11yProps(1)} />
                  </Tabs>
                </Box>

                <Box>
                  <TabPanel value={tab} index={0}>
                    <ProfileOverview />
                  </TabPanel>
                  <TabPanel value={tab} index={1}>
                    <Project />
                  </TabPanel>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default WorkerProfile;
