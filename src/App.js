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
      this.renderRepos();
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

  // renderRepos = (user) => {
  //     user.repos.forEach(repo => {
  //         showRepo(repo)
  //     });
  // }

  // renderRepos= () => {
  //   return this.state.auth.user.repos.length > 0 ? props.myMaps.map(repo => {
  //     return (
  //       <div key={repo.id} >
  //         <RepoCard {...props} repo={repo} key={repo.id}  deleteRepo={props.deleteRepo} />
  //       </div>
  //     )
  //   }): null
  // }

//    deleteRepo(user) {
//     fetch(`http://localhost:3000/repos/${repo.id}`, {
//         method: "DELETE"
//     })
//     .then(res => {
//         repoDiv.remove()
//     })
// }

analyzeRepo(repo){
  fetch(`http://localhost:3000/repos/${repo.id}/analysis`)
  .then(res => res.json())
  .then(data => {
    if(data.message){
      analysisModal(data.message)
      if(data.message != "Something went wrong, please try again."){
        return setTimeout(analyzeRepo(repo, repoDiv), 1000)
      }
    } else {
      analysisModal("Analysis Complete.")
      repo = data
      let userRepo = currentUser.repos.find(({id}) => id === repo.id)
      let returnedUserRepo = Object.assign(userRepo, repo)
      console.log(currentUser.repos)
      analyzeButtonTextAndFunc(repo, repoDiv)
    }
  })
  .catch(err => console.log(err))
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
            render={props => <UserPage {...props} currentUser={this.state.auth.user} myRepos={this.state.auth.user.repos} deleteRepo={this.deleteRepo} />} 
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
