import {
  Avatar,
  Badge,
  Box,
  Button,
  Chip,
  Grid,
  IconButton,
  Modal,
  Typography,
} from "@mui/material";
import React from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ReportIcon from "@mui/icons-material/Report";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ApplyModal from "./proposal/ApplyModal";
import ToastNotification from "../../../../components/ToastNotification";
import { options } from "../../../../components/options";
import ToastNotificationContainer from "../../../../components/ToastNotificationContainer";
import Http from "../../../../utils/Http";
import { useDispatch } from "react-redux";
import { updateUser } from "../../../../redux/actions/userActions";
import { formatValue, isAuth } from "../../../../utils/helpers";
import BidsModal from "./proposal/BidsModal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "95%",
  height: "90vh",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 3,
  overflow: "hidden",
};

const styles = {
  exitIconWrapper: { p: 2, position: "relative" },
  exitIconButton: { position: "absolute", top: 2, right: 2 },
  mainContent: {
    p: 2,
    maxHeight: "72vh",
    overflow: "auto",

    "::-webkit-scrollbar": {
      display: "none",
    },
  },
  jobTitle: {
    fontWeight: "bold",
    fontSize: { xs: 24, sm: 28, md: 32 },
  },
  jobPosition: {
    ml: 2,
    color: "#BEBEBE",
    fontWeight: 600,
    fontSize: { xs: 16, sm: 18, md: 20 },
    mb: 2,
  },
  profileWrapper: { display: "flex", alignItems: "center" },
  nameDateWrapper: {
    display: "flex",
    flexWrap: { xs: "wrap", md: "noWrap" },
  },
  fullname: {
    mr: 2,
    fontWeight: 600,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "noWrap",
  },
  date: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "noWrap",
    fontSize: 14,
    mt: 0.1,
    color: "blue",
  },
  contentWrapper: {
    p: 2,
    backgroundColor: "#EEEEEE",
    boxShadow: 3,
    mt: 2,
    mb: 2,
    borderRadius: 3,
  },
  jobType: {
    display: "flex",
    mt: 2,
    justifyContent: "space-between",
  },
  jobTypeEachWrapper: { display: "flex" },
  jobTypeValue: {
    fontWeight: "bold",
  },

  workIcon: { mr: 1, color: "blue", width: 25, height: 25 },
  rate: {
    display: "flex",
    mt: 2,
    justifyContent: "space-between",
  },
  categoryTitle: { fontWeight: "bold", fontSize: { xs: 18, md: 22 } },
  chipWrapper: { ml: 1, mt: 2 },
  profileButtonWrapper: {
    backgroundColor: "#EEEEEE",
    borderRadius: 3,
    boxShadow: 5,
    p: 2,
    maxWidth: 400,
  },
  profileButtonWrapperButtom: {
    mt: 2,
    display: "flex",
    justifyContent: "space-evenly",
  },
  totalBottom: { color: "blue", fontSize: 12 },
  selectedImagesWrapper: {
    display: "flex",
    overflowX: "scroll",
    p: 2,

    "::-webkit-scrollbar": {
      display: "none",
    },
  },
  imageWrapper: {
    ml: 2,
    "&:hover": {
      ".remove": {
        display: "block",
      },
    },
  },
  image: {
    width: 200,
    height: 120,
    border: "1px solid #BEBEBE",
    borderRadius: 5,

    "&:hover": {
      border: "1px solid black",
      boxShadow: 10,
    },
  },
};

