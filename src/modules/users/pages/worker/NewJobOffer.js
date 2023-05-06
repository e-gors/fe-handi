import {
  Box,
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Grid,
  IconButton,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React from "react";
import FormField from "../../../../components/FormField";
import SelectDropdown from "../../../../components/SelectDropdown";
import DeleteIcon from "@mui/icons-material/Delete";

const hireOnBehalf = ["Myself", "Company"];

function NewJobOffer() {
  return (
    <Box sx={{ mt: 8, p: 3 }}>
      <Box
        sx={{
          maxWidth: 800,
          backgroundColor: "#EEEEEE",
          m: "20px auto",
        }}
      >
        <Box sx={{ p: 3 }}>
          <Typography sx={{ fontWeight: "bold", fontSize: { xs: 24, md: 30 } }}>
            Create Offer
          </Typography>
          <Typography>
            Send an offer to a worker on {process.env.REACT_APP_NAME} or send an
            offer to an off-platform worker by entering their email address.
          </Typography>
        </Box>
        <Box sx={{ backgroundColor: "#CCCCCC", p: 2 }}>
          <Typography>Basic Information</Typography>
        </Box>
        <Box sx={{ mt: 2, p: 3 }}>
          <Typography>Contractor *</Typography>
          <FormField
            name="contractor"
            label="Contractor"
            placeholder="Search by name, email"
            fullWidth
          />
          <Button>Invite Off-platform user</Button>
          <FormHelperText>
            The Above field will show if not pick the offline
          </FormHelperText>

          <FormHelperText>If select the offline then show below</FormHelperText>

          <Box>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <FormField label="Email" />
              </Grid>
              <Grid item xs={12} md={4}>
                <FormField label="First Name" />
              </Grid>
              <Grid item xs={12} md={4}>
                <FormField label="Last Name" />
              </Grid>
            </Grid>
          </Box>
          <Typography>Hire on behalf of *</Typography>
          <SelectDropdown
            name="hiring"
            label="Hire on behalf of"
            fullWidth
            options={hireOnBehalf}
          />
          <Typography>Job</Typography>
          <Typography>
            You can link this offer to a job post, or leave it blank to simply
            create a contract.
          </Typography>
          <SelectDropdown
            name="job_link"
            label="Job"
            fullWidth
            options={hireOnBehalf}
          />
          <Typography>Title *</Typography>
          <FormField name="title" label="Title" fullWidth />
        </Box>
        <Box sx={{ backgroundColor: "#CCCCCC", p: 2 }}>
          <Typography>Offer Details</Typography>
        </Box>

        <Box sx={{ p: 3 }}>
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">
              Payment Type *
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                value="daily_price"
                control={<Radio />}
                label="Pay by the day"
              />
              <FormControlLabel
                value="fixed_price"
                control={<Radio />}
                label="Fixed price"
              />
            </RadioGroup>
          </FormControl>
          <Box>
            <Typography>
              For pay by the hour contracts, your freelancer should use our
              goMeter so you can:
            </Typography>
            <Typography component="li">Track your freelancer's time</Typography>
            <Typography component="li">
              See programs and websites your freelancer is using
            </Typography>
            <Typography component="li">
              See screenshots of their work
            </Typography>
            <Typography component="li">See their activity level</Typography>
            <Typography component="li">
              If you don't require your freelancer to use the goMeter, you
              should allow them to add manual time below
            </Typography>
          </Box>
          <Box>
            <Typography>
              Fixed price contracts require a refundable deposit. The budget
              below is an estimate. You can change the deposit amount after the
              contract is created and before you make the deposit.
            </Typography>
          </Box>
        </Box>

        <Box sx={{ p: 2 }}>
          <Typography>Budget</Typography>
          <Typography>
            This is the budget you plan to spend on this job.
          </Typography>
          <Box>
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">
                Payment Type *
              </FormLabel>
              <RadioGroup
                column
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="daily_price"
                  control={<Radio />}
                  label="Estimate your budget for the entire project"
                />
                <FormControlLabel
                  value="fixed_price"
                  control={<Radio />}
                  label="Estimate your budget for each milestone"
                />
              </RadioGroup>
              <FormField name="amount" label="Amount" />
            </FormControl>
            <Box>
              <Grid container spacing={2}>
                <Grid item xs={12} md={10}>
                  <FormField label="Milestone 1" />
                </Grid>
                <Grid item xs={12} md={2}>
                  <FormField label="Amount" />
                </Grid>
                <IconButton>
                  <DeleteIcon />
                </IconButton>
              </Grid>
            </Box>
            <Box>
              <Button>Add milestone</Button>
              <Box>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography>Total Budget: </Typography>
                  <Typography>$20</Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography>You will be charged ($20 + 0%): </Typography>
                  <Typography>$20.00</Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography>
                    Your contractor will get ($20 - 7.95%):{" "}
                  </Typography>
                  <Typography>$18.41</Typography>
                </Box>
              </Box>
            </Box>

            <Box>
              <Typography>Instuctions (optional) dropdown</Typography>
            </Box>
          </Box>
        </Box>

        <Divider />
        <Box sx={{ p: 2 }} align="right">
          <Button variant="outlined" color="primary" sx={{ mr: 2 }}>
            Cancel
          </Button>
          <Button variant="contained" color="primary">
            Send Offer
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default NewJobOffer;
