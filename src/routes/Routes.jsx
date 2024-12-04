import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AddReview from "../pages/AddReview";
import Register from "../pages/Register";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            path:"/",
            element: <Home></Home>,
        },
        {
            path:"/addReview",
            element: <AddReview></AddReview>,
        },
        {
            path:"/register",
            element: <Register></Register>,
        },
      ]
    },
  ]);


  export default router;