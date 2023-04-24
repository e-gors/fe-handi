import { useState } from "react";
// @mui
import { styled } from "@mui/material/styles";
import {
  Input,
  Slide,
  Button,
  IconButton,
  InputAdornment,
  ClickAwayListener,
  Box,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
// utils
import { bgBlur } from "../assets/styles/cssStyles";
import FormField from "../components/FormField";
// component

// ----------------------------------------------------------------------

const HEADER_MOBILE = 64;
const HEADER_DESKTOP = 92;

const StyledSearchbar = styled("div")(({ theme }) => ({
  ...bgBlur({ color: theme.palette.background.default }),
  top: 0,
  left: 0,
  zIndex: 99,
  width: "100%",
  display: "flex",
  position: "absolute",
  alignItems: "center",
  height: HEADER_MOBILE,
  padding: theme.spacing(0, 3),
  [theme.breakpoints.up("md")]: {
    height: HEADER_DESKTOP,
    padding: theme.spacing(0, 5),
  },
}));

// ----------------------------------------------------------------------

export default function Searchbar(props) {
  const { color } = props;
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <Box>
        {!open && (
          <IconButton onClick={handleOpen}>
            <FormField
              name="search"
              sx={{
                color: "white",
                background: "rgba(255, 255, 255, 0.5)",
                ml: 2,
                width: 240,
                display: { xs: "none", md: "block" },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon
                      sx={{ color: { color }, width: 20, height: 20 }}
                    />
                  </InputAdornment>
                ),
              }}
            />
            <SearchIcon
              sx={{
                color: { color },
                width: 20,
                height: 20,
                ml: 1,
                display: { sm: "block", md: "none" },
              }}
            />
          </IconButton>
        )}

        <Slide direction="down" in={open} mountOnEnter unmountOnExit>
          <StyledSearchbar>
            <Input
              autoFocus
              fullWidth
              disableUnderline
              placeholder="Search…"
              startAdornment={
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: "black", width: 20, height: 20 }} />
                </InputAdornment>
              }
              sx={{ mr: 1, fontWeight: "fontWeightBold" }}
            />
            <Button variant="contained" onClick={handleClose}>
              Search
            </Button>
          </StyledSearchbar>
        </Slide>
      </Box>
    </ClickAwayListener>
  );
}
