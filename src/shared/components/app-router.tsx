import { createBrowserRouter } from "react-router-dom";
import MainPageLayout from "./main-page-layout";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainPageLayout />,
    children: [
      {
        path: "/",
        element: <>Hello, From Home!</>,
      },
      {
        path: "/products",
        element: <>Hello, From products!</>,
      },
    ],
  },
]);

export default AppRouter;
