import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AddReview from "../pages/AddReview";
import Register from "../pages/Register";
import LogIn from "../pages/LogIn";
import PrivateRoute from "./PrivateRoute";
import AllReviews from "../pages/AllReviews";
import ReviewDetails from "../pages/ReviewDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allReviews",
        element: <AllReviews></AllReviews>,
      },
      {
        path: "/reviewDetails/:id",
        element: <ReviewDetails></ReviewDetails>,
        loader: ({params})=> fetch(`http://localhost:5000/allReviews/${params.id}`)
      },
      {
        path: "/addReview",
        element: (
          <PrivateRoute>
            <AddReview></AddReview>
          </PrivateRoute>
        ),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
    ],
  },
]);

export default router;
