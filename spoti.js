let track_art = document.querySelector('.track-art');
let track_name = document.querySelector('.track-name');
let track_artist = document.querySelector('.track-artist');

let playpause_btn = document.querySelector('.playpause-track');
let next_btn = document.querySelector('.next-track');
let prev_btn = document.querySelector('.prev-track');
const player = document.querySelector('.player');

let seek_slider = document.querySelector('.song-range');
let volume_slider = document.querySelector('.vertical-range');
let curr_time = document.querySelector('.current-time');
let total_duration = document.querySelector('.total-duration');
let randomIcon = document.querySelector('.fa-random');
let curr_track = document.createElement('audio');


let track_index = 0;
let isPlaying = false;
let isRandom = false;
let updateTimer;

const music_list = [

    {
        img: 'music-poster/sorry.jpg',
        name: 'Sorry - Neha Kakkar',
        artist: 'Neha Kakkar',
        music: 'songs/Sorry Song Neha Kakkar 320 Kbps.mp3'
    },
    {
        img: 'music-poster/aashiqui.jpg',
        name: 'Ashiqui (The Love Theme)',
        artist: 'Arjit Singh',
        music: 'songs/Aashiqui (The Love Theme) - Aashiqui 2 320 Kbps.mp3'
    },
    {
        img: 'music-poster/kabil.jpg',
        name: 'Kaabil Hoon',
        artist: 'Jubin Nautiyal, Palak Muchhal',
        music: 'songs/Kaabil Hoon - Kaabil 320 Kbps.mp3'
    },
    {
        img: 'music-poster/tum-prem.jpg',
        name: 'Tum Prem Ho',
        artist: 'Aishwarya Anand, Mohit Lalwani',
        music: 'songs/Tum Prem Ho Radha - Jubin Nautiyal 320 Kbps.mp3'
    },
    {
        img: 'music-poster/sorry.jpg',
        name: 'Sorry - Neha Kakkar',
        artist: 'Neha Kakkar',
        music: 'songs/Sorry Song Neha Kakkar 320 Kbps.mp3'
    },
    {
        img: 'music-poster/aashiqui.jpg',
        name: 'Ashiqui (The Love Theme)',
        artist: 'Arjit Singh',
        music: 'songs/Aashiqui (The Love Theme) - Aashiqui 2 320 Kbps.mp3'
    },
    {
        img: 'music-poster/kabil.jpg',
        name: 'Kaabil Hoon',
        artist: 'Jubin Nautiyal, Palak Muchhal',
        music: 'songs/Kaabil Hoon - Kaabil 320 Kbps.mp3'
    },
    {
        img: 'music-poster/tum-prem.jpg',
        name: 'Tum Prem Ho',
        artist: 'Aishwarya Anand, Mohit Lalwani',
        music: 'songs/Tum Prem Ho Radha - Jubin Nautiyal 320 Kbps.mp3'
    },
    {
        img: 'music-poster/sorry.jpg',
        name: 'Sorry - Neha Kakkar',
        artist: 'Neha Kakkar',
        music: 'songs/Sorry Song Neha Kakkar 320 Kbps.mp3'
    },
    {
        img: 'music-poster/aashiqui.jpg',
        name: 'Ashiqui (The Love Theme)',
        artist: 'Arjit Singh',
        music: 'songs/Aashiqui (The Love Theme) - Aashiqui 2 320 Kbps.mp3'
    },
    {
        img: 'music-poster/kabil.jpg',
        name: 'Kaabil Hoon',
        artist: 'Jubin Nautiyal, Palak Muchhal',
        music: 'songs/Kaabil Hoon - Kaabil 320 Kbps.mp3'
    },
    {
        img: 'music-poster/tum-prem.jpg',
        name: 'Tum Prem Ho',
        artist: 'Aishwarya Anand, Mohit Lalwani',
        music: 'songs/Tum Prem Ho Radha - Jubin Nautiyal 320 Kbps.mp3'
    },
    {
        img: 'music-poster/sorry.jpg',
        name: 'Sorry - Neha Kakkar',
        artist: 'Neha Kakkar',
        music: 'songs/Sorry Song Neha Kakkar 320 Kbps.mp3'
    },
    {
        img: 'music-poster/aashiqui.jpg',
        name: 'Ashiqui (The Love Theme)',
        artist: 'Arjit Singh',
        music: 'songs/Aashiqui (The Love Theme) - Aashiqui 2 320 Kbps.mp3'
    },
    {
        img: 'music-poster/kabil.jpg',
        name: 'Kaabil Hoon',
        artist: 'Jubin Nautiyal, Palak Muchhal',
        music: 'songs/Kaabil Hoon - Kaabil 320 Kbps.mp3'
    },
    {
        img: 'music-poster/tum-prem.jpg',
        name: 'Tum Prem Ho',
        artist: 'Aishwarya Anand, Mohit Lalwani',
        music: 'songs/Tum Prem Ho Radha - Jubin Nautiyal 320 Kbps.mp3'
    },
    {
        img: 'music-poster/sorry.jpg',
        name: 'Sorry - Neha Kakkar',
        artist: 'Neha Kakkar',
        music: 'songs/Sorry Song Neha Kakkar 320 Kbps.mp3'
    },
    {
        img: 'music-poster/aashiqui.jpg',
        name: 'Ashiqui (The Love Theme)',
        artist: 'Arjit Singh',
        music: 'songs/Aashiqui (The Love Theme) - Aashiqui 2 320 Kbps.mp3'
    },
    {
        img: 'music-poster/kabil.jpg',
        name: 'Kaabil Hoon',
        artist: 'Jubin Nautiyal, Palak Muchhal',
        music: 'songs/Kaabil Hoon - Kaabil 320 Kbps.mp3'
    },
    {
        img: 'music-poster/tum-prem.jpg',
        name: 'Tum Prem Ho',
        artist: 'Aishwarya Anand, Mohit Lalwani',
        music: 'songs/Tum Prem Ho Radha - Jubin Nautiyal 320 Kbps.mp3'
    },
    {
        img: 'music-poster/sorry.jpg',
        name: 'Sorry - Neha Kakkar',
        artist: 'Neha Kakkar',
        music: 'songs/Sorry Song Neha Kakkar 320 Kbps.mp3'
    },
    {
        img: 'music-poster/aashiqui.jpg',
        name: 'Ashiqui (The Love Theme)',
        artist: 'Arjit Singh',
        music: 'songs/Aashiqui (The Love Theme) - Aashiqui 2 320 Kbps.mp3'
    },
    {
        img: 'music-poster/kabil.jpg',
        name: 'Kaabil Hoon',
        artist: 'Jubin Nautiyal, Palak Muchhal',
        music: 'songs/Kaabil Hoon - Kaabil 320 Kbps.mp3'
    },
    {
        img: 'music-poster/tum-prem.jpg',
        name: 'Tum Prem Ho',
        artist: 'Aishwarya Anand, Mohit Lalwani',
        music: 'songs/Tum Prem Ho Radha - Jubin Nautiyal 320 Kbps.mp3'
    },
    {
        img: 'music-poster/sorry.jpg',
        name: 'Sorry - Neha Kakkar',
        artist: 'Neha Kakkar',
        music: 'songs/Sorry Song Neha Kakkar 320 Kbps.mp3'
    },
    {
        img: 'music-poster/aashiqui.jpg',
        name: 'Ashiqui (The Love Theme)',
        artist: 'Arjit Singh',
        music: 'songs/Aashiqui (The Love Theme) - Aashiqui 2 320 Kbps.mp3'
    },
    {
        img: 'music-poster/kabil.jpg',
        name: 'Kaabil Hoon',
        artist: 'Jubin Nautiyal, Palak Muchhal',
        music: 'songs/Kaabil Hoon - Kaabil 320 Kbps.mp3'
    },
    {
        img: 'music-poster/tum-prem.jpg',
        name: 'Tum Prem Ho',
        artist: 'Aishwarya Anand, Mohit Lalwani',
        music: 'songs/Tum Prem Ho Radha - Jubin Nautiyal 320 Kbps.mp3'
    },
    {
        img: 'music-poster/sorry.jpg',
        name: 'Sorry - Neha Kakkar',
        artist: 'Neha Kakkar',
        music: 'songs/Sorry Song Neha Kakkar 320 Kbps.mp3'
    },
    {
        img: 'music-poster/aashiqui.jpg',
        name: 'Ashiqui (The Love Theme)',
        artist: 'Arjit Singh',
        music: 'songs/Aashiqui (The Love Theme) - Aashiqui 2 320 Kbps.mp3'
    },
    {
        img: 'music-poster/kabil.jpg',
        name: 'Kaabil Hoon',
        artist: 'Jubin Nautiyal, Palak Muchhal',
        music: 'songs/Kaabil Hoon - Kaabil 320 Kbps.mp3'
    },
    {
        img: 'music-poster/tum-prem.jpg',
        name: 'Tum Prem Ho',
        artist: 'Aishwarya Anand, Mohit Lalwani',
        music: 'songs/Tum Prem Ho Radha - Jubin Nautiyal 320 Kbps.mp3'
    },
    
  
];

