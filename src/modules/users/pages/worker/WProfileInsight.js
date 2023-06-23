import {
  Avatar,
  Box,
  Button,
  IconButton,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DropdownMenuItem from "../../../../components/DropdownMenuItem";
import ErrorIcon from "@mui/icons-material/Error";
import PropTypes from "prop-types";
import ProfileInfo from "../../components/worker/ProfileInfo";
import Pusher from "pusher-js";
import NewReview from "../../components/NewReview";

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
    mt: 10,
    p: 1,
  },
  main: {
    maxWidth: { xs: "100%", sm: "95%", md: "95%" },
    m: "0 auto",
  },
  clientTextWrapper: {
    mb: 2,
  },
  clientText: {
    fontSize: { xs: 24, md: 30 },
    fontWeight: "bold",
  },
  profileInsightText: {
    fontWeight: "bold",
    fontSize: { xs: 24, md: 30 },
    mb: 2,
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
  profileCompleteWarning: {
    backgroundColor: "#FFEED8",
    p: 1.5,
    display: "flex",
    mb: 3,
    borderRadius: 2,
    boxShadow: 5,
  },
  youNeedToComplete: { ml: 1 },
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
  incomplete: {
    backgroundColor: "#6F7689",
    borderRadius: 5,
    color: "white",
    maxWidth: 150,
  },
};

function WProfileInsight() {
  const history = useHistory();
  const user = useSelector((state) => state.users.user);
  const { fullname, profile } = user;
  const { address, profile_completeness, profile_url } = profile[0];

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [tab, setTab] = React.useState(0);
  const [online, setOnline] = React.useState(false);
  const more = [
    {
      name: "Edit Profile",
      path: `/edit/profile/worker`,
    },
  ];

  // React.useEffect(() => {
  //   const pusher = new Pusher(process.env.REACT_APP_PUSHER_KEY, {
  //     cluster: process.env.REACT_APP_PUSHER_CLUSTER,
  //     encrypted: true,
  //   });

  //   const channel = pusher.subscribe("private-user." + user.id);

  //   channel.bind("pusher:subscription_succeeded", () => {
  //     console.log("Pusher subscription succeeded!");
  //   });

  //   channel.bind("App\\Events\\UserStatusUpdated", (data) => {
  //     setOnline(data.status === "online");
  //   });

  //   return () => {
  //     channel.unbind_all();
  //     channel.unsubscribe();
  //   };
  // }, [user.id]);

  const handleChangeTab = (event, newValue) => {
    setTab(newValue);
  };

  const handleOpenMore = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNavigate = (link) => {
    history.push(link);
  };

  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.main}>
        <DropdownMenuItem
          open={open}
          anchorEl={anchorEl}
          handleClose={handleClose}
          items={more}
          onNavigate={handleNavigate}
        />
        <Box>
          <Typography sx={styles.profileInsightText}>
            Profile Insights
          </Typography>

          {profile_completeness < 10 && (
            <Box sx={styles.profileCompleteWarning}>
              <ErrorIcon color="error" />
              <Typography sx={styles.youNeedToComplete}>
                You need to complete your profile to show up in the search
                results and be able to submit proposals
              </Typography>
            </Box>
          )}
        </Box>
        <Box sx={styles.profileCardWrapper}>
          <Box sx={styles.profileLeft}>
            <Avatar
              variant="rounded"
              sx={styles.profileAvatar}
              src={profile_url && profile_url}
            >
              <Typography>Profile</Typography>
            </Avatar>
            <Box sx={styles.nameWrapper}>
              <Typography sx={styles.name}>{fullname}</Typography>
              <Typography>{address}</Typography>
              {/* <Typography>{online ? "Online" : "Offline"}</Typography> */}
              {profile_completeness < 7 && (
                <Typography sx={styles.incomplete} align="center">
                  Incomplete
                </Typography>
              )}
            </Box>
          </Box>

          <Box sx={styles.buttonWrapper}>
            <Button
              variant="contained"
              color="primary"
              sx={styles.viewProfileButton}
              onClick={() => handleNavigate("/profile/worker")}
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
              <ProfileInfo user={user && user} />
            </TabPanel>
            <TabPanel value={tab} index={1}>
              <NewReview worker={user && user} isOwner={true} user={user} />
            </TabPanel>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default WProfileInsight;
