import React from "react";
import {connect} from "react-redux";
import MarkdownRenderer from 'react-markdown-renderer';
import {emitNewMessage} from "../../actions/socket";
import './Messages.css';

@connect((store) => {
    return {
        messages: store.chat.messages
    }
})
export class Messages extends React.Component {
    constructor(props) {
        super(props);

        // React state
        this.state = {
            user_message: ""
        };

        this.submitMessage = this.submitMessage.bind(this);
        this.handleChange = this.handleChange.bind(this);
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
            emitNewMessage(this.state.user_message);
            this.setState({
                user_message: ""
            });
        }
    }
    handleChange(event) {
        this.setState({
            user_message: event.target.value
        });
    }

    render() {
        let chat_log = this.props.messages.map((value) => {
            return (
                <div className='chat-item'>
                    <span key={value.id}>
                        <MarkdownRenderer
                            options={{
                                preset: 'full'
                            }}
                            markdown={value.contents}/>
                    </span>
                    <span>
                      {new Date(value.created_date).toLocaleDateString()}
                    </span>
                </div>
            )
        });

        return (
            <div className="chat">
                <div className='messages-area'>
                    {chat_log}
                </div>
                <div className="new-message-area">
                    <textarea
                        className="new-message"
                        placeholder="Type a message"
                        onKeyDown={this.submitMessage}
                        value={this.state.user_message}
                        onChange={this.handleChange} />

                    {/*<button*/}
                        {/*onClick={() => this.submitMessage('button')}*/}
                    {/*> Submit*/}
                    {/*</button>*/}
                </div>
            </div>
        )
    }
}
