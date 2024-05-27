import { createBrowserRouter } from "react-router-dom";
import MainPageLayout from "./main-page-layout";
import SignInPage from "~/modules/auth/sign-in/sign-in.page";
import SignUpPage from "~/modules/auth/sign-up/sign-up.page";
import ForgotPasswordPage from "~/modules/auth/forgot-password/forgot-password.page";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        element: <MainPageLayout />,
        children: [
          {
            path: "/",
            element: <>Hello, From home!</>,
          },
          {
            path: "/products",
            element: <>Hello, From products!</>,
          },
        ],
      },
    ],
  },
  {
    path: "/auth",
    children: [
      {
        path: "sign-in",
        element: <SignInPage />,
      },
      {
        path: "sign-up",
        element: <SignUpPage />,
      },
      {
        path: "forgot-password",
        element: <ForgotPasswordPage />,
      },
    ],
  },
]);

export default AppRouter;
