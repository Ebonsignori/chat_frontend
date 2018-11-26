import React from "react";
import {postObject} from "../../utility/post";

export class Signup extends React.Component {
    constructor(props) {
        super(props);

        // React state
        this.state = {
            account_name: "",
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            confirm_user_password: ""
        };

        this.authenticateUser = this.authenticateUser.bind(this);
    }

    authenticateUser(event) {
        event.preventDefault();

        (async () => await postObject("/users/register", {
            account_name: this.state.account_name,
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            password: this.state.password
        }))();
    }

    render() {
        return (
            <form onSubmit={this.authenticateUser} className='login-form'>
                <label>Account Name </label>
                <input type="text" value={this.state.account_name} onChange={(event) => this.setState({account_name: event.target.value})}/>
                <br />

                <label>Your First Name </label>
                <input type="text" value={this.state.first_name} onChange={(event) => this.setState({first_name: event.target.value})}/>
                <br />

                <label>Your Last Name </label>
                <input type="text" value={this.state.last_name} onChange={(event) => this.setState({last_name: event.target.value})}/>
                <br />

                <label>Your Email </label>
                <input type="email" value={this.state.email} onChange={(event) => this.setState({email: event.target.value})}/>
                <br />

                <label>Password </label>
                <input type="text" value={this.state.password} onChange={(event) => this.setState({password: event.target.value})}/>
                <br />

                <label>Confirm Password </label>
                <input type="text" value={this.state.confirm_user_password} onChange={(event) => this.setState({confirm_user_password: event.target.value})}/>
                <br />

                <button type="submit">Login</button>
            </form>
        )
    }
}
