import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import AppRouter from "~/shared/app.router";

const queryClient = new QueryClient();

function App() {
  return (
    <Fragment>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={AppRouter} />
      </QueryClientProvider>
    </Fragment>
  );
}

export default App;
