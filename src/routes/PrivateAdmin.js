import React, { lazy, Suspense } from "react";
import { Redirect, Route } from "react-router-dom";
import Loader from "../layouts/Loader";
import { isAuth } from "../utils/helpers";
import { createTheme, ThemeProvider } from "@mui/material";
import { useSelector } from "react-redux";
import Default from "../modules/users/admin/layouts/Default";

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

function PrivateAdmin(props) {
  const { component, role, ...rest } = props;
  const Component = lazy(() => import(`../${component}`));

  const user = useSelector((state) => state.users.user);

  if (user && user.role !== role) {
    return <Route render={() => <Redirect to="/forbidden" />} />;
  }
  if (!isAuth()) {
    return <Route render={() => <Redirect to="/login" />} />;
  }

  return (
    <Route
      {...rest}
      render={(props) => (
        <Suspense fallback={<Loader />}>
          <ThemeProvider theme={theme}>
            <Default>
              <Component {...props} />
            </Default>
          </ThemeProvider>
        </Suspense>
      )}
    />
  );
}

export default PrivateAdmin;
