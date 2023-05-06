import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import Http from "../../../utils/Http";
import { useHistory, useParams } from "react-router-dom";
import ToastNotificationContainer from "../../../components/ToastNotificationContainer";
import ToastNotification from "../../../components/ToastNotification";
import { options } from "../../../components/options";

function ConfirmedUser() {
  const history = useHistory();
  const params = useParams();

  React.useEffect(() => {
    fetchConfirmedUser();
  }, []);

  const fetchConfirmedUser = () => {
    Http.get(`/verify-email/${params.id}`)
      .then((res) => {
        if (res.data.code === 200) {
          ToastNotification("success", res.data.message, options);
          setTimeout(() => history.push("/login"), 2000);
        } else {
          ToastNotification("err", res.data.message, options);
        }
      })
      .catch((err) => {
        ToastNotification("err", err.message, options);
      });
  };

  return (
    <Box
      sx={{ mt: 10, p: 2, minHeight: { xs: "40vh", sm: "50vh", md: "61vh" } }}
    >
      <ToastNotificationContainer />
      <Box
        sx={{
          maxWidth: 600,
          margin: "10px auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#EEEEEE",
          borderRadius: 3,
          boxShadow: 15,
          mt: { xs: 5, md: 15 },
          p: 2,
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: { xs: 20, md: 24 },
              fontWeight: 600,
              textAlign: { xs: "left", md: "center" },
              mb: 5,
            }}
          >
            Welcome to {process.env.REACT_APP_NAME}! We hope we can be of any
            help for your needs.
          </Typography>

          <Typography align="left" sx={{ fontSize: { xs: 16, md: 20 } }}>
            A {process.env.REACT_APP_NAME} Account gives you access to
            everything you'll find in {process.env.REACT_APP_BASE_URL}. You can
            use your account when you are looking for a job or if you are
            looking for a worker. Our system help users to easily find what they
            need.
          </Typography>
        </Box>

        <Box
          sx={{
            width: "100%",
            mt: 5,
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "right",
          }}
        >
          <Button
            variant="outlined"
            onClick={() => history.push("/")}
            sx={{
              mr: 2,
              width: { xs: "100%", md: "auto" },
            }}
          >
            Go to Homepage
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => history.push("/login")}
            sx={{
              background: `linear-gradient(0deg, rgba(0,3,255,1) 0%, rgba(2,126,251,1) 100%)`,
              width: { xs: "100%", md: "auto" },
              mt: { xs: 2, md: 0 },
            }}
          >
            Go to Login
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default ConfirmedUser;
