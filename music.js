<<<<<<< HEAD
let play = document.getElementById("Play");
let previous = document.getElementById("Previous");
let next = document.getElementById("Next");
let audio = document.querySelector("audio");
let img = document.querySelector("img");
let title = document.getElementById("title");
let artist = document.getElementById("artist");
let fastForwardBtn  = document.getElementById("FastForward");
let rewindBtn = document.getElementById("Rewind");
let seekRange = document.getElementById("seekRange");
let songs = [
    // {
    //     name: "Alone",
    //     title: "Alone",
    //     artist: "Alan Walker",
    // },
    // {
    //     name: "Sugar",
    //     title: "sugar & Brownies",
    //     artist: "Dharia",
    // },
    // {
    //     name: "Peaches",
    //     title: "Peaches",
    //     artist: "Justin Bieber",
    // },
    // {
    //     name: "colorado",
    //     title: "colorado",
    //     artist: "zugo",
    // },
    // {
    //     name: "little do u know",
    //     title: "little do u know",
    //     artist: "Alex & Sierra",
    // },
    // {
    //     name: "sensational",
    //     title: "sensational",
    //     artist: "chris,Davido & lojay",
    // },
    // {
    //     name: "It Ain_t me",
    //     title: "It Ain_t me",
    //     artist: "selena Gomez",
    // },
    {
        name: "african queen",
        title: "african queen",
        artist: "2face",
    },
    // {
    //     name: "high & low",
    //     title: "high & low",
    //     artist: "Prinz & Gabriela",
    // },
    // {
    //     name: "legend",
    //     title: "legend",
    //     artist: "corizo",
    // },
    {
        name: "Alone",
        title: "Alone",
        artist: "Burna boy",
    },
    // {
    //     name: "lonely-at-the-top",
    //     title: "lonely-at-the-top",
    //     artist: "Asake",
    // },
    {
        name: "plenty",
        title: "plenty",
        artist: "Burna boy",
    },
    // {
    //     name: "Friday feeling",
    //     title: "Friday feeling",
    //     artist: "fireboy",
    // }
   
]


let isplaying = false;
let playmusic = () => {
    isplaying = true;
    audio.play();
    play.classList.replace('fa-play', 'fa-pause');
    img.classList.add("anime");
    
};

let pausemusic = () => {
    audio.pause();
    isplaying = false;
    play.classList.replace('fa-pause', 'fa-play');
    img.classList.add("anime");
};

play.addEventListener("click", () => {
    if (isplaying == false) {
        playmusic();
    } else {
        pausemusic();
    img.classList.remove("anime");

    };
});
document.addEventListener('keydown', function(event) {
    if (event.key === ' ') {
        if (isplaying) {
            pausemusic();
        } else {
            playmusic();
        }
        play.style.backgroundColor = 'white';
        play.style.color = 'black';
        setTimeout(() => {
            play.style.backgroundColor = '';
            play.style.color = '';
        }, 300);
    }
});

const loadsong = (songs) => {
     title.textContent = songs.title;
     artist.textContent = songs.artist;
    audio.src = "Music/" + songs.name + ".mp3";
    img.src = "images/" + songs.name + ".jpg";
}
songindex = 1;
const nextsong = () => {
    songindex = (songindex + 1) % songs.length;
    loadsong(songs[songindex]);
    playmusic();
}

const prevsong = () => {
    songindex = (songindex - 1 + songs.length) % songs.length;
    loadsong(songs[songindex]);
    playmusic();
}
audio.addEventListener('ended', () => {
    // Perform actions when the song ends
    nextsong();
});

audio.addEventListener('error', (e) => {
    alert('Error loading audio:', e);
});


// Function to fast forward
const fastForward = () => {
    audio.currentTime += 10; 
};

// Function to rewind
const rewind = () => {
    audio.currentTime -= 10; 
};

// Function to update the seek range value
const updateSeekRange = () => {
    seekRange.value = (audio.currentTime / audio.duration) * 100;
    updateSeekRange();
};

// Update the seek range as the audio plays
audio.addEventListener("timeupdate", () => {
    updateSeekRange();
});

// Seek to the selected part of the audio when the user interacts with the range input
seekRange.addEventListener("input", () => {
    const seekToTime = (seekRange.value / 100) * audio.duration;
    audio.currentTime = seekToTime;
});
next.addEventListener('click', nextsong);
document.addEventListener('keydown', function(event) {
    if (event.key === "ArrowRight") {
       nextsong () 
       next.style.backgroundColor = 'white';
       next.style.color = 'black';
       setTimeout(() => {
           next.style.backgroundColor = '';
           next.style.color = '';
       }, 300);
    }   
});
        
previous.addEventListener('click', prevsong);
document.addEventListener('keydown', function(event) {
    if (event.key === "ArrowLeft") {
       prevsong () 
       previous.style.backgroundColor = 'white';
       previous.style.color = 'black';
       setTimeout(() => {
           previous.style.backgroundColor = '';
           previous.style.color = '';
       }, 300);
    }   
});

