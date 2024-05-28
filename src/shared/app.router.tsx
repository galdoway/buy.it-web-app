import { createBrowserRouter } from "react-router-dom";
import MainPageLayout from "./components/main-page-layout";
import SignInPage from "~/modules/auth/sign-in/sign-in.page";
import SignUpPage from "~/modules/auth/sign-up/sign-up.page";
import ForgotPasswordPage from "~/modules/auth/forgot-password/forgot-password.page";
import NotFoundErrorPage from "~/shared/pages/not-found-error.page";
import HomePage from "~/modules/home/home.page";
import ProductDetailsPage from "~/modules/products/details/product-details.page";
import AllProductsPage from "~/modules/products/all/all-products.page";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    errorElement: <NotFoundErrorPage />,
    children: [
      {
        element: <MainPageLayout />,
        children: [
          {
            path: "/",
            element: <HomePage />,
          },
          {
            path: "products",
            element: <AllProductsPage />,
          },
          {
            path: "products/:id",
            element: <ProductDetailsPage />,
          },
          {
            path: "search",
            element: <>Search...</>,
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
