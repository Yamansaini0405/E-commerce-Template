import React from 'react'
import { useLocation,Outlet } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

function Layout() {
    const location = useLocation();
    const hideNavbar = location.pathname === "/";
  return (
    <>
    <Navbar/>
    <Outlet/>
    {hideNavbar && <Footer />}
    
    </>
  )
}

export default Layout