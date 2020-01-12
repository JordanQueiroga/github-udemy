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

  handleSearch = (e) => {
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

  getRepos = (e) => {
    ajax().get(`https://api.github.com/users/${this.state.userinfo.login}/repos`).then(resposta => {
console.log(resposta)
    })
  }

  getStarred = (e) => {
    ajax().get(`https://api.github.com/users/${this.state.userinfo.login}/starred`).then(resposta => {
      console.log(resposta)

    })
  }

  render() {
    return (
      <AppContent
        userinfo={this.state.userinfo}
        repos={this.state.repos}
        starred={this.state.starred}
        handleSearch={(e) => this.handleSearch(e)}
        getRepos={(e) => this.getRepos(e)}
        getStarred={(e) => this.getStarred(e)}
      />
    );
  }
}

export default App;
