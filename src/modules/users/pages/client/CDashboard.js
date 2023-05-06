import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import ArticleIcon from "@mui/icons-material/Article";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useHistory } from "react-router-dom";
import ScheduleIcon from "@mui/icons-material/Schedule";
import DataTable from "../../../../components/DataTable";
import PropTypes from "prop-types";
import dayjs from "dayjs";
import Badge from "@mui/material/Badge";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { PickersDay } from "@mui/x-date-pickers/PickersDay";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { DayCalendarSkeleton } from "@mui/x-date-pickers/DayCalendarSkeleton";

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
    name: "client",
    label: "Client",
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

function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

/**
 * Mimic fetch with abort controller https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort
 * ⚠️ No IE11 support
 */
function fakeFetch(date, { signal }) {
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      const daysInMonth = date.daysInMonth();
      const daysToHighlight = [1, 2, 3].map(() =>
        getRandomNumber(1, daysInMonth)
      );

      resolve({ daysToHighlight });
    }, 500);

    signal.onabort = () => {
      clearTimeout(timeout);
      reject(new DOMException("aborted", "AbortError"));
    };
  });
}

const initialValue = dayjs("2022-04-17");

function ServerDay(props) {
  const { highlightedDays = [], day, outsideCurrentMonth, ...other } = props;

  const isSelected =
    !props.outsideCurrentMonth && highlightedDays.indexOf(props.day.date()) > 0;

  return (
    <Badge
      key={props.day.toString()}
      overlap="circular"
      badgeContent={isSelected ? "🌚" : undefined}
    >
      <PickersDay
        {...other}
        outsideCurrentMonth={outsideCurrentMonth}
        day={day}
      />
    </Badge>
  );
}

ServerDay.propTypes = {
  /**
   * The date to show.
   */
  day: PropTypes.object.isRequired,
  highlightedDays: PropTypes.arrayOf(PropTypes.number),
  /**
   * If `true`, day is outside of month and will be hidden.
   */
  outsideCurrentMonth: PropTypes.bool.isRequired,
};

function CDashboard() {
  const history = useHistory();

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

  const requestAbortController = React.useRef(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [highlightedDays, setHighlightedDays] = React.useState([1, 2, 15]);

  const fetchHighlightedDays = (date) => {
    const controller = new AbortController();
    fakeFetch(date, {
      signal: controller.signal,
    })
      .then(({ daysToHighlight }) => {
        setHighlightedDays(daysToHighlight);
        setIsLoading(false);
      })
      .catch((error) => {
        // ignore the error if it's caused by `controller.abort`
        if (error.name !== "AbortError") {
          throw error;
        }
      });

    requestAbortController.current = controller;
  };

  React.useEffect(() => {
    fetchHighlightedDays(initialValue);
    // abort request on unmount
    return () => requestAbortController.current?.abort();
  }, []);

  const handleMonthChange = (date) => {
    if (requestAbortController.current) {
      // make sure that you are aborting useless requests
      // because it is possible to switch between months pretty quickly
      requestAbortController.current.abort();
    }

    setIsLoading(true);
    setHighlightedDays([]);
    fetchHighlightedDays(date);
  };

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
    <Box sx={{ mt: 10 }}>
      <Box sx={{ maxWidth: "90vw", margin: "0 auto" }}>
        <Typography
          sx={{
            fontSize: { xs: 24, md: 30 },
            fontWeight: "bold",
            mt: 2,
            mb: 2,
          }}
        >
          Client Dashboard
        </Typography>
        <Box
          sx={{
            backgroundColor: "#EEEEEE",
            borderRadius: 3,
            p: { xs: 2, md: 5 },
            mb: 2,
          }}
        >
          <Box sx={{ display: "flex", mb: 2, alignItems: "center" }}>
            <ScheduleIcon sx={{ mr: 1, color: "blue" }} />
            <Typography sx={{ fontSize: { xs: 20, md: 24 }, fontWeight: 600 }}>
              Schedules
            </Typography>
          </Box>

          <Box>
            <Grid container spacing={2}>
              <Grid item xs={12} md={8}>
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
              </Grid>
              <Grid item xs={12} md={4}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateCalendar
                    defaultValue={initialValue}
                    loading={isLoading}
                    onMonthChange={handleMonthChange}
                    renderLoading={() => <DayCalendarSkeleton />}
                    slots={{
                      day: ServerDay,
                    }}
                    slotProps={{
                      day: {
                        highlightedDays,
                      },
                    }}
                  />
                </LocalizationProvider>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Box
          sx={{
            backgroundColor: "#EEEEEE",
            borderRadius: 3,
            p: { xs: 2, md: 5 },
          }}
        >
          <Box sx={{ display: "flex", mb: 2, alignItems: "center" }}>
            <ArticleIcon sx={{ mr: 1, color: "green" }} />
            <Typography sx={{ fontSize: { xs: 20, md: 24 }, fontWeight: 600 }}>
              Posted Jobs
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
                    <VisibilityIcon sx={{ mr: 2 }} />
                    <Typography>Total Views</Typography>
                  </Box>
                  <Typography
                    sx={{
                      fontSize: { xs: 18, md: 24 },
                      fontWeigh: 600,
                      ml: 0.5,
                    }}
                  >
                    0
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
                    <Typography>Target Views</Typography>
                  </Box>
                  <Typography
                    sx={{
                      fontSize: { xs: 18, md: 24 },
                      fontWeigh: 600,
                      ml: 0.5,
                    }}
                  >
                    0
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
                    <TextSnippetIcon sx={{ mr: 2, color: "green" }} />
                    <Typography>Total Proposals</Typography>
                  </Box>
                  <Typography
                    sx={{
                      fontSize: { xs: 18, md: 24 },
                      fontWeigh: 600,
                      ml: 0.5,
                    }}
                  >
                    0
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
                    <Typography>Target Proposals</Typography>
                  </Box>
                  <Typography
                    sx={{
                      fontSize: { xs: 18, md: 24 },
                      fontWeigh: 600,
                      ml: 0.5,
                    }}
                  >
                    0
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>

          <Box sx={{ mt: 5 }}>
            <Box sx={{ textAlign: "center" }}>
              <Typography sx={{ fontWeight: 800, fontSize: 18 }}>
                No Posted Jobs
              </Typography>
              <Typography>
                Job data will appear here as soon as you post a Job.
              </Typography>
              <Button
                variant="contained"
                sx={{
                  background: `linear-gradient(0deg, rgba(0,3,255,1) 0%, rgba(2,126,251,1) 100%)`,
                  boxShadow: 5,
                  mt: 2,
                }}
                onClick={() => history.push("/new/job-post")}
              >
                Post Job
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default CDashboard;
