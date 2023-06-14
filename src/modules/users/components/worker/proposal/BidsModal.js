import {
  Avatar,
  Box,
  Button,
  Chip,
  IconButton,
  Modal,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import { isAuth } from "../../../../../utils/helpers";
import { useSelector } from "react-redux";
import EditBid from "./EditBid";
import ConfirmationModal from "../../../../../components/ConfirmationModal";
import ScheduleModal from "./ScheduleModal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "95%", md: "60%" },
  maxWidth: 900,
  maxHeight: "90vh",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 3,
};

const styles = {
  exitIconWrapper: { p: 2, position: "relative" },
  exitIconButton: { position: "absolute", top: 2, right: 2 },
  categoryWrapper: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "center",
  },
  category: {
    m: 0.3,
    fontSize: { xs: 12, md: 14 },
    border: "2px solid white",
    boxShadow: 1,
  },
  rateLabel: {
    fontWeight: "bold",
    fontSize: { xs: 18, md: 20 },
  },
  rateText: {
    backgroundColor: "#FF9100",
    p: 1,
    borderRadius: 3,
  },
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

const limit = 2;

function BidsModal(props) {
  const { open, handleClose, bids, selectedItem, handleForceUpdate } = props;

  const user = useSelector((state) => state.users.user);

  const [openEditProposal, setOpenEditProposal] = React.useState(false);
  const [openConfirmModal, setOpenConfirmModal] = React.useState(false);
  const [openScheduleModal, setOpenScheduleModal] = React.useState(false);
  const [selectedBid, setSelectedBid] = React.useState({});

  const onHandleClose = () => {
    setOpenEditProposal(false);
    handleClose();
    handleForceUpdate();
  };

  const isPostOwner =
    isAuth() && user.role === "Client" && user.id === selectedItem.user_id;

  const handleChoose = (item) => {
    setSelectedBid(item);
    setOpenConfirmModal(true);
  };

  const onConfirm = () => {
    setOpenScheduleModal(true);
  };

  const onClose = () => {
    setOpenScheduleModal(false);
    handleClose();
  };

  return (
    <Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ConfirmationModal
            open={openConfirmModal}
            title="Are you sure?"
            onConfirm={onConfirm}
            message="Choose this worker for your project?"
            onClose={() => setOpenConfirmModal(false)}
          />
          <ScheduleModal
            open={openScheduleModal}
            handleClose={onClose}
            selectedItem={selectedItem}
            bid={selectedBid}
          />
          <Box sx={{ p: 2 }}>
            <Box sx={styles.exitIconWrapper}>
              <IconButton onClick={handleClose} sx={styles.exitIconButton}>
                <CancelIcon color="error" />
              </IconButton>
            </Box>
            <Box sx={{ mb: 3 }}>
              <Typography
                sx={{ fontWeight: "bold", fontSize: { xs: 20, md: 24 } }}
              >
                Proposals
              </Typography>
            </Box>
            <Box
              sx={{
                maxHeight: "72vh",
                overflow: "auto",

                "::-webkit-scrollbar": {
                  display: "none",
                },
              }}
            >
              {bids &&
                bids.map((bid, i) => {
                  const limitedCategories =
                    bid.user.categoryChildren &&
                    bid.user.categoryChildren?.length > limit &&
                    bid.user.categoryChildren.slice(0, limit);
                  const isProposalOwner =
                    isAuth() &&
                    user.role === "Worker" &&
                    bid.user_id === user.id;

                  return (
                    <React.Fragment key={i}>
                      <EditBid
                        open={openEditProposal}
                        handleClose={() => setOpenEditProposal(false)}
                        selectedItem={selectedItem}
                        onHandleSubmit={onHandleClose}
                        bid={bid}
                      />
                      <Box
                        sx={{
                          backgroundColor: "#EEEEEE",
                          boxShadow: 3,
                          p: 2,
                          borderRadius: 3,
                          mb: 2,
                        }}
                      >
                        <Box
                          key={i}
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Box sx={{ display: "flex", mt: 1 }}>
                            <Avatar
                              alt={bid.profile.full_name}
                              src={bid.profile.profile_url}
                            />
                            <Box sx={{ ml: 1 }}>
                              <Typography
                                sx={{
                                  fontWeight: "bold",
                                  fontSize: { xs: 14, md: 18 },
                                  cursor: "pointer",

                                  "&:hover": {
                                    color: "blue",
                                  },
                                }}
                                onClick={() =>
                                  window.open(bid.profile.profile_link)
                                }
                              >
                                {bid.profile.full_name}
                              </Typography>
                              <Stack sx={styles.categoryWrapper}>
                                {limitedCategories &&
                                  limitedCategories.map(
                                    (category, categoryIndex) => (
                                      <Chip
                                        size="small"
                                        key={categoryIndex}
                                        label={category.name}
                                        variant="contained"
                                        sx={styles.category}
                                      />
                                    )
                                  )}
                                {bid.user.categoryChildren &&
                                  bid.user.categoryChildren.length > limit && (
                                    <Chip
                                      size="small"
                                      key={`${i}-more`}
                                      label={`+${
                                        bid.user.categoryChildren &&
                                        bid.user.categoryChildren.length - limit
                                      }`}
                                      variant="contained"
                                      sx={styles.moreSkill}
                                    />
                                  )}
                              </Stack>

                              <Typography sx={{ fontSize: { xs: 12, md: 13 } }}>
                                {bid.profile.address}
                              </Typography>
                            </Box>
                          </Box>
                          <Box>
                            <Typography
                              sx={{
                                fontWeight: "bold",
                                fontSize: { xs: 12, md: 16 },
                              }}
                            >
                              ₱{bid.rate}
                            </Typography>
                          </Box>
                        </Box>
                        <Box sx={{ mt: 2 }}>
                          <div
                            style={{ fontSize: 14 }}
                            dangerouslySetInnerHTML={{
                              __html: bid && bid.proposal,
                            }}
                          ></div>
                        </Box>
                        {bid.images && bid.images.length > 0 && (
                          <Box>
                            <Typography sx={styles.rateLabel}>
                              Completed Projects
                            </Typography>
                            <Box sx={styles.selectedImagesWrapper}>
                              {bid.images.map((image, i) => (
                                <Box key={i} sx={{ m: 0.5 }}>
                                  <img
                                    style={styles.image}
                                    src={image.url}
                                    alt={image.name}
                                  />
                                </Box>
                              ))}
                            </Box>
                          </Box>
                        )}
                        <Box
                          sx={{
                            mt: 2,
                          }}
                          align="right"
                        >
                          {isPostOwner && (
                            <Button
                              variant="contained"
                              color="primary"
                              size="small"
                              onClick={() => handleChoose(bid)}
                            >
                              Choose Worker
                            </Button>
                          )}
                          {isProposalOwner && (
                            <Button
                              variant="outlined"
                              color="primary"
                              size="small"
                              onClick={() => setOpenEditProposal(true)}
                            >
                              Edit
                            </Button>
                          )}
                        </Box>
                      </Box>
                    </React.Fragment>
                  );
                })}
            </Box>
            {bids && bids.length === 0 && (
              <Box>
                <Typography>No proposals for this job post.</Typography>
              </Box>
            )}
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}

export default BidsModal;
