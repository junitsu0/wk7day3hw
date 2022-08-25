console.log("I ain't no Callback guuuuurl");

/*
    JavaScript Callbacks
*/

function filter(anArr){
    let output = [];
    for (let element of anArr){
        if (element % 2 === 0){
            output.push(element);
        };
    };
    return output;
};

let numbers = [5, 10, 15, 20, 25, 30]
console.log(filter(numbers));

function filterWithCallBack(anArr, callbackFn){
    let output = [];
    for (let element of anArr){
        if (callbackFn(element)){ // Logic that determines if it stays
            output.push(element);
        };
    };
    return output;
};

function isOdd(num){
    return num % 2 === 1
};

console.log(filterWithCallBack(numbers, isOdd))

console.log(filterWithCallBack(numbers, num => num >= 20))

console.log(filterWithCallBack(['red', 'orange', 'yellow', 'green'], color => color.length > 5))

// isOdd and the arrow functions are considered callback functions (because they are passed into another function as an argument to be executed later)
// filterWithCallBack is considered a higher-order function (because it accepts a function as an argument)

// Async Example
function first(){
    console.log('First started');
    setTimeout(() => console.log('First'), 3000);
};

function second(){
    console.log('Second');
};

first();
second();

// var myName = 'Brian';

// Real Life Example

// Create a function that will take in a song name, download the song, and then play the song

// function downloadSong(songName){
//     console.log(`Downloading ${songName}...`)
//     setTimeout(() => {
//         console.log('Finished Downloading')
//         return songName
//     }, 3000)
// }

function playSong(songName){
    let song = downloadSong(songName);
    console.log(`${song} is playing`);
};

// playSong('Wonderwall');

// Fix the issues with Callbacks!

function downloadSong(songName){
    console.log(`Downloading ${songName}...`)
    // Script to download the song
    setTimeout(() => {
        // Exectue the callback once finished downloading
        console.log(`Finished Downloading ${songName}...`);
        return songName;
    }, 3000);
};

function playSong(song){
    console.log(`${song} is playing...`)
};

downloadSong('Wonderwall', 3000, playSong);

// Send to a griend
downloadSong('Let It Be', 2000, song => console.log(`Sending ${song} to friend`));

// Handling Errors

function downloadSong2(songName, callbackSuccess, callbackFail){
    console.log(`Searching for ${songName} in our database...`);
    setTimeout(() => {
        // Simulate a valid song choice
        if (songName.length > 3){
            callbackSuccess(songName);
        } else {
            callbackFail(songName);
        };
    }, 3000);
};

let songChoice = 'Stairway to Heaven'

downloadSong2(
    songChoice,
    s => console.log(`${s} has successfully downloaded and is now playing.`),
    s => console.log(`${s} is not a valid song choice`)
);