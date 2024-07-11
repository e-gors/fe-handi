import { Box, Typography } from "@mui/material";
import React from "react";
import SelectDropdown from "../../../../components/SelectDropdown";
import DatePicker from "../../../../components/CustomDateRangePicker";

function ClientReports() {
  return (
    <Box>
      <Box>
        <Typography>Reports</Typography>

        <Box>
          <Box>
            <DatePicker />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ClientReports;
