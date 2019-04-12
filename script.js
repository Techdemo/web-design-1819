let song;
let sliderVolume;
let sliderRate;
let sliderPan;
// preload. it's like the pre-setup.
// the rest cant do something until the sound file is loaded

// setup event
function setup(){
    createCanvas(200, 200)
    song = loadSound("sound.mp3", loaded);
    sliderVolume = createSlider(0, 2, 0.5, 0.01 );
    sliderRate = createSlider(0, 2, 1, 0.01);
    sliderPan = createSlider(-1, 1, 0.5, 0.01);
}

function loaded(){
    // callback
    song.play();
}

// draw event loops over and over again
function draw(){
    background(0);

    song.pan(sliderPan.value())
    // rate is the speed at which the sound is played back
    song.rate(sliderRate.value())
    song.setVolume(sliderVolume.value());
}
