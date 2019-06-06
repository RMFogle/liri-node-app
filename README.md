# liri-node-app
Week-10 Liri Bot Assignment 


Issues: 
    Can't get my Switch/Case to work. When I wrap my bandsInTown and OMDB api's into fucntions they DO NOT call/return data. 
    Currently the same data returns when any command is entered as you can see here in screenshot_1_concert-this. 

![Screenshot_1](images/Screenshot_1_(Concert-this).png)

The same data kay value pairs return when 'spotify-this-song' is entered in the command as you can see here in screenshot_2_spotify-this-song. 

![Screenshot_2](images/Screenshot_2_(Spotify-this-song).png)

And, again the same data kay value pairs return when 'movie-this' is entered in the command as you can see here in screenshot_2_spotify-this-song. 

![Screenshot_3](images/Screenshot_3_(Movie-this).png)

---------------------------------------------------------------

The assignment was to use Node JS to create a LIRI bot that takes in parameters in the terminal and returns data based on one of four commands: 

    1. concert-this 

    2. spotify-this-song 

    3. movie-this 

    4. do-what-it-says 

How to Start: 

    1. Clone the repo. 
    2. Run command npm install in GitBash or Terminal 
    3. Run command node liri.js or one of the commands below... 

What Each Command Does: 

    1. node liri.js concert-this <band name>
        Displays: 
            Name of the venue
            Venue location
            Date of the Event (use moment to format this as "MM/DD/YYYY")

    2. node liri.js spotify-this-song <song name>
        Displays: 
            Artist(s)
            The song's name
            A preview link of the song from Spotify
            The album that the song is from
        *If no song is provided than it will display "The Sign" by Ace of Base. 

    1. node liri.js movie-this <movie name>
        Displays: 
            Title of the movie.
            Year the movie came out.
            IMDB Rating of the movie.
            Rotten Tomatoes Rating of the movie.
            Country where the movie was produced.
            Language of the movie.
            Plot of the movie.
            Actors in the movie.
        *If no movie is provided than it will display "Mr. Nobody"

    1. node liri.js do-what-it-says
            This should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.



Tech Used: 

    1. Node.js 
    2. Spotify NPM Package - https://www.npmjs.com/package/spotify


Built With: 

    VS Code 


Authors: 

    Ryan Fogle

 




    


