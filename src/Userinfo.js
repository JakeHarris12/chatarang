import React from 'react'

const Userinfo = (props) => {
    return(
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
    )
}

const imgUrl = 'https://orig00.deviantart.net/747e/f/2013/161/f/5/profile_picture_by_fantastic_frog-d68kdsv.jpg'

const styles = {
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
    children: {
        padding: '0 1rem',
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
}

export default Userinfo