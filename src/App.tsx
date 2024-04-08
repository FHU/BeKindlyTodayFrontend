//import Login from "./otherPages/Login"
//import Signup from "./otherPages/Signup"
import Home from "./views/Home"
import Completion from "./views/Completion"
import Calendar from "./views/Calendar"
//import Main from "./Index"

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path:"/completion",
    element: <Completion/>
  },
  {
    path: "/calendar",
    element: <Calendar/>
  }

]);

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}
