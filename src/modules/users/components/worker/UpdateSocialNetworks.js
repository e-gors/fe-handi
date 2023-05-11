import { Box, Button, IconButton, Typography } from "@mui/material";
import React from "react";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import DragIndicatorRoundedIcon from "@mui/icons-material/DragIndicatorRounded";
import ProfileModalEdit from "../ProfileModalEdit";
import { useSelector } from "react-redux";
import Http from "../../../../utils/Http";
import ToastNotification from "../../../../components/ToastNotification";
import { options } from "../../../../components/options";
import ToastNotificationContainer from "../../../../components/ToastNotificationContainer";

const styles = {
  main: { display: "flex", justifyContent: "space-between", mb: 1 },
  leftWrapper: { display: "flex" },
  socialLabels: { ml: 1 },
  icons: {
    color: "blue",
  },
};

const icons = [
  {
    icon: <FacebookRoundedIcon sx={styles.icons} />,
    label: "Facebook",
    status: "yes",
  },
  {
    icon: <InstagramIcon sx={styles.icons} />,
    label: "Instagram",
    status: "no",
  },
  {
    icon: <TwitterIcon sx={styles.icons} />,
    label: "Twitter",
    status: "no",
  },
];

function UpdateSocialNetworks() {
  const user = useSelector((state) => state.users.user);
  const { profile } = user;
  // const {facebook_url, instagram_url, twitter_url} = profile[0];

  const [open, setOpen] = React.useState(false);
  const [type, setType] = React.useState("");

  const handleOpen = (type) => {
    setOpen(true);
    setType(type);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleRemove = (params) => {
    Http.delete(`/delete/social-networks/${params}`)
      .then((res) => {
        if (res.data.code === 200) {
          ToastNotification("success", res.data.message, options);
        } else {
          ToastNotification("error", res.data.message, options);
        }
      })
      .catch((err) => {
        ToastNotification("error", err.message, options);
      });
  };
  return (
    <Box>
      <ToastNotificationContainer />
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
                onClick={() => handleRemove(icon.label)}
              >
                Remove
              </Button>
            )}
          </Box>
        ))}
    </Box>
  );
}

export default UpdateSocialNetworks;
