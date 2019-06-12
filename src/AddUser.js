import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: '',
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

  isDisabled() {
    const user = this.state.user;
    return !user 
      || user.username === ''
      || user.firstName === ''
      || user.lastName === '';
  }

  handleSubmit(event) {
    event.preventDefault();

    const users = this.props.users;
    const user = this.state.user;
    if (users.findIndex(u => user.username === u.username) !== -1) {
      this.setState(() => ({ errorMessage: 'username ' + user.username + ' already exists' }));
      return;
    }

    this.setState(() => ({ errorMessage: '' }));
    this.props.onAddUser(this.state.user);
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
    const errorMessage = this.state.errorMessage === '' ? <div></div> 
    : <div className="error-text">Error: {this.state.errorMessage}</div>;
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
          <button disabled={this.isDisabled()}>Add</button>
        </form>
        {errorMessage}
      </div>
    );

  }
}

AddUser.propTypes = {
  onAddUser: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired
}

export default AddUser;