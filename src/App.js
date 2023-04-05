import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import SignedOut from "./pages/SignedOut";
import MovieInfo from "./components/MovieInfo";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/signin",
      element: <Home />,
    },
    {
      path: "/",
      element: <Landing />,
    },
    {
      path: "/signedout",
      element: <SignedOut />,
    },
    {
      path: "/:movieid",
      element: <MovieInfo />, //create
    },
  ]);
  return (
    <>
      <ToastContainer
        position="bottom-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
