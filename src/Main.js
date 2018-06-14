import React, { Component } from 'react'
import base from './base'

import Sidebar from './Sidebar'
import Chat from './Chat'

class Main extends Component {

  state = {
    channels: [
      'general',
      'random',
    ],
    currentChannel: 'general',
  }

  changeChannel = (channel) => {
    const currentChannel = channel
    this.setState({currentChannel})
  }

  addChannel = (channel) => {
    const channels = [...this.state.channels]
    channels.push(channel)
    this.setState(channels)
  }

  render() {
    return (
      <div className="Main" style={styles}>
        <Sidebar 
          user={this.props.user} 
          signOut={this.props.signOut} 
          channels={this.state.channels} 
          currentChannel={this.state.currentChannel}
          changeChannel={this.changeChannel}
          addChannel={this.addChannel}
        />
        <Chat user={this.props.user} currentChannel={this.state.currentChannel}/>
      </div>
    )
  }
}

const styles = {
  display: 'flex',
  alignItems: 'stretch',
  height: '100vh',
}

export default Main
