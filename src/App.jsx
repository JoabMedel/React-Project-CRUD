import React from "react";
import Register from "./Components/Register";
import Login from "./Components/Login";
import "./App.css";
import Loading from "./Components/cargando";


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      viewState: 'loading',
      loged: 'login',
      Loading: true
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState(state => ({ viewState: state.loged }));
    }, 2000);
  }


  isLogin = e => {
    e.preventDefault();
    this.setState(state => ({
      viewState: 'Register'
    }));
  };

  isRegister = e => {
    e.preventDefault();
    this.setState(state => ({
      viewState: 'login'
    }));
  };

  render() {
    switch (this.state.viewState) {

      case 'loading':
        return (
          <Loading />
        )

      case 'Register':
        return (
          <div>
            <Register isLogin={this.isRegister} />
          </div>
        );

      case 'login':
        return (
          <div>
            <Login isRegister={this.isLogin} />
          </div>
        );

      default:
        break;
    }
  }
}

export default App;
