import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Mainpage from "./Mainpage";

function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <Navbar className="bar" /> */}
        <Route exact path="/" component={Mainpage} />
    
      </BrowserRouter>
    </div>
  );
}

export default App;
