import React, { Component } from 'react';

function User(props) {
  const user = props.data;
  const hideGamesPlayed = props.hideGamesPlayed;
  if (user == null) {
    return <div></div>
  }
  return (
    <div>{user.username} played {hideGamesPlayed ? "*" : user.gamesPlayedCount} games</div>
  );
}

export default User;