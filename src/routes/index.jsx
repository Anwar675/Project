import Home from "../Pages/Home/Home.jsx";
import Following from "../Pages/Following/Following.jsx";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/following", component: Following },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
