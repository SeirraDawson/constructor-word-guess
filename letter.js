// **Letter.js**: Contains a constructor, Letter. This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. That means the constructor should define:
//letter {
    //actual:
    //guessed:
    //displayed:
    //check
    //}

//variable have a memory reference
//constructor is an assembly line for and object

function Letter (actual) {
    //   * A string value to store the underlying character for the letter
    this.actual = actual;
    //   * A boolean value that stores whether that letter has been guessed yet
    this.guessed = false;
    //   * A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
    this.displayed = function () {
        if(this.guessed == true) {
            return this.actual
        }
        return '_';
    };
    //   * A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
    this.checked = function (userGuess) {
        if (userGuess === this.actual) {
            this.guessed = true;
        }
    }
}


module.exports = Letter;
