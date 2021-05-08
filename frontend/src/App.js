import './App.css';
import socketIOClient from 'socket.io-client';
import React from 'react';
// import MessageDiv from './components/MessageDiv';
import MainChatroom from './components/MainChatroom';
import CampusChatroom from './components/CampusChatroom';
// const socket = socketIOClient('http://localhost:5000');

class App extends React.Component {

  // state = {
  //   username: '',
  //   message: '',
  //   currentMessages: []
  // }

  // // this is where the client listens for incoming messages
  // componentDidMount() {
  //   socket.on('message', data => {
  //     const newMessageDiv = <MessageDiv data= {data}/>
  //     const newCurrentMessages = this.state.currentMessages;

  //     newCurrentMessages.push(newMessageDiv)
  //     this.setState({
  //       // message: data.message,
  //       currentMessages: newCurrentMessages
  //     })
  //   })
  // }

  // onChange = event => {
  //   //update state & emit to server that a change was made
  //   this.setState({
  //     message: event.target.value
  //   });
  //   // socket.emit('new-message', {
  //   //   message: event.target.value
  //   // })
  // }

  // send = () => {

  //   const messageField = document.querySelector('#messageField')
  //   //update state & emit to server that a change was made
  //   this.setState({
  //     message: messageField.value
  //   });
  //   socket.emit('new-message', {
  //     message: messageField.value,
  //     username: this.state.username,
  //     userId: socket.id
  //   })
  // }

  // updateUsernameField = event => {

  //   const username = event.target.value;

  //   this.setState({
  //     username: username,
  //   })
  //   console.log(username)
  // } 

  render() {
    return (
      <div className="App">
        <MainChatroom />

        {/* <CampusChatroom campusName="Miami" /> */}

        {/* <div id='messages'>
          {this.state.currentMessages}
        </div>
        <input id="usernameField" type="text" onChange={this.updateUsernameField} value={this.state.username} placeholder="username"/> 
      
        <input id="messageField" type="text" value={this.state.message} onChange={this.onChange} placeholder="message"/> 
        <button onClick={this.send}>Send</button> */}
      </div>
    );    
  }

}

export default App;
