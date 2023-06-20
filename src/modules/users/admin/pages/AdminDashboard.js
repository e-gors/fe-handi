/** @format */
import { Box, Grid, Typography } from "@mui/material";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import ArticleIcon from "@mui/icons-material/Article";
import PersonIcon from "@mui/icons-material/Person";
import GavelIcon from "@mui/icons-material/Gavel";
import AssessmentIcon from "@mui/icons-material/Assessment";
import React from "react";
import "./AdminDashboard.css";
import { Button, InputAdornment, Menu, MenuItem, Divider } from "@mui/material";
import FormField from "../../../../components/FormField";
import SearchIcon from "@mui/icons-material/Search";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SelectDropdown from "../../../../components/SelectDropdown";
import Http from "../../../../utils/Http";
import DataTable from "../../../../components/DataTable";

const status = ["Pending", "Accepted", "Declined", "Withdrawn"];
const orderByRate = ["asc", "desc"];
const orderByDate = ["asc", "desc"];

const styles = {
  wrapper: { mt: 0, p: 2 },
  filterWrapper: {
    width: "100%",
    backgroundColor: "#EBEBEB",
    p: 2,
    borderRadius: 2,
    mb: 2,
  },
  main: {
    display: "flex",
    alignItems: "center",
  },
  filter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    p: "5px 10px",
  },
  articleIcon: {
    width: { xs: 100, md: 120 },
    height: { xs: 100, md: 120 },
    color: "#BEBEBE",
    boxShadow: 20,
    borderRadius: 3,
  },
};

const columns = [
  {
    name: "full_name",
    label: "Fullname",
  },
  {
    name: "username",
    label: "Username",
  },
  {
    name: "role",
    label: "Role",
  },
];

const RecentJobSales = () => {
  const [loading, setLoading] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const [users, setUsers] = React.useState({
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
    },
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
    Http.get("/admin/users", {
      params: {
        ...limit,
        ...params,
      },
    }).then((res) => {
      if (res.data) {
        console.log(res.data.data);
        setUsers({
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
    setLimit((prev) => ({
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

  const handleView = (item) => {
    console.log(item);
  };
  const handleEdit = (item) => {
    console.log(item);
  };
  const handleRevoked = (item) => {
    console.log(item);
  };
  const handleDelete = (item) => {
    console.log(item);
  };
  return (
    <Box sx={styles.wrapper}>
      <Box>
        <Box>
          <Typography
            sx={{ fontSize: { xs: 20, md: 24 }, m: 0, fontWeight: "bold" }}
          >
            Users
          </Typography>
          <Box sx={styles.filterWrapper}>
            <Box sx={styles.main}>
              <FormField
                type="search"
                label="Search"
                name="search"
                size="small"
                variant="outlined"
                placeholder="Search Users"
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
                <Box sx={styles.filter}>
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
          onView={handleView}
          onRevoked={handleRevoked}
          onEdit={handleEdit}
          onDelete={handleDelete}
          search={filterValues.values.search}
          loading={loading}
          data={users.data}
          columns={columns}
          rowsPerPage={filterValues.values.limit}
          count={users.meta.total || 0}
          page={users.meta.current_page - 1 || 0}
          onChangePage={handleChangePage}
          onRowsChangePage={handleRowChange}
        />
        {/* {proposals.data.length === 0 && (
          <Box align="center" sx={{ mt: 5, p: 2 }}>
            <ArticleIcon sx={styles.articleIcon} />
            <Typography sx={{ mt: 2 }}>YOU HAVE NO PROPOSALS</Typography>
            <Typography sx={{ mt: 2 }}>
              This is where you'll be able to track all your proposals
            </Typography>
            <Button
              variant="text"
              color="primary"
              onClick={() => handleNavigate("/marketplace/work")}
            >
              Take me to marketplace to find a job
            </Button>
          </Box>
        )} */}
      </Box>
    </Box>
  );
};

const AdminDashboard = () => {
  return (
    <div className="container">
      <Box sx={{ display: "flex", mb: 2, alignItems: "center" }}>
        <ArticleIcon sx={{ mr: 1, color: "green" }} />
        <Typography sx={{ fontSize: { xs: 20, md: 24 }, fontWeight: 600 }}>
          Admin Dashboard
        </Typography>
      </Box>

      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Box
              sx={{
                border: "1px solid #BEBEBE",
                borderRadius: 3,
                p: 2,
                boxShadow: 10,
              }}
            >
              <Box sx={{ display: "flex" }}>
                <PersonIcon sx={{ mr: 2, color: "green" }} />
                <Typography>Total Users</Typography>
              </Box>
              <Typography
                sx={{
                  fontSize: { xs: 18, md: 24 },
                  fontWeigh: 600,
                  ml: 0.5,
                }}
              >
                100
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Box
              sx={{
                border: "1px solid #BEBEBE",
                borderRadius: 3,
                p: 2,
                boxShadow: 10,
              }}
            >
              <Box sx={{ display: "flex" }}>
                <GavelIcon sx={{ mr: 2, color: "green" }} />
                <Typography>Contracts</Typography>
              </Box>
              <Typography
                sx={{
                  fontSize: { xs: 18, md: 24 },
                  fontWeigh: 600,
                  ml: 0.5,
                }}
              >
                324
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Box
              sx={{
                border: "1px solid #BEBEBE",
                borderRadius: 3,
                p: 2,
                boxShadow: 10,
              }}
            >
              <Box sx={{ display: "flex" }}>
                <LocalOfferIcon sx={{ mr: 2, color: "green" }} />
                <Typography>Total Offers</Typography>
              </Box>
              <Typography
                sx={{
                  fontSize: { xs: 18, md: 24 },
                  fontWeigh: 600,
                  ml: 0.5,
                }}
              >
                60
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Box
              sx={{
                border: "1px solid #BEBEBE",
                borderRadius: 3,
                p: 2,
                boxShadow: 10,
              }}
            >
              <Box sx={{ display: "flex" }}>
                <AssessmentIcon sx={{ mr: 2, color: "green" }} />
                <Typography>Job Post</Typography>
              </Box>
              <Typography
                sx={{
                  fontSize: { xs: 18, md: 24 },
                  fontWeigh: 600,
                  ml: 0.5,
                }}
              >
                120
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <RecentJobSales />
    </div>
  );
};

export default AdminDashboard;
