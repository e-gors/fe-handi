import * as React from "react";
import PropTypes from "prop-types";
import {
  Tabs,
  Tab,
  Box,
  Typography,
  Button,
  InputAdornment,
  Menu,
  MenuItem,
  Divider,
} from "@mui/material";
import Http from "../../../utils/Http";
import DataTable from "../../../components/DataTable";
import FormField from "../../../components/FormField";
import SearchIcon from "@mui/icons-material/Search";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SelectDropdown from "../../../components/SelectDropdown";

const status = [
  "pending",
  "in progress",
  "feedback pending",
  "completed",
  "closed",
];
const orderByRate = ["Ascending", "Descending"];
const orderByDate = ["Ascending", "Descending"];

const columns = [
  {
    name: "bid",
    label: "Contractor",
    customBodyRender: (item) => {
      return item.user?.full_name;
    },
  },
  {
    name: "post.user",
    label: "Client",
    customBodyRender: (item) => {
      return item.full_name;
    },
  },
  {
    name: "post",
    label: "Contract Name",
    customBodyRender: (item) => {
      return item?.title;
    },
  },
  {
    name: "post",
    label: "Type",
    customBodyRender: (item) => {
      return item?.job_type;
    },
  },
  {
    name: "start_date",
    label: "Start Date",
  },
  {
    name: "end_date",
    label: "End Date",
  },
  {
    name: "post",
    label: "Rate/Budget",
    customBodyRender: (item) => {
      return item.rate ? item.rate : item.budget;
    },
  },
  {
    name: "status",
    label: "Status",
  },
];

export default function Contracts(props) {
  const { type } = props;

  const [loading, setLoading] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [contracts, setContracts] = React.useState({
    data: [],
    meta: {},
  });
  const [limit, setLimit] = React.useState({
    limit: 10,
    page: 1,
  });
  const [filterValues, setFilterValues] = React.useState({
    values: {
      search: "",
      status: "",
      order_by_date: "",
      order_by_rate: "",
      type: "",
    },
  });

  React.useEffect(() => {
    setFilterValues((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        type: type,
      },
    }));
  }, [type]);

  React.useEffect(() => {
    setLimit((prev) => ({
      limit: prev.limit,
      page: 1,
    }));
    optimizedFn(filterValues.values);
  }, [filterValues.values]); // eslint-disable-line

  const fetchingData = (params = {}) => {
    setLoading(true);
    Http.get("/contracts", {
      params: {
        ...limit,
        ...params,
      },
    })
      .then((res) => {
        if (res.data.data) {
          setContracts({
            data: res.data.data,
            meta: res.data.meta,
          });
        }
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.message);
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

    setFilterValues((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [name]: value,
      },
    }));
  };

  const handleChangeLimit = (name, value) => {
    setLimit((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleClearFilter = () => {
    setFilterValues({
      values: {
        search: "",
        status: "",
        order_by_date: "",
        order_by_rate: "",
        type: "all",
      },
    });
  };

  const handleFilterChange = (name, value) => {
    setFilterValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleChangePage = (e, newPage) => {
    if (limit.page !== newPage) {
      setLoading(true);
      setLimit((prev) => ({
        limit: prev.limit,
        page: newPage,
      }));
      optimizedFn({ page: newPage });
    }
  };

  const handleRowChange = (value) => {
    fetchingData({ limit: value });
    handleFilterChange("limit", value);
  };

  const handleEdit = (values) => {
    console.log(values);
  };

  const handleDelete = (values) => {
    console.log(values);
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
          p: 2,
          borderRadius: 2,
          mb: 2,
        }}
      >
        <form style={{ display: "flex", alignItems: "center" }}>
          <FormField
            type="search"
            label="Search"
            name="search"
            size="small"
            variant="outlined"
            placeholder="Search by contractors"
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
      <DataTable
        withPagination
        onEdit={handleEdit}
        onDelete={handleDelete}
        loading={loading}
        data={contracts.data}
        columns={columns}
        rowsPerPage={filterValues.values.limit}
        count={contracts.meta.total || 0}
        page={contracts.meta.current_page - 1 || 0}
        onChangePage={handleChangePage}
        onRowsChangePage={handleRowChange}
      />
    </Box>
  );
}
