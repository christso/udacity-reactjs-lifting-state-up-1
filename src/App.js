import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from './UserList';
import AddUser from './AddUser';
import User from './User';

/*
This exercise will help you put together and practice all of the concepts you've
learned thus far. It will also help you form a strong foundational knowledge of
React and prepare you for your first project.

The instructions for this project are located in the `instructions.md` file.
*/

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: null,
      users: [
        { username: 'christso', firstName: 'Christopher', lastName: 'Tso', gamesPlayedCount: 0 },
        { username: 'myang', firstName: 'Molly', lastName: 'Yang', gamesPlayedCount: 1 }
      ]
    };
    this.onAddUser.bind(this);   
  }

  onAddUser(user) {
    if (this.state.users.findIndex(u => user.username === u.username) !== -1) {
      this.setState(() => {
        return { errorMessage: 'username ' + user.username + ' already exists' };
      });
      return;
    }

    this.setState((state) => {
      return { 
        errorMessage: null,
        users: [...this.state.users, user] };
    });
  }

  render() {
    const errorMessage = this.state.errorMessage == null ? <div></div> 
    : <div className="error-text">Error: {this.state.errorMessage}</div>;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <AddUser onAddUser={(user) => this.onAddUser(user)} />
        {errorMessage}
        <UserList users={this.state.users} />
        <User />
      </div>
    );
  }
}

export default App;
