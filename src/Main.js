import React, { Component } from 'react'

import Sidebar from './Sidebar'
import Chat from './Chat'

class Main extends Component {

  state = {
    channels: [
      'general',
      'random',
      'test',
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
