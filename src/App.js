import React, { Component } from 'react';
import './App.css';
import AppContent from './componets/AppContent';
import ajax from "@fdaciuk/ajax";


class App extends Component {
  constructor() {
    super()
    this.state = {
      userinfo: null,
      repos: [],
      starred: [],
    }
  }

  handleSearch=(e) => {
    const keyCode = e.which || e.keyCode;
    const ENTER = 13;
    const value = e.target.value
    if (keyCode === ENTER) {
        ajax().get(`https://api.github.com/users/${value}`)
            .then((result) => {
              console.log(result)
              this.setState({
                 userinfo: {
                   username: result.name,
                   photo: result.avatar_url,
                   login: result.login,
                   repos: result.public_repos,
                   followers: result.followers,
                   following: result.following
                   
                 }
              })
            })
    }
}

  render() {
    return (
      <AppContent
        userinfo={this.state.userinfo}
        repos={this.state.repos}
        starred={this.state.starred}
        handleSearch={(e)=>this.handleSearch(e)}
      />
    );
  }
}

export default App;
