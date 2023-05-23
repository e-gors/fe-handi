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
import FormField from "../../../components/FormField";
import SearchIcon from "@mui/icons-material/Search";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SelectDropdown from "../../../components/SelectDropdown";
import ArticleIcon from "@mui/icons-material/Article";
import DataTable from "../../../components/DataTable";
import Http from "../../../utils/Http";
import { useHistory } from "react-router-dom";

const status = ["Pending", "Accepted", "Declined", "Withdrawn"];
const orderByRate = ["Ascending", "Descending"];
const orderByDate = ["Ascending", "Descending"];

const columns = [
  {
    name: "contractor",
    label: "Contractor",
  },
  {
    name: "contract_name",
    label: "Contract Name",
  },
  {
    name: "worker",
    label: "Worker",
  },
  {
    name: "type",
    label: "Type",
    customBodyRender: (item) => {
      return item.password;
    },
  },
  {
    name: "start_date",
    label: "Start Date",
  },
  {
    name: "rate",
    label: "Rate",
  },
  {
    name: "today",
    label: "Today",
  },
  {
    name: "this_week",
    label: "This Week",
  },
  {
    name: "status",
    label: "Status",
  },
];
function Offers(props) {
  const { role } = props;

  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const [loading, setLoading] = React.useState(false);
  const [offers, setOffers] = React.useState({
    data: [],
    meta: {},
  });

  const [filterValues, setFilterValues] = React.useState({
    values: {
      search: "",
      status: "",
      order_by_date: "",
      order_by_rate: "",
    },
  });
  const [limit, setLimit] = React.useState({
    limit: 10,
    page: 1,
  });

  React.useEffect(() => {
    setLimit((prev) => ({
      limit: prev.limit,
      page: 1,
    }));
    optimizedFn(filterValues.values);
  }, [filterValues.values]); // eslint-disable-line

  const fetchingData = (params = {}) => {
    setLoading(true);
    Http.get("/offers", {
      params: {
        ...limit,
        ...params,
      },
    }).then((res) => {
      if (res.data) {
        setOffers({
          data: res.data.data,
          meta: res.data.meta,
        });
      }
      setLoading(false);
    });
  };

  const debounce = (func) => {
    let timer;
    return function (...args) {
      const context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, 700);
    };
  };

  const optimizedFn = React.useCallback(debounce(fetchingData), []); // eslint-disable-line

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

  const handleFilterChange = (name, value) => {
    setFilterValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleChangePage = (newPage) => {
    fetchingData({ page: newPage + 1 });
  };

  const handleRowChange = (value) => {
    fetchingData({ limit: value });
    handleFilterChange("limit", value);
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
            My Offers
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

        <DataTable
          withPagination
          loading={loading}
          data={offers.data}
          columns={columns}
          rowsPerPage={filterValues.values.limit}
          count={offers.meta.total || 0}
          page={offers.meta.current_page - 1 || 0}
          onChangePage={handleChangePage}
          onRowsChangePage={handleRowChange}
        />

        {offers && offers.data.length === 0 && (
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
            {role === "Client" ? (
              <Box>
                <Typography sx={{ mt: 2 }}>NO OFFERS HAVE BEEN SENT</Typography>
                <Button
                  sx={{ width: 120, mt: 2, boxShadow: 5 }}
                  color="primary"
                  variant="contained"
                  size="small"
                  onClick={() => history.push("/new/job-offer")}
                >
                  Send Offer
                </Button>
              </Box>
            ) : (
              <Typography sx={{ mt: 2 }}>
                NO OFFERS HAVE BEEN RECEIVED
              </Typography>
            )}
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default Offers;
