import React from 'react'

const MessageList = () => {
    const messages = [
        { id: 1, userName: 'jake8000', body: 'Chatting up a storm yo!' },
        { id: 2, userName: 'idk', body: 'this is just a filler lmao' },
    ]
    return(
        <div className="MessageList">
            {
                 messages.map( message => (
                    <div key={ message.id }>
                        { message.userName }: { message.body }
                    </div>
                )) 
            }
        </div>
    )
}

export default MessageList