import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { FC } from "react";

import { NowPlaying } from "@/pages/NowPlaying";
import { Favorite } from "@/pages/Favorite";
import { Upcoming } from "@/pages/Upcoming";
import { Popular } from "@/pages/Popular";
import { Details } from "@/pages/Details";
import Home from "@/pages";

const Routes: FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/popular",
      element: <Popular />,
    },
    {
      path: "/upcoming",
      element: <Upcoming />,
    },
    {
      path: "/now-playing",
      element: <NowPlaying />,
    },
    {
      path: "/details/:id",
      element: <Details />,
    },
    {
      path: "/favorite",
      element: <Favorite />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Routes;
