import React from "react";
import {connect} from "react-redux";
import MarkdownRenderer from 'react-markdown-renderer';
import './App.css';
import {emitNewMessage} from "../actions/socket";
import {Login} from "./User/Login";
import {RegistrationModal} from "./User/RegistrationModal";
import {NotLoggedInModal} from "./User/NotLoggedInModal";

import Modal from 'react-modal';
Modal.setAppElement("body");

@connect((store) => {
    return {
        messages: store.chat.messages
    }
})
export class App extends React.Component {
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

        return (
            <React.Fragment>
                <div className="app-grid">
                    <div className="dash-container">
                        <h1>Dashboard</h1>
                    </div>
                    <div className="login-container">
                        <Login/>
                    </div>
                    <div className="chat-container">
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
                    </div>
                    <div className="main-container">
                        <h1>Main</h1>
                    </div>
                </div>

                /* Modals */
                <RegistrationModal/>
                <NotLoggedInModal/>

            </React.Fragment>
        )
    }
}
