import React, { Component } from 'react';

const User = props => {
  const user = props.data;
  const showGamesPlayed = props.showGamesPlayed;
  if (user == null) {
    return <div></div>
  }
  return (
    <li className="user">
      <p>Username: {user.username}</p>
      <p>Number of Games Played: {showGamesPlayed ? "*" : user.gamesPlayedCount}</p>
    </li>
  );
}

export default User;