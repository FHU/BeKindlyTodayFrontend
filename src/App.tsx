//import Login from "./otherPages/Login"
//import Signup from "./otherPages/Signup"
import Option from "./views/Option"
import Home from "./views/Home"
//import Completion from "./views/Completion"
import Calendar from "./views/Calendar"
//import Confirmation from "./views/Confirmation";
import Profile from "./views/Profile";
import TestConfirmation from "./otherPages/TestConfirmation"
import TestCompletion from "./otherPages/TestCompletion";
//import Main from "./Index"

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Option/>
  },
  {
    path: "/home",
    element: <Home/>,
  },
  // {
  //   path:"/completion",
  //   element: <Completion/>
  // },
  {
    path: "/calendar",
    element: <Calendar/>
  },
  // {
  //   path: "/confirmation",
  //   element: <Confirmation/>,
  // }
  // ,
  {
    path: "/profile",
    element: <Profile/>,
  },

  {
    path: "/testconfirmation",
    element: <TestConfirmation/>
  },

  {
    path: "/testcompletion",
    element: <TestCompletion/>
  }
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}
