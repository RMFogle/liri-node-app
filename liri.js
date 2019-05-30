require("dotenv").config(); 

var axios = require("axios")

var spotify = require("./keys.js"); 

var fs = require('fs'); 

var moment = require('moment'); 

// Make it so liri.js can take in commands from bandsintown, spotify, movie-this:

// Command arguments 
var nodeArgv = process.argv; 
var command = process.argv[2]; 
// variable to hold move or song input 
var input = ""; 
// to run through multiple word arguments 
for (var i = 3; i < nodeArgv.length; i++) {
    if (i > 3 && i < nodeArgv.length) {
        input = input + "+" + nodeArgv[i];
    } else {
        input += nodeArgv[i]; 
    }
}


// swith case 
// switch(command) {
//     case "concert-this": 
//     getBands(); 
//     break; 

//     case "spotify-this-song": 
//     if(input) {
//         getSpotify(input); 
//     } else {
//         getSpotify("The Sign")
//     }
//     break; 

//     case "movie-this": 
//     if(input) {
//         getMovie(input); 
//     } else {
//         getMovie("Mr. Nobody"); 
//     }
//     break; 

//     case "do-what-it-says": 
//         doIt(); 
//         break; 

//     default: 
//     console.log("Please enter command: concert-this, spotify-this song, movie-this"); 
//     break; 
// }




// Make it so liri.js can take in commands:

var queryURL = "https://rest.bandsintown.com/artists/" + input + "/events?app_id=codingbootcamp"; 
console.log(queryURL)
// in comand line: node liri.js concert-this <artist/band name here> 
//function getBands() {
        axios.get(queryURL).then(
    function(response) {
        // Name of venue
        console.log("Venue: " + response.name); 
        // Venue location 
        console.log("Location: " + response.city); 
        // Date of event(use moment to format this as "MM/DD/YYYY")
        console.log("Date: " + moment(response.datetime).format("MM/DD/YYYY"));
    }
)
//}; 




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




// movie-this -- in the command line: node liri.js movie-this '<movie name here>' 
// queryURL 
var queryUrl = "http://www.omdbapi.com/?t=" + input + "&y=&plot=short&apikey=trilogy";
console.log(queryUrl); 
// function to request data from omdb -- this will show the following information in the terminal:
//function getMovie() {
axios.get(queryUrl).then(
    function(response) {
        console.log("Title: " + response.data.Title); 
        console.log("Release Year: " + response.data.Year); 
        console.log("IMDB Rating: " + response.data.imdbRating);
        console.log("RT Rating: " + response.data.tomatoRating); 
        console.log("Country: " + response.data.Country); 
        console.log("Language: " + response.data.Language); 
        console.log("Plot: " + response.data.Plot); 
        console.log("Actors: " + response.data.Actors); 
    }
)
//};
// If user doesn't type a move in, the program will output data from the movie 'Mr. Nobody.'



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