loadTrack(track_index);

// Function to load the track
function loadTrack(track_index) {
    clearInterval(updateTimer);
    reset();
    curr_track.src = music_list[track_index].music;
    curr_track.load();
    track_art.style.backgroundImage = "url(" + music_list[track_index].img + ")";
    track_name.textContent = music_list[track_index].name;
    track_artist.textContent = music_list[track_index].artist;
    updateTimer = setInterval(setUpdate, 1000);
}

// Reset player UI
function reset() {
    curr_time.textContent = "00:00";
    total_duration.textContent = "00:00";
    seek_slider.value = 0;
}

function randomTrack(){
    isRandom ? pauseRandom() : playRandom();
}
function playRandom(){
    isRandom = true; 
    randomIcon.classList.add('randomActive');
}
function pauseRandom(){
    isRandom = false;
    randomIcon.classList.remove('randomActive');
}
function repeatTrack(){ 
    let current_index = track_index;
    loadTrack(current_index);
    playTrack();
}
// Play/Pause toggle for the main player
function playpauseTrack() {
    isPlaying ? pauseTrack() : playTrack();
}

// Play the current track
function playTrack() {
    curr_track.play();
    isPlaying = true;
    track_art.classList.add('rotate');
    playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-3x"></i>';
}

// Pause the current track
function pauseTrack() {
    curr_track.pause();
    isPlaying = false;
    track_art.classList.remove('rotate');
    playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-3x"></i>';
}

