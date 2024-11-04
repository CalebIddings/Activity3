import React, { useState } from "react";
import {BrowserRouter as Router, Route, Routes, useNavigate} from "react-router-dom";

import Shop from "./Shopping.js";
import Payment from "./MyPayment.js"
import Summary from "./MySummary.js";

function App() {
  const [dataF, setDataF] = useState({});
  const [viewer, setViewer] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/shop" element={<Shop />} />
        <Route path="/info" element={<Payment
          dataF={dataF}
          setDataF={setDataF}
          viewer={viewer}
          setViewer={setViewer}
        />} />
        <Route path="/summary" element={<Summary
          dataF={dataF}
          setDataF={setDataF}
          viewer={viewer}
          setViewer={setViewer}
        />} />
        <Route path="/" element={<Shop />} /> {/* Default view */}
      </Routes>
    </Router>
  );
}

export default App;
