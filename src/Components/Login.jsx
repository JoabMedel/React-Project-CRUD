import React from "react";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: {
                email: "",
                password: ""
            }
        };
    }

    // componentDidMount() {}

    loginUser = event => {
        event.preventDefault();
        fetch("https://academlo-todolist.herokuapp.com/login", {
            method: "POST",
            headers: { "content-type": "application/json; charset=UTF-8" },
            body: JSON.stringify(this.state.login)
        })
            .then(response => {
                return response.json();
            })
            .then(myJson => {
                this.clearLogin();
            })
            .catch(error => console.log(error));
    };

    clearLogin = () => {
        this.setState({
            login: {
                email: "",
                password: ""
            }
        });
    };

    saveLogin = event => {
        this.setState({
            login: {
                ...this.state.login,
                [event.target.name]: event.target.value
            }
        });
    };

    render() {
        return (
            <div>
                <form onSubmit={this.loginUser}>
                    <h1>Inicio de secion</h1>
                    <input
                        onChange={this.saveLogin}
                        type="email"
                        name="email"
                        placeholder="mail de registro"
                    />
                    <input
                        onChange={this.saveLogin}
                        type="password"
                        name="password"
                        placeholder="contraseña"
                    />
                    <input type="submit" />
                </form>
            </div>
        );
    }
}

export default Login;
