import React from 'react'

const Message = (props) => {
    return(
        <div className="Message" style={styles.message}>
            <div
                className="Avatar"
                style={styles.photo}
            ></div>
            <div className="details" style={styles.messageDetails}>
                <div className="Metadata">
                    <div className="user">{props.message.userName}</div>
                    <div className="time">1:20 PM</div>
                </div>
                <div className="body">
                    {props.message.body}
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
    messageDetails: {
        flex: '1',
        paddingLeft: '0.5rem',
    },
    photo: {
        background: 'url(https://api.adorable.io/avatars/32/dana@fretless.com)',
    }
}
export default Message