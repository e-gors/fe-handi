import * as React from "react";
import {
  Box,
  Typography,
  Button,
  InputAdornment,
  Menu,
  MenuItem,
  Divider,
} from "@mui/material";
import FormField from "../../../../components/FormField";
import SearchIcon from "@mui/icons-material/Search";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SelectDropdown from "../../../../components/SelectDropdown";
import ArticleIcon from "@mui/icons-material/Article";

const status = ["Pending", "Accepted", "Declined", "Withdrawn"];
const orderByRate = ["Ascending", "Descending"];
const orderByDate = ["Ascending", "Descending"];

function ClientProposal() {
  const [loading, setLoading] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [filterValues, setFilterValues] = React.useState({
    values: {
      limit: 10,
      search: "",
      status: "",
      order_by_date: "",
      order_by_rate: "",
    },
  });

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
        status: "",
        order_by_date: "",
        order_by_rate: "",
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
      <Box>
        <Box>
          <Typography sx={{ fontSize: { xs: 20, md: 24 }, m: 2 }}>
            My Proposals
          </Typography>
          <Box
            sx={{
              width: "100%",
              backgroundColor: "#EBEBEB",
              p: 2,
              borderRadius: 2,
              mb: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <FormField
                type="search"
                label="Search"
                name="search"
                size="small"
                variant="outlined"
                placeholder="Search by Job Categories"
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
                  style: { minWidth: 300 },
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
                    name="status"
                    label="Status"
                    value={filterValues.values.status}
                    onChange={handleChangeFilter}
                    options={status}
                  />
                </MenuItem>
                <MenuItem>
                  <SelectDropdown
                    name="order_by_date"
                    label="Order By Date"
                    value={filterValues.values.order_by_date}
                    onChange={handleChangeFilter}
                    options={orderByDate}
                  />
                </MenuItem>
                <MenuItem>
                  <SelectDropdown
                    name="order_by_rate"
                    label="Order By Rate"
                    value={filterValues.values.order_by_rate}
                    onChange={handleChangeFilter}
                    options={orderByRate}
                  />
                </MenuItem>
              </Menu>
            </Box>
          </Box>
        </Box>

        <Box align="center" sx={{ mt: 5, p: 2 }}>
          <ArticleIcon
            sx={{
              width: { xs: 100, md: 120 },
              height: { xs: 100, md: 120 },
              color: "#BEBEBE",
              boxShadow: 20,
              borderRadius: 3,
            }}
          />
          <Typography sx={{ mt: 2 }}>NO OFFERS HAVE BEEN RECEIVED</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default ClientProposal;
