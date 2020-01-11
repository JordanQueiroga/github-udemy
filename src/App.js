import React, { Component } from 'react';
import './App.css';
import AppContent from './componets/AppContent';

class App extends Component {
  constructor() {
    super()
    this.state = {
      userinfo: {
        username: "Jordan Queiroga",
        repos: 12,
        followers: 10,
        following: 10
      },
      repos: [{
        name:"Repo",
        link:"#"
      }],
      starred: [
        {
          name:"Repo",
          link:"#"
        }
      ],
    }
  }

  render() {
    return (
      <AppContent
        userinfo={this.state.userinfo}
        repos={this.state.repos}
        starred={this.state.starred}
      />
    );
  }
}

export default App;
