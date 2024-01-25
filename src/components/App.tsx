import LandingPage from "./LandingPage";
import LevelPage from "./LevelPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CategoryPage from "./CategoryPage";
import PuzzlePage from "./PuzzlePage";
import Error from "./ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/level",
    element: <LevelPage />,
  },
  {
    path: "/category",
    element: <CategoryPage />,
  },
  {
    path: "/puzzle",
    element: <PuzzlePage />,
  },
  {
    path: "/error",
    element: <Error />,
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
