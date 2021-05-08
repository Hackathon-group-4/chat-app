import './App.css';
import socketIOClient from 'socket.io-client';
import React from 'react';

const socket = socketIOClient('http://localhost:5000');



class App extends React.Component {

  state = {
    message: '',
    currentMessages: []
  }

  // this is where the client listens for incoming messages
  componentDidMount() {
    socket.on('message', data => {
      const newMessageDiv = <div>{data.message}</div>
      const newCurrentMessages = this.state.currentMessages
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
      message: messageField.value
    })
  }

  render() {
    return (
      <div className="App">
        <div id='messages'>
          {this.state.currentMessages}
        </div>
        <input id="messageField" type="text" value={this.state.message} onChange={this.onChange} /> 
        <button onClick={this.send}>Send</button>
      </div>
    );    
  }

}

export default App;
