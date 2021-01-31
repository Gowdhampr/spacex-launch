import React, { Component, Suspense } from "react";
import { Route, Switch } from "react-router-dom";

// routes config
import routes from "../../routes";

// Components
import DefaultFooter from "./DefaultFooter";

class DefaultLayout extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-body">
          <main className="container">
            <Suspense>
              <Switch>
                {routes.map((route, idx) => {
                  return route.component ? (
                    <Route
                      key={idx}
                      path={route.path}
                      exact={route.exact}
                      name={route.name}
                      render={props => <route.component {...props} />}
                    />
                  ) : null;
                })}
              </Switch>
            </Suspense>
          </main>
        </div>
        <DefaultFooter />
      </div>
    );
  }
}

export default DefaultLayout;
