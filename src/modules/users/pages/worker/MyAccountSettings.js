/** @format */

import React from "react";
import { Box, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import TextField from "@mui/material/TextField";
import BuildCircleIcon from "@mui/icons-material/BuildCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

function MyAccountSettings() {
  return (
    <Box>
      <Box sx={{ display: "flex" }}>
        <AccountCircleIcon sx={{ mr: 2, color: "green" }} />
        <Typography sx={{ fontWeight: 700 }}>Basic Info</Typography>
      </Box>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            required
            id="standard-required"
            label="Email"
            defaultValue="Vanessa"
            variant="standard"
          />

          <TextField
            id="standard-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="standard"
          />
          <TextField
            id="standard-read-only-input"
            label="Location"
            defaultValue="Philippines"
            InputProps={{
              readOnly: true,
            }}
            variant="standard"
          />
          <TextField
            id="standard-number"
            label="Phone"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
          />
          <TextField
            id="standard-search"
            label="Billing Info"
            type="number"
            variant="standard"
          />
        </div>
        <Box sx={{ display: "flex", paddingTop: "20px" }}>
          <BuildCircleIcon sx={{ mr: 2, color: "green" }} />
          <Typography sx={{ fontWeight: 700 }}> System Usage</Typography>
        </Box>
        <div>
          <TextField
            id="standard-read-only-input"
            defaultValue="Worker"
            InputProps={{
              readOnly: true,
            }}
            variant="standard"
          />
        </div>
        <Box sx={{ display: "flex", mb: 3, paddingTop: "20px" }}>
          <DeleteIcon sx={{ mr: 2, color: "green" }} />
          <Typography sx={{ fontWeight: 700 }}> Delete Account</Typography>
        </Box>
        <div>
          <Stack direction="row" spacing={2}>
            <Button variant="outlined" color="error">
              Delete
            </Button>
          </Stack>
        </div>
      </Box>
    </Box>
  );
}

export default MyAccountSettings;
