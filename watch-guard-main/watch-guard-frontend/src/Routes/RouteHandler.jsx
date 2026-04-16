import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../Landing/LandingPage";
import Info from "../DrugInfo/Info";
import Ngo from "../NGO/Ngo";
import AllNgo from "../NGO/AllNgo";
import NgoHome from "../NGO/NgoHome";
import NgoInfo from "../NGO/NgoInfo";
import News from "../News/News";
import Complaint from "../Complaint/Complaint";

const RouteHandler = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Home" element={<LandingPage />} />
        <Route path="/Info" element={<Info />} />
        <Route path="/Ngo" element={<Ngo />} >
        <Route path="/Ngo/" element={<NgoHome />} />
        <Route path="/Ngo/all/:type" element={<AllNgo />} />
        </Route>
        <Route path="/Ngo/:id" element={<NgoInfo />} />
        <Route path="/News" element={<News />} />
        <Route path="/Complaint" element={<Complaint />} />
      </Routes>
    </>
  );
};

export default RouteHandler