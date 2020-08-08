import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserPage from './containers/UserPage'
import Navbar from "./components/NavBar";
import RepoCard from './components/RepoCard'

class App extends Component {

  state = {
    auth: {
      user: {}
    }
  }

  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token) {
      // console.log('there is a token');
      // make a request to the backend and find our user
      api.auth.getCurrentUser().then(user => {
        // console.log(user)
        const updatedState = { ...this.state.auth, user: user };
        this.setState({ auth: updatedState });
      });
      this.getMaps();
    }
  }

  login = data => {
    const updatedState = { ...this.state.auth, user: {id: data.id,  username: data.username} };
    localStorage.setItem("token", data.jwt);
    this.setState({ auth: updatedState });
  };

  logout = () => {
    localStorage.removeItem("token");
    this.setState({ auth: { user: {} } });
    this.props.history.push('/login');
  };
  
  render() {
    return (
      <div className="App">
          <Navbar
              color="green"
              title="Skynet Suggests"
              description="Listen to Your Computer"
              currentUser={this.state.auth.user}
              handleLogout={this.logout}
            />
      </div>
    );
  }
}
export default App;
