import React from "react";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: {
                email: "",
                password: "",
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
                console.log(response)
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
                password: "",
            }
        })
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
                <div className="container-form">
                    <div className="imggradient" >
                        <div className="text">
                            la magia de ser quien eres.
                            descubre nuevas formas de mejorar tu vida sin olvidarse de nada
                                </div>
                    </div>
                    <div className="row">
                        <form onSubmit={this.loginUser}>
                            <h1>Inicio de secion</h1>
                            <div className="row">
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
                                <br></br>
                                <button type="submit"> Entrar </button>
                            </div>
                        </form>

                        <p>aun no tienes cuenta?... <span onClick={this.props.isRegister}>registrate</span></p>
                    </div>
                </div>
            </div>
        );
    };
}

export default Login;
