import { Box, Button, CircularProgress, Typography } from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom";
import Http from "../../../utils/Http";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../../redux/actions/userActions";

function OnBoarding() {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.user);
  const { role, uuid } = user;

  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    fetchAuthUser();
  }, []);

  const fetchAuthUser = () => {
    setLoading(true);
    Http.get("/get-user")
      .then((res) => {
        dispatch(setUser(res.data.data));
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Box
      sx={{
        mt: 10,
        p: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "40vh",
      }}
    >
      {loading && <CircularProgress />}
      {!loading && (
        <Box
          sx={{
            maxWidth: 400,
            height: "auto",
            p: 2,
            backgroundColor: "#EEEEEE",
            borderRadius: 3,
          }}
          boxShadow={8}
        >
          <Box>
            <Typography sx={{ fontWeight: "bold", fontSize: 18, mb: 1 }}>
              When you complete all required fields in your profile:
            </Typography>
            <Typography component="li" sx={{ mt: 1 }}>
              Clients will see you in their search results if your profile is
              public.
            </Typography>
            <Typography component="li" sx={{ mt: 1 }}>
              You will able to apply for posted Jobs.{" "}
            </Typography>

            <Button
              variant="contained"
              color="primary"
              onClick={() => history.push(`/overview/${role}/${uuid}`)}
              sx={{ mt: 5 }}
            >
              Complete Profile
            </Button>
          </Box>

          <Typography
            align="right"
            sx={{
              color: "blue",
              cursor: "pointer",
            }}
            onClick={() => history.push("/dashboard")}
          >
            skip
          </Typography>
        </Box>
      )}
    </Box>
  );
}

export default OnBoarding;
