import { Avatar, Box, Button, Chip, Stack, Typography } from "@mui/material";
import React from "react";
import EditBid from "./EditBid";

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

function BidModal(props) {
  const { open, onClose, onConfirm, selectedItem } = props;

  const [openEditProposal, setOpenEditProposal] = React.useState(false);

  const onHandleClose = () => {
    setOpenEditProposal(false);
  };

  return (
    <Box>
      <EditBid
        open={openEditProposal}
        handleClose={() => setOpenEditProposal(false)}
        onHandleSubmit={onHandleClose}
        selectedItem={selectedItem}
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
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", mt: 1 }}>
            <Avatar
              alt={selectedItem.profile.full_name}
              src={selectedItem.profile.profile_url}
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
              >
                {selectedItem.profile.full_name}
              </Typography>
              <Stack sx={styles.categoryWrapper}>
                {/* {limitedCategories &&
                  limitedCategories.map((category, categoryIndex) => (
                    <Chip
                      size="small"
                      key={categoryIndex}
                      label={category.name}
                      variant="contained"
                      sx={styles.category}
                    />
                  ))} */}
                {selectedItem.user.categoryChildren &&
                  selectedItem.user.categoryChildren.length > limit && (
                    <Chip
                      size="small"
                      label={`+${
                        selectedItem.user.categoryChildren &&
                        selectedItem.user.categoryChildren.length - limit
                      }`}
                      variant="contained"
                      sx={styles.moreSkill}
                    />
                  )}
              </Stack>

              <Typography sx={{ fontSize: { xs: 12, md: 13 } }}>
                {selectedItem.profile.address}
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
              ₱{selectedItem.rate}
            </Typography>
          </Box>
        </Box>
        <Box sx={{ mt: 2 }}>
          <div
            style={{ fontSize: 14 }}
            dangerouslySetInnerHTML={{
              __html: selectedItem && selectedItem.proposal,
            }}
          ></div>
        </Box>
        {selectedItem.images && selectedItem.images.length > 0 && (
          <Box>
            <Typography sx={styles.rateLabel}>Completed Projects</Typography>
            <Box sx={styles.selectedImagesWrapper}>
              {selectedItem.images.map((image, i) => (
                <Box key={i} sx={{ m: 0.5 }}>
                  <img style={styles.image} src={image.url} alt={image.name} />
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
          <Button
            variant="outlined"
            color="primary"
            size="small"
            onClick={() => setOpenEditProposal(true)}
          >
            Edit
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default BidModal;
