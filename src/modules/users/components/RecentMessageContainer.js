import {
  Avatar,
  Badge,
  Box,
  Divider,
  InputAdornment,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import FormField from "../../../components/FormField";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import SearchIcon from "@mui/icons-material/Search";

const dummyData = [
  {
    fullname: "Efren Goron",
    username: "@goron",
    time: "5mins ago",
    message: "Here is where the message to be displayed with limit.",
  },
  {
    fullname: "Efren Goron",
    username: "@goron",
    time: "5mins ago",
    message: "Here is where the message to be displayed with limit.",
  },
  {
    fullname: "Efren Goron",
    username: "@goron",
    time: "5mins ago",
    message: "Here is where the message to be displayed with limit.",
  },
  {
    fullname: "Efren Goron",
    username: "@goron",
    time: "5mins ago",
    message: "Here is where the message to be displayed with limit.",
  },
  {
    fullname: "Efren Goron",
    username: "@goron",
    time: "5mins ago",
    message: "Here is where the message to be displayed with limit.",
  },
  {
    fullname: "Efren Goron",
    username: "@goron",
    time: "5mins ago",
    message: "Here is where the message to be displayed with limit.",
  },
  {
    fullname: "Efren Goron",
    username: "@goron",
    time: "5mins ago",
    message: "Here is where the message to be displayed with limit.",
  },
  {
    fullname: "Efren Goron",
    username: "@goron",
    time: "5mins ago",
    message: "Here is where the message to be displayed with limit.",
  },
  {
    fullname: "Efren Goron",
    username: "@goron",
    time: "5mins ago",
    message: "Here is where the message to be displayed with limit.",
  },
];

function RecentMessageContainer() {
  return (
    <Box
      sx={{
        width: 400,
        p: 2,
        border: "1px solid black",
        display: { xs: "none", md: "block" },
      }}
    >
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mb: 1,
          }}
        >
          <Badge
            badgeContent={40}
            color="primary"
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <Typography>Messages</Typography>
          </Badge>
          <SaveAsIcon />
        </Box>

        <FormField
          size="small"
          fullWidth
          name="search"
          label="Search"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      <Box
        sx={{
          mt: 1,
          maxHeight: "80vh",
          overflowY: "scroll",
        }}
      >
        {dummyData &&
          dummyData.map((data, i) => {
            return (
              <Box key={i}>
                <Divider variant="fullWidth" />
                <Box sx={{ fontSize: 14, pt: 1, pb: 1 }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box sx={{ display: "flex" }}>
                      <Stack direction="row" spacing={2}>
                        <Avatar
                          alt="Efren Goron"
                          sx={{ width: 40, height: 40 }}
                        />
                      </Stack>
                      <Box sx={{ ml: 1 }}>
                        <Typography
                          sx={{ fontSize: "inherit", fontWeight: "600" }}
                        >
                          {data.fullname}
                        </Typography>
                        <Typography sx={{ fontSize: "inherit" }}>
                          {data.username}
                        </Typography>
                      </Box>
                    </Box>
                    <Typography sx={{ fontSize: "inherit" }}>
                      {data.time}
                    </Typography>
                  </Box>
                  <Typography sx={{ fontSize: 13, mt: 1 }}>
                    {data.message}
                  </Typography>
                </Box>
                <Divider variant="fullWidth" />
              </Box>
            );
          })}
      </Box>
    </Box>
  );
}

export default RecentMessageContainer;
