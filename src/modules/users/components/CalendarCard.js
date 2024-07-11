import { Box, Typography } from "@mui/material";
import React, { useCallback } from "react";
import Calendar from "./Calendar";
import DataTable from "../../../components/DataTable";
import Http from "../../../utils/Http";

const columns = [
  {
    name: "day",
    label: "Day",
  },
  {
    name: "task",
    label: "Task",
  },
  {
    name: "assign_to",
    label: "Assign To",
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
    name: "status",
    label: "Status",
  },
];

function CalendarCard() {
  const [loading, setLoading] = React.useState(false);
  const [ordersList, setOrdersList] = React.useState({
    data: [],
    meta: {},
  });

  const [filters, setFilters] = React.useState({
    limit: 25,
  });


  const fetchingData = (params = {}) => {
    console.log("fetching");
    // setLoading(true);
    // Http.get("/orders", {
    //   params: {
    //     ...filters,
    //     ...params,
    //   },
    // }).then((res) => {
    //   if (res.data.data) {
    //     setOrdersList({
    //       data: res.data.data,
    //       meta: res.data.meta,
    //     });
    //   }

    //   setLoading(false);
    // });
  };

  const debounce = (func) => {
    let timer;
    return function (...args) {
      const context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, 500);
    };
  };

  const optimizedFn = useCallback(debounce(fetchingData), []); // eslint-disable-line

  const handleFilterChange = (name, value) => {
    setFilters((prev) => ({
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

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        background: `linear-gradient(0deg, rgba(0,3,255,1) 0%, rgba(2,126,251,1) 100%)`,
        borderRadius: "10px",
        p: 1
      }}
    >
      <Box>
        <Calendar />
      </Box>
      <Box>
        <Typography>Schedules</Typography>
        <DataTable
          withPagination
          loading={loading}
          data={ordersList.data}
          columns={columns}
          rowsPerPage={filters.limit}
          count={ordersList.meta.total || 0}
          page={ordersList.meta.current_page - 1 || 0}
          onChangePage={handleChangePage}
          onRowsChangePage={handleRowChange}
        />
      </Box>
    </Box>
  );
}

export default CalendarCard;
