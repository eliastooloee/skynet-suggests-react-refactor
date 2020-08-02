import React, { Component } from 'react';
import RepoCard from '../components/RepoCard'


const MyRepos = props => {

  const componentDidMount = () => {
    // props.getMaps();
    }
    

     function renderRepos() {
        return props.myRepos.length > 0 ? props.myMaps.map(map => {
          return (
            <div key={map.id} >
              <RepoCard {...props} map={map} key={map.id} selectMap={props.selectMap} deleteMap={props.deleteMap} />
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

export default MyMaps;