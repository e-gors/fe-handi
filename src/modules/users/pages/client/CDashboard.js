import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import ArticleIcon from "@mui/icons-material/Article";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useHistory } from "react-router-dom";
import ScheduleIcon from "@mui/icons-material/Schedule";
import DataTable from "../../../../components/DataTable";
import Http from "../../../../utils/Http";
import Schedule from "../../components/client/Schedule";
import FindJobCard from "../../components/worker/FindJobCard";

const columns = [
  {
    name: "bid",
    label: "Contractor",
    customBodyRender: (item) => {
      return item.user?.full_name;
    },
  },
  {
    name: "post.user",
    label: "Client",
    customBodyRender: (item) => {
      return item.full_name;
    },
  },
  {
    name: "post",
    label: "Contract Name",
    customBodyRender: (item) => {
      return item?.title;
    },
  },
  {
    name: "post",
    label: "Type",
    customBodyRender: (item) => {
      return item?.job_type;
    },
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
    name: "post",
    label: "Rate/Budget",
    customBodyRender: (item) => {
      return item.rate ? item.rate : item.budget;
    },
  },
  {
    name: "status",
    label: "Status",
  },
];

function CDashboard() {
  const history = useHistory();

  const [loading, setLoading] = React.useState(false);
  const [onLoadingPosts, setOnLoadingPosts] = React.useState(false);
  const [limit, setLimit] = React.useState({
    limit: 10,
    page: 1,
  });
  const [contracts, setUserList] = React.useState({
    data: [],
    meta: {},
  });
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    fetchingData();
    fetchPosts();
  }, []); // eslint-disable-line

  const fetchingData = (params = {}) => {
    setLoading(true);
    Http.get("/contracts", {
      ...params,
      ...limit,
    }).then((res) => {
      if (res.data.data) {
        setUserList({
          data: res.data.data,
          meta: res.data.meta,
        });
      }
      setLoading(false);
    });
  };

  const fetchPosts = () => {
    setOnLoadingPosts(true);
    Http.get("/user/jobs").then((res) => {
      if (res.data) {
        setPosts(res.data.data);
        setOnLoadingPosts(false);
      }
    });
  };

  const handleChangePage = (newPage) => {
    fetchingData({ page: newPage + 1 });
  };

  const handleRowChange = (value) => {
    fetchingData({ limit: value });
  };

  const handleEdit = (values) => {
    console.log(values);
  };

  const handleDelete = (values) => {
    console.log(values);
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
              <Grid item xs={12} md={12}>
                <DataTable
                  withPagination
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                  loading={loading}
                  data={contracts.data}
                  columns={columns}
                  rowsPerPage={limit.limit}
                  count={contracts.meta.total || 0}
                  page={contracts.meta.current_page - 1 || 0}
                  onChangePage={handleChangePage}
                  onRowsChangePage={handleRowChange}
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <Schedule
                  loading={loading}
                  contracts={contracts && contracts.data}
                />
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

          {posts && posts.length > 0 && (
            <FindJobCard jobs={posts && posts} loading={onLoadingPosts} />
          )}
          {posts && posts.length < 0 && (
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
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default CDashboard;
