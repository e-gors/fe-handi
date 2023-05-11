import { Box, Chip, Stack, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import FindJobWorkerFilter from "../../components/FindJobWorkerFilter";
import FindWorkerCard from "../../components/worker/FindWorkerCard";

function WMarketplace() {
  const workers = useSelector((state) => state.profiles.workers);
  const categories = useSelector((state) => state.categories.categories);
  const skills = useSelector((state) => state.skills.skills);

  const [showMore, setShowMore] = React.useState(false);
  const [filters, setFilters] = React.useState();
  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  const handleSetCategoryFilter = (item) => {
    setFilters(item);
  };

  const limitShow = (categories, limit) => {
    if (limit) {
      return categories.map((category) => {
        return category.children
          .slice(0, limit)
          .map((child, childIndex) => (
            <Chip
              key={childIndex}
              label={child.name}
              variant="contained"
              sx={{ m: 1, cursor: "pointer" }}
              onClick={() => handleSetCategoryFilter(child.name)}
            />
          ));
      });
    } else {
      return categories.map((category) => {
        return category.children.map((child, childIndex) => (
          <Chip
            key={childIndex}
            label={child.name}
            variant="contained"
            sx={{ m: 1, cursor: "pointer" }}
            onClick={() => handleSetCategoryFilter(child.name)}
          />
        ));
      });
    }
  };

  return (
    <Box sx={{ p: { xs: 2, md: 5 }, mt: 10 }}>
      <Box>
        <Box
          sx={{
            position: "sticky",
            top: { xs: -30, md: 60 },
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
            {!showMore && limitShow(categories, 2)}
            {showMore && limitShow(categories)}
            {!showMore && categories.length > 3 && (
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
            )}
            {showMore && (
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
                Show less
              </Typography>
            )}
          </Stack>

          <FindJobWorkerFilter
            categories={categories}
            skills={skills}
            type="workers"
          />
        </Box>

        <FindWorkerCard workers={workers} />
      </Box>
    </Box>
  );
}

export default WMarketplace;
