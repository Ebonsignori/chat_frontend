import React from "react";
import Modal from 'react-modal';
import connect from "react-redux/es/connect/connect";

import {closeModal} from "../../actions/modals";
import {Login} from "./Login";

const modal_name = "not_logged_in";

@connect((store) => {
    return {
        not_logged_in_modal_open: store.modals.not_logged_in_modal_open
    }
})
export class NotLoggedInModal extends React.Component {
    constructor() {
        super();

        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    afterOpenModal() {
    }

    closeModal() {
        this.props.dispatch(closeModal(modal_name))
    }

    render() {
        return (
            <Modal
                isOpen={this.props.not_logged_in_modal_open}
                onAfterOpen={this.afterOpenModal}
                onRequestClose={this.closeModal}
                contentLabel="Not Logged In Modal"
            >

                <Login/>
            </Modal>
        );
    }
}