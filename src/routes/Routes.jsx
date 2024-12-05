import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AddReview from "../pages/AddReview";
import Register from "../pages/Register";
import LogIn from "../pages/LogIn";
import PrivateRoute from "./PrivateRoute";
import AllReviews from "../pages/AllReviews";
import ReviewDetails from "../pages/ReviewDetails";
import MyReviews from "../pages/MyReviews";
import UpdateReview from "../pages/UpdateReview";
import ErrorPage from "../pages/ErrorPage";
import GameWatchList from "../pages/GameWatchList";

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
        loader: ()=> fetch("http://localhost:5000/allReviews")
      },
      {
        path: "/reviewDetails/:id",
        element: <ReviewDetails></ReviewDetails>,
        loader: ({params})=> fetch(`http://localhost:5000/allReviews/${params.id}`)
      },
      {
        path: "/updateReview/:id",
        element: <PrivateRoute><UpdateReview></UpdateReview></PrivateRoute>,
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
        path: "/MyReviews/:email",
        element: (
          <PrivateRoute>
            <MyReviews></MyReviews>
          </PrivateRoute>
        ),
        loader: ({params})=> fetch(`http://localhost:5000/MyReviews/${params.email}`)
      },
      {
        path: "/gameWatchList/:email",
        element: (
          <PrivateRoute>
            <GameWatchList></GameWatchList>
          </PrivateRoute>
        ),
        loader: ({params})=> fetch(`http://localhost:5000/gameWatchList/${params.email}`)
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
  {
    path:"*",
    element: <ErrorPage></ErrorPage>
  }
]);

export default router;
