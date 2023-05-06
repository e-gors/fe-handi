import { Box, Chip, Stack, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import FindJobWorkerFilter from "../../components/FindJobWorkerFilter";
import FindWorkerCard from "../../components/worker/FindWorkerCard";

function CMarketplace() {
  const workers = useSelector((state) => state.profiles.workers);
  const categories = useSelector((state) => state.categories.categories);
  const skills = useSelector((state) => state.skills.skills);

  return (
    <Box sx={{ p: { xs: 2, md: 5 }, mt: 10 }}>
      <Box>
        <Box
          sx={{
            position: "sticky",
            top: 60,
            bgcolor: "background.paper",
            zIndex: 1,
          }}
        >
          <Typography
            sx={{ fontSize: { xs: 30, md: 36 }, fontWeight: "bold", ml: 1 }}
          >
            Find Workers
          </Typography>

          <Stack
            sx={{
              display: "flex",
              flexWrap: { xs: "noWrap", md: "wrap" },
              flexDirection: "row",
              alignItems: "center",
              overflowX: { xs: "scroll", md: "none" },

              "&::-webkit-scrollbar": {
                width: 0,
              },
            }}
          >
            {workers.map((worker, i) => {
              worker.categories.map((category, i) => {
                return (
                  <Chip
                    key={i}
                    label={category.name}
                    variant="contained"
                    sx={{ m: 1, cursor: "pointer" }}
                  />
                );
              });
            })}
            {/* {!showMore && chipLabel.length > 3 && (
              <Typography
                component="span"
                variant="outlined"
                onClick={handleShowMore}
                sx={{
                  fontSize: 12,
                  cursor: "pointer",
                  textDecoration: "underline",
                  color: "blue",
                  whiteSpace: "noWrap",
                }}
              >
                show more
              </Typography>
            )} */}
            {/* {showMore && (
              <Typography
                component="span"
                variant="outlined"
                onClick={handleShowLess}
                sx={{
                  fontSize: 14,
                  cursor: "pointer",
                  textDecoration: "underline",
                  color: "blue",
                  whiteSpace: "noWrap",
                }}
              >
                Show less
              </Typography>
            )} */}
          </Stack>

          <FindJobWorkerFilter categories={categories} skills={skills} />
        </Box>

        <FindWorkerCard workers={workers} />
      </Box>
    </Box>
  );
}

export default CMarketplace;
