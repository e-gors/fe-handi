import React from "react";
import {
  Box,
  Typography,
  CircularProgress,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import dayjs from "dayjs";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const styles = {
  wrapper: {
    width: "100%",
  },
  dateWrapper: {
    width: "100%",
    overflow: "auto",

    "& .rdrDateDisplayWrapper": {
      display: "none",
    },
    "@media (max-width: 600px)": {
      "& .rdrDefineRangeWrapper": {
        display: "none",
      },
    },
    "@media (min-width: 601px)": {
      "& .rdrDefineRangeWrapper": {
        display: "block",
      },
    },
  },
};

export default function Schedule(props) {
  const { loading, contracts } = props;

  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down("sm"));
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const [dates, setDates] = React.useState([]);

  React.useEffect(() => {
    if (contracts) {
      const updatedDates = contracts.map((contract, index) => ({
        startDate: dayjs(contract.start_date).toDate(),
        endDate: dayjs(contract.end_date).toDate(),
        key: index.toString(),
      }));
      setDates(updatedDates);
    }
  }, [contracts]);

  return (
    <Box align="center" sx={styles.wrapper}>
      <Typography sx={{ fontSize: 20, mb: 2, textAlign: "left" }}>
        Contracts Schedules
      </Typography>
      {loading ? (
        <Box align="center">
          <CircularProgress />
        </Box>
      ) : (
        <>
          <Box sx={styles.dateWrapper}>
            <DateRangePicker
              ranges={dates ? dates : []}
              editableDateInputs={false}
              months={isMobile ? 1 : isTablet ? 2 : 3}
              direction={isMobile ? "vertical" : "horizontal"}
              // showMonthAndYearPickers={false}
              showDateDisplay={false}
              showSelectionPreview={false}
              moveRangeOnFirstSelection={false}
            />
          </Box>
        </>
      )}
    </Box>
  );
}
