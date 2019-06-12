import React, { Component } from 'react';
import User from './User';
import PropTypes from 'prop-types';

class UserList extends React.Component {
  constructor(props) {
    super(props);
    // this.handleToggleGamesPlayed.bind(this);
    this.state = {
      showGamesPlayed: true
    };
  }

  // set this context to UserList by using const instead of function
  handleToggleGamesPlayed = () => {
    // e.preventDefault();
    this.setState((oldState) => ({showGamesPlayed: !oldState.showGamesPlayed}));
  }

  render() {
    const users = this.props.users;
    const userList = users.map(user => {
      return <User key={user.username} data={user} showGamesPlayed={this.state.showGamesPlayed} />
    });
    
    const gamesPlayedButton = (<div>
      <button className="smallButton" onClick={this.handleToggleGamesPlayed}>
        {this.state.showGamesPlayed ? 'Hide' : 'Show'} the Number of Games Played
      </button>
    </div>)

    return (
      <div>
        <h2>
          UserList
        </h2>
        {users && users.length > 0 ? gamesPlayedButton : ''}
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