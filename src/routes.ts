import { FC } from 'react';
import Songs from "./pages/Songs";
import Playlists from "./pages/Playlists";

export interface Route {
  title: string;
  path: string;
  Component: FC;
}

const routes: Route[] = [
  {
    title: "Songs",
    path: "/songs",
    Component: Songs
  },
  {
    title: "Playlists",
    path: "/playlists",
    Component: Playlists
  }
]

export default routes;
