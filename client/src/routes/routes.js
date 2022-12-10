import { createBrowserRouter } from "react-router-dom";
import RequireAuth from "../components/RequireAuth";
import Dashboard from "../layout/dashboard/Dashboard";
import Main from "../layout/main/Main";
import BlogDetails from "../pages/BlogDetails";
import AddBlog from "../pages/dashboard/AddBlog";
import BlogList from "../pages/dashboard/BlogList";
import UpdateBlog from "../pages/dashboard/UpdateBlog";
import ForgotPassword from "../pages/form/ForgotPassword";
import SignIn from "../pages/form/SignIn";
import SignUp from "../pages/form/SignUp";
import Home from "../pages/Home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "blog/:id",
        element: <BlogDetails />,
      },
      {
        path: "sign-in",
        element: <SignIn />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
      {
        path: "forgot-password",
        element: <ForgotPassword />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <RequireAuth>
        <Dashboard />
      </RequireAuth>
    ),
    children: [
      {
        path: "/dashboard",
        element: <BlogList />,
      },
      {
        path: "add-blog",
        element: <AddBlog />,
      },
      {
        path: "update/:id",
        element: <UpdateBlog />,
      },
    ],
  },
]);

export default routes;
