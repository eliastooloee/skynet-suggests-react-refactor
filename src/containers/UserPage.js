import React, { Component } from 'react';
import RepoCard from '../components/RepoCard'


const UserPage = props => {

  const componentDidMount = () => {
    }
    

     function renderRepos() {
        return props.myRepos.length > 0 ? props.myRepos.map(repo => {
          return (
            <div key={repo.id} >
              <RepoCard {...props} repo={repo} key={repo.id}  deleteRepo={props.deleteRepo} analyzeRepo={props.analyzeRepo} />
            </div>
          )
        }): null
      }
    
    
      return (
        <div>
            <div className="item">
            Your Repositories
            </div>
            {renderRepos()}
        </div>
      );
};

export default UserPage;