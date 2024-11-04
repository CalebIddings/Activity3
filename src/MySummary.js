import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";

function Summary({ dataF, setDataF, viewer, setViewer }) {
  const navigate = useNavigate();

  const updateHooks = () => {
    setDataF({});
    navigate("/shop");
  };

  return (
    <div>
      <h1>Summary of Payment Information</h1>
      <h3>{dataF.fullName}</h3>
      <h3>{dataF.email}</h3>
      <h5>
        {dataF.city} {dataF.state} {dataF.zip}
      </h5>

      <button onClick={updateHooks} className="btn btn-secondary">
        Return
      </button>
    </div>
  );
}

export default Summary;
