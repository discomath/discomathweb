import React from "react";

interface Route {
  /** URL path */
  path: string;
  /** React component rendered at this path */
  component: JSX.Element;
  /** Human-friendly navigation label */
  label: string;
}

export const Routes: Route[] = [
  {
    path: "/topics",
    component: <div>Topics</div>,
    label: "Topics",
  },
  {
    path: "/applications/divisibility",
    component: <div>Divisibility</div>,
    label: "Divisibility",
  },
  {
    path: "/applications/gcf",
    component: <div>GCF</div>,
    label: "Greatest Common Factor",
  },
  {
    path: "/applications/prime-numbers/factors",
    component: <div>Prime Factorization</div>,
    label: "Prime Factorization",
  },
  {
    path: "/applications/prime-numbers/test",
    component: <div>PrimeTest</div>,
    label: "Prime Test",
  },
];
