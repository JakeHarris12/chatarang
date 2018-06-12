import React, {Component} from 'react'

import ChatHeader from './ChatHeader'
import MessageList from './MessageList'
import MessageForm from './MessageForm'

class Chat extends Component {

    constructor() {
        super()
        this.state = {
            messages: [
                { id: 1, userName: 'jake8000', body: 'Chatting up a storm yo!' },
                { id: 2, userName: 'idk', body: 'this is just a filler lmao' },
            ],
        }
    }

    render(){
        return(
            <div className="Chat">
                <ChatHeader />
                <MessageList messages={this.state.messages}/>
                <MessageForm />
            </div>
        )
    }
}

export default Chat