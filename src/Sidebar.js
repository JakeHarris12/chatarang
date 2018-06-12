import React from 'react'

const Sidebar = (props) => {
    return(
        <aside className="Sidebar" style={styles.sidebar}>
            <div className="UserInfo" 
                style={{...styles.children, ...styles.userInfo}}
            >
                <div className="Avatar" style={styles.photo}></div>
                <div className="user" style={styles.user}>
                    {props.user.userName}
                </div>
                <a href="#" style={styles.userA}>
                    <i className="fas fa-sign-out-alt"></i>
                </a>
            </div>
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

const imgUrl = 'https://orig00.deviantart.net/747e/f/2013/161/f/5/profile_picture_by_fantastic_frog-d68kdsv.jpg'

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
    photo: {
        backgroundImage: 'url(' + imgUrl + ')',
        backgroundSize: 'cover',
        width: '40px',
        height: '40px',
        fontSize: '1rem',
        borderRadius: '20px',
        marginRight: '0.5rem',
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
    userInfo: {
        marginBottom: '1rem',
        display: 'flex',
        alignItems: 'center',
    },
    user: {
        flex: '1',
    },
    userA: {
        border: '0',
        padding: '0',
        backgroundColor: 'transparent',
        color: 'rgba(255, 255, 255, 0.6)',
        fontSize: '1.2rem',
        transition: 'color 0.25s ease-out',
    },
}

export default Sidebar