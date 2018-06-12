import React from 'react'

import Message from './Message'

const MessageList = () => {
    const messages = [
        { id: 1, userName: 'jake8000', body: 'Chatting up a storm yo!' },
        { id: 2, userName: 'idk', body: 'this is just a filler lmao' },
    ]
    return(
        <div className="MessageList">
            {
                messages.map( msg => <Message key={msg.id} message={msg}/>) 
            }
        </div>
    )
}

export default MessageList