import * as React from "react";
import {
  Box,
  Typography,
  Button,
  InputAdornment,
  Menu,
  MenuItem,
  Divider,
  CircularProgress,
} from "@mui/material";
import FormField from "../../../../components/FormField";
import SearchIcon from "@mui/icons-material/Search";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SelectDropdown from "../../../../components/SelectDropdown";
import ArticleIcon from "@mui/icons-material/Article";
import { useHistory } from "react-router-dom";
import Http from "../../../../utils/Http";
import DataTable from "../../../../components/DataTable";

const status = ["Pending", "Accepted", "Declined", "Withdrawn"];
const orderByRate = ["asc", "desc"];
const orderByDate = ["asc", "desc"];

const styles = {
  wrapper: { mt: 8, p: 2 },
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
    name: "post.title",
    label: "Job Title",
  },
  {
    name: "post.category",
    label: "Category",
  },
  {
    name: "post.position",
    label: "Position",
  },
  {
    name: "post.job_type",
    label: "Type",
  },
  {
    name: "rate",
    label: "My Rate",
  },
  {
    name: "status",
    label: "Status",
  },
];

function Proposal() {
  const history = useHistory();

  const [loading, setLoading] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const [proposals, setProposals] = React.useState({
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
    Http.get("/proposals", {
      params: {
        ...limit,
        ...params,
      },
    }).then((res) => {
      if (res.data.data) {
        setProposals({
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

  const handleNavigate = (link) => {
    history.push(link);
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
          <Typography sx={{ fontSize: { xs: 20, md: 24 }, m: 2 }}>
            My Proposals
          </Typography>
          <Box sx={styles.filterWrapper}>
            <Box sx={styles.main}>
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
          loading={loading}
          data={proposals.data}
          columns={columns}
          rowsPerPage={filterValues.values.limit}
          count={proposals.meta.total || 0}
          page={proposals.meta.current_page - 1 || 0}
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
}

export default Proposal;