// Play next track
function next() {
    if (track_index < music_list.length - 1 && isRandom === false) {
        track_index += 1;
    } else if (track_index < music_list.length - 1 && isRandom === true) {
        let random_index = Math.floor(Math.random() * music_list.length);
        track_index = random_index;
    } else {
        track_index = 0;
    }
    track_art.classList.add('rotate');
    loadTrack(track_index);
    playTrack();
}

// Play previous track
function prevTrack() {
    if (track_index > 0) {
        track_index -= 1;
    } else {
        track_index = music_list.length - 1;
    }
    track_art.classList.add('rotate');
    loadTrack(track_index);
    playTrack();
}

// Update progress bar and time display
function setUpdate() {
    let seekPosition = 0;

    if (!isNaN(curr_track.duration)) {
        seekPosition = curr_track.currentTime * (100 / curr_track.duration);
        seek_slider.value = seekPosition;

        let currentMinutes = Math.floor(curr_track.currentTime / 60);
        let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
        let durationMinutes = Math.floor(curr_track.duration / 60);
        let durationSeconds = Math.floor(curr_track.duration % 60);

        if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
        if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
        if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
        if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

        curr_time.textContent = currentMinutes + ":" + currentSeconds;
        total_duration.textContent = durationMinutes + ":" + durationSeconds;
    }
}

// Update the total duration when the metadata is loaded
curr_track.addEventListener("loadedmetadata", () => {
    let durationMinutes = Math.floor(curr_track.duration / 60);
    let durationSeconds = Math.floor(curr_track.duration % 60);
    
    if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
    if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

    total_duration.textContent = durationMinutes + ":" + durationSeconds;
});

// Handle the play/pause functionality for each song in the playlist
const playList = document.getElementById("playlist");

