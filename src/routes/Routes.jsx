import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layout/Main";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Services from "../pages/Services";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Projects from "../pages/Projects";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement : <ErrorPage></ErrorPage>,
      children : [
        {
            path : '/',
            element : <Home></Home>
        },
        {
            path : '/service',
            element : <Services></Services>
        },
        {
            path : '/about',
            element : <About></About>
        },
        {
            path : '/project',
            element : <Projects></Projects>
        },
        {
            path : '/contact',
            element : <Contact></Contact>
        },
        
      ]
    },
  ]);

  export default router