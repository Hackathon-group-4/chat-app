import './App.css';
import socketIOClient from 'socket.io-client';
import React from 'react';
import './mainpage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Link } from "react-router-dom";

import logo from "./assets/logo.png"



class Mainpage extends React.Component {

render=()=>{

  return(
<div className="container mainpage">


  <div className="d-flex justify-content-center ">
  <img src={logo} className="mt-3" style={{width:'65px'}} alt="ironhack-logo"/>
  </div>
<h1 className="maintitle firsttitle">IronChat</h1>
<p className="mt-3 ">IronChat is a great way to meet new friends, we connect all Ironhack's students from all Ironhack's campus on a live chat. Discover us, fill your username and which campus you belong and which room you want to join. Happy Chat!</p>

<h3 className="mt-3 maintitle">Rules:</h3>
<ul className="mt-3">
<li>Do not use IronChat if you are under 18;</li>
<li>Do not transmit nudity, sexually harass anyone, publicize other peoples' private information;</li>
<li>Disconnect if anyone makes you feel uncomfortable and report us immediately;</li>
<li>You may be denied access to IronChat for inappropriate behavior, or for any other reason.</li>
</ul>

{/* Input for username */}
<div className="d-flex flex-wrap">
<div className="input-group mt-5">
  <input type="text" className="form-control bg-transparent text-white" aria-label="username input" placeholder="Insert your username "/>
  <select className="custom-select bg-transparent text-white" id="inputGroupSelect04" aria-label="Example select with button addon">
    <option selected>&nbsp;Campus</option>
    <option value="1">Amsterdam</option>
    <option value="2">Barcelona</option>
    <option value="3">Berlin</option>
    <option value="3">Lisbon</option>
    <option value="3">Madrid</option>
    <option value="3">Mexico City</option>
    <option value="3">Miami</option>
    <option value="3">Paris</option>
    <option value="3">Remote</option>
    <option value="3">Sao Paulo</option>
  </select>
  <div className="input-group-append">
    

  </div>
</div>


{/* Select where you want to go/chat */}


<div className="input-group mt-3 justify-content-center">
<button type="button" className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <span className="sr-only text-white">Choose your room&nbsp;</span>
    </button>
    <div className="dropdown-menu ">
      <Link to={`/mainchat`} className="dropdown-item">Global</Link>
      <a className="dropdown-item" href="#">AMS</a>
      <a className="dropdown-item" href="#">BCN</a>
      <a className="dropdown-item" href="#">BER</a>
      <a className="dropdown-item" href="#">LIS</a>
      <a className="dropdown-item" href="#">MAD</a>
      <a className="dropdown-item" href="#">MEX</a>
      <a className="dropdown-item" href="#">MIA</a>
      <a className="dropdown-item" href="#">PAR</a>
      <a className="dropdown-item" href="#">SAO</a>

    </div>
 

 
</div>
</div>

</div>

  );
}

}

export default Mainpage;