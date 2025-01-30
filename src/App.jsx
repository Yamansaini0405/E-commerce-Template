import React from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";


import Home from "./components/Home/Home.jsx";

import Footer from "./components/Footer/Footer.jsx";
import Layout from "./Layout.jsx";
import AddToCard from "./components/AddToCart/AddToCard.jsx";
import Login from "./components/Login/Login.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<AddToCard/>}/>
      </Route>
      <Route path="/login" element={<Login/>}/>
      <Route path="/" element={<Footer/>}/>
    </Route>
  )
);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
