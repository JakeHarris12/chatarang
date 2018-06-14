import React, { Component } from 'react'

import ChatHeader from './ChatHeader'
import MessageList from './MessageList'
import MessageForm from './MessageForm'

import base from './base'

class Chat extends Component {
  constructor() {
    super()

    this.state = {
      messages: [],
    }
  }

  componentDidMount() {
    base.syncState(`${this.props.currentChannel}/messages`, {
      context: this,
      state: 'messages',
      asArray: true,
    })
  }

  componentDidUpdate(prevprops) {
    if(prevprops!=this.props) {
      base.syncState(`${this.props.currentChannel}/messages`, {
        context: this,
        state: 'messages',
        asArray: true,
      })
    }
  }

  addMessage = (body) => {
    const messages = [...this.state.messages]
    messages.push({
      id: Date.now(),
      user: this.props.user,
      body,
    })

    this.setState({ messages })
  }

  render() {
    return (
      <div className="Chat" style={styles}>
        <ChatHeader currentChannel={this.props.currentChannel}/>
        <MessageList messages={this.state.messages} currentChannel={this.props.currentChannel}/>
        <MessageForm addMessage={this.addMessage} />
      </div>
    )
  }
}

const styles = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
}

export default Chat
