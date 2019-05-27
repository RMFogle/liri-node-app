require("dotenv").config(); 

var keys = require("./keys.js"); 

var spotify = new spotify(keys.spotify); 

var fs = require('fs'); 

// Make it so liri.js can take in commands from bandsintown, spotify, movie-this:

// Command arguments 
var firstArgv = process.argv; 
//var secondArgv = process.argv[2]; 
// variable to hold move or song input 
var input = ""; 
// to run through multiple word arguments 
for (var i = 3; i < firstArgv.length; i++) {
    if (i > 3 && i < firstArgv.length) {
        input = input + "+" + firstArgv[i];
    } else {
        input = input + firstArgv[i]; 
    }
}


// swith case -- research using switch and case 





// Make it so liri.js can take in commands:

// concert-this - use axios package ("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
// in comand line: node liri.js concert-this <artist/band name here> 
// Searches the Bands in Town Artist Events API -- rendering the following information to the terminal:
// Name of venue 
// Venue location 
// Date of event(use moment to format this as "MM/DD/YYYY")



// spotify-this-song **sing up for Spotify API - follow instructions on gitlab 
// in comand line: node liri.js spotify-this-song '<song name here>' 
//* if no song is provided then program will default to "The Sign" by Ace of Base. 
function getSpotify(song) {
    spotify.search({ type: 'track', query: song}, function(error, data){
        if(!error){
            for(var i = 0; i < data.tracks.items.length; i++){
                var songInfo = data.tracks.items[i]; 
                // this will show the following information in the terminal:
                // Artist
                console.log("Artist: " + songInfo.artists[0].name);
                // Song name
                console.log("Song: " + songInfo.name); 
                // Preview link to song from Spotify
                console.log("Preview link: " + songInfo.preview_url); 
                // Album that song is from
                console.log("Album: " + songInfo.album.name); 
                console.log("-----------------------"); 
            }
        } else {
            console.log('Error occurred.'); 
        }
    });
}




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

function doIt(){
    fs.readFile('random.txt', "utf8", function(error, data){
        var txt = data.split(','); 
        getSpotify(txt[1]); 
    }); 
}