import React from "react";
import {postObject} from "../../utility/post";
import connect from "react-redux/es/connect/connect";
import {openModal} from "../../actions/modals";
import {userLogIn, userLogOut} from "../../actions/user";

@connect((store) => {
    return {
        is_logged_in: store.user.is_logged_in,
        first_name: store.user.first_name
    }
})
export class Login extends React.Component {
    constructor(props) {
        super(props);

        // React state
        this.state = {
            account_name: "",
            password: "",
            login_error: undefined // Corresponds to HTTP status 404 for account not found 403 for bad password
        };

        this.login = this.login.bind(this);
    }

    login(event) {
        event.preventDefault();

        (async () => {
            const response = await postObject("/users/login", {
                account_name: this.state.account_name,
                password: this.state.password
            }, {
                needs_credentials: true,
                return_response: true
            });
            if (response.status === 200) {
                let user_response = await response.text();
                if (user_response[0] === "{") {
                    user_response = JSON.parse(user_response);
                }
                this.props.dispatch(userLogIn(user_response));
            } else {
                // Corresponds to HTTP status 404 for account not found 403 for bad password
                this.setState({
                    login_error: response.status
                })
            }
        })();

    }

    render() {
        if (!this.props.is_logged_in) {
            return (
                <div className='login-user-not-logged-in'>
                    <form onSubmit={this.login} className="login-form">
                        <label>Username </label>
                        <input type="text" value={this.state.account_name}
                               onChange={(event) => this.setState({account_name: event.target.value})}/>
                        <label>Password </label>
                        <input type="password" value={this.state.password}
                               onChange={(event) => this.setState({password: event.target.value})}/>
                        <br/>
                        <button type="submit">Login</button>
                    </form>

                    <button onClick={() => this.props.dispatch(openModal("registration"))}>Register</button>
                    {this.state.login_error === 404 && <p>Account not found</p>}
                    {this.state.login_error === 403 && <p>Incorrect Password</p>}
                </div>
            )
        } else {
            return (
                <div className='login-user-logged-in'>
                    Hello {this.props.first_name}!

                    <br />
                    <button onClick={() => this.props.dispatch(userLogOut())}>Logout</button>
                </div>
            )
        }
    }
}
