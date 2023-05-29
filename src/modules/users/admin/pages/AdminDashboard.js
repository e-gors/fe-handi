/** @format */
import { Box, Grid, Typography } from "@mui/material";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import ArticleIcon from "@mui/icons-material/Article";
import VisibilityIcon from "@mui/icons-material/Visibility";
import React from "react";
import "./AdminDashboard.css";

const RecentJobSales = () => {
  return (
    <div className="recent-job-sales">
      <h2>Recent Job Sales</h2>
      <table className="job-sales-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Client</th>
            <th>Worker</th>
            <th>Skill</th>
            <th>Total Salary</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2023-05-10</td>
            <td>Client A</td>
            <td>Worker X</td>
            <td>Skill 1</td>
            <td>$500</td>
          </tr>
          <tr>
            <td>2023-05-09</td>
            <td>Client B</td>
            <td>Worker Y</td>
            <td>Skill 2</td>
            <td>$700</td>
          </tr>
          <tr>
            <td>2023-05-08</td>
            <td>Client C</td>
            <td>Worker Z</td>
            <td>Skill 3</td>
            <td>$400</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
const TopOfferedJobs = () => {
  const jobs = ["Carpenter", "Plumber", "Mason", "Welder", "Mechanic"];

  return (
    <div className="top-offered-jobs">
      <h2>Top Offered Jobs</h2>
      <ul className="jobs-list">
        {jobs.map((job, index) => (
          <li key={index}>{job}</li>
        ))}
      </ul>
    </div>
  );
};

const AdminDashboard = () => {
  return (
    <div className="container">
      <Box sx={{ display: "flex", mb: 2, alignItems: "center" }}>
        <ArticleIcon sx={{ mr: 1, color: "green" }} />
        <Typography sx={{ fontSize: { xs: 20, md: 24 }, fontWeight: 600 }}>
          Admin Dashboard
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
                <Typography>Total Users</Typography>
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
                <Typography>Contracts</Typography>
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
                <Typography>Total Offers</Typography>
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
                <Typography>Reports</Typography>
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
      <RecentJobSales />
      <TopOfferedJobs />
    </div>
  );
};

export default AdminDashboard;
