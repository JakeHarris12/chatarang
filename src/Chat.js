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
      rebaseBinding: null,
    }
  }

  toggleFavMessage = (ev) => {
    const button = ev.target.closest('.fav')
    if(button.id === 'off'){
      button.innerHTML = `<i class="fas fa-heart"></i>`
      button.setAttribute('id', 'on')
      button.style.color = 'red'
    }else{
      button.innerHTML = `<i class="far fa-heart"></i>`
      button.setAttribute('id', 'off')
      button.style.color = 'black'
    }
    this.syncMessages()
  }

  componentWillMount() {
    this.syncMessages()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.room.name !== this.props.room.name) {
      this.syncMessages()
    }
  }

  syncMessages = () => {
    if (this.state.rebaseBinding) {
      base.removeBinding(this.state.rebaseBinding)
    }

    const rebaseBinding = base.syncState(
      `${this.props.room.name}/messages`,
      {
        context: this,
        state: 'messages',
        asArray: true,
      }
    )

    this.setState({ rebaseBinding })
  }

  addMessage = (body) => {
    const messages = [...this.state.messages]
    messages.push({
      id: Date.now(),
      user: this.props.user,
      body,
      fav: false,
    })

    this.setState({ messages })
  }

  render() {
    return (
      <div className="Chat" style={styles}>
        <ChatHeader room={this.props.room} />
        <MessageList
          messages={this.state.messages}
          room={this.props.room}
          toggleFavMessage={this.toggleFavMessage}
        />
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
