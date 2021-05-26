import React, { Component } from 'react'

export default class MessageDiv extends Component {
  render() {

    const data = this.props.data;
    
    return (
      <div>
        {data.message} from {data.username}
      </div>
    )
  }
}
