
import React, { Component } from 'react';

class Login extends Component {
    state = {
        email: null,
        password: null,
        emailError:false,
        passwordError:false,
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

    }

    handleClick = () => {
        var validate = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;;
        if (!validate.test(this.state.email)) { this.setState({emailError: true}) }
        if (this.state.password === null || this.state.password.length < 8) { this.setState({passwordError: true}) }
    }
    render() {
        return (
            <div>

                <div className="login-c context">
                    <div>

                        <input onChange={this.handleChange} name="email" placeholder="email" type="email" />
                       {this.state.emailError === true ? <p>email is not correct</p> : null}
                        <input onChange={this.handleChange} name="password" placeholder="password" type="password" />
                        {this.state.passwordError === true ? <p>password is not correct</p> : null}
                        <button onClick={this.handleClick}>Login</button>
                    </div>
                </div>
                <div className="area" >
                    <ul className="circles">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div >
            </div>
        )
    }

}
export default Login;




