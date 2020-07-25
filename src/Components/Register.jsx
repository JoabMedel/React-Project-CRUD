import React from "react";

class Register extends React.Component {
    constructor(propss) {
        super(propss);
        this.state = {
            formUser: {
                name: "",
                lastname: "",
                email: "",
                password: ""
            }
        };
    }
    registerUser = event => {
        event.preventDefault();
        fetch("https://academlo-todolist.herokuapp.com/register", {
            method: "POST",
            headers: { "content-type": "application/json; charset=UTF-8" },
            body: JSON.stringify(this.state.formUser)
        })
            .then(response => {
                return response.json();
            })
            .then(myJson => {
                this.clear();
            })
            .catch(error => console.log(error));
    };

    //saveUser almacena los datos en un estado para despues ser enviado al servidor y se agreguen los usuarios nuevos
    saveUser = event => {
        this.setState({
            formUser: {
                ...this.state.formUser,
                [event.target.name]: event.target.value
            }
        });
    };

    clear = () => {
        this.setState({
            formUser: {
                name: "",
                lastname: "",
                email: "",
                password: ""
            }
        });
    };

    render() {
        return (
            <form onSubmit={this.registerUser}>
                <h1>Registro de Usuario</h1>
                <input
                    onChange={this.saveUser}
                    type="text"
                    name="name"
                    placeholder="Nombre"
                    value={this.state.formUser.name}
                />
                <input
                    onChange={this.saveUser}
                    type="text"
                    name="lastname"
                    placeholder="Apellidos"
                    value={this.state.formUser.lastname}
                />
                <input
                    onChange={this.saveUser}
                    type="email"
                    name="email"
                    placeholder="tu mejor e-mail"
                    value={this.state.formUser.email}
                />
                <input
                    onChange={this.saveUser}
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    value={this.state.formUser.password}
                />
                <input type="submit" />
            </form>
        );
    }
}
export default Register;
