import React from 'react'
import { StyleSheet, css } from 'aphrodite'

const RoomList = (props) => {
  return (
    <nav
      className={`RoomList ${css(styles.nav)}`}
    >
      <h2 className={css(styles.h2)}>Rooms</h2>
      <ul className={css(styles.list)}>
        {props.channels.map(channel => 
        <li className={css(styles.item)}>
          <a href='#' className={css(styles.link)}>{channel}</a>
        </li>)}
      </ul>
      <button className={css(styles.button)}>Add Room</button>
    </nav>
  )
}

const styles = StyleSheet.create({
  nav: {
    padding: '0 1rem',
  },

  h2: {
    fontSize: '1rem',
  },

  list: {
    listStyle: 'none',
    marginLeft: 0,
    paddingLeft: 0,
  },

  item: {
    marginBottom: '0.5rem',
  },

  link: {
    display: 'block',
    color: 'whitesmoke',
    textDecoration: 'none',

    '::before': {
      content: '"# "',
    },

    ':hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
    }
  },
  button: {
    fontSize: '1.5rem',
    backgroundColor: '#1A8FE3',
    color: 'white',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    borderTopRightRadius: '0.5rem',
    borderBottomRightRadius: '0.5rem',
    borderTopLeftRadius: '0.5rem',
    borderBottomLeftRadius: '0.5rem',
    border: '1px solid white',

    ':hover': {
      cursor: 'pointer',
    },
  },
})

export default RoomList
