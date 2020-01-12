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

  getGitHubApiUrl(username, type) {
    const internalUsername = username ? `/${username}` : "";
    const internalType = type ? `/${type}` : "";
    return `https://api.github.com/users${internalUsername}${internalType}`
  }

  handleSearch = (e) => {
    const keyCode = e.which || e.keyCode;
    const ENTER = 13;
    const value = e.target.value
    const target  =e.target;
    if (keyCode === ENTER) {
      target.disabled = true
      ajax().get(this.getGitHubApiUrl(value))
        .then((result) => {
          this.setState({
            userinfo: {
              username: result.name,
              photo: result.avatar_url,
              login: result.login,
              repos: result.public_repos,
              followers: result.followers,
              following: result.following
            },
            repos: [],
            starred: []
          })
        }).always(() => {
          target.disabled = false
        })
    }
  }

  getRepos = (type) => {
    return (e) => {
      ajax().get(this.getGitHubApiUrl(this.state.userinfo.login, type))
        .then(result => {
          console.log(result)
          this.setState({
            [type]: result.map(repo => ({ name: repo.name, link: repo.html_url }))
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
        handleSearch={(e) => this.handleSearch(e)}
        getRepos={this.getRepos("repos")}
        getStarred={this.getRepos("starred")}
      />
    );
  }
}

export default App;
