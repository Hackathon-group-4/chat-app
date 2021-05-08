import './App.css';
import socketIOClient from 'socket.io-client';
import React from 'react';
import './mainpage.css';
import 'bootstrap/dist/css/bootstrap.min.css';



class Mainpage extends React.Component {

render=()=>{

  return(
<div>

{/* Input for username */}
<div className="input-group">
  <input type="text" className="form-control" aria-label="Text input with segmented dropdown button"/>
  <div className="input-group-append">
    <button type="button" className="btn btn-outline-secondary">Action</button>
    <button type="button" className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <span className="sr-only">Toggle Dropdown</span>
    </button>
    <div className="dropdown-menu">
      <a className="dropdown-item" href="#">Action</a>
      <a className="dropdown-item" href="#">Another action</a>
      <a className="dropdown-item" href="#">Something else here</a>
      <div role="separator" className="dropdown-divider"></div>
      <a className="dropdown-item" href="#">Separated link</a>
    </div>
  </div>
</div>


{/* Select where you want to go/chat */}


<div className="input-group">
  <select className="custom-select" id="inputGroupSelect04" aria-label="Example select with button addon">
    <option selected>Choose...</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
  <div className="input-group-append">
    <button className="btn btn-outline-secondary" type="button">Button</button>
  </div>
</div>


</div>

  );
}

}

export default Mainpage;