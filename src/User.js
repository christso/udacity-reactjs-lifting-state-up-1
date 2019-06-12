import React, { Component } from 'react';

function User(props) {
  const user = props.data;
  const showGamesPlayed = props.showGamesPlayed;
  if (user == null) {
    return <div></div>
  }
  return (
    <div>{user.username} played {showGamesPlayed ? "*" : user.gamesPlayedCount} games</div>
  );
}

export default User;