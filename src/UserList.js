import React, { Component } from 'react';
import User from './User';
import PropTypes from 'prop-types';

class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.handleShowGamesClicked.bind(this);
    this.state = {
      showGamesPlayed: true
    };
  }

  handleShowGamesClicked(e) {
    e.preventDefault();
    this.setState((state) => ({showGamesPlayed: !state.showGamesPlayed}));
  }

  render() {
    const userList = this.props.users.map(user => {
      return <User key={user.username} data={user} showGamesPlayed={this.state.showGamesPlayed} />
    });
    return (
      <div>
        <h2>
          UserList
        </h2>
        <a href="#" onClick={(e) => this.handleShowGamesClicked(e)}>
        {this.state.showGamesPlayed ? "Show the Number of Games Played" : "Hide the Number of Games Played"}</a>
        <ol>
          {userList} 
        </ol>
     
      </div>
    );
  }
}

UserList.propTypes = {
  users: PropTypes.array.isRequired
};

export default UserList;