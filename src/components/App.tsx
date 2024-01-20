import React from "react";
import LandingPage from "./LandingPage";
import LevelPage from "./LevelPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CategoryPage from "./CategoryPage";
import { TrivvyaProvider } from "../TrivvyaContextProvider";
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
    <TrivvyaProvider>
      <RouterProvider router={router} />
    </TrivvyaProvider>
  );
}

export default App;
