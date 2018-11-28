import React from "react";
import {connect} from "react-redux";
import './App.css';
import {Login} from "./User/Login";
import {RegistrationModal} from "./User/RegistrationModal";
import {NotLoggedInModal} from "./User/NotLoggedInModal";

import Modal from 'react-modal';
import {Messages} from "./Chat/Messages";
Modal.setAppElement("body");

@connect((store) => {
    return {
    }
})
export class App extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
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
                        <Messages />
                    </div>
                    <div className="main-container">
                        <h1>Main</h1>
                    </div>
                </div>

                {/*Modals*/}
                <RegistrationModal/>
                <NotLoggedInModal/>

            </React.Fragment>
        )
    }
}
