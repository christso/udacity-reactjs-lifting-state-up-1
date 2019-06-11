import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddUser extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    user: {
      username: '',
      firstName: '',
      lastName: '',
      gamesPlayedCount: 0
    }
  };
  this.handleChange.bind(this);
  this.handleSubmit.bind(this);
}

  handleSubmit(event) {
    this.props.onAddUser(this.state.user);
    event.preventDefault();
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState((currState) => ({
      ...currState,
      user: {
        ...currState.user,
        [name]: value
      }
    }));
  }

  render() {
    const { username, firstName, lastName, gamesPlayedCount } = this.state.user;
    console.log('username = ', username);
    return (
      <div>
        <h2>Add User</h2>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input
              type="text"
              name="username"
              placeholder="Enter Username"
              value={username}
              onChange={e => this.handleChange(e)}
          />
          <input
              type="text"
              name="firstName"
              placeholder="Enter First Name"
              value={firstName}
              onChange={e => this.handleChange(e)}
          />
          <input
              type="text"
              name="lastName"
              placeholder="Enter Last Name"
              value={lastName}
              onChange={e => this.handleChange(e)}
          />
          <input
              type="text"
              name="gamesPlayedCount"
              placeholder="Enter Number of Games Played"
              value={gamesPlayedCount}
              onChange={e => this.handleChange(e)}
          />
          <button>Add</button>
        </form>

      </div>
    );

  }
}

export default AddUser;