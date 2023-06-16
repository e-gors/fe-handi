/** @format */

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
import ConfirmationModal from "../../../components/ConfirmationModal";
import ToastNotification from "../../../components/ToastNotification";
import { options } from "../../../components/options";
import { useDispatch } from "react-redux";
import { updateUser } from "../../../redux/actions/userActions";
import ToastNotificationContainer from "../../../components/ToastNotificationContainer";

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
    name: "tittle",
    label: "Job",
  },
  {
    name: "post.user",
    label: "Client",
  },
  {
    name: "post",
    label: "Contract Name",
  },
  {
    name: "job_type",
    label: "Type",
  },
  {
    name: "position",
    label: "Position",
  },
  {
    name: "days",
    label: "Number of Days",
  },

  {
    name: "rate",
    label: "Rate/Budget",
  },
  {
    name: "status",
    label: "Status",
  },
];

export default function Contracts(props) {
  const { type, jobs } = props;

  const dispatch = useDispatch();

  const [openCompleteContract, setOpenCompleteContract] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState({});
  const [onLoadingConfirm, setLoadingConfirm] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [contracts, setContracts] = React.useState({
    data: [],
    meta: {},
  });
  console.log(contracts);
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

  const onComplete = (item) => {
    setSelectedItem(item);
    setOpenCompleteContract(true);
  };

  const handleCompleteContract = () => {
    setLoadingConfirm(true);
    Http.post(`/contract/complete/${selectedItem.id}`)
      .then((res) => {
        if (res.data.code === 200) {
          dispatch(updateUser(res.data.user));
          ToastNotification("success", res.data.message, options);
          setOpenCompleteContract(false);
        } else {
          ToastNotification("error", res.data.message, options);
        }
        setLoadingConfirm(false);
      })
      .catch((err) => {
        setLoadingConfirm(false);
        ToastNotification("error", err.message, options);
      });
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
      <ToastNotificationContainer />
      <ConfirmationModal
        title="Complete Contract?"
        message="You are about to change the status of your contract from 'in progress' to 'complete'"
        loading={onLoadingConfirm}
        open={openCompleteContract}
        onClose={() => setOpenCompleteContract(false)}
        onConfirm={handleCompleteContract}
      />
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
        onComplete={onComplete}
        onEdit={handleEdit}
        onDelete={handleDelete}
        loading={loading}
        data={jobs}
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
