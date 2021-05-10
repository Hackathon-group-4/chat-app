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
<p className="mt-3 ">IronChat is a great way to meet new friends, we connect all Ironhack's students from all Ironhack's campus on a live chat. Discover us, Jump in! Select which room you want to join and fill your username and the campus you belong. Happy Chat!</p>

<h3 className="mt-3 maintitle">Rules:</h3>
<ul className="mt-3">
<li>Do not use IronChat if you are under 18;</li>
<li>Do not transmit nudity, sexually harass anyone, publicize other peoples' private information;</li>
<li>Disconnect if anyone makes you feel uncomfortable and report us immediately;</li>
<li>You may be denied access to IronChat for inappropriate behavior, or for any other reason.</li>
</ul>

{/* Input for username */}
<div className="d-flex justify-content-center">
<Link to={`/mainchat`}><button type="button" class="btn btn-danger btn-lg btn-block mt-4">Jump in!</button></Link>
</div>
</div>

  );
}

}

export default Mainpage;