// import './App.css';
import socketIOClient from 'socket.io-client';
import React from 'react';
import MessageDiv from './MessageDiv';

const socket = socketIOClient('http://localhost:5000');

const Rooms = ['All', 'Paris', 'Berlin', 'Lisbon', 'Amsterdam', 'Barcelona', 'Madrid', 'Mexico City', 'Miami', 'Sao Paulo']

class MainChatroom extends React.Component {

  state = {
    username: '',
    message: '',
    currentMessages: [],
    room: '/',
    previousRoom: ''
  }

  // this is where the client listens for incoming messages
  componentDidMount() {
    socket.on('message', data => {
      const newMessageDiv = <MessageDiv data= {data}/>
      const newCurrentMessages = this.state.currentMessages;

      newCurrentMessages.push(newMessageDiv)
      this.setState({
        // message: data.message,
        currentMessages: newCurrentMessages
      })
    })
  }

  onChange = event => {
    //update state & emit to server that a change was made
    this.setState({
      message: event.target.value
    });
    // socket.emit('new-message', {
    //   message: event.target.value
    // })
  }

  send = () => {

    const messageField = document.querySelector('#messageField')
    //update state & emit to server that a change was made
    this.setState({
      message: messageField.value
    });
    socket.emit('new-message', {
      message: messageField.value,
      username: this.state.username,
      userId: socket.id,
      room: this.state.room
    })
  }

  updateUsernameField = event => {

    const username = event.target.value;

    this.setState({
      username: username,
    })
    console.log(username)
  } 

  changeRoom = room => {
    console.log(room);
    console.log(socket);
    socket.emit("leaveRoom", this.state.room)

    this.setState({
      previousRoom: this.state.room,
      room: room,
    })

    socket.emit("joinRoom", room)
  }

    


  render() {
    return (
      <>
        <h1>{this.state.room[0].toUpperCase()+  this.state.room.slice(1)}</h1>
        <div className="MainChatroom">
        <div className="chatRoomLinks">
          {Rooms.map(room => <button onClick={() => {this.changeRoom(room.toLowerCase())}}>{room} Room</button>)}
        </div>

        <div id='messages'>
          {this.state.currentMessages}
        </div>
        <input id="usernameField" type="text" onChange={this.updateUsernameField} value={this.state.username} placeholder="username"/> 
      
        <input id="messageField" type="text" value={this.state.message} onChange={this.onChange} placeholder="message"/> 
        <button onClick={this.send}>Send</button>
      </div>
      </>
    );    
  }

}

export default MainChatroom;