import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import { v4 as uuidv4 } from "uuid";
import { Protected } from "./components/protected/protected";
import { Email, NotFound, Question, Result } from "./lazy";
import { Suspense } from "react";
import Loading from "./components/loading/loading";

const ProtectedQuestion = Protected(Question);
const ProtectedEmail = Protected(Email);
const ProtectedResult = Protected(Result);

function App() {
  const router = createBrowserRouter([
    {
      path: "/quiz",
      element: <Navigate replace to={`/quiz/question/${uuidv4()}`} />,
    },
    {
      path: "/quiz/question/:id",
      element: <ProtectedQuestion />,
    },
    {
      path: "/quiz/email",
      element: <ProtectedEmail />,
    },
    {
      path: "/quiz/result",
      element: <ProtectedResult />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
