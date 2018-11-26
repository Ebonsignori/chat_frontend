import React from "react";
import {postObject} from "../../utility/post";
import connect from "react-redux/es/connect/connect";
import {openModal} from "../../actions/modals";

@connect((store) => {
    return {}
})
export class Login extends React.Component {
    constructor(props) {
        super(props);

        // React state
        this.state = {
            account_name: "",
            password: ""
        };

        this.authenticateUser = this.authenticateUser.bind(this);
    }

    authenticateUser(event) {
        event.preventDefault();

        (async () => {
            const results = await postObject("/users/login", {
                account_name: this.state.account_name,
                password: this.state.password
            });
            let user_response = await results.text();
            if (user_response[0] === "{") {
                user_response = JSON.parse(user_response);
            }
            console.log(user_response);
        })();

    }

    render() {
        return (
            <div>
            <form onSubmit={this.authenticateUser} className="login-form">
                <label>Username </label>
                <input type="text" value={this.state.account_name} onChange={(event) => this.setState({account_name: event.target.value})}/>
                <label>Password </label>
                <input type="password" value={this.state.password} onChange={(event) => this.setState({password: event.target.value})}/>
                <br />
                <button type="submit">Login</button>
            </form>

            <br />
            <button onClick={() => this.props.dispatch(openModal("registration"))}>Register</button>
            </div>
        )
    }
}
