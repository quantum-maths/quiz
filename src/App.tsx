import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import Question from "./features/question/question";
import NotFound from "./components/not-found/not-found";
import { v4 as uuidv4 } from "uuid";
import Email from "./features/email/email";
import Result from "./features/result/result";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate replace to={`/question/${uuidv4()}`} />,
    },
    {
      path: "/question/:id",
      element: <Question />,
    },
    {
      path: "/email",
      element: <Email />,
    },
    {
      path: "/result",
      element: <Result />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
