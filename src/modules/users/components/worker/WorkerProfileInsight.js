import {
  Avatar,
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import UserRating from "../../../../components/UserRating";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import WorkIcon from "@mui/icons-material/Work";
import ArticleIcon from "@mui/icons-material/Article";
import AssignmentIcon from "@mui/icons-material/Assignment";
import DropdownMenuItem from "../../../../components/DropdownMenuItem";
import ErrorIcon from "@mui/icons-material/Error";
import PropTypes from "prop-types";
import ProfileInfo from "./ProfileInfo";

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

const styles = {
  wrapper: {
    maxWidth: { xs: "100%", sm: "95%", md: "95%" },
    m: "0 auto",
  },
  clientTextWrapper: {
    mb: 2,
  },
  clientText: {
    fontSize: { xs: 24, md: 36 },
    fontWeight: "bold",
  },
  profileCardWrapper: {
    backgroundColor: "#EEEEEE",
    display: "flex",
    justifyContent: "space-between",
    p: 2,
    borderRadius: 3,
    boxShadow: 5,
    mb: 5,

    "@media(max-width: 500px)": {
      flexDirection: "column",
    },
  },
  profileLeft: { display: "flex" },
  profileAvatar: { width: { xs: 75, md: 100 }, height: { xs: 75, md: 100 } },
  nameWrapper: { ml: 2 },
  name: { mb: 1, fontWeight: "bold", fontSize: { xs: 16, md: 20 } },
  buttonWrapper: {
    "@media(max-width: 500px)": {
      mt: 5,
      display: "flex",
      flexDirection: "row",
      flexWrap: "noWrap",
    },
  },
  viewProfileButton: {
    whiteSpace: "noWrap",
    "@media(max-width: 500px)": {
      width: "85%",
    },
    "@media(max-width: 390px)": {
      width: "80%",
    },
  },
  moreButton: {
    backgroundColor: "white",
    "&:hover": { backgroundColor: "#BEBEBE" },
    ml: 1,
  },
};

function ProfileInsight() {
  const history = useHistory();
  const user = useSelector((state) => state.users.user);
  const { fullname, profile, role, uuid } = user;
  const { address } = profile;

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [tab, setTab] = React.useState(0);

  const more = [
    {
      name: "Edit Profile",
      path: `/edit/${role && role}/${uuid && uuid}`,
    },
  ];

  const handleChangeTab = (event, newValue) => {
    setTab(newValue);
  };

  const handleOpenMore = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = (link) => {
    setAnchorEl(null);
    history.push(link);
  };

  const handleNavigate = (link) => {
    history.push(link);
  };

  return (
    <Box sx={styles.wrapper}>
      <DropdownMenuItem
        open={open}
        anchorEl={anchorEl}
        handleClose={handleClose}
        items={more}
      />
      <Box>
        <Typography
          sx={{ fontWeight: "bold", fontSize: { xs: 24, md: 30 }, mb: 2 }}
        >
          Profile Insights
        </Typography>

        <Box
          sx={{
            backgroundColor: "#FFEED8",
            p: 1.5,
            display: "flex",
            mb: 3,
            borderRadius: 2,
            boxShadow: 5,
          }}
        >
          <ErrorIcon color="error" />
          <Typography sx={{ ml: 1 }}>
            You need to complete your profile to show up in the search results
            and be able to submit proposals
          </Typography>
        </Box>
      </Box>
      <Box sx={styles.profileCardWrapper}>
        <Box sx={styles.profileLeft}>
          <Avatar variant="rounded" sx={styles.profileAvatar}>
            <Typography>Profile</Typography>
          </Avatar>
          <Box sx={styles.nameWrapper}>
            <Typography sx={styles.name}>Efren Goron</Typography>
            <Typography>Hilongos, Leyte</Typography>
            <Typography
              sx={{
                backgroundColor: "#6F7689",
                borderRadius: 5,
                color: "white",
              }}
              align="center"
            >
              Incomplete
            </Typography>
          </Box>
        </Box>

        <Box sx={styles.buttonWrapper}>
          <Button
            variant="contained"
            color="primary"
            sx={styles.viewProfileButton}
            onClick={() =>
              handleNavigate(`/overview/${role && role}/${uuid && uuid}`)
            }
          >
            View Profile
          </Button>
          <IconButton sx={styles.moreButton} onClick={handleOpenMore}>
            <MoreVertIcon />
          </IconButton>
        </Box>
      </Box>

      <Box>
        <Box>
          <Tabs
            value={tab}
            onChange={handleChangeTab}
            aria-label="basic tabs example"
          >
            <Tab label="Profile Info" {...a11yProps(0)} />
            <Tab label="Reviews" {...a11yProps(1)} />
          </Tabs>
        </Box>

        <Box>
          <TabPanel value={tab} index={0}>
            <ProfileInfo />
          </TabPanel>
          <TabPanel value={tab} index={1}>
            Tab 2
          </TabPanel>
        </Box>
      </Box>
    </Box>
  );
}

export default ProfileInsight;
