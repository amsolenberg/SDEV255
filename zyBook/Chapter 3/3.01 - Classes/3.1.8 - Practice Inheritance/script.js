function Game(title) {
  this.title = title;
}

Game.prototype.startPlaying = function () {
  console.log('Now playing ' + this.title + '!');
};

Game.prototype.stopPlaying = function () {
  console.log('Taking a break.');
};

// Add a VideoGame class and all the necessary code so
// VideoGame inherits from the Game class.

function VideoGame(title) {
  // Call parent constructor
  Game.call(this, title);

  // Add a private variable to the VideoGame class
  // called totalPoints, and initialize totalPoints to 0.
  let totalPoints = 0;

  // Add a getter method called getScore() to get the totalPoints variable
  this.getScore = function () {
    return totalPoints;
  };

  // Add a method called addToScore(points) that adds the points to totalPoints
  this.addToScore = function (points) {
    totalPoints += points;
  };
}

// Duplicate functionality of parent
VideoGame.prototype = Object.create(Game.prototype);
VideoGame.prototype.constructor = VideoGame;

// Instantiate a new VideoGame object with the title "Pac-Man".
let pacman = new VideoGame('Pac-Man');

// Start playing the game
pacman.startPlaying();

// Show the score (should be 0)
console.log('Score: ' + pacman.getScore() + ' points');

// Add 20 points
pacman.addToScore(20);
console.log('Score: ' + pacman.getScore() + ' points');

// Add 50 points
// Show the score (should be 70)
pacman.addToScore(50);
console.log('Score: ' + pacman.getScore() + ' points');

// Stop playing the game
pacman.stopPlaying();
