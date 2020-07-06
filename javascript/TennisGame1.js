// This entire structure isn't wrapped in a class.

var TennisGame1 = function(player1Name, player2Name) {
  // The constructor function doesn't need the player 1 & 2 arguments?
  this.m_score1 = 0;
  this.m_score2 = 0;
  // Why are these m_score? If they represent a player score then just state that
  // They are also constants and should be named in caps
  this.player1Name = player1Name;
  this.player2Name = player2Name;
};

TennisGame1.prototype.wonPoint = function(playerName) {
  // Do we need playerName argument? Surely we can just call this.player1Name and not have to use === "player1Name"?
  if (playerName === "player1") this.m_score1 += 1;
  else this.m_score2 += 1;
};

TennisGame1.prototype.getScore = function() {
  /* There are lots of confusing if else statements within these.
  Can you not seperate the concerns? a method for a draw,
  a seperate method for a win?*/
  var score = "";
  var tempScore = 0;
  if (this.m_score1 === this.m_score2) {
    switch (this.m_score1) {
      case 0:
        score = "Love-All";
        break;
      case 1:
        score = "Fifteen-All";
        break;
      case 2:
        score = "Thirty-All";
        break;
      default:
        score = "Deuce";
        break;
    }
  } else if (this.m_score1 >= 4 || this.m_score2 >= 4) {
    var minusResult = this.m_score1 - this.m_score2;
    if (minusResult === 1) score = "Advantage player1";
    else if (minusResult === -1) score = "Advantage player2";
    else if (minusResult >= 2) score = "Win for player1";
    else score = "Win for player2";
  } else {
    for (var i = 1; i < 3; i++) {
      if (i === 1) tempScore = this.m_score1;
      else {
        score += "-";
        tempScore = this.m_score2;
      }
      switch (tempScore) {
        case 0:
          score += "Love";
          break;
        case 1:
          score += "Fifteen";
          break;
        case 2:
          score += "Thirty";
          break;
        case 3:
          score += "Forty";
          break;
      }
    }
  }
  return score;
};

if (typeof window === "undefined") {
  module.exports = TennisGame1;
}
