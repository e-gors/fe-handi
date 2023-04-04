import React, { lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import Loader from "../layouts/Loader";
import Footer from "../layouts/Footer";
import AppBarMenu from "../layouts/AppBarMenu";

function Public(props) {
  const { component, ...rest } = props;
  const Component = lazy(() => import(`../${component}`));

  return (
    <Route
      {...rest}
      render={(props) => (
        <Suspense fallback={<Loader />}>
          <AppBarMenu />
          <Component {...props} />
          <Footer />
        </Suspense>
      )}
    />
  );
}

export default Public;
