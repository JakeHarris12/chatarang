import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'
import 'emoji-mart/css/emoji-mart.css'
import { Picker, Emoji } from 'emoji-mart'

import Avatar from './Avatar'
import Metadata from './Metadata'

class Message extends Component {
  state = {
    showPicker: false,
    reactions:{},
  }

  togglePicker = () => {
    this.setState({ showPicker: !this.state.showPicker })
  }

  handleEmojiSelect = (emoji) => {
    const reactions = {...this.state.reactions}
    if(reactions[emoji.id] === undefined){
      reactions[emoji.id] = emoji
      reactions[emoji.id]["count"] = 1
    }else{
      reactions[emoji.id]["count"]++
    }
    this.state.reactions = reactions
    this.togglePicker()
  }

  inceaseCount = (emojiID) => {
    const reactions = {...this.state.reactions}
    reactions[emojiID]["count"]++
    this.setState({ reactions })
  }

  render() {
    const { message } = this.props

    return (
      <div className={`Message ${css(styles.message)}`}>
        <Avatar user={message.user} />
        <div className={css(styles.details)}>
          <Metadata message={message} />
          <div className="body">
            {message.body}
          </div>
          <div className={css(styles.reactions)}>
            {
              Object.keys(this.state.reactions).map(emojiID => {
                return  <button
                          key={emojiID}
                          onClick={() => this.inceaseCount(emojiID)}
                          className={css(styles.emojiButton)}
                        >
                          <Emoji key={emojiID} emoji={emojiID} size={20} />
                          {this.state.reactions[emojiID]["count"] === 1
                            ? <p></p>
                            : <p className={css(styles.count)}>{this.state.reactions[emojiID]["count"]}</p> 
                          }
                        </button>
              })
            }
          </div>
          <button
            className={`reactionButton ${css(styles.reactionButton)}`}
            onClick={this.togglePicker}
          >
            <i className="far fa-smile"></i>
          </button>
        </div>
        {
          this.state.showPicker &&
            <Picker
              showPreview={false}
              style={pickerStyles}
              onSelect={this.handleEmojiSelect}
            />
        }
      </div>
    )
  }
}

const styles = StyleSheet.create({
  message: {
    display: 'flex',
    marginTop: '1rem',
    padding: '1rem 1rem',
    position: 'relative',
    zIndex: 1,

    ':hover': {
      backgroundColor: '#f6f6f6',
    },
  },

  details: {
    flex: 1,
    paddingLeft: '0.5rem',
  },

  reactionButton: {
    border: 0,
    outline: 0,
    backgroundColor: 'transparent',
    padding: 0,
    color: '#ccc',
    fontSize: '1rem',
    cursor: 'pointer',
    position: 'absolute',
    top: '0.5rem',
    right: '0.5rem',

    ':hover': {
      color: '#3366ff',
    },
  },

  reactions: {
    display: 'flex',
    alignItems: 'row',
  },

  emojiButton: {
    height: '1.5rem',
    width: '2.25rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'row',
    margin: 0.5,
    borderWidth: '2px',
    borderRadius: '0.5rem',
    backgroundColor: 'rgba(0,0,0, 0.1)',
    borderColor: 'rgba(0,0,0, 0.4)',
    cursor: 'pointer',
  },

  count: {
    fontFamily: 'Raleway, sans-serif',
    fontWeight: 'bold',
    height: '1.5rem',
    margin: 0,
  },
})

const pickerStyles = {
  position: 'absolute',
  top: '-20rem',
  right: '2rem',
}

export default Message
