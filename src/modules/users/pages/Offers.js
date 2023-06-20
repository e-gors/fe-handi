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
import ToastNotificationContainer from "../../../components/ToastNotificationContainer";
import ToastNotification from "../../../components/ToastNotification";
import { options } from "../../../components/options";
import { useDispatch } from "react-redux";
import { updateUser } from "../../../redux/actions/userActions";
import ConfirmationModal from "../../../components/ConfirmationModal";

const status = ["Pending", "Accepted", "Declined", "Withdrawn", "Expired"];
const orderByRate = ["Ascending", "Descending"];
const orderByDate = ["Ascending", "Descending"];

function Offers(props) {
  const { type, role, columns } = props;

  const history = useHistory();
  const dispatch = useDispatch();

  const [selectedItem, setSelectedItem] = React.useState({});
  const [openConfirm, setOpenConfirm] = React.useState(false);
  const [method, setMethod] = React.useState();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [loadingOnSubmit, setLoadingOnSubmit] = React.useState(false);
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
      type: "",
    },
  });
  const [limit, setLimit] = React.useState({
    limit: 10,
    page: 1,
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
    Http.get("/offers", {
      params: {
        ...limit,
        ...params,
      },
    }).then((res) => {
      if (res.data.data) {
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

    setFilterValues((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [name]: value,
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

  const onCancel = (item) => {
    setSelectedItem(item);
    setMethod("cancel");
    setOpenConfirm(true);
  };

  const onAccept = (item) => {
    setSelectedItem(item);
    setMethod("accept");
    setOpenConfirm(true);
  };

  const handleRevoked = (item) => {
    setSelectedItem(item);
    setMethod("withdrawn");
    setOpenConfirm(true);
  };

  const handleAccept = () => {
    setLoadingOnSubmit(true);
    Http.post(`/offer/accept/${selectedItem.id}`)
      .then((res) => {
        if (res.data.code === 200) {
          setOpenConfirm(false);
          dispatch(updateUser(res.data.user));
          ToastNotification("success", res.data.message, options);
          history.push("/contracts");
        } else {
          ToastNotification("error", res.data.message, options);
        }
        setLoadingOnSubmit(false);
      })
      .catch((err) => {
        setLoadingOnSubmit(false);
        ToastNotification("error", err.message, options);
      });
  };

  const handleCancel = () => {
    setLoadingOnSubmit(true);
    Http.post(`/offer/cancel/${selectedItem.id}`)
      .then((res) => {
        if (res.data.code === 200) {
          setOpenConfirm(false);
          dispatch(updateUser(res.data.user));
          ToastNotification("success", res.data.message, options);
        } else {
          ToastNotification("error", res.data.message, options);
        }
        setLoadingOnSubmit(false);
      })
      .catch((err) => {
        setLoadingOnSubmit(false);
        ToastNotification("error", err.message, options);
      });
  };

  const handleWithdrawn = () => {
    setLoadingOnSubmit(true);
    Http.post(`/offer/withdraw/${selectedItem.id}`)
      .then((res) => {
        if (res.data.code === 200) {
          setOpenConfirm(false);
          dispatch(updateUser(res.data.user));
          ToastNotification("success", res.data.message, options);
        } else {
          ToastNotification("error", res.data.message, options);
        }
        setLoadingOnSubmit(false);
      })
      .catch((err) => {
        setLoadingOnSubmit(false);
        ToastNotification("error", err.message, options);
      });
  };

  const handleConfirm = () => {
    if (method === "cancel") {
      handleCancel();
    } else if (method === "accept") {
      handleAccept();
    } else {
      handleWithdrawn();
    }
  };

  return (
    <Box>
      <ToastNotificationContainer />
      <ConfirmationModal
        open={openConfirm}
        onClose={() => setOpenConfirm(false)}
        onConfirm={handleConfirm}
        loading={loadingOnSubmit}
        title={
          method === "accept"
            ? "Accept Offer?"
            : method === "cancel"
            ? "Cancel Offer?"
            : "Withdraw Offer"
        }
        message={
          method ? `Your about to ${method && method} offer, continue ?` : false
        }
      />
      <Box>
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
          onCancel={role === "Worker" && onCancel}
          onAccept={role === "Worker" && onAccept}
          onRevoked={role === "Client" && handleRevoked}
          search={filterValues.values.search}
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
