import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserPage from './containers/UserPage'
import Navbar from "./components/NavBar";
import RepoCard from './components/RepoCard'

import { Route, Link, withRouter } from "react-router-dom";

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

  renderRepos = (user) => {
      user.repos.forEach(repo => {
          showRepo(repo)
      });
  }

   deleteRepo(user) {
    fetch(`http://localhost:3000/repos/${repo.id}`, {
        method: "DELETE"
    })
    .then(res => {
        repoDiv.remove()
    })
}
  
  render() {
    return (
      <div>
      <div className="ui container grid">
          <Navbar
            color="green"
            title="Skynet Suggests"
            description="Listen to the Computer"
            currentUser={this.state.auth.user}
            handleLogout={this.logout}
          />
        <div id="content" className="sixteen wide column">
       
          <Route 
            exact 
            path="/userpage" 
            render={props => <UserPage {...props} currentUser={this.state.auth.user} selectMap={this.selectMap} myRepos={this.state.auth.user.repos} deleteRepo={this.deleteRepo} />} 
          />
          <Route
            exact
            path="/login"
            render={props => <Login {...props} onLogin={this.login} />}
          />
           <Route
            exact
            path="/signup"
            render={props => <SignUp {...props} signUp={this.signUp} />}
          />
        </div>
      </div>
    </div>
    );
  }
}
export default withRouter(App);
