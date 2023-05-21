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

const status = ["Closed", "Disputing", "Feedback Pending", "Open", "Paused"];
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

export default function Contracts(props) {
  // const {columns, data} = props;

  const [loading, setLoading] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [userList, setUserList] = React.useState({
    data: [],
    meta: {},
  });

  const [filterValues, setFilterValues] = React.useState({
    values: {
      limit: 10,
      search: "",
      status: "",
      order_by_date: "",
      order_by_rate: "",
    },
  });

  //   React.useEffect(() => {
  //     fetchingData();
  //   }, []); // eslint-disable-line

  const fetchingData = (params = {}) => {
    // setLoading(true);
    // Http.get("/attendances", {
    //   params: {
    //     ...filterValues.values,
    //     ...params,
    //   },
    // }).then((res) => {
    //   if (res.data.data) {
    //     setUserList({
    //       data: res.data.data,
    //       meta: res.data.meta,
    //     });
    //   }
    //   setLoading(false);
    // });
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
        data={userList.data}
        columns={columns}
        rowsPerPage={filterValues.values.limit}
        count={userList.meta.total || 0}
        page={userList.meta.current_page - 1 || 0}
        onChangePage={handleChangePage}
        onRowsChangePage={handleRowChange}
      />
    </Box>
  );
}
