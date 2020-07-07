class TennisGame {
  constructor(player1Name, player2Name) {
    this.player1Score = 0;
    this.player2Score = 0;
    this.player1Name = player1Name;
    this.player2Name = player2Name;
    this.score = "";
    this.tempScore = 0;
  }

  wonPoint(playerName) {
    if (playerName === this.player1Name) {
      return (this.player1Score += 1);
    } else {
      return (this.player2Score += 1);
    }
  }

  // This is a long, very messy and confusing method.
  // Seperate the concerns maybe one for draw, one for deuce, one for point won
  // Set score and and tempScore the the constructor function and call them later in the application?

  getScore() {
    if (this.player1Score === this.player2Score) {
      switch (this.player1Score) {
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
    } else if (this.player1Score >= 4 || this.player2Score >= 4) {
      var minusResult = this.player1Score - this.player2Score;
      if (minusResult === 1) this.score = "Advantage player1";
      else if (minusResult === -1) this.score = "Advantage player2";
      else if (minusResult >= 2) this.score = "Win for player1";
      else this.score = "Win for player2";
    } else {
      for (var i = 1; i < 3; i++) {
        if (i === 1) this.tempScore = this.player1Score;
        else {
          this.score += "-";
          this.tempScore = this.player2Score;
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
