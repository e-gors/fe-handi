/** @format */

import React from "react";
import Box from "@mui/material/Box";
import MailIcon from "@mui/icons-material/Mail";
import Typography from "@mui/material/Typography";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FormHelperText from "@mui/material/FormHelperText";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";

function NotificationSettings() {
  const [state, setState] = React.useState({
    contact: true,
    offers: false,
    proposals: false,
    jobpost: false,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const { gilad, jason, antoine } = state;
  const error = [gilad, jason, antoine].filter((v) => v).length !== 2;

  return (
    <Box sx={{ p: 2 }}>
      <Box sx={{ display: "flex", mb: 1 }}>
        <MailIcon sx={{ mr: 2, color: "green" }} />
        <Typography sx={{ fontWeight: 700 }}>EMAIL NOTIFICATIONS</Typography>
      </Box>
      <Box sx={{ display: "flex" }}>
        <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
          <FormLabel component="legend"> Subscribe to:</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={gilad}
                  onChange={handleChange}
                  name="contact"
                />
              }
              label="Contact Email"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={jason}
                  onChange={handleChange}
                  name="offers"
                />
              }
              label="Offer Email"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={antoine}
                  onChange={handleChange}
                  name="proposals"
                />
              }
              label="Proposal Email"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={antoine}
                  onChange={handleChange}
                  name="jobpost"
                />
              }
              label="New Job Posting Email"
            />
          </FormGroup>
          <FormHelperText>
            Or{" "}
            <span
              style={{
                textDecoration: "underline",
                cursor: "pointer",
                color: "blue",
              }}
            >
              unsubscribe
            </span>{" "}
            from all email at once.
          </FormHelperText>
        </FormControl>
      </Box>
    </Box>
  );
}
export default NotificationSettings;
