import React from "react";
import { Routes, useLocation,Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Movies from "./Pages/Movies.jsx";
import MovieDetails from "./Pages/MovieDetails.jsx";
import SeatLayout from "./Pages/SeatLayout.jsx";
import MyBookings from "./Pages/MyBookings.jsx";
import NotFound from "./Pages/NotFound.jsx";
import {Toaster} from "react-hot-toast";

import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";
import Favourite from "./Pages/Favourite.jsx";



const App = () => {

  const isAdminRoute = useLocation().pathname.startsWith('/admin'); 
  return (
    <>
      <Toaster/>
      {!isAdminRoute && <Navbar />}
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/movies/:id/:date" element={<SeatLayout />} />
        <Route path="/my-bookings" element={<MyBookings />} />
        <Route path="/favourite" element={<Favourite />} />

        
        <Route path="*" element={<NotFound />} />
      </Routes>
      {!isAdminRoute && <Footer />}
    </>
  )
};
export default App;
