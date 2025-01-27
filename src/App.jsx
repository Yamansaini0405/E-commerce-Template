import React from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
// import Slider from './components/utilities/Slider.jsx'
// import CategoryCard from './components/utilities/CategoryCard.jsx'
import Home from "./components/Home/Home.jsx";
// import PopularCard from './components/utilities/PopularCard.jsx'
// import DealsOfTheDays from './components/utilities/DealsOfTheDay.jsx'
import Footer from "./components/Footer/Footer.jsx";
import Layout from "./Layout.jsx";
import AddToCard from "./components/AddToCart/AddToCard.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<AddToCard/>}/>
      </Route>
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
