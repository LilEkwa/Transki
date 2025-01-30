import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "./components/signUp";
import Home from "./components/home";
import Send from "./components/send";
import History from "./components/history";
import Login from "./components/login";
import Setting from "./components/setting";
import Test from "./components/test";
const router = createBrowserRouter([
  {
    path: '/',
    element: <Login/>
  },
  {
  path: '/signUp',
  element: <SignUp/>
  },
  {
  path: '/home',
  element: <Home/>
  },
  {
    path: '/send',
    element: <Send/>
  },
  {
    path: '/history',
    element: <History/>
  },
  {
    path: '/setting',
    element: <Setting/>
  },
  {
    path: '/test',
    element: <Test/>
  }
])
const App = () => {
  return <RouterProvider router={router}/>
}

export default App;