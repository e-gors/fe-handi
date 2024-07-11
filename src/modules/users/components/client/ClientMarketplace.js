import {
  Avatar,
  Box,
  Button,
  Chip,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  Menu,
  MenuItem,
  Slider,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import FormField from "../../../../components/FormField";
import SearchIcon from "@mui/icons-material/Search";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SelectDropdown from "../../../../components/SelectDropdown";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

const chipLabel = [
  "Construction Worker",
  "Plumber",
  "Carpenter",
  "Weilder",
  "Construction Worker",
  "Plumber",
  "Carpenter",
  "Weilder",
  "Construction Worker",
  "Plumber",
  "Carpenter",
  "Weilder",
  "Construction Worker",
  "Plumber",
  "Carpenter",
  "Weilder",
  "Construction Worker",
  "Plumber",
  "Carpenter",
  "Weilder",
];

const categories = ["Category 1", "Category 2", "Category 3"];
const skills = ["Carpenter", "Construction Worker", "Plumber", "Driver"];
const locations = [
  "Hilongos, Leyte",
  "Hindang, Leyte",
  "Bato, Leyte",
  "Matalom, Leyte",
];

const sortBy = ["Relevance", "Rating", "Hourly Rate", "Hours Work"];

function ClientMarketplace() {
  const [bookmark, setBookMark] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [showMore, setShowMore] = React.useState(false);
  const [displayedChips, setDisplayedChips] = React.useState(
    chipLabel.slice(0, 10)
  );
  const [filterValues, setFilterValues] = React.useState({
    values: {
      search: "",
      sort_by: "",
      categories: [],
      location: [],
      salary_range: [0, 15000],
      skills: [],
    },
  });

  const formatSalaryRange = (value) => {
    return `₱${value[0]} - ₱${value[1]}`;
  };

  const handleChangeFilter = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const newValue = typeof value === "string" ? value.split(",") : value;

    setFilterValues((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [name]: newValue,
      },
    }));
  };

  const handleClearFilter = () => {
    setFilterValues({
      values: {
        search: "",
        sort_by: "",
        categories: [],
        location: [],
        salary_range: [0, 15000],
        skills: [],
      },
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  const handleShowMore = () => {
    setShowMore(!showMore);
    setDisplayedChips(chipLabel);
  };

  const handleShowLess = () => {
    setShowMore(!showMore);
    setDisplayedChips(chipLabel.slice(0, 10));
  };

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleFilterBySuggested = (label) => {
    setFilterValues({
      values: {
        search: label,
        sort_by: "",
        categories: [],
        location: [],
        salary_range: [0, 15000],
        skills: [],
      },
    });
  };

  return (
    <Box sx={{ p: { xs: 2, md: 5 }, mt: 10 }}>
      <Box>
        <Typography
          sx={{ fontSize: { xs: 30, md: 36 }, fontWeight: "bold", ml: 1 }}
        >
          Find Workers
        </Typography>

        <Stack
          sx={{
            display: "flex",
            flexWrap: { xs: "noWrap", md: "wrap" },
            flexDirection: "row",
            alignItems: "center",
            overflowX: { xs: "scroll", md: "none" },

            "&::-webkit-scrollbar": {
              width: 0,
            },
          }}
        >
          {displayedChips.map((label, i) => {
            return (
              <Chip
                key={i}
                label={label}
                variant="contained"
                sx={{ m: 1, cursor: "pointer" }}
                onClick={() => handleFilterBySuggested(label)}
              />
            );
          })}
          {!showMore && chipLabel.length > 3 && (
            <Typography
              component="span"
              variant="outlined"
              onClick={handleShowMore}
              sx={{
                fontSize: 12,
                cursor: "pointer",
                textDecoration: "underline",
                color: "blue",
                whiteSpace: "noWrap",
              }}
            >
              show more
            </Typography>
          )}
          {showMore && (
            <Typography
              component="span"
              variant="outlined"
              onClick={handleShowLess}
              sx={{
                fontSize: 14,
                cursor: "pointer",
                textDecoration: "underline",
                color: "blue",
                whiteSpace: "noWrap",
              }}
            >
              Show less
            </Typography>
          )}
        </Stack>

        <Box
          sx={{
            width: "100%",
            backgroundColor: "#EBEBEB",
            p: 2,
            borderRadius: 3,
            display: "flex",
            alignItems: "center",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <FormField
            type="search"
            label="Search"
            name="search"
            size="small"
            variant="outlined"
            placeholder="Search by names"
            onChange={handleChangeFilter}
            value={filterValues.values.search}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
              style: {
                backgroundColor: "white",
              },
            }}
            sx={{
              width: "100%",
            }}
          />
          <SelectDropdown
            label="Sort By"
            name="sort_by"
            onChange={handleChangeFilter}
            value={filterValues.values.sort_by}
            options={sortBy}
            sx={{
              mt: 0.5,
              backgroundColor: "white",
              maxWidth: { xs: "100%", md: 240 },
              ml: { xs: 0, md: 1 },
            }}
          />
          <Button
            variant="outlined"
            color="primary"
            sx={{
              backgroundColor: "white",
              width: { xs: "100%", md: 120 },
            }}
            onClick={handleOpen}
          >
            {<FilterAltIcon />} Filter
          </Button>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            PaperProps={{
              style: { minWidth: 300, maxHeight: 400, overFlowY: "scroll" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                p: "5px 10px",
              }}
            >
              <Typography>Filter</Typography>
              <Button onClick={handleClearFilter}>Clear filter</Button>
            </Box>
            <Divider />
            <MenuItem>
              <SelectDropdown
                name="categories"
                label="Categories"
                margin="dense"
                value={filterValues.values.categories}
                onChange={handleChangeFilter}
                multiple
                options={categories}
              />
            </MenuItem>
            <MenuItem>
              <SelectDropdown
                name="location"
                label="Location"
                margin="dense"
                value={filterValues.values.location}
                onChange={handleChangeFilter}
                multiple
                options={locations}
              />
            </MenuItem>
            <MenuItem>
              <SelectDropdown
                name="skills"
                label="Skills"
                margin="dense"
                value={filterValues.values.skills}
                onChange={handleChangeFilter}
                multiple
                options={skills}
              />
            </MenuItem>
            <MenuItem>
              <Slider
                name="salary_range"
                value={filterValues.values.salary_range}
                onChange={handleChangeFilter}
                valueLabelDisplay="auto"
                min={0}
                max={15000}
                step={100}
              />
            </MenuItem>
            <MenuItem>
              <FormField
                margin="dense"
                fullWidth
                label="Salary Range"
                value={formatSalaryRange(filterValues.values.salary_range)}
                readOnly
              />
            </MenuItem>

            <Button
              fullWidth
              variant="contained"
              color="primary"
              size="small"
              sx={{ mt: 1 }}
            >
              Search
            </Button>
          </Menu>
        </Box>

        <Box
          sx={{
            mt: 5,
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <Box
            sx={{
              backgroundColor: "#EBEBEB",
              borderRadius: 3,
              width: { xs: "100%", sm: "49%", md: "32%" },
              p: 2,
              mt: 2,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Avatar />
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box sx={{ ml: 1 }}>
                  <Typography>Efren Goron</Typography>
                  <Typography>Web Developer</Typography>
                </Box>
                <IconButton>
                  <BookmarkBorderIcon />
                </IconButton>
              </Box>
            </Box>
            <Stack
              sx={{
                mt: 2,
                display: "flex",
                flexWrap: "wrap",
                flexDirection: "row",
                alignItems: "center",

                "&::-webkit-scrollbar": {
                  width: 0,
                },
              }}
            >
              {displayedChips.map((label, i) => {
                return (
                  <Chip
                    key={i}
                    label={label}
                    variant="contained"
                    sx={{ m: 0.5, cursor: "pointer" }}
                    onClick={() => handleFilterBySuggested(label)}
                  />
                );
              })}
              {!showMore && chipLabel.length > 3 && (
                <Typography
                  component="span"
                  variant="outlined"
                  onClick={handleShowMore}
                  sx={{
                    fontSize: 12,
                    cursor: "pointer",
                    textDecoration: "underline",
                    color: "blue",
                    whiteSpace: "noWrap",
                  }}
                >
                  show more
                </Typography>
              )}
              {showMore && (
                <Typography
                  component="span"
                  variant="outlined"
                  onClick={handleShowLess}
                  sx={{
                    fontSize: 14,
                    cursor: "pointer",
                    textDecoration: "underline",
                    color: "blue",
                    whiteSpace: "noWrap",
                  }}
                >
                  Show less
                </Typography>
              )}
            </Stack>

            <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
              <Box
                sx={{ width: 150, height: 100, backgroundColor: "gray" }}
              ></Box>
              <Box
                sx={{ width: 150, height: 100, backgroundColor: "gray" }}
              ></Box>
            </Box>

            <Box sx={{ mt: 1 }}>
              <Box
                sx={{ display: "flex", justifyContent: "space-between", p: 2 }}
              >
                <Typography>1 - 1500 / h</Typography>
                <Typography>Star 5.0 (5)</Typography>
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              backgroundColor: "#EBEBEB",
              borderRadius: 3,
              width: { xs: "100%", sm: "49%", md: "32%" },
              p: 2,
              mt: 2,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Avatar />
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box sx={{ ml: 1 }}>
                  <Typography>Efren Goron</Typography>
                  <Typography>Web Developer</Typography>
                </Box>
                <IconButton>
                  <BookmarkBorderIcon />
                </IconButton>
              </Box>
            </Box>
            <Stack
              sx={{
                mt: 2,
                display: "flex",
                flexWrap: "wrap",
                flexDirection: "row",
                alignItems: "center",

                "&::-webkit-scrollbar": {
                  width: 0,
                },
              }}
            >
              {displayedChips.map((label, i) => {
                return (
                  <Chip
                    key={i}
                    label={label}
                    variant="contained"
                    sx={{ m: 0.5, cursor: "pointer" }}
                    onClick={() => handleFilterBySuggested(label)}
                  />
                );
              })}
              {!showMore && chipLabel.length > 3 && (
                <Typography
                  component="span"
                  variant="outlined"
                  onClick={handleShowMore}
                  sx={{
                    fontSize: 12,
                    cursor: "pointer",
                    textDecoration: "underline",
                    color: "blue",
                    whiteSpace: "noWrap",
                  }}
                >
                  show more
                </Typography>
              )}
              {showMore && (
                <Typography
                  component="span"
                  variant="outlined"
                  onClick={handleShowLess}
                  sx={{
                    fontSize: 14,
                    cursor: "pointer",
                    textDecoration: "underline",
                    color: "blue",
                    whiteSpace: "noWrap",
                  }}
                >
                  Show less
                </Typography>
              )}
            </Stack>

            <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
              <Box
                sx={{ width: 150, height: 100, backgroundColor: "gray" }}
              ></Box>
              <Box
                sx={{ width: 150, height: 100, backgroundColor: "gray" }}
              ></Box>
            </Box>

            <Box sx={{ mt: 1 }}>
              <Box
                sx={{ display: "flex", justifyContent: "space-between", p: 2 }}
              >
                <Typography>1 - 1500 / h</Typography>
                <Typography>Star 5.0 (5)</Typography>
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              backgroundColor: "#EBEBEB",
              borderRadius: 3,
              width: { xs: "100%", sm: "49%", md: "32%" },
              p: 2,
              mt: 2,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Avatar />
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box sx={{ ml: 1 }}>
                  <Typography>Efren Goron</Typography>
                  <Typography>Web Developer</Typography>
                </Box>
                <IconButton>
                  <BookmarkBorderIcon />
                </IconButton>
              </Box>
            </Box>
            <Stack
              sx={{
                mt: 2,
                display: "flex",
                flexWrap: "wrap",
                flexDirection: "row",
                alignItems: "center",

                "&::-webkit-scrollbar": {
                  width: 0,
                },
              }}
            >
              {displayedChips.map((label, i) => {
                return (
                  <Chip
                    key={i}
                    label={label}
                    variant="contained"
                    sx={{ m: 0.5, cursor: "pointer" }}
                    onClick={() => handleFilterBySuggested(label)}
                  />
                );
              })}
              {!showMore && chipLabel.length > 3 && (
                <Typography
                  component="span"
                  variant="outlined"
                  onClick={handleShowMore}
                  sx={{
                    fontSize: 12,
                    cursor: "pointer",
                    textDecoration: "underline",
                    color: "blue",
                    whiteSpace: "noWrap",
                  }}
                >
                  show more
                </Typography>
              )}
              {showMore && (
                <Typography
                  component="span"
                  variant="outlined"
                  onClick={handleShowLess}
                  sx={{
                    fontSize: 14,
                    cursor: "pointer",
                    textDecoration: "underline",
                    color: "blue",
                    whiteSpace: "noWrap",
                  }}
                >
                  Show less
                </Typography>
              )}
            </Stack>

            <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
              <Box
                sx={{ width: 150, height: 100, backgroundColor: "gray" }}
              ></Box>
              <Box
                sx={{ width: 150, height: 100, backgroundColor: "gray" }}
              ></Box>
            </Box>

            <Box sx={{ mt: 1 }}>
              <Box
                sx={{ display: "flex", justifyContent: "space-between", p: 2 }}
              >
                <Typography>1 - 1500 / h</Typography>
                <Typography>Star 5.0 (5)</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ClientMarketplace;
