import { Box, Chip, Pagination, Stack, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import FindJobWorkerFilter from "../../components/FindJobWorkerFilter";
import FindJobCard from "../../components/worker/FindJobCard";
import noGuardHttp from "../../../register/service";

function CMarketplace() {
  const categories = useSelector((state) => state.categories.categories);
  const skills = useSelector((state) => state.skills.skills);
  const locations = useSelector((state) => state.locations.locations);

  const [loading, setLoading] = React.useState(false);
  const [onLoadLoading, setOnLoadLoading] = React.useState(false);
  const [showMore, setShowMore] = React.useState(false);

  const [jobs, setJobs] = React.useState({
    data: [],
    meta: {},
  });
  const [limit, setLimit] = React.useState({
    limit: 10,
    page: 1,
  });
  const [filterValues, setFilterValues] = React.useState({
    values: {
      search: "",
      sort_by: "Relevance",
      category: "",
      location: "",
      salary_range: [0, 15000],
      skill: "",
    },
  });

  React.useEffect(() => {
    setLimit((prev) => ({
      limit: prev.limit,
      page: 1,
    }));
    optimizedFn(filterValues.values);
  }, [filterValues.values]); // eslint-disable-line

  const fetchingData = (params = {}) => {
    setLoading(true);
    noGuardHttp
      .get("/jobs", {
        params: {
          ...limit,
          ...params,
        },
      })
      .then((res) => {
        if (res.data.data) {
          setJobs({
            data: res.data.data,
            meta: res.data.meta,
          });
        }
        setLoading(false);
        setOnLoadLoading(false);
      });
  };

  const debounce = (func) => {
    let timer;
    return function (...args) {
      const context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, 700);
    };
  };

  const optimizedFn = React.useCallback(debounce(fetchingData), []); // eslint-disable-line

  const handleFilter = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFilterValues((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [name]: value,
      },
    }));
  };

  const handleChangeLimit = (name, value) => {
    setLimit((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleClearFilter = () => {
    setFilterValues({
      values: {
        search: "",
        sort_by: "Relevance",
        category: "",
        location: "",
        salary_range: [0, 15000],
        skill: "",
      },
    });
  };

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  const handleSetCategoryFilter = (name, value) => {
    setFilterValues((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [name]: value,
      },
    }));
  };

  const handleChangePage = (e, newPage) => {
    if (limit.page !== newPage) {
      setOnLoadLoading(true);
      setLimit((prev) => ({
        limit: prev.limit,
        page: newPage,
      }));
      optimizedFn({ page: newPage });
    }
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
              onClick={() => handleSetCategoryFilter("category", child.name)}
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
            onClick={() => handleSetCategoryFilter("category", child.name)}
          />
        ));
      });
    }
  };

  const filterValuesCount = Object.entries(filterValues.values).filter(
    ([key, value]) =>
      key !== "search" && key !== "sort_by" && value !== null && value !== ""
  ).length;

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
            Find Jobs
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
            filterValues={filterValues}
            handleFilter={handleFilter}
            handleClearFilter={handleClearFilter}
            locations={locations}
            filterValuesCount={filterValuesCount}
          />
        </Box>
        <FindJobCard jobs={jobs.data} loading={loading} />
        {jobs.data && jobs.data.length !== 0 && (
          <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
            <Pagination
              count={Math.ceil(jobs.meta.total / limit.limit)}
              page={limit.page}
              onChange={handleChangePage}
              disabled={onLoadLoading} // Disable pagination when loading more jobs
              color="primary"
              variant="outlined"
              shape="rounded"
            />
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default CMarketplace;
