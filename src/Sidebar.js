import React from 'react'

import Userinfo from './Userinfo'

const Sidebar = (props) => {
    return(
        <aside className="Sidebar" style={styles.sidebar}>
            <Userinfo user={props.user}/>
            <h1 
                style={{...styles.children, ...styles.h1}}
            >
                XTBC 18
            </h1>
            <nav 
                className="RoomList" 
                style={styles.children}
            >
                <h2 style={styles.h2}>Rooms</h2>
                <ul style={styles.ul}>
                    <li style={styles.li}><a href="#" style={styles.a}>general</a></li>
                    <li style={styles.li}><a href="#" style={styles.a}>random</a></li>
                </ul>
            </nav>
        </aside>
    )
}

const styles = {
    sidebar: {
        backgroundColor: '#333344',
        color: 'rgba(255, 255, 255, 0.8)',
        width: '12rem',
        padding: '1rem 0',
        display: 'flex',
        flexDirection: 'column',
    },
    children: {
        padding: '0 1rem',
    },
    h1: {
        color: 'white',
        fontSize: '1.2rem',
        marginTop: 0,
    },
    h2: {
        fontSize: '1rem',
    },
    ul: {
        listStyle: 'none',
        marginLeft: '0',
        paddingLeft: '0',
    },
    li: {
        marginBottom: '0.5rem',
    },
    a: {
        display: 'block',
        color: 'whitesmoke',
        textDecoration: 'none',
    },
}

export default Sidebar