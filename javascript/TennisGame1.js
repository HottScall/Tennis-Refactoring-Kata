class TennisGame {
  constructor(player1Name, player2Name) {
    this.PLAYER_1_SCORE = 0;
    this.PLAYER_2_SCORE = 0;
    // Why are these m_score? If they represent a player score then just state that
    // They are also constants and should be named in caps
    this.player1Name = player1Name;
    this.player2Name = player2Name;
    this.score = "";
    this.tempScore = 0;
  }

  wonPoint(playerName) {
    if (playerName === this.player1Name) {
      return (this.PLAYER_1_SCORE += 1);
    } else {
      return (this.PLAYER_2_SCORE += 1);
    }
  }

  getScore() {}

  // This is a long, very messy and confusing method.
  // Seperate the concerns maybe one for draw, one for deuce, one for point won
  // Set score and and tempScore the the constructor function and call them later in the application?

  getScore() {
    if (this.PLAYER_1_SCORE === this.PLAYER_2_SCORE) {
      switch (this.PLAYER_1_SCORE) {
        case 0:
          this.score = "Love-All";
          break;
        case 1:
          this.score = "Fifteen-All";
          break;
        case 2:
          this.score = "Thirty-All";
          break;
        default:
          this.score = "Deuce";
          break;
      }
    } else if (this.PLAYER_1_SCORE >= 4 || this.PLAYER_2_SCORE >= 4) {
      var minusResult = this.PLAYER_1_SCORE - this.PLAYER_2_SCORE;
      if (minusResult === 1) this.score = "Advantage player1";
      else if (minusResult === -1) this.score = "Advantage player2";
      else if (minusResult >= 2) this.score = "Win for player1";
      else this.score = "Win for player2";
    } else {
      for (var i = 1; i < 3; i++) {
        if (i === 1) this.tempScore = this.PLAYER_1_SCORE;
        else {
          this.score += "-";
          this.tempScore = this.PLAYER_2_SCORE;
        }
        switch (this.tempScore) {
          case 0:
            this.score += "Love";
            break;
          case 1:
            this.score += "Fifteen";
            break;
          case 2:
            this.score += "Thirty";
            break;
          case 3:
            this.score += "Forty";
            break;
        }
      }
    }
    return this.score;
  }
}

if (typeof window === "undefined") {
  module.exports = TennisGame;
}
