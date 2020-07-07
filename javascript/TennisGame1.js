class TennisGame {
  constructor(player1Name, player2Name) {
    this.PLAYER_1_SCORE = 0;
    this.PLAYER_2_SCORE = 0;
    // Why are these m_score? If they represent a player score then just state that
    // They are also constants and should be named in caps
    this.player1Name = player1Name;
    this.player2Name = player2Name;
  }

  wonPoint(playerName) {
    if (playerName === "player1") {
      return (this.PLAYER_1_SCORE += 1);
    } else {
      return (this.PLAYER_2_SCORE += 1);
    }
  }

  getScore() {
    var score = "";
    var tempScore = 0;
    if (this.PLAYER_1_SCORE === this.PLAYER_2_SCORE) {
      switch (this.PLAYER_1_SCORE) {
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
    } else if (this.PLAYER_1_SCORE >= 4 || this.PLAYER_2_SCORE >= 4) {
      var minusResult = this.PLAYER_1_SCORE - this.PLAYER_2_SCORE;
      if (minusResult === 1) score = "Advantage player1";
      else if (minusResult === -1) score = "Advantage player2";
      else if (minusResult >= 2) score = "Win for player1";
      else score = "Win for player2";
    } else {
      for (var i = 1; i < 3; i++) {
        if (i === 1) tempScore = this.PLAYER_1_SCORE;
        else {
          score += "-";
          tempScore = this.PLAYER_2_SCORE;
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
  }
}

if (typeof window === "undefined") {
  module.exports = TennisGame;
}