// Create list items with play/pause buttons for each song
music_list.forEach((obj, index) => {
    const li = document.createElement("li");
    li.classList.add("playlist-item" , "flex1");
   li.onclick = function () {
        togglePlayPause(index);
    };

        // Set the text content for the song name
        const songName = document.createElement("span");
        songName.textContent = obj.name;

        
    // Create a button for playing/pausing the song
    const playButton = document.createElement("div");
    playButton.classList.add("playpause-btn");
    playButton.innerHTML = '<i class="fa fa-play-circle"></i>';
    playButton.onclick = function () {
        togglePlayPause(index);
    };


    // Add the play/pause button and song name to the list item
    li.appendChild(playButton);
    li.appendChild(songName);

    // Append the list item to the playlist
    playList.appendChild(li);
});


// Updated togglePlayPause function
function togglePlayPause(index) {
    const selectedTrack = music_list[index];

    if (!selectedTrack) {
        console.error('Track not found');
        return;
    }

    if (curr_track.src === selectedTrack.music) {
        // Toggle play/pause for the current track
        if (isPlaying) {
            pauseTrack();
        } else {
            playTrack();
        }
    } else {
        // New track selected
        curr_track.src = selectedTrack.music;
        loadTrack(index);
        playTrack();
    }

    // Always show the player when interacting with tracks
    player.classList.remove('hidden');
}

// Ensure playTrack() updates the UI state
function playTrack() {
    curr_track.play();
    isPlaying = true;
    // Update play button icon (e.g., to pause)
    document.querySelector('.playpause-track i').classList.replace('fa-play-circle', 'fa-pause-circle');
}

// Seek to a specific position in the song
function seekTo() {
    let seekTo = curr_track.duration * (seek_slider.value / 100);
    curr_track.currentTime = seekTo;
}

// Set the volume based on the slider
function setVolume() {
    curr_track.volume = volume_slider.value / 100;
}
const cardContainers = document.querySelectorAll(".cardContainer"); // Select all elements with the class

music_list.forEach((obj, index) => {
    // Loop through each card container
    cardContainers.forEach(cardContainer => {
        // Create card container
        const Card = document.createElement("div");
        Card.classList.add("Card");
        Card.onclick = function () {
            togglePlayPause(index); // Call your togglePlayPause function
        };

const carddesc = document.createElement("div");
carddesc.classList.add("card-desc");

const para = document.createElement("p");
para.textContent = obj.artist;

const heading = document.createElement("h5")
heading.textContent = obj.name;

carddesc.appendChild(heading);
carddesc.appendChild(para);
Card.appendChild(carddesc);

        // Create card image div
        const Cardimg = document.createElement("div");
        Cardimg.classList.add("card-img");

        // Create image container
        const imgcontainer = document.createElement("div");
        imgcontainer.classList.add("image-container");

        // Create the image element and set its source
        const img = document.createElement("img");
        img.src = obj.img; // Use the img URL from your music list

        // Check if the image is accessible
        img.onerror = function () {
            console.error(`Image at ${obj.img} could not be loaded.`);
        };

        // Set the image to load when it is created
        img.onload = function () {
            console.log(`Image for "${obj.name}" loaded successfully.`);
        };

        // Append the image to the img container
        imgcontainer.appendChild(img);

        // Create play button div
        const playbtn = document.createElement("div");
        playbtn.classList.add("play");
        // playbtn.onclick = function () {
        //     togglePlayPause(index); // Call your togglePlayPause function
        // };

        // Create SVG play icon
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("viewBox", "0 0 384 512");
        svg.setAttribute("width", "36px");
        svg.setAttribute("height", "36px");

        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute("d", "M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z");

        svg.appendChild(path);
        playbtn.appendChild(svg);

        // Append elements to the DOM
        Card.appendChild(Cardimg);
        Cardimg.appendChild(imgcontainer);
        imgcontainer.appendChild(playbtn);
        Card.appendChild(carddesc);

        // Append the card to the card container
        cardContainer.appendChild(Card);
    });
});

// adding an event listener to hamberger

document.querySelector(".hamberger").addEventListener("click",() =>{
    document.querySelector(".left").style.left = "0";
})

// adding an event listener to close
document.querySelector(".close").addEventListener("click",() =>{
    document.querySelector(".left").style.left = "-100%";
})

