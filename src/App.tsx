import { RouterProvider } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import AppRouter from "~/shared/components/app-router";

function App() {
  return (
    <Fragment>
      <RouterProvider router={AppRouter} />
    </Fragment>
  );
}

export default App;
