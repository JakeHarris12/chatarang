import React from 'react'

import Avatar from './Avatar'
import Metadata from './Metadata'

const Message = ({ message, toggleFavMessage }) => {
  return (
    <div className="Message" style={styles.message}>
      <Avatar user={message.user} />
      <div className="details" style={styles.details}>
        <Metadata message={message} />
        <div className="body">
          {message.body}
          <button className="fav" id="off" style={styles.favOff} onClick={toggleFavMessage}>
            <i className="far fa-heart"></i>
        </button>
        </div>
      </div>
    </div>
  )
}

const styles = {
  message: {
    display: 'flex',
    marginTop: '1rem',
    padding: '0 1rem',
  },

  details: {
    flex: 1,
    paddingLeft: '0.5rem',
  },

  favOff: {
    flex: 1,
    paddingRight: '0.5rem',
    float: 'right',
    background: 'transparent',
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
  },
  favOn: {
    flex: 1,
    paddingRight: '0.5rem',
    float: 'right',
    background: 'transparent',
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    color: 'red',
  }
}

export default Message
