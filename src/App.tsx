import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Nav } from "./Nav";
import { Routes } from "./Routes";

export const App: React.FC = () => (
  <>
    <BrowserRouter>
      <Nav />

      <main style={{ marginTop: "64px" }}>
        <Switch>
          {Routes.map(({ path, component }) => (
            <Route exact key={path} path={path}>
              {component}
            </Route>
          ))}

          {/* Fallback */}
          <Route path="/">
            <div>Topics</div>
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  </>
);
