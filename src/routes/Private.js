/** @format */

import React, { lazy, Suspense } from "react";
import { Redirect, Route, useHistory } from "react-router-dom";
import Loader from "../layouts/Loader";
import { isAuth } from "../utils/helpers";
import { createTheme, ThemeProvider } from "@mui/material";
import PrivateAppBarMenu from "../layouts/PrivateAppBarMenu";
import Footer from "../layouts/Footer";
import { useSelector } from "react-redux";

const theme = createTheme({
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});

function Private(props) {
  const { component, ...rest } = props;
  const Component = lazy(() => import(`../${component}`));

  const history = useHistory();
  const user = useSelector((state) => state.users.user);

  React.useEffect(() => {
    if (user.role === "Super Admin") {
      history.push("/admin/dashboard");
    }
  }, []);

  // if (user && user.email_verified_at === null) {
  //   return <Route render={() => <Redirect to="/confirm-registration" />} />;
  // }

  if (!isAuth()) {
    return <Route render={() => <Redirect to="/login" />} />;
  }
  return (
    <Route
      {...rest}
      render={(props) => (
        <Suspense fallback={<Loader />}>
          <ThemeProvider theme={theme}>
            <PrivateAppBarMenu />
            <Component {...props} />
            <Footer />
          </ThemeProvider>
        </Suspense>
      )}
    />
  );
}

export default Private;
