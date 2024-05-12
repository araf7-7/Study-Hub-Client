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

import Update from "./components/UpdateAssignments/Update";
import ViewAssignments from "./components/ViewAssignments/ViewAssignments";
import TakeAssignment from "./components/TakeAssignments/TakeAssignment";
import MyAssignment from "./components/MyAssignments/MyAssignment";

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
          loader: () => fetch('http://localhost:5000/assignmentsCreate')
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
          loader: () => fetch('http://localhost:5000/assignmentsCreate')
        },
        {

          path: "/CreateAssignment",
          element: <PrivateRoute>
            <CreateAssignments></CreateAssignments>
          </PrivateRoute>,
        },
        {

          path: "/MyAssignment",
          element: <PrivateRoute>
          <MyAssignment></MyAssignment>
          </PrivateRoute>,
        },
        {

          path: "/updateAssignment/:id",
          element: <PrivateRoute>
            <Update></Update>
          </PrivateRoute>,
           loader: ({params}) => fetch(`http://localhost:5000/assignmentsCreate/${params.id}`)
        },
        {

          path: "/viewAssignment/:id",
          element: <PrivateRoute>
            <ViewAssignments></ViewAssignments>
          </PrivateRoute>,
           loader: () => fetch(`http://localhost:5000/assignmentsCreate`)
        },
        {

          path: "/TakeAssignment/:id",
          element: <PrivateRoute>
          <TakeAssignment></TakeAssignment>
          </PrivateRoute>,
           loader: () => fetch(`http://localhost:5000/assignmentsCreate`)
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
