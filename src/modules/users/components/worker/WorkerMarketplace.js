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

function WorkerMarketplace() {
  const [bookmark, setBookMark] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [showMore, setShowMore] = React.useState(false);
  const [displayedChips, setDisplayedChips] = React.useState(
    chipLabel.slice(0, 10)
  );
  const [filterValues, setFilterValues] = React.useState({
    values: {
      search: "",
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
        categories: [],
        location: [],
        salary_range: [0, 15000],
        skills: [],
      },
    });
  };

  return (
    <Box sx={{ p: { xs: 2, md: 5 } }}>
      <Box>
        <Typography
          sx={{ fontSize: { xs: 30, md: 36 }, fontWeight: "bold", ml: 1 }}
        >
          FindJob
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
                fontSize: 14,
                cursor: "pointer",
                textDecoration: "underline",
                color: "blue",
                whiteSpace: "noWrap",
              }}
            >
              Show more
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
          }}
        >
          <form
            style={{ display: "flex", alignItems: "center" }}
            onSubmit={handleFormSubmit}
          >
            <FormField
              type="search"
              label="Search"
              name="search"
              size="small"
              variant="outlined"
              placeholder="Search by jobs"
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
              sx={{ width: "100%" }}
            />
            <Button
              variant="outlined"
              color="primary"
              sx={{ ml: 1, backgroundColor: "white" }}
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
          </form>
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
              width: { xs: "100%", md: "49%" },
              p: 2,
              mt: 2,
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography>Virtual Assistant</Typography>
              <IconButton onClick={() => setBookMark(!bookmark)}>
                {!bookmark ? (
                  <BookmarkBorderIcon color="primary" />
                ) : (
                  <BookmarkIcon color="primary" variant="contained" />
                )}
              </IconButton>
            </Box>
            <Box sx={{ display: "flex", flexWrap: "noWrap", mt: 1 }}>
              <Avatar />
              <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                <Typography sx={{ ml: 2, whiteSpace: "noWrap" }}>
                  Efren Goron
                </Typography>
                <Typography sx={{ m: "0 10px" }}>•</Typography>
                <Typography>Admin Support</Typography>
                <Typography sx={{ m: "0 10px" }}>•</Typography>
                <Typography>Personal/Virtual Assistant</Typography>
                <Typography sx={{ m: "0 10px" }}>•</Typography>
                <Typography sx={{ color: "#08845A" }}>New</Typography>
              </Box>
            </Box>
            <Box sx={{ mt: 2 }}>
              <Typography
                sx={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  WebkitLineClamp: 4,
                  lineHeight: "1.2em",
                  maxHeight: 240,
                }}
              >
                I'm looking for a virtual assistant to perform the following
                duties: CRM Database Management - Remove/merge duplicate
                accounts in the database. Research account ists and add
                appropriate contacts as accounts in the database. Identify te
                aguy ahhahahaahahahaaa. I'm looking for a virtual assistant to
                perform the following duties: CRM Database Management -
                Remove/merge duplicate accounts in the database. Research
                account ists and add appropriate contacts as accounts in the
                database. Identify te aguy ahhahahaahahahaaa. I'm looking for a
                virtual assistant to perform the following duties: CRM Database
                Management - Remove/merge duplicate accounts in the database.
                Research account ists and add appropriate contacts as accounts
                in the database. Identify te aguy ahhahahaahahahaaa.{" "}
              </Typography>
            </Box>

            <Box sx={{ mt: 5 }}>
              <Chip label="Wordpress e-Commerce" sx={{ mr: 1, mt: 1 }} />
              <Chip label="Shopify" sx={{ mr: 1, mt: 1 }} />
              <Chip label="SEO" sx={{ mr: 1, mt: 1 }} />
              <Chip label="Shopify Template" sx={{ mr: 1, mt: 1 }} />
            </Box>

            <Box sx={{ display: "flex", mt: 5 }}>
              <Box sx={{ display: "flex", alignItems: "center", mr: 5 }}>
                <Box sx={{ fontSize: { xs: 18, md: 24 }, fontWeight: "bold" }}>
                  <AttachMoneyIcon />
                  100
                </Box>
                <Typography>/ Daily rate</Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", mr: 5 }}>
                <Typography
                  sx={{ fontWeight: "bold", fontSize: { xs: 18, md: 24 } }}
                >
                  40+
                </Typography>
                <Typography>hrs/ Week</Typography>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              backgroundColor: "#EBEBEB",
              borderRadius: 3,
              width: { xs: "100%", md: "49%" },
              p: 2,
              mt: 2,
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography>Virtual Assistant</Typography>
              <IconButton onClick={() => setBookMark(!bookmark)}>
                {!bookmark ? (
                  <BookmarkBorderIcon color="primary" />
                ) : (
                  <BookmarkIcon color="primary" variant="contained" />
                )}
              </IconButton>
            </Box>
            <Box sx={{ display: "flex", flexWrap: "noWrap", mt: 1 }}>
              <Avatar />
              <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                <Typography sx={{ ml: 2, whiteSpace: "noWrap" }}>
                  Efren Goron
                </Typography>
                <Typography sx={{ m: "0 10px" }}>•</Typography>
                <Typography>Admin Support</Typography>
                <Typography sx={{ m: "0 10px" }}>•</Typography>
                <Typography>Personal/Virtual Assistant</Typography>
                <Typography sx={{ m: "0 10px" }}>•</Typography>
                <Typography sx={{ color: "#08845A" }}>New</Typography>
              </Box>
            </Box>

            <Box sx={{ mt: 2 }}>
              <Typography
                sx={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  WebkitLineClamp: 4,
                  lineHeight: "1.2em",
                  maxHeight: 240,
                }}
              >
                I'm looking for a virtual assistant to perform the following
                duties: CRM Database Management - Remove/merge duplicate
                accounts in the database. Research account ists and add
                appropriate contacts as accounts in the database. Identify te
                aguy ahhahahaahahahaaa. I'm looking for a virtual assistant to
                perform the following duties: CRM Database Management -
                Remove/merge duplicate accounts in the database. Research
                account ists and add appropriate contacts as accounts in the
                database. Identify te aguy ahhahahaahahahaaa. I'm looking for a
                virtual assistant to perform the following duties: CRM Database
                Management - Remove/merge duplicate accounts in the database.
                Research account ists and add appropriate contacts as accounts
                in the database. Identify te aguy ahhahahaahahahaaa.{" "}
              </Typography>
            </Box>

            <Box sx={{ mt: 5 }}>
              <Chip label="Wordpress e-Commerce" sx={{ mr: 1, mt: 1 }} />
              <Chip label="Shopify" sx={{ mr: 1, mt: 1 }} />
              <Chip label="SEO" sx={{ mr: 1, mt: 1 }} />
              <Chip label="Shopify Template" sx={{ mr: 1, mt: 1 }} />
            </Box>

            <Box sx={{ display: "flex", mt: 5 }}>
              <Box sx={{ display: "flex", alignItems: "center", mr: 5 }}>
                <Box sx={{ fontSize: { xs: 18, md: 24 }, fontWeight: "bold" }}>
                  <AttachMoneyIcon />
                  100
                </Box>
                <Typography>/ Daily rate</Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", mr: 5 }}>
                <Typography
                  sx={{ fontWeight: "bold", fontSize: { xs: 18, md: 24 } }}
                >
                  40+
                </Typography>
                <Typography>hrs/ Week</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default WorkerMarketplace;
