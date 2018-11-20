import React from "react";
import './App.css';
import {socket} from "../index";
import MarkdownRenderer from 'react-markdown-renderer';

export class App extends React.Component {
    constructor(props) {
        super(props);

        // React state
        this.state = {
            chat: [],
            user_message: ""
        };

        this.updateChat = this.updateChat.bind(this);
        this.submitMessage = this.submitMessage.bind(this);
        this.getOldMessages = this.getOldMessages.bind(this);
        this.handleChange = this.handleChange.bind(this);

        socket.on("message", this.updateChat);
        socket.on("messages", this.getOldMessages);
    }

    getOldMessages(messages) {
        console.log(messages);
        this.setState({
            chat: messages
        });
    }

    updateChat(message) {
        this.setState({
            chat: [...this.state.chat, message]
        });
    }

    submitMessage(event) {
        if (event !== 'button') {
            if (event.shiftKey) {
                return;
            }
            if (event.keyCode !== 13) {
                return;
            } else {
                event.preventDefault();
            }
        }

        if (this.state.user_message) {
            console.log(this.state.user_message);
            socket.emit("message", this.state.user_message);
            this.setState({
                user_message: ""
            })
        }
    }
    handleChange(event) {
        this.setState({
            user_message: event.target.value
        });
    }

    render() {
        // Javascript level logic here
        let chat_log = this.state.chat.map((value) => {
            return (
                <span className='chat-item' key={value.id}>
                    Date: {new Date(value.created_date).toLocaleDateString()}
                    <MarkdownRenderer
                        options={{
                            preset: 'full'
                        }}
                        markdown={value.contents}/>
                </span>
            )
        });

        // JSX (Html) Render logic here
        return (
            <React.Fragment>

            <div className='chat-box'>
                {chat_log}
            </div>

            <textarea
                onKeyDown={this.submitMessage}
                value={this.state.user_message}
                onChange={this.handleChange} />

            <button
                onClick={() => this.submitMessage('button')}
            > Submit
            </button>

            </React.Fragment>
        )
    }
}
