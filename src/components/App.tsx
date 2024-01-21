import LandingPage from "./LandingPage";
import LevelPage from "./LevelPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CategoryPage from "./CategoryPage";
import PuzzlePage from "./PuzzlePage";

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
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
