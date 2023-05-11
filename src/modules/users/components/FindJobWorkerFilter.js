import {
  Box,
  Button,
  Divider,
  InputAdornment,
  Menu,
  MenuItem,
  Slider,
  Typography,
} from "@mui/material";
import React from "react";
import FormField from "../../../components/FormField";
import SearchIcon from "@mui/icons-material/Search";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SelectDropdown from "../../../components/SelectDropdown";

const locations = [
  "Hilongos, Leyte",
  "Hindang, Leyte",
  "Bato, Leyte",
  "Matalom, Leyte",
];

const sortBy = ["Relevance", "Rating", "Hourly Rate", "Hours Work"];

function FindJobWorkerFilter(props) {
  const { categories = [], skills = [], type } = props;

  const [anchorEl, setAnchorEl] = React.useState(null);
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

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#EBEBEB",
          p: 1,
          borderRadius: 3,
          display: "flex",
          alignItems: "center",
          flexDirection: { xs: "column", md: "row" },
          boxShadow: 5,
        }}
      >
        <FormField
          type="search"
          label="Search"
          name="search"
          size="small"
          variant="outlined"
          placeholder={
            type === "jobs" ? "Search by job categories" : "Search by names"
          }
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
        <Box sx={{ display: "flex", width: "100%" }}>
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
              mr: { xs: 1, md: 0 },
            }}
          />
          <Button
            size="small"
            variant="outlined"
            color="primary"
            sx={{
              backgroundColor: "white",
              width: { xs: "50%", md: 120 },
              maxHeight: 40,
              mt: { xs: 1, md: 1 },
            }}
            onClick={handleOpen}
          >
            {<FilterAltIcon />} Filter
          </Button>
        </Box>

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
    </Box>
  );
}

export default FindJobWorkerFilter;
