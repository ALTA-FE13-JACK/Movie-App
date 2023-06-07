import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { FC } from "react";

import Home from "@/pages";
import { Popular } from "@/pages/Popular";
import { Upcoming } from "@/pages/Upcoming";
import { NowPlaying } from "@/pages/NowPlaying";

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
  ]);

  return <RouterProvider router={router} />;
};

export default Routes;
