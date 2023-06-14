import { Box, Button, CircularProgress, Typography } from "@mui/material";
import React from "react";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import DragIndicatorRoundedIcon from "@mui/icons-material/DragIndicatorRounded";
import ProfileModalEdit from "./ProfileModalEdit";
import { useDispatch, useSelector } from "react-redux";
import Http from "../../../utils/Http";
import { updateUser } from "../../../redux/actions/userActions";

const styles = {
  main: { display: "flex", justifyContent: "space-between", mb: 1 },
  leftWrapper: { display: "flex" },
  socialLabels: { ml: 1 },
  icons: {
    color: "blue",
  },
};

function UpdateSocialNetworks() {
  const user = useSelector((state) => state.users.user);
  const dispatch = useDispatch();

  const { profile } = user;
  const { facebook_url, instagram_url, twitter_url } = profile[0];

  const [loading, setLoading] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [type, setType] = React.useState("");

  const icons = [
    {
      icon: <FacebookRoundedIcon sx={styles.icons} />,
      label: "Facebook",
      status: facebook_url ? "yes" : "no",
    },
    {
      icon: <InstagramIcon sx={styles.icons} />,
      label: "Instagram",
      status: instagram_url ? "yes" : "no",
    },
    {
      icon: <TwitterIcon sx={styles.icons} />,
      label: "Twitter",
      status: twitter_url ? "yes" : "no",
    },
  ];

  const handleOpen = (type) => {
    setOpen(true);
    setType(type);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleRemove = (params) => {
    setLoading(true);
    Http.delete(`/delete/social-networks/${params}`)
      .then((res) => {
        if (res.data.code === 200) {
          dispatch(updateUser(res.data.user));
          setLoading(false);
        }
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  return (
    <Box>
      <ProfileModalEdit open={open} type={type} handleClose={handleClose} />
      {icons &&
        icons.map((icon, i) => (
          <Box key={i} sx={styles.main}>
            <Box sx={styles.leftWrapper}>
              <DragIndicatorRoundedIcon />
              {icon.icon}
              <Typography sx={styles.socialLabels}>{icon.label}</Typography>
            </Box>
            {icon.status === "no" && (
              <Button
                variant="contained"
                color="primary"
                size="small"
                onClick={() => handleOpen(icon.label)}
              >
                Add Account
              </Button>
            )}
            {icon.status === "yes" && (
              <Button
                variant="contained"
                color="error"
                size="small"
                disabled={loading}
                onClick={() => handleRemove(icon.label)}
              >
                {loading ? (
                  <CircularProgress
                    size={24}
                    sx={{ color: "white" }}
                    thickness={5}
                  />
                ) : (
                  "Remove"
                )}
              </Button>
            )}
          </Box>
        ))}
    </Box>
  );
}

export default UpdateSocialNetworks;
