import React from 'react'

const ChatHeader = (props) => {
  return (
    <div className="ChatHeader" style={styles.header}>
      <div className="roomInfo">
        <h2 style={styles.h2}>#{props.currentChannel}</h2>
        <p style={styles.p}>Announcements and {props.currentChannel} chat</p>
      </div>
    </div>
  )
}

const styles = {
  header: {
    backgroundColor: '#f3f3f3',
    borderBottom: '1px solid #ccc',
    height: '3rem',
    padding: '0 1rem',
    display: 'flex',
    alignItems: 'center',
  },

  h2: {
    fontSize: '1.1rem',
    margin: 0,
  },

  p: {
    color: '#999',
    margin: 0,
    fontSize: '0.8rem',
  },
}

export default ChatHeader
