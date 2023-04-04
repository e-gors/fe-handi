import {
  Avatar,
  Box,
  Button,
  Chip,
  CircularProgress,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import AppBarMenu from "../../../layouts/AppBarMenu";
import FormField from "../../../components/FormField";
import EngineeringIcon from "@mui/icons-material/Engineering";
import ReceiptIcon from "@mui/icons-material/Receipt";
import PaidIcon from "@mui/icons-material/Paid";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import { styles } from "../../../assets/styles/styles";
import { useHistory } from "react-router-dom";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MenuBar from "../../../layouts/MenuBar";

const suggestedSearch = [
  "Data Entry",
  "Graphic Design",
  "Design",
  "Logo Design",
  "WordPress",
];

const cardData = [
  {
    icon: <EngineeringIcon sx={{ fontSize: 45 }} />,
    number: 800000,
    description: "Skilled Workers",
  },
  {
    icon: <ReceiptIcon sx={{ fontSize: 45 }} />,
    number: "1 Million",
    description: "Paid Invoices",
  },
  {
    icon: <PaidIcon sx={{ fontSize: 45 }} />,
    number: "$250 Million",
    description: "Paid Workers",
  },
  {
    icon: <ThumbUpOffAltIcon sx={{ fontSize: 45 }} />,
    number: "99%",
    description: "Customer Satisfactory Rate",
  },
];

const workerData = [
  {
    fullname: "Efren Goron",
    location: "Hilongos, Leyte",
    status: "Unavailable",
    description: "Background Descriptions...",
    doneProjects: "12 Projects",
    rate: "$80/hr",
  },
  {
    fullname: "Criscilla Gumanid",
    location: "Hilongos, Leyte",
    status: "Available",
    description: "Background Descriptions...",
    doneProjects: "12 Projects",
    rate: "$80/hr",
  },
  {
    fullname: "Efren Goron",
    location: "Hilongos, Leyte",
    status: "Available",
    description: "Background Descriptions...",
    doneProjects: "12 Projects",
    rate: "$80/hr",
  },
  {
    fullname: "Criscilla Gumanid",
    location: "Hilongos, Leyte",
    status: "Available",
    description: "Background Descriptions...",
    doneProjects: "12 Projects",
    rate: "$80/hr",
  },
  {
    fullname: "Efren Goron",
    location: "Hilongos, Leyte",
    status: "Available",
    description: "Background Descriptions...",
    doneProjects: "12 Projects",
    rate: "$80/hr",
  },
  {
    fullname: "Criscilla Gumanid",
    location: "Hilongos, Leyte",
    status: "Available",
    description: "Background Descriptions...",
    doneProjects: "12 Projects",
    rate: "$80/hr",
  },
  {
    fullname: "Efren Goron",
    location: "Hilongos, Leyte",
    status: "Unavailable",
    description: "Background Descriptions...",
    doneProjects: "12 Projects",
    rate: "$80/hr",
  },
  {
    fullname: "Criscilla Gumanid",
    location: "Hilongos, Leyte",
    status: "Unavailable",
    description: "Background Descriptions...",
    doneProjects: "12 Projects",
    rate: "$80/hr",
  },
  {
    fullname: "Efren Goron",
    location: "Hilongos, Leyte",
    status: "Unavailable",
    description: "Background Descriptions...",
    doneProjects: "12 Projects",
    rate: "$80/hr",
  },
  {
    fullname: "Criscilla Gumanid",
    location: "Hilongos, Leyte",
    status: "Unavailable",
    description: "Background Descriptions...",
    doneProjects: "12 Projects",
    rate: "$80/hr",
  },
  {
    fullname: "Efren Goron",
    location: "Hilongos, Leyte",
    status: "Available",
    description: "Background Descriptions...",
    doneProjects: "12 Projects",
    rate: "$80/hr",
  },
  {
    fullname: "Criscilla Gumanid",
    location: "Hilongos, Leyte",
    status: "Available",
    description: "Background Descriptions...",
    doneProjects: "12 Projects",
    rate: "$80/hr",
  },
  {
    fullname: "Efren Goron",
    location: "Hilongos, Leyte",
    status: "Available",
    description: "Background Descriptions...",
    doneProjects: "12 Projects",
    rate: "$80/hr",
  },
  {
    fullname: "Criscilla Gumanid",
    location: "Hilongos, Leyte",
    status: "Available",
    description: "Background Descriptions...",
    doneProjects: "12 Projects",
    rate: "$80/hr",
  },
  {
    fullname: "Efren Goron",
    location: "Hilongos, Leyte",
    status: "Available",
    description: "Background Descriptions...",
    doneProjects: "12 Projects",
    rate: "$80/hr",
  },
  {
    fullname: "Criscilla Gumanid",
    location: "Hilongos, Leyte",
    status: "Available",
    description: "Background Descriptions...",
    doneProjects: "12 Projects",
    rate: "$80/hr",
  },
  {
    fullname: "Efren Goron",
    location: "Hilongos, Leyte",
    status: "Available",
    description: "Background Descriptions...",
    doneProjects: "12 Projects",
    rate: "$80/hr",
  },
  {
    fullname: "Criscilla Gumanid",
    location: "Hilongos, Leyte",
    status: "Available",
    description: "Background Descriptions...",
    doneProjects: "12 Projects",
    rate: "$80/hr",
  },
  {
    fullname: "Efren Goron",
    location: "Hilongos, Leyte",
    status: "Available",
    description: "Background Descriptions...",
    doneProjects: "12 Projects",
    rate: "$80/hr",
  },
  {
    fullname: "Criscilla Gumanid",
    location: "Hilongos, Leyte",
    status: "Unavailable",
    description: "Background Descriptions...",
    doneProjects: "12 Projects",
    rate: "$80/hr",
  },
  {
    fullname: "Efren Goron",
    location: "Hilongos, Leyte",
    status: "Unavailable",
    description: "Background Descriptions...",
    doneProjects: "12 Projects",
    rate: "$80/hr",
  },
  {
    fullname: "Criscilla Gumanid",
    location: "Hilongos, Leyte",
    status: "Available",
    description: "Background Descriptions...",
    doneProjects: "12 Projects",
    rate: "$80/hr",
  },
];

function FindPeople() {
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleOpen = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [loading, setLoading] = React.useState(false);
  const [search, setSearch] = React.useState("");

  const onSearch = (e) => {
    setSearch(e.target.value);
  };

  // const filteredData = workerData.filter((data, i) => {
  //   return data.fullname.toLowerCase().includes(search);
  // });

  return (
    <Box sx={{ mt: { xs: 4, md: 5 } }}>
      <MenuBar
        menuItems={["More info", "Visit profile"]}
        open={open}
        handleClose={() => handleClose()}
        anchorEl={anchorEl}
      />
      <AppBarMenu />
      <Box sx={{ mt: 6 }}>
        <Box
          sx={{
            height: "auto",
            minHeight: { xs: 300, md: 400 },
            backgroundColor: "black",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "center",
            pl: { xs: 10, md: 20 },
            color: "white",

            "@media(max-width: 568px)": {
              p: 2,
            },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: 24, md: 36 },
              fontWeight: "bold",
            }}
          >
            Find & Hire <br /> Skilled Workers
          </Typography>
          <Typography>
            Work with the best and skilled workers from around Hilongos
            Municipality on our secure,
          </Typography>
          <Typography>flexible and cost-effective platform.</Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              flexWrap: "wrap",
              mt: 1,
            }}
          >
            <FormField
              size="small"
              label="Search People"
              sx={{ width: 240 }}
              name="search"
              value={search}
              onChange={onSearch}
              InputProps={{
                style: {
                  background: "rgba(255, 255, 255)",
                  color: "black",
                  border: "1px solid white",
                },
              }}
            />
            <Typography sx={{ m: "0 10px" }}>or</Typography>
            <Button
              variant="contained"
              color="primary"
              sx={styles.customBlueButton}
              onClick={() => history.push("/find-jobs")}
            >
              Post a Job
            </Button>
          </Box>
          {/* <Box>
            {suggestedSearch &&
              suggestedSearch.map((search, i) => (
                <Chip
                  color="secondary"
                  onClick={function () {}}
                  variant="soft"
                  label={search}
                  sx={{ m: 0.5 }}
                  key={i}
                />
              ))}
          </Box> */}
        </Box>
        <Box
          sx={{
            mt: 2,
            display: "flex",
            justifyContent: "space-evenly",
            alignContent: "center",
            flexWrap: "wrap",

            "@media(max-width: 412px)": {
              display: "block",
            },
          }}
        >
          {!workerData.length &&
            cardData &&
            cardData.map((data, i) => (
              <Box
                key={i}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  p: 3,

                  "&:hover": {
                    backgroundColor: "gray",
                  },
                }}
              >
                <Box>{data.icon}</Box>
                <Box sx={{ ml: 2 }}>
                  <Typography sx={{ fontSize: { xs: 18, md: 24, lg: 28 } }}>
                    {data.number}
                  </Typography>
                  <Typography sx={{}}>{data.description}</Typography>
                </Box>
              </Box>
            ))}
        </Box>

        {loading && (
          <Box sx={{ textAlign: "center" }}>
            <CircularProgress />
          </Box>
        )}
        {workerData.length !== 0 && (
          <Typography sx={{ ml: 2 }}>Results: {workerData.length}</Typography>
        )}

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
        >
          {workerData &&
            workerData.map((data, i) => {
              return (
                <Box
                  key={i}
                  sx={{
                    width: 320,
                    border: "1px solid gray",
                    p: 2,
                    m: 1,
                    borderRadius: 2,
                    background: "rgb(30, 36, 46)",
                    color: "#fff",
                    height: "auto",
                    boxShadow: "0 0 20px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-evenly",
                      alignItems: "center",
                    }}
                  >
                    <Avatar
                      alt="User Profile"
                      sx={{ bgcolor: "blue", width: 60, height: 60 }}
                    />
                    <Box>
                      <Typography>{data.fullname}</Typography>
                      <Typography>{data.location}</Typography>
                      <Chip
                        variant="outlined"
                        label={data.status}
                        color={
                          data.status === "Available" ? "primary" : "error"
                        }
                      />
                    </Box>
                    <IconButton onClick={handleOpen}>
                      <MoreVertIcon color="primary" />
                    </IconButton>
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        background:
                          "linear-gradient(to right, #ee0979, #ff6a00)",
                        color: "white",
                        p: 1,
                        m: 1,
                      }}
                    >
                      Descriptions
                    </Typography>
                    <Typography>{data.description}</Typography>
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        background:
                          "linear-gradient(to right, #ee0979, #ff6a00)",
                        color: "white",
                        p: 1,
                        m: 1,
                      }}
                    >
                      Skills
                    </Typography>
                    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                      {suggestedSearch &&
                        suggestedSearch.map((skill, i) => (
                          <Chip
                            key={i}
                            label={skill}
                            variant="outlined"
                            color="primary"
                            sx={{ m: "2px" }}
                          />
                        ))}
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      backgroundColor: "gray",
                      color: "white",
                      display: "flex",
                      justifyContent: "space-around",
                      p: 1,
                      m: 1,
                    }}
                  >
                    <Typography>{data.doneProjects}</Typography>
                    <Typography>{data.rate}</Typography>
                  </Box>

                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    disabled={data.status === "Available" ? false : true}
                    sx={styles.customBlueButton}
                  >
                    {data.status === "Available"
                      ? "Invite for job"
                      : "Not Available"}
                  </Button>
                </Box>
              );
            })}
        </Box>
      </Box>
    </Box>
  );
}

export default FindPeople;
