import { Route, Router as BrowserRouter, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import routes from "./routes/routes";
import Private from "./routes/Private";
import Public from "./routes/Public";
import NotFound from "./routes/NotFound";
import PrivateClient from "./routes/PrivateClient";
import PrivateWorker from "./routes/PrivateWorker";

function App() {
  return (
    <BrowserRouter history={createBrowserHistory()}>
      <Switch>
        {routes.map((route, index) => {
          if (route.auth) {
            if (route.role === "Client") {
              return (
                <PrivateClient exact key={index} {...route} role={route.role} />
              );
            } else if (route.role === "Worker") {
              return (
                <PrivateWorker exact key={index} {...route} role={route.role} />
              );
            } else {
              return <Private exact key={index} {...route} />;
            }
          } else {
            return <Public exact key={index} {...route} />;
          }
        })}
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
