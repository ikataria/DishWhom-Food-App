import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  useRouteError,
  Outlet,
} from "react-router-dom";

import Header from "./Headers";
import Body from "./Body";
import RestaurantMenu from "./RestaurantMenu";
// import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import Footer from "./Footer";
import Login from "./Login";

const LazyComponentAbout = lazy(() => import('./About'));

// Home Page - AppLayout
const AppLayout = () => {
  return (
    <div className="AppLayout AppLayout-wrapper">
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
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <Suspense fallback={<h1>Loading...</h1>}>
          <LazyComponentAbout/>
        </Suspense>,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu/>
      },
      {
        path: "/login",
        element: <Login />,
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
