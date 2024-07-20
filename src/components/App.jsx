import React, { lazy, Suspense, useState, useEffect } from "react";
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
import UserContext from "../utils/UserContext";

const LazyComponentAbout = lazy(() => import("./About"));

// Home Page - AppLayout
const AppLayout = () => {
  const [userInfo, setUserInfo] = useState();

  // Dummy Authentication Logic
  useEffect(()=> {
    // Make an API call & send username and password
    const data = {
      name: ""
    }
    setUserInfo(data.name);
  }, [])


  return (
    <UserContext.Provider value={{loggedInUser: userInfo, setUserInfo}}>
      <div className="AppLayout AppLayout-wrapper">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
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
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <LazyComponentAbout />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