function FindJobCardModal(props) {
  const { open, handleClose, selectedItem, user, handleForceUpdate } = props;

  const dispatch = useDispatch();

  const id =  selectedItem?.id;
  const isFavorite =
    user?.shortlists?.some((item) => item.post_id === id);

  const isBided =
    user?.bids?.some((item) => item.post_id === id);

  const [openApplyModal, setOpenApplyModal] = React.useState(false);
  const [openBidsModal, setOpenBidsModal] = React.useState(false);

  console.log(user);
  const handleOpen = () => {
    if (isAuth()) {
      if (user?.role === "Worker") {
        console.log(isBided)
        if (isBided) {
          ToastNotification(
            "error",
            "You cannot bid again! Only one bid per job post.",
            options
          );
        } else {
          setOpenApplyModal(!openApplyModal);
        }
      } else {
        ToastNotification(
          "error",
          `You can only create a job post with a ${user.role} account!`,
          options
        );
      }
    } else {
      setOpenApplyModal(!openApplyModal);
    }
  };

  const onHandleClose = () => {
    setOpenApplyModal(false);
    handleClose();
    handleForceUpdate();
  };

  const addToShortlist = (id) => {
    if (user && user.length !== 0 && user.role === "Worker") {
      Http.post(`/new/shortlist/post/${id}`)
        .then((res) => {
          if (res.data.code === 200) {
            dispatch(updateUser(res.data.user));
            ToastNotification("success", res.data.message, options);
          } else {
            ToastNotification("error", res.data.message, options);
          }
        })
        .catch((err) => {
          ToastNotification("error", err.message, options);
        });
    } else {
      ToastNotification(
        "error",
        "You are not allowed to add this post to your shortlist!",
        options
      );
    }
  };

  const removeToShortlist = (id) => {
    Http.delete(`/remove/shortlist/post/${id}`)
      .then((res) => {
        if (res.data.code === 200) {
          dispatch(updateUser(res.data.user));
          ToastNotification("success", res.data.message, options);
        } else {
          ToastNotification("error", res.data.message, options);
        }
      })
      .catch((err) => {
        ToastNotification("error", err.message, options);
      });
  };

  const proposalsCount =
    selectedItem && selectedItem.bids && selectedItem.bids.length;

  return (
    <Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ToastNotificationContainer />
          <ApplyModal
            open={openApplyModal}
            handleClose={() => setOpenApplyModal(false)}
            onHandleSubmit={onHandleClose}
            selectedItem={selectedItem}
          />
          <BidsModal
            open={openBidsModal}
            handleClose={() => setOpenBidsModal(false)}
            bids={selectedItem?.bids}
            selectedItem={selectedItem}
            handleForceUpdate={onHandleClose}
          />
          <Box sx={styles.exitIconWrapper}>
            <IconButton onClick={handleClose} sx={styles.exitIconButton}>
              <CancelIcon color="error" />
            </IconButton>
          </Box>

          <Box sx={{ p: 1 }}>
            <Typography sx={styles.jobTitle}>
              {selectedItem && selectedItem.title}
            </Typography>
            <Typography sx={styles.jobPosition}>
              {selectedItem && selectedItem.position}
            </Typography>
            <Box sx={styles.mainContent}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={6}>
                  <Box sx={styles.profileWrapper}>
                    <Avatar
                      alt={
                        selectedItem &&
                        selectedItem.client &&
                        selectedItem.client.fullname
                      }
                      src={
                        selectedItem &&
                        selectedItem.client &&
                        selectedItem.client.profile[0].profile_url
                      }
                      sx={{ mr: 2 }}
                    />
                    <Box sx={styles.nameDateWrapper}>
                      <Typography sx={styles.fullname}>
                        {selectedItem &&
                          selectedItem.client &&
                          selectedItem.client.fullname}
                      </Typography>
                      <Typography sx={styles.date}>
                        Posted {selectedItem && selectedItem.created_at}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <Box sx={{ display: "flex" }} align="center">
                    <Badge
                      color="primary"
                      badgeContent={proposalsCount && proposalsCount}
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "left",
                      }}
                    >
                      <Button
                        variant="outlined"
                        color="primary"
                        size="small"
                        sx={{ mr: 0.5 }}
                        onClick={() => setOpenBidsModal(true)}
                      >
                        Bids
                      </Button>
                    </Badge>

                    {!isFavorite && (
                      <Button
                        variant="outlined"
                        color="primary"
                        size="small"
                        startIcon={<BookmarkBorderIcon />}
                        onClick={() =>
                          addToShortlist(selectedItem && selectedItem.id)
                        }
                      >
                        Add to Shortlist
                      </Button>
                    )}
                    {isFavorite && (
                      <Button
                        variant="outlined"
                        color="primary"
                        size="small"
                        startIcon={<BookmarkIcon color="primary" />}
                        onClick={() =>
                          removeToShortlist(selectedItem && selectedItem.id)
                        }
                      >
                        Remove to Shortlist
                      </Button>
                    )}
                    <Button
                      variant="outlined"
                      color="primary"
                      size="small"
                      startIcon={<ReportIcon />}
                      sx={{ ml: 0.5 }}
                    >
                      Report
                    </Button>
                  </Box>
                </Grid>
              </Grid>

              <Grid container spacing={2}>
                <Grid item xs={12} md={3.5}>
                  <Box sx={styles.contentWrapper}>
                    <Box>
                      <Box sx={styles.jobType}>
                        <Box sx={styles.jobTypeEachWrapper}>
                          <WorkOutlineIcon sx={styles.workIcon} />
                          <Typography>Job Type</Typography>
                        </Box>
                        <Typography sx={styles.jobTypeValue}>
                          {selectedItem && selectedItem.job_type}
                        </Typography>
                      </Box>
                      {selectedItem &&
                        selectedItem.job_type === "Daily Rate" && (
                          <React.Fragment>
                            <Box sx={styles.rate}>
                              <Box sx={styles.jobTypeEachWrapper}>
                                <LocalAtmIcon sx={styles.workIcon} />
                                <Typography>Rate</Typography>
                              </Box>
                              <Typography sx={styles.jobTypeValue}>
                                ₱{" "}
                                {selectedItem && formatValue(selectedItem.rate)}
                              </Typography>
                            </Box>
                            <Box sx={styles.rate}>
                              <Box sx={styles.jobTypeEachWrapper}>
                                <CalendarMonthIcon sx={styles.workIcon} />
                                <Typography>Days</Typography>
                              </Box>
                              <Typography sx={styles.jobTypeValue}>
                                {selectedItem && selectedItem.days}
                              </Typography>
                            </Box>
                          </React.Fragment>
                        )}
                      {selectedItem &&
                        selectedItem.job_type === "Fixed Cost" && (
                          <React.Fragment>
                            <Box sx={styles.rate}>
                              <Box sx={styles.jobTypeEachWrapper}>
                                <LocalAtmIcon sx={styles.workIcon} />
                                <Typography>budget</Typography>
                              </Box>
                              <Typography sx={styles.jobTypeValue}>
                                ₱{" "}
                                {selectedItem &&
                                  formatValue(selectedItem.budget)}
                              </Typography>
                            </Box>
                          </React.Fragment>
                        )}
                    </Box>
                    <Button
                      size="small"
                      fullWidth
                      variant="contained"
                      color="primary"
                      sx={{ mt: 5 }}
                      onClick={handleOpen}
                    >
                      Apply
                    </Button>
                  </Box>
                </Grid>
                <Grid item xs={12} md={8.5}>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: selectedItem && selectedItem.description,
                    }}
                  />
                  <Box sx={styles.selectedImagesWrapper}>
                    {selectedItem &&
                      selectedItem.images?.map((image, i) => (
                        <Box key={i} sx={{ m: 0.5 }}>
                          <img
                            style={styles.image}
                            src={image.url}
                            alt={image.name}
                          />
                        </Box>
                      ))}
                  </Box>
                </Grid>
              </Grid>

              <Box>
                {selectedItem?.category && (
                  <Box sx={{ mb: 5, mt: 2 }}>
                    <Typography sx={styles.categoryTitle}>Category</Typography>
                    <Box sx={styles.chipWrapper}>
                      <Chip
                        label={selectedItem && selectedItem.category}
                        variant="contained"
                        color="primary"
                      />
                    </Box>
                  </Box>
                )}

                {selectedItem?.skills && (
                  <Box sx={{ mb: 5 }}>
                    <Typography sx={styles.categoryTitle}>
                      Skills We Are Looking For
                    </Typography>
                    <Box sx={styles.chipWrapper}>
                      {selectedItem &&
                        selectedItem?.skills &&
                        selectedItem?.skills.map((skill, i) => (
                          <Chip
                            key={i}
                            label={skill}
                            variant="contained"
                            color="primary"
                            sx={{ m: 0.5 }}
                          />
                        ))}
                    </Box>
                  </Box>
                )}

                {selectedItem?.locations && (
                  <Box sx={{ mb: 5 }}>
                    <Typography sx={styles.categoryTitle}>
                      Preferred Worker Location
                    </Typography>
                    <Box sx={styles.chipWrapper}>
                      {selectedItem &&
                        selectedItem?.locations &&
                        selectedItem?.locations.map((location, i) => (
                          <Chip
                            key={i}
                            label={location}
                            variant="contained"
                            color="primary"
                            sx={{ m: 0.5 }}
                          />
                        ))}
                    </Box>
                  </Box>
                )}

                <Box sx={styles.profileButtonWrapper}>
                  <Box sx={styles.profileWrapper}>
                    <Avatar
                      alt={
                        selectedItem &&
                        selectedItem.client &&
                        selectedItem.client.fullname
                      }
                      src={
                        selectedItem &&
                        selectedItem.client &&
                        selectedItem.client.profile[0].profile_url
                      }
                      sx={{ mr: 1 }}
                    />
                    <Typography sx={{ fontWeight: 600 }}>
                      {selectedItem &&
                        selectedItem.client &&
                        selectedItem.client.fullname}
                    </Typography>
                  </Box>
                  <Box align="center" sx={styles.profileButtonWrapperButtom}>
                    <Box>
                      <Typography sx={styles.totalBottom}>
                        {selectedItem && selectedItem.total}
                      </Typography>
                      <Typography sx={styles.totalBottom}>
                        Job Posted
                      </Typography>
                    </Box>
                    <Box>
                      <Typography sx={styles.totalBottom}>$0</Typography>
                      <Typography sx={styles.totalBottom}>
                        Total Spent
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}

export default FindJobCardModal;
