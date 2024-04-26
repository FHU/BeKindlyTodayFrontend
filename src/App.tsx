//import Login from "./otherPages/Login"
//import Signup from "./otherPages/Signup"
import Option from "./views/Option";
import Home from "./views/Home";
//import Completion from "./views/Completion"
import Calendar from "./views/Calendar";
//import Confirmation from "./views/Confirmation";
import Profile from "./views/Profile";
import TestConfirmation from "./otherPages/TestConfirmation";
import TestCompletion from "./otherPages/TestCompletion";
//import Main from "./Index"

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";
import authSlice from "./store/slices/auth";

import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { useEffect } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Option />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  // {
  //   path:"/completion",
  //   element: <Completion/>
  // },
  {
    path: "/calendar",
    element: <Calendar currentDay={10} />,
  },
  // {
  //   path: "/confirmation",
  //   element: <Confirmation/>,
  // }
  // ,
  {
    path: "/profile",
    element: <Profile />,
  },

  {
    path: "/testconfirmation",
    element: <TestConfirmation />,
  },

  {
    path: "/testcompletion",
    element: <TestCompletion />,
  },
]);
export default function App() {
  const { getToken, isAuthenticated } = useKindeAuth();

  useEffect(() => {
    getToken().then(
      (token) => {
        token !== undefined
          ? authSlice.actions.setToken({ token })
          : console.log("No token");
      },
      () => {
        console.log("get token rejected");
      }
    );
  }, [isAuthenticated]);

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}
