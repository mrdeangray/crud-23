import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import PrivateRoutes from "./PrivateRoutes";
import CreateLocation from "./CreateLocation";
import ReadLocations from "./ReadLocations";
import UpdateLocation from "./UpdateLocation";
import DeleteLocation from "./DeleteLocation";

const RenderRoutes = ({ className }) => {
  return (
    <div className={className}>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route exact path="/create" element={<CreateLocation />} />
          <Route exact path="/read" element={<ReadLocations />} />
          <Route exact path="/update/:id" element={<UpdateLocation />} />
          <Route exact path="/delete/:id" element={<DeleteLocation />} />
        </Route>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default RenderRoutes;
