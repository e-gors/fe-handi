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
import SearchIcon from "@mui/icons-material/Search";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import ArticleIcon from "@mui/icons-material/Article";
import { useHistory } from "react-router-dom";
import Http from "../../../../utils/Http";
import FormField from "../../../../components/FormField";
import SelectDropdown from "../../../../components/SelectDropdown";
import DataTable from "../../../../components/DataTable";
import JobPostedModal from "../../components/client/JobPostedModal";
import { useSelector } from "react-redux";

const status = ["Pending", "Accepted", "Declined", "Withdrawn"];
const orderByRate = ["Ascending", "Descending"];
const orderByDate = ["Ascending", "Descending"];

const columns = [
  {
    name: "bids.length",
    label: "Proposals",
  },
  {
    name: "title",
    label: "Title",
  },
  {
    name: "locations",
    label: "Locations",
  },
  {
    name: "job_type",
    label: "Type",
  },
  {
    name: "rate",
    label: "Rate",
  },
  {
    name: "budget",
    label: "Budget",
  },
  {
    name: "status",
    label: "Status",
  },
];
function JobPosted(props) {
  const { role } = props;

  const user = useSelector((state) => state.users.user);

  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const [loading, setLoading] = React.useState(false);
  const [jobs, setJobs] = React.useState({
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

  const [selectedItem, setSelectedItem] = React.useState(null);

  React.useEffect(() => {
    setLimit((prev) => ({
      limit: prev.limit,
      page: 1,
    }));
    optimizedFn(filterValues.values);
  }, [filterValues.values]); // eslint-disable-line

  const fetchingData = (params = {}) => {
    setLoading(true);
    Http.get("user/jobs", {
      params: {
        ...limit,
        ...params,
      },
    }).then((res) => {
      if (res.data.data) {
        setJobs({
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
    console.log(event.currentTarget);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleView = (item) => {
    setSelectedItem(item);
  };

  const handleNext = () => {
    const currentIndex = jobs.data.findIndex((item) => item === selectedItem);
    const nextData = jobs.data[currentIndex + 1];
    if (nextData) {
      setSelectedItem(nextData);
    }
  };

  const handleBack = () => {
    const currentIndex = jobs.data.findIndex((item) => item === selectedItem);
    const previousData = jobs.data[currentIndex - 1];
    if (previousData) {
      setSelectedItem(previousData);
    }
  };

  return (
    <Box sx={{ mt: 8, p: 2 }}>
      <JobPostedModal
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
        handleNext={handleNext}
        handleBack={handleBack}
        jobs={jobs.data}
        user={user && user}
      />
      <Box>
        <Box>
          <Typography sx={{ fontSize: { xs: 20, md: 24 }, m: 2 }}>
            My Jobs
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
          onEdit
          onView={handleView}
          loading={loading}
          data={jobs.data}
          columns={columns}
          rowsPerPage={filterValues.values.limit}
          count={jobs.meta.total || 0}
          page={jobs.meta.current_page - 1 || 0}
          onChangePage={handleChangePage}
          onRowsChangePage={handleRowChange}
        />

        {jobs && jobs.data.length === 0 && (
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
            <Box>
              <Typography sx={{ mt: 2 }}>YOU DON'T HAVE JOB POSTS.</Typography>
              <Typography>CREATE ONE.</Typography>
              <Button
                sx={{ width: 150, mt: 2, boxShadow: 5 }}
                color="primary"
                variant="contained"
                size="small"
                onClick={() => history.push("/new/job-post")}
              >
                Create Job Post
              </Button>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default JobPosted;
