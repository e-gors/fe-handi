import React from "react";
import {
  Avatar,
  Box,
  Button,
  Chip,
  InputAdornment,
  Typography,
} from "@mui/material";
import FindJobFilter from "../components/FindJobFilter";
import FilterCard from "../components/FilterCard";
import SelectDropdown from "../../../components/SelectDropdown";
import FilterSide from "../components/FilterSide";
import FilterModal from "../components/FilterModal";
import FormField from "../../../components/FormField";

const sorts = ["Recent", "Old", "Low to High", "High to Low"];

function FindJob() {
  const [value, setValue] = React.useState(5);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ mt: 10 }}>
      <FilterModal open={open} handleClose={handleClose} />
      <FindJobFilter />

      <Box
        sx={{
          display: "flex",
          flexWrap: { xs: "wrap", md: "noWrap" },
        }}
      >
        <Box
          sx={{
            width: 240,
            ml: 5,
            mt: 2,
            display: { xs: "none", md: "block" },
          }}
        >
          <FilterSide />
        </Box>
        <Box>
          <Box sx={{ display: "flex", mt: 2, justifyContent: "space-between" }}>
            <Typography sx={{ mt: { xs: 2, md: 0 } }}>
              Search Results: 3
            </Typography>
            <SelectDropdown
              options={sorts}
              sx={{ width: { xs: "100%", md: 150 } }}
              size="small"
              label="Sort By"
            />
          </Box>
          <Box
            sx={{
              p: 1,
              maxHeight: 800,
              overflowY: "scroll",

              "::-webkit-scrollbar": {
                width: "10px",
              },

              "::-webkit-scrollbar-track": {
                background: "linear-gradient(to bottom, #ee0979, #ff6a00)",
                border: "1px solid black",
                borderRadius: "10px",
              },

              "::-webkit-scrollbar-thumb": {
                background: `linear-gradient(0deg, rgba(0,3,255,1) 0%, rgba(2,126,251,1) 100%)`,
                borderRadius: "10px",
              },
            }}
          >
            <FilterCard />
            <FilterCard />
            <FilterCard />
            <FilterCard />
            <FilterCard />
            <FilterCard />
            <FilterCard />
            <FilterCard />
            <FilterCard />
          </Box>
        </Box>

        <Box sx={{ m: "20px auto" }}>
          <Box
            sx={{
              width: 350,
              height: 400,
              mb: 1,
              border: "1px solid gray",
              p: 1,
              borderRadius: "10px 10px",
              background: "rgb(30, 36, 46)",
            }}
          >
            <Box
              sx={{
                background: "linear-gradient(to right, #ee0979, #ff6a00)",
                p: 1,
              }}
            >
              <Typography
                sx={{
                  fontWeigth: "bold",
                  fontSize: { xs: 16, md: 20 },
                  color: "white",
                  textAlign: "center",
                }}
              >
                Best rated clients
              </Typography>
            </Box>
            <Box
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
                  <Typography>Efren Goron</Typography>
                  <Typography>Hilongos, Leyte</Typography>
                </Box>
              </Box>
              <Box>
                <Typography
                  sx={{
                    background: "linear-gradient(to right, #ee0979, #ff6a00)",
                    color: "white",
                    p: 1,
                    m: 1,
                  }}
                >
                  Descriptions
                </Typography>
                <Typography>Descriptions...</Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    background: "linear-gradient(to right, #ee0979, #ff6a00)",
                    color: "white",
                    p: 1,
                    m: 1,
                  }}
                >
                  Skills
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                  <Chip
                    label="Web developer"
                    variant="outlined"
                    color="primary"
                    sx={{ m: "2px" }}
                  />
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
                <Typography>20 completed proejcts</Typography>
                <Typography>P500</Typography>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              width: 350,
              height: 400,
              mb: 1,
              border: "1px solid gray",
              p: 1,
              borderRadius: "10px 10px",
              background: "rgb(30, 36, 46)",
            }}
          >
            <Box
              sx={{
                background: "linear-gradient(to right, #ee0979, #ff6a00)",
                p: 1,
              }}
            >
              <Typography
                sx={{
                  fontWeigth: "bold",
                  fontSize: { xs: 16, md: 20 },
                  color: "white",
                  textAlign: "center",
                }}
              >
                Best rated clients
              </Typography>
            </Box>
            <Box
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
                  <Typography>Efren Goron</Typography>
                  <Typography>Hilongos, Leyte</Typography>
                </Box>
              </Box>
              <Box>
                <Typography
                  sx={{
                    background: "linear-gradient(to right, #ee0979, #ff6a00)",
                    color: "white",
                    p: 1,
                    m: 1,
                  }}
                >
                  Descriptions
                </Typography>
                <Typography>Descriptions...</Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    background: "linear-gradient(to right, #ee0979, #ff6a00)",
                    color: "white",
                    p: 1,
                    m: 1,
                  }}
                >
                  Skills
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                  <Chip
                    label="Web developer"
                    variant="outlined"
                    color="primary"
                    sx={{ m: "2px" }}
                  />
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
                <Typography>20 completed proejcts</Typography>
                <Typography>P500</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default FindJob;