//volume control
let volume_slider = document.querySelector('.volume_slider');

function setVolume() {
    audio.volume = volume_slider.value / 100;
}
=======
let play = document.getElementById("Play");
let previous = document.getElementById("Previous");
let next = document.getElementById("Next");
let audio = document.querySelector("audio");
let img = document.querySelector("img");
let title = document.getElementById("title");
let artist = document.getElementById("artist");
let fastForwardBtn  = document.getElementById("FastForward");
let rewindBtn = document.getElementById("Rewind");
let seekRange = document.getElementById("seekRange");
let songs = [
    {
        name: "Alone",
        title: "Alone",
        artist: "Alan Walker",
    },
    {
        name: "Sugar",
        title: "sugar & Brownies",
        artist: "Dharia",
    },
    {
        name: "Peaches",
        title: "Peaches",
        artist: "Justin Bieber",
    },
    {
        name: "colorado",
        title: "colorado",
        artist: "zugo",
    },
    {
        name: "little do u know",
        title: "little do u know",
        artist: "Alex & Sierra",
    },
    {
        name: "sensational",
        title: "sensational",
        artist: "chris,Davido & lojay",
    },
    {
        name: "It Ain_t me",
        title: "It Ain_t me",
        artist: "selena Gomez",
    },
    {
        name: "african queen",
        title: "african queen",
        artist: "2face",
    },
    {
        name: "high & low",
        title: "high & low",
        artist: "Prinz & Gabriela",
    },
    {
        name: "legend",
        title: "legend",
        artist: "corizo",
    },
    {
        name: "Al@ne",
        title: "Al@ne",
        artist: "Burna boy",
    },
    {
        name: "lonely-at-the-top",
        title: "lonely-at-the-top",
        artist: "Asake",
    },
    {
        name: "plenty",
        title: "plenty",
        artist: "Burna boy",
    },
    {
        name: "Friday feeling",
        title: "Friday feeling",
        artist: "fireboy",
    }
   
]


let isplaying = false;
let playmusic = () => {
    isplaying = true;
    audio.play();
    play.classList.replace('fa-play', 'fa-pause');
    img.classList.add("anime");
};

let pausemusic = () => {
    isplaying = false;
    audio.pause();
    play.classList.replace('fa-pause', 'fa-play');
    img.classList.remove("anime");
};

play.addEventListener("click", () => {
    if (isplaying == false) {
        playmusic();
    } else {
        pausemusic();
    };
});
document.addEventListener('keydown', function(event) {
    // Check if the key pressed is the spacebar
    if (event.key === ' ') {
        if (isplaying) {
            pausemusic();
        } else {
            playmusic();
        }
        play.style.backgroundColor = 'white';
        play.style.color = 'black';
        setTimeout(() => {
            play.style.backgroundColor = '';
            play.style.color = '';
        }, 300);
    }
});

const loadsong = (songs) => {
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    audio.src = "Music/" + songs.name + ".mp3";
    img.src = "images/" + songs.name + ".jpg";
}
songindex = 1;
const nextsong = () => {
    songindex = (songindex + 1) % songs.length;
    loadsong(songs[songindex]);
    playmusic();
}

const prevsong = () => {
    songindex = (songindex - 1 + songs.length) % songs.length;
    loadsong(songs[songindex]);
    playmusic();
}
audio.addEventListener('ended', () => {
    // Perform actions when the song ends
    nextsong();
});

audio.addEventListener('error', (e) => {
    alert('Error loading audio:', e);
});


// Function to fast forward
const fastForward = () => {
    audio.currentTime += 10; 
};

// Function to rewind
const rewind = () => {
    audio.currentTime -= 10; 
};

// Function to update the seek range value
const updateSeekRange = () => {
    seekRange.value = (audio.currentTime / audio.duration) * 100;
    updateSeekRange();

};


// Update the seek range as the audio plays
audio.addEventListener("timeupdate", () => {
    updateSeekRange();
});

// Seek to the selected part of the audio when the user interacts with the range input
seekRange.addEventListener("input", () => {
    const seekToTime = (seekRange.value / 100) * audio.duration;
    audio.currentTime = seekToTime;
});
next.addEventListener('click', nextsong);
document.addEventListener('keydown', function(event) {
    if (event.key === "ArrowRight") {
       nextsong () 
       next.style.backgroundColor = 'white';
       next.style.color = 'black';
       setTimeout(() => {
           next.style.backgroundColor = '';
           next.style.color = '';
       }, 300);
    }   
});
        


previous.addEventListener('click', prevsong);
document.addEventListener('keydown', function(event) {
    if (event.key === "ArrowLeft") {
       prevsong () 
       previous.style.backgroundColor = 'white';
       previous.style.color = 'black';
       setTimeout(() => {
           previous.style.backgroundColor = '';
           previous.style.color = '';
       }, 300);
    }   
});

//volume control
let volume_slider = document.querySelector('.volume_slider');

function setVolume() {
    audio.volume = volume_slider.value / 100;
};
>>>>>>> 93d224d953b789e364cc422491098bb36abd37ad
