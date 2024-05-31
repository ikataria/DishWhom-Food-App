import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  useRouteError,
  Outlet,
} from "react-router-dom";

import Header from "./Headers";
import Body from "./Body";
import Footer from "./Footer";
import Contact from "./Contact";
import About from "./About";
import Error from "./Error";

// Home Page - AppLayout
const AppLayout = () => {
  return (
    <div className="AppLayout">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/home",
        element: <Body />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
