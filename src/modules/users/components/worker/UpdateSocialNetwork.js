import {
  Box,
  Button,
  CircularProgress,
  Typography,
  FormHelperText,
} from "@mui/material";
import React from "react";
import FormField from "../../../../components/FormField";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import Http from "../../../../utils/Http";
import ToastNotification from "../../../../components/ToastNotification";
import { options } from "../../../../components/options";
import ToastNotificationContainer from "../../../../components/ToastNotificationContainer";
import { useDispatch } from "react-redux";
import { updateUser } from "../../../../redux/actions/userActions";
import { SocialLinkRegex } from "../../../../utils/helpers";

const styles = {
  iconTextWrapper: { mb: 5 },
  links: {
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  facebookIcon: { fontSize: { xs: 50, sm: 80, md: 120 }, color: "blue" },
  instagramIcon: { fontSize: { xs: 50, sm: 80, md: 120 }, color: "#F04C66" },
};
function UpdateSocialNetwork(props) {
  const { handleClose, onConfirm, type } = props;

  const dispatch = useDispatch();

  const [url, setUrl] = React.useState({
    values: {
      facebook: "",
    },
  });

  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    if (type === "Instagram") {
      setUrl({
        values: {
          instagram: "",
        },
      });
    }
    if (type === "Twitter") {
      setUrl({
        values: {
          twitter: "",
        },
      });
    }
  }, [type]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUrl((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [name]: value,
      },
    }));

    if (!SocialLinkRegex(value, name)) {
      return setError(`Invalid ${name} url`);
    } else {
      setError(null);
    }
  };

  const handleSubmit = () => {
    setLoading(true);
    if (error) {
      ToastNotification("error", error, options);
      setLoading(false);
      return;
    }

    Http.post("/update/social-networks", url.values)
      .then((res) => {
        if (res.data.code === 200) {
          ToastNotification("success", res.data.message, options);
          dispatch(updateUser(res.data.user));
          onConfirm();
        } else {
          ToastNotification("error", res.data.message, options);
        }
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        ToastNotification("error", err.message, options);
      });
  };

  const handleValidate = () => {
    if (type === "Instagram") {
      if (url.values.instagram || url.values.instagram.length > 0) {
        handleSubmit();
      } else {
        ToastNotification("error", `${type} Url is required!`, options);
      }
    } else if (type === "Twitter") {
      if (url.values.twitter || url.values.twitter.length > 0) {
        handleSubmit();
      } else {
        ToastNotification("error", `${type} Url is required!`, options);
      }
    } else {
      if (url.values.facebook || url.values.facebook.length > 0) {
        handleSubmit();
      } else {
        ToastNotification("error", `${type} Url is required!`, options);
      }
    }
  };

  return (
    <Box>
      <ToastNotificationContainer />
      {type === "Facebook" && (
        <Box>
          <Box align="center" sx={styles.iconTextWrapper}>
            <FacebookRoundedIcon sx={styles.facebookIcon} />
            <Typography sx={styles.links}>
              Please enter url like: https://www.facebook.com/your_username
            </Typography>
          </Box>
          <Box>
            <FormField
              fullWidth
              name="facebook"
              label="Facebook Link"
              value={url.values.facebook}
              onChange={handleChange}
            />
            {error && <FormHelperText error>{error}</FormHelperText>}
          </Box>
        </Box>
      )}
      {type === "Instagram" && (
        <Box>
          <Box align="center" sx={styles.iconTextWrapper}>
            <InstagramIcon sx={styles.instagramIcon} />
            <Typography sx={styles.links}>
              Please enter url like: https://www.instagram.com/your_username
            </Typography>
          </Box>
          <Box>
            <FormField
              fullWidth
              name="instagram"
              label="Instagram Link"
              value={url.values.instagram}
              onChange={handleChange}
            />
            {error && <FormHelperText error>{error}</FormHelperText>}
          </Box>
        </Box>
      )}
      {type === "Twitter" && (
        <Box>
          <Box align="center" sx={styles.iconTextWrapper}>
            <TwitterIcon sx={styles.facebookIcon} />
            <Typography sx={styles.links}>
              Please enter url like: https://twitter.com/your_username
            </Typography>
          </Box>
          <Box>
            <FormField
              fullWidth
              name="twitter"
              label="Twitter Link"
              value={url.values.twitter}
              onChange={handleChange}
            />
            {error && <FormHelperText error>{error}</FormHelperText>}
          </Box>
        </Box>
      )}
      <Box
        align="right"
        sx={{ backgroundColor: "#F4F5FB", p: 2, borderRadius: 3, mt: 5 }}
      >
        <Button size="small" variant="outlined" onClick={handleClose}>
          Cancel
        </Button>
        <Button
          size="small"
          variant="contained"
          color="primary"
          sx={{ ml: 1 }}
          onClick={handleValidate}
          disabled={loading}
        >
          {loading ? (
            <CircularProgress size={24} sx={{ color: "white" }} thickness={5} />
          ) : (
            "Save"
          )}
        </Button>
      </Box>
    </Box>
  );
}

export default UpdateSocialNetwork;
