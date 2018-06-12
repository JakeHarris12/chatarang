import React from 'react'

const Message = (props) => {
    return(
        <div className="Message" style={styles.message}>
            <div
                className="Avatar"
                style={styles.photo}
            ></div>
            <div className="details" style={styles.messageDetails}>
                <div className="Metadata" style={styles.metadata}>
                    <div className="user" style={styles.user}>{props.message.userName}</div>
                    <div className="time" style={styles.time}>1:20 PM</div>
                </div>
                <div className="body">
                    {props.message.body}
                </div>
            </div>
        </div>
    )
}

const imgUrl = './profilePicture.jpg'

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
        background: 'url(' + imgUrl + ')',
    },
    metadata: {
        display: 'flex',
        alignItems: 'baseline',
    },
    user: {
        fontWeight: 'bold',
        marginRight: '0.5rem',
    },
    time: {
        color: '#999',
        fontSize: '0.8rem',
    },
}
export default Message