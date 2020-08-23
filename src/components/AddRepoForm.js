import React, { Component } from 'react';
import '../App.css';

class AddRepoForm extends Component {

    handleSubmit = event => {
        event.preventDefault()
        this.props.newMap()
        // this.props.history.push("/mymaps")
    }
  
    render() {
      return (
        <form className="new-repo-form" onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input 
                type="text" 
                name="repoName" 
            />
          </label>
          <label>
            Repository URL:
            <input 
                type="text"
                name = "repoURL"
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }
  export default AddRepoForm;