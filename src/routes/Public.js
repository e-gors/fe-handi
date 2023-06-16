import React, { lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import Loader from "../layouts/Loader";
import Footer from "../layouts/Footer";
import PublicAppBarMenu from "../layouts/PublicAppBarMenu";
import { createTheme, ThemeProvider } from "@mui/material";
import { isAuth } from "../utils/helpers";
import { Redirect } from "react-router-dom";

const theme = createTheme({
  typography: {
    fontFamily: [
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});

function Public(props) {
  const { component, ...rest } = props;
  const Component = lazy(() => import(`../${component}`));

  return (
    <Route
      {...rest}
      render={(props) => (
        <Suspense fallback={<Loader />}>
          <ThemeProvider theme={theme}>
            <PublicAppBarMenu />
            <Component {...props} />
            <Footer />
          </ThemeProvider>
        </Suspense>
      )}
    />
  );
}

export default Public;
