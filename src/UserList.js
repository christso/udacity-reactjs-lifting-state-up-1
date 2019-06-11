import React, { Component } from 'react';
import User from './User';

class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.handleShowGamesClicked.bind(this);
    this.state = {
      hideGamesPlayed: false
    };
  }

  handleShowGamesClicked(e) {
    e.preventDefault();
    this.setState((state) => ({hideGamesPlayed: !state.hideGamesPlayed}));
  }

  render() {
    const userList = this.props.users.map(user => {
      return <User key={user.username} data={user} hideGamesPlayed={this.state.hideGamesPlayed} />
    });
    return (
      <div>
        <h2>
          UserList
        </h2>
        <a href="#" onClick={(e) => this.handleShowGamesClicked(e)}>
        {this.state.hideGamesPlayed ? "Show the Number of Games Played" : "Hide the Number of Games Played"}</a>
        <div className="wrapper">
          {userList} 
        </div>
     
      </div>
    );
  }
}

export default UserList;