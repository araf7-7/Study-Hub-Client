import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./components/Root";
import Home from "./components/Home/Home";
import Error from "./components/Error/Error";
import FirebaseProvider from "./components/FirebaseProvider/FirebaseProvider";
import Login from './components/Login';
import Reg from './components/Reg';
import { Toaster } from "sonner";
import Assignments from './components/Assignments/Assignments';
import CreateAssignments from './components/CreateAssignments/CreateAssignments';
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children:
      [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {

          path: "/register",
          element: <Reg></Reg>,
        },
        {

          path: "/assignment",
          element: <Assignments></Assignments>,
        },
        {

          path: "/CreateAssignment",
          element: <PrivateRoute>
            <CreateAssignments></CreateAssignments>
          </PrivateRoute>,
        },
      ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FirebaseProvider>
      <Toaster position='top-center'></Toaster>
      <RouterProvider router={router} />
    </FirebaseProvider>
  </React.StrictMode>
); 