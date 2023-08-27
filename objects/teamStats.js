const team = {
    _players: [
      {firstName: "John", lastname: "Doe", age: 30},
      {firstName: "Mike", lastname: "Dane", age: 25},
      {firstName: "Daniel", lastname: "Lee", age: 28}],
  
    _games: [
      {opponent: "", teamPoints: 100, opponentPoints: 90},
      {opponent: "", teamPoints: 90, opponentPoints: 100},
      {opponent: "", teamPoints: 120, opponentPoints: 110}],
  
    get players () {
      return this._players;
    },
  
    get games () {
      return this._games;
    },
  
    addPlayer(newFirstName, newLastName, newAge) {
      let player = {
        firstName: newFirstName,
        lastName: newLastName, 
        age: newAge
      };
      team._players.push(player);
    },
  
    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
      let game = {
        opponent: newOpponent,
        teamPoints: newTeamPoints,
        opponentPoints: newOpponentPoints
      };
      team._games.push(game);
    }
  };
  
  team.addPlayer('Bugs', 'Bunny', 76);
  console.log(team.players)
  
  team.addGame('Titans', 100, 98);
  console.log(team.games)