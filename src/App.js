import { Router, RouterProvider, createBrowserRouter } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import Home from "./Home/Home";
import AboutUs from "./AboutUs/AboutUs";
import Services from "./Services/Services";
import Main from "./Layout/Main";
import NotFound from "./NotFound/NotFound";
import Team from "./Team/Team";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        { path: "/", element: <Home></Home> },
        { path: "/home", element: <Home></Home> },
        { path: "/about", element: <AboutUs></AboutUs> },
        { path: "/services", element: <Services></Services> },
        { path: "/team", element: <Team></Team> },
        { path: "*", element: <NotFound></NotFound> },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
