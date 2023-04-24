import { Box } from "@mui/material";
import React from "react";
import Http from "../../../utils/Http";
import { useHistory, useParams } from "react-router-dom";

function ConfirmedUser() {
  const history = useHistory();
  const params = useParams();

  React.useEffect(() => {
    fetchConfirmedUser();
  }, []);

  const fetchConfirmedUser = () => {
    Http.get(`/confirmed/${params.id}`)
      .then((res) => {
        if(res.data.code === 200){
          console.log(res);
          history.push('/onboarding');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Box sx={{ mt: 10 }}>
      <Box>Confirmed User</Box>
    </Box>
  );
}

export default ConfirmedUser;
