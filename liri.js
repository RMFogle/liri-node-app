require("dotenv").config(); 

var keys = require("./keys.js"); 

var spotify = new spotify(keys.spotify); 


// Make it so liri.js can take in one of the following commands:

// concert-this - use axios package ("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
// in comand line: node liri.js concert-this <artist/band name here> 
// Searches the Bands in Town Artist Events API -- rendering the following information to the terminal:
// Name of venue 
// Venue location 
// Date of event(use moment to format this as "MM/DD/YYYY")



// spotify-this-song **sing up for Spotify API - follow instructions on gitlab 
// in comand line: node liri.js spotify-this-song '<song name here>' 
// this will show the following information in the terminal: 
// Artist
// Song name
// Preview link to song from Spotify 
// Album that song is from 
//* if no song is provided then program will default to "The Sign" by Ace of Base. 



// movie-this
// in the command line: node liri.js movie-this '<movie name here>' 
// this will show the following information in the terminal:
// * Title of the movie.
// * Year the movie came out.
// * IMDB Rating of the movie.
// * Rotten Tomatoes Rating of the movie.
// * Country where the movie was produced.
// * Language of the movie.
// * Plot of the movie.
// * Actors in the movie.
// If user doesn't type a move in, the program will output data from the movie 'Mr. Nobody.'
// Use axios package to retrieve datat from OMDB API. Can use trilogy api key. 



// do-what-it-says
// using the fs node package, LIRI will take text from inside of random.txt and use it to
//call one of LIRI's commands. 
// It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.
// Edit the text in random.txt to test out the feature for movie-this and concert-this